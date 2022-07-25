import Link from 'next/link';
import React, { useEffect, useRef } from 'react' ;
import { SmallIcon, ListIcon, CancelIcon } from '../../../assets/Icons/Landing';
import NFT from '../../../components/Common/NFT';

  

const classes = {
    root : "text-[#CECCCC] space-y-5",
    toolMenu : "flex w-full h-[50px] justify-between items-center pr-[50px]",
    searchBar : "flex items-center w-3/6",
    dropBox : "bg-[#474747] hover:bg-[#474747] font-medium text-sm p-[6px] px-4 inline-flex items-center rounded-l-[4px] border-[1px]",
    filter : 'w-[150px] border-[1px] rounded-[5px] p-[7px]',
    clear : 'border-[1px] border-[#5CA4E2] rounded-[5px] p-[7px] flex items-center'
}

const mocks = [
    {
        rank : '10050',
        name : 'Walanger WT Wemi 1970',
        min_price : '0.4200',
        max_price : '0.880',
        min_bid : '0.5200'
    },
    {
        rank : '10050',
        name : 'Walanger WT Wemi 1970',
        min_price : '0.4200',
        max_price : '0.880',
        min_bid : '0.5200'
    },
    {
        rank : '10050',
        name : 'Walanger WT Wemi 1970',
        min_price : '0.4200',
        max_price : '0.880',
        min_bid : '0.5200'
    },
    {
        rank : '10050',
        name : 'Walanger WT Wemi 1970',
        min_price : '0.4200',
        max_price : '0.880',
        min_bid : '0.5200'
    },
    {
        rank : '10050',
        name : 'Walanger WT Wemi 1970',
        min_price : '0.4200',
        max_price : '0.880',
        min_bid : '0.5200'
    },
    {
        rank : '10050',
        name : 'Walanger WT Wemi 1970',
        min_price : '0.4200',
        max_price : '0.880',
        min_bid : '0.5200'
    },
    {
        rank : '10050',
        name : 'Walanger WT Wemi 1970',
        min_price : '0.4200',
        max_price : '0.880',
        min_bid : '0.5200'
    },
    {
        rank : '10050',
        name : 'Walanger WT Wemi 1970',
        min_price : '0.4200',
        max_price : '0.880',
        min_bid : '0.5200'
    },
    {
        rank : '10050',
        name : 'Walanger WT Wemi 1970',
        min_price : '0.4200',
        max_price : '0.880',
        min_bid : '0.5200'
    },
    {
        rank : '10050',
        name : 'Walanger WT Wemi 1970',
        min_price : '0.4200',
        max_price : '0.880',
        min_bid : '0.5200'
    },
    {
        rank : '10050',
        name : 'Walanger WT Wemi 1970',
        min_price : '0.4200',
        max_price : '0.880',
        min_bid : '0.5200'
    },
    {
        rank : '10050',
        name : 'Walanger WT Wemi 1970',
        min_price : '0.4200',
        max_price : '0.880',
        min_bid : '0.5200'
    },
]
const NFT_Collection = () => {

    useEffect(() => {
        console.log()
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.toolMenu}>
                <form className={classes.searchBar}>   
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-[white] dark:text-[white]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-[#474747] border border-gray-300 text-[white]  rounded-[100px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[white] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="SEARCH...attribute, token id, contract, wallet" required />
                    </div>
                </form>

                <select className={classes.dropBox}>
                    <option value="volvo" className=" block px-4 py-2">Price: Low to High</option>
                    <option value="saab">Price: High to Low</option>
                </select>
                
                <select className={classes.dropBox}>
                    <option value="volvo" className=" block px-4 py-2">Rarity</option>
                    <option value="saab">Rarity1</option>
                </select>

                { SmallIcon }

                { ListIcon }
            </div>
            
            <div className='flex space-x-6 text-[14px]'>
                <div className={classes.filter}>
                    <div className='flex justify-between items-center'>
                        Filter #1
                        { CancelIcon }
                    </div>
                </div>
                <div className={classes.clear}>
                    Clear All
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mr-[10%]">
            {
                mocks.map((element, index) => {
                    return (
                        <div key={index}>
                            <NFT/>
                        </div>
                    );
                })
            }
            </div>
            {/* <NFT /> */}
        </div>
    )
}

export default NFT_Collection ;