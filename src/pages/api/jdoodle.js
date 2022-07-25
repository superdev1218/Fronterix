// const fs = require('fs');
import znsContractABI from './znsAbi.json';
const Web3 = require("web3");
const util = require('util');
var config = require("./config.json");

// const pg = require('pg');
// const { Client } = require('pg');
import pg from 'pg';
// import fs from 'fs';

import { create } from 'ipfs-http-client'
const { forEach } = require('p-iteration');
// const staticRankings = require("./staticRankings/static.js");

const ipfs = create(new URL(config.ipfsUrl))
const ipfsRegex ="Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,}"

const web3 = new Web3(new Web3.providers.WebsocketProvider(config.wsProvider));

var conString = "postgresql://doadmin:AVNS_09-29cP8lRKIsd3LYQt@db-postgresql-nyc3-20919-do-user-11783095-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require"
const { Client } = pg;
let client = new Client(conString);
// let client = new pg.Client(conString);
client.connect();

// let query = client.query("SELECT * FROM contract");

const query = util.promisify(conString.query).bind(conString);


// const client = new Client({
//         user : 'doadmin',
//         host : 'db-postgresql-nyc3-20919-do-user-11783095-0.b.db.ondigitalocean.com',
//         database : 'defaultdb',
//         password : 'AVNS_09-29cP8lRKIsd3LYQt',
//         port : 25060,
//         ssl : {
//                 ca : (async () => {await fs.readFileSync('ca-certificate')})()
//         }
// })
// client.connect(function(err) {
//         if(err) throw err;
//         console.log("Connected!");
// })

export const parseMetadata = async function parseMetadata(){
        try{
                const rows = await query("select id,tokenIndex,tokenId,ipfsData,contractAddress from allMetadata")
                console.log(rows);
                await forEach(rows,async(row) => {
                        try{
                                var entryId = row["tokenIndex"]
                                var jsonData = JSON.parse(row["ipfsData"])
                                var tokenId = row["tokenId"]
                                var description = jsonData.description
                                var name = jsonData.name
                                var imageIpfs = jsonData.image
                                imageIpfs = imageIpfs.match(ipfsRegex)[0]
                                if(jsonData.animation_url){
                                        var animationIpfs = jsonData.animation_url
                                        animationIpfs = animationIpfs.match(ipfsRegex)[0]
                                }
                                var name = jsonData.name
                                let industry = ""
                                if(jsonData.attributes){
                                        var attributes = jsonData.attributes
                                        if(attributes.some(item => item.trait_type === 'Industry') && row["contractAddress"] === "0xc2e9678A71e50E5AEd036e00e9c5caeb1aC5987D"){
                                                if(attributes.some(item => item.value === 'Wilder.Cribs'))
                                                        industry = "Cribs"
                                                if(attributes.some(item => item.value === 'Wilder.Craft'))
                                                        industry = "Crafts"
                                                if(attributes.some(item => item.value === 'Wilder.Kicks') && entryId > 1000)
                                                        industry = "Kicks S1"
                                                if(attributes.some(item => item.value === 'Wilder.Kicks') && entryId < 1000)
                                                        industry = "Kicks S0"
                                        }
                                        if(attributes.some(item => item.trait_type === 'Car Name'))
                                                industry = "Wheels"
					if(row["contractAddress"] === "0x1A178CFD768F74b3308cbca9998C767F4E5B2CF8")
						industry = "Wolves"
					if(row["contractAddress"] === "0x35D2F3CDAf5e2DeA9e6Ae3553A4CaACBA860A395")
						industry = "Kicks S2"
                                }
                                let sql ="update allTokens set image =?,animation=?,name=?,description=?,industry=? where tokenId like ?"
                                await query(sql,[imageIpfs,animationIpfs,name,description,industry,tokenId])
                        }catch(e){console.log(e)}
                });
        }catch(e){console.log(e)}
}

export const getAllMetadata = async function getAllMetadata(){
        try{
		let totalMetadata=0;
                await query("truncate allMetadata")
                const rows = await query("select id,tokenId,tokenIndex,ipfsHash,contractAddress from allTokens")
                await forEach(rows,async(row) =>{
			totalMetadata++;
                        var jsonData = await ipfs.files.get(row["ipfsHash"])
                        jsonData = jsonData[0].content.toString()
                        let sql = "insert into allMetadata values(?,?,?,?,?)"
                        await query(sql,[row["id"],row["tokenIndex"],row["tokenId"],jsonData,row["contractAddress"]])
                });
		console.log(totalMetadata+ "metadata files imported");
        }catch(e){console.log(e)}
}

export const getAllTokens = async function getAllTokens(){
        try{
		let totalDomains = 0;
                await query("SET FOREIGN_KEY_CHECKS = 0")
                await query("truncate allTokens")
                await query("SET FOREIGN_KEY_CHECKS = 1")
		await forEach(znsContracts,async(znsContract)=>{
                	var totalTokens = await znsContract.methods.totalSupply().call()
                	for(var i=1;i<totalTokens;i++){
				totalDomains++;
                        	var tokenId = await znsContract.methods.tokenByIndex(i).call()
                        	var ipfsHash = await znsContract.methods.tokenURI(tokenId).call()
                        	if(ipfsHash.includes("http")){
                                	ipfsHash = ipfsHash.match(ipfsRegex)[0]
                        	}
                        	else {
                                	ipfsHash = ipfsHash.split("//")[1]
                        	}
                        	ipfsHash = await ipfs.resolve(ipfsHash);
                        	try{
                                	await query("insert into allTokens (tokenIndex,tokenId,ipfsHash,contractAddress) values("+i+",'"+tokenId+"','"+ipfsHash+"','"+znsContract.options.address+"')")
                        	}catch(e){console.log(e)}
                	}
		});
		console.log(totalDomains+" domains imported from contracts");
        }catch(e){console.log(e)}
}

export const initContracts = async function initContracts(){
	var addresses = config.znsContractsAddress;
	await forEach(addresses, async(address)=>{
		znsContracts.push(new web3.eth.Contract(znsContractABI.abi,address))
	});
        console.log(znsContracts);
}