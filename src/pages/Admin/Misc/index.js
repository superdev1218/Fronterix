import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useEffect } from "react";
import { Create_Category, Create_Chain, Create_Marketplace, Create_Payment, Create_Protocol, Create_Social, Create_TransactionType,Delete_Payment, Delete_Category, Delete_Marketplace, Delete_Protocol, GET_PROTOCOL, Delete_Transaction, Delete_Social, Delete_Chain} from "../../api/hasura_gql";
import AdminSideBar from "../AdminSideBar";
import Protocol from './Protocol';
import clsx from "clsx";
import Payment from "./Payment";
import Category from "./Category";
import Marketplace from "./Marketplace";
import Transaction from "./Transaction";
import Social from "./Social";
import Chain from "./Chain";

const classes = {
    rootDiv : 'bg-[#1F1F1F] w-[100vw] text-[#CECCCC] pt-[10px]',
    paymentRange : 'hover:cursor-pointer',
    items : "flex justify-between hover:cursor-pointer active:bg-[#CECCCC] active:bg-opacity-20",
    selectItem : "bg-[#CECCCC] bg-opacity-20",
    orderButton : 'border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center hover:cursor-pointer'
}

const Misc = () => {

    const { loading, error, data} = useQuery(GET_PROTOCOL);

    const [ CreateProtocolMutation ] = useMutation(Create_Protocol);
    const [ CreatePaymentMutation ] = useMutation(Create_Payment);
    const [ CreateCategoryMutation ] = useMutation(Create_Category);
    const [ CreateMarketplaceMutation ] = useMutation(Create_Marketplace);
    const [ CreateTransactionTypeMutation ] = useMutation(Create_TransactionType);
    const [ CreateSocialMutation ] = useMutation(Create_Social);
    const [ CreateChainMutation ] = useMutation(Create_Chain);

    const [ DeleteProtocolMutation ] = useMutation(Delete_Protocol);
    const [ DeletePaymentMutation ] = useMutation(Delete_Payment);
    const [ DeleteCategoryMutation ] = useMutation(Delete_Category);
    const [ DeleteMarketplaceMutation ] = useMutation(Delete_Marketplace);
    const [ DeleteTransactionMutation ] = useMutation(Delete_Transaction);
    const [ DeleteSocialMutation ] = useMutation(Delete_Social);
    const [ DeleteChainMutation ] = useMutation(Delete_Chain);

    const [ searchText, setSearchText] = useState('');
    const [ payment, setPayment ] = useState();
    const [ protocolName, setProtocolName ] = useState(null);
    const [ coinName, setCoinName ] = useState(null);
    const [ coinGeckoId, setCoinGeckoId ] = useState(null);
    const [ symbol, setSymbol ] = useState(null);
    const [ openseaId, setOpenseaId ] = useState(null);
    const [ imageUrl, setImageUrl ] = useState(null);
    const [ paymentChainId, setPaymentChainId ] = useState(null);
    const [ decimals, setDecimals ] = useState(null);
    const [ categoryName, setCategoryName ] = useState(null);
    const [ marketplaceName, setMarketplaceName ] = useState(null);
    const [ transactionTypeName, setTransactionTypeName] = useState(null);
    const [ socialName, setSocialName ] = useState(null);
    const [ chainName, setChainName ] = useState(null);
    const [ chainId, setChainId ] = useState(null);
    const [ covalentChain, setCovalentChain ] = useState(null);
    const [ explorerUrl, setExplorerUrl ] = useState(null);

    const [ paymentData, setPaymentData ] = useState(null);
    const [ chainData, setChainData] = useState(null);

    const [ currentId, setCurrentId ] = useState(null);
    const [ protocolId, setProtocolId ] = useState('');
    
    const handleChange = (e, type) => {
        let value = e.target.value;
        switch(type) {
            case "ProtocolName" :
                setProtocolName(value);
                break;
            case "CoinName" : 
                setCoinName(value);
                break;
            case "CoinGeckoId" :
                setCoinGeckoId(value);
                break;
            case "Symbol" :
                setSymbol(value);
                break;
            case "OpenseaId" :
                setOpenseaId(value);
                break;
            case "ImageUrl" :
                setImageUrl(value);
                break;
            case "PaymentChainId" :
                setPaymentChainId(value);
                break;
            case "Decimals" :
                setDecimals(value);
                break;
            case "CategoryName" :
                setCategoryName(value);
                break;
            case "MarketplaceName" :
                setMarketplaceName(value);
                break;
            case "TransactionTypeName" :
                setTransactionTypeName(value);
                break;
            case "SocialName" :
                setSocialName(value);
                break;
            case "ChainName" :
                setChainName(value);
                break;
            case "ChainId" :
                setChainId(value);
                break;
            case "CovalentChain" :
                setCovalentChain(value);
                break;
            case "ExplorerUrl" :
                setExplorerUrl(value);
                break;
            default :
                break;
        }
    }

    const handleSearchChange = (e) => {
        const {value} = e.target;
        setSearchText(value);
        console.log(searchText)
    }
    const handlePaymentChange = (e) => {
        setPayment(e.target.value)
    }

    const handleAddData = (type) => {
        switch(type) {
            case "Protocol" :
                CreateProtocolMutation({
                    variables : {
                        protocolName : protocolName
                    }
                })
                break;
            case "Payment" : 
                CreatePaymentMutation({
                    variables : {
                        coinName : coinName,
                        coinGeckoId : coinGeckoId,
                        symbol : symbol,
                        openseaId : openseaId,
                        imageUrl : imageUrl,
                        paymentChainId : paymentChainId,
                        decimals : decimals,
                    }
            })
                break;
            case "Category" :
                CreateCategoryMutation({
                    variables : {
                        categoryName : categoryName
                    }
                })
                break;
            case "Marketplace" :
                CreateMarketplaceMutation({
                    variables : {
                        marketplaceName : marketplaceName
                    }
                })
                break;
            case "TransactionType" :
                CreateTransactionTypeMutation({
                    variables : {
                        transactionTypeName : transactionTypeName
                    }
                })
                break;
            case "Social" :
                CreateSocialMutation({
                    variables : {
                        socialName : socialName
                    }
                })
                break;
            case "Chain" :
                CreateChainMutation({
                    variables : {
                        chainName : chainName,
                        chainId : chainId,
                        covalentChain : covalentChain,
                        explorerUrl : explorerUrl
                    }
                })
                break;
            default :
                break;
        }
    }
    
    const handleDeleteItem = (type, value) => {
        console.log(value);
        switch (type) {
            case "Protocol" :
                DeleteProtocolMutation({
                    variables : {
                        protocolId : value
                    }
                })
                break;
            case "Payment" : 
            DeletePaymentMutation({
                    variables : {
                        paymentId : value
                    }
            })
                break;
            case "Category" :
                DeleteCategoryMutation({
                    variables : {
                        categoryId : value
                    }
                })
                break;
            case "Marketplace" :
                DeleteMarketplaceMutation({
                    variables : {
                        marketplaceId : value
                    }
                })
                break;
            case "TransactionType" :
                DeleteTransactionMutation({
                    variables : {
                        transId : value
                    }
                })
                break;
            case "Social" :
                DeleteSocialMutation({
                    variables : {
                        socialId : value
                    }
                })
                break;
            case "Chain" :
                DeleteChainMutation({
                    variables : {
                        chainDataId : value,
                    }
                })
                break;
            default :
                break;
        }
    }

    return(
        <div className={classes.rootDiv}>
            <div className="text-center text-[#7F7F7F] font-semibold mb-[50px]">
                Blackbook Prices, Rarity, Stats, and Aggregate listings from OpenSea, Looksrare, Wilderworld Marketplace
            </div>
            <div className="grid grid-cols-4 gap-4">
                <AdminSideBar />
                <div className="col-span-3">
                    <div className="text-[32px] font-semibold mb-[20px]">
                        Misc
                    </div>
                    <Protocol
                        data = {data}
                        handleChange={handleChange}
                        name={protocolName}
                        setName={setProtocolName}
                        handleAddData={handleAddData}
                        handleDeleteItem={handleDeleteItem}
                    />
                    
                    <Payment
                        data = {data}
                        handleChange={handleChange}
                        paymentData={paymentData}
                        setPaymentData={setPaymentData}
                        handleAddData={handleAddData}
                        handleSearchChange={handleSearchChange}
                        handleDeleteItem={handleDeleteItem}
                    />
                    
                    <Category 
                        data = {data}
                        handleChange={handleChange}
                        name={categoryName}
                        setName={setCategoryName}
                        handleAddData={handleAddData}
                        handleDeleteItem={handleDeleteItem}
                    />
                    
                    <Marketplace 
                        data = {data}
                        handleChange={handleChange}
                        name={marketplaceName}
                        setName={setMarketplaceName}
                        handleAddData={handleAddData}
                        handleDeleteItem={handleDeleteItem}
                    />
                    
                    <Transaction 
                        data = {data}
                        handleChange={handleChange}
                        name={transactionTypeName}
                        setName={setTransactionTypeName}
                        handleAddData={handleAddData}
                        handleDeleteItem={handleDeleteItem}
                    />
                    
                    <Social
                        data = {data}
                        handleChange={handleChange}
                        name={socialName}
                        setName={setSocialName}
                        handleAddData={handleAddData}
                        handleDeleteItem={handleDeleteItem}
                    />
                    
                    <Chain
                        data = {data}
                        handleChange={handleChange}
                        chainData={chainData}
                        setChainData={setChainData}
                        handleAddData={handleAddData}
                        handleDeleteItem={handleDeleteItem}
                    />
                    
                    <div className="border-[1px] border-[#707070] p-[20px] mt-[20px]">
                        FRONT PAGE COLLECTION HIGHLIGHT
                        <div className="grid grid-cols-2 gap-4 mt-[30px]">
                            <div className="space-y-5">
                                <select className="form-select form-select-sm
                                    appearance-none
                                    block
                                    w-[250px]
                                    px-2
                                    py-1
                                    text-sm
                                    font-normal
                                    text-white-300
                                    bg-[#474747] bg-clip-padding bg-no-repeat
                                    border border-solid border-[#707070]
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-white-300 focus:bg-[#474747] focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example"
                                    onChange={(e) => handleChange(e, "collectionName")}
                                    >
                                    <option defaultValue> COLLECTION </option>
                                    <option value="1">Collection 1</option>
                                    <option value="2">Collection 2</option>
                                    <option value="3">Collection 3</option>
                                </select>
                                <div className="flex items-center mx-auto">
                                    Start Date
                                    <input
                                        type="text"
                                        className="
                                            form-control
                                            block
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-white-700
                                            bg-[#474747] bg-clip-padding
                                            border border-solid border-[#707070]
                                            rounded
                                            transition
                                            ease-in-out
                                            ml-5
                                            focus:text-white-700 focus:bg-[#474747] focus:outline-none
                                        "
                                    />
                                </div>
                                <div className="flex items-center mx-auto">
                                    End Date
                                    <input
                                        type="text"
                                        className="
                                            form-control
                                            block
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-white-700
                                            bg-[#474747] bg-clip-padding
                                            border border-solid border-[#707070]
                                            rounded
                                            transition
                                            ease-in-out
                                            ml-5
                                            focus:text-white-700 focus:bg-[#474747] focus:outline-none
                                        "
                                    />
                                </div>
                                <button type="button" className="inline-block h-[30px] px-10 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">ADD</button>
                            </div>
                            <div>
                                <div className="flex space-x-5">
                                    <div className='flex flex-col justify-center gap-[10px]'>
                                        <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                            <i className="fas fa-angle-up text-[#5CA4E2]"></i>
                                        </div>
                                        <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                            <i className="fas fa-angle-down text-[#5CA4E2]"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='w-[230px] h-[150px] border-[1px] border-[#707070] p-[10px]'>
                                            <div className="flex justify-between"> 
                                                <div>WilderWorld</div>
                                                <div>5/1/22</div>
                                                <div>5/15/22</div>
                                                <div>X</div>
                                            </div>
                                            <div className="flex justify-between"> 
                                                <div>WilderWorld</div>
                                                <div>5/1/22</div>
                                                <div>5/15/22</div>
                                                <div>X</div>
                                            </div>
                                            <div className="flex justify-between"> 
                                                <div>WilderWorld</div>
                                                <div>5/1/22</div>
                                                <div>5/15/22</div>
                                                <div>X</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-[1px] border-[#707070] p-[20px] mt-[20px]">
                        OTC SMART Contract
                        <div className=" flex space-x-3 mt-[20px]">
                            <div> On </div>
                            <div className="form-check form-switch mb-7">
                                <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left border border-[#707070] h-5 align-top  bg-no-repeat bg-contain focus:bg-[#1F1F1F]  focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" />
                            </div>
                            <div> OFF </div>
                        </div>
                        <div className="flex items-center mx-auto">
                            Transaction Cost
                            <input
                                type="text"
                                className="
                                    form-control
                                    block
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-white-700
                                    bg-[#474747] bg-clip-padding
                                    border border-solid border-[#707070]
                                    rounded
                                    transition
                                    ease-in-out
                                    ml-5
                                    focus:text-white-700 focus:bg-[#474747] focus:outline-none
                                "
                            />
                        </div>
                        <div className="flex items-center mt-[20px]">
                            Payment
                            <div className="flex flex-col ml-[80px]">
                                $ Choice Crypto
                                <input type="range" min="1" max="100" value={payment} onChange={handlePaymentChange} className={classes.paymentRange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Misc;