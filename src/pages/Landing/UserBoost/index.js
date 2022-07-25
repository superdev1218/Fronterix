import React from 'react' ;
import { EthSmallIcon, RecycleIcon } from '../../../assets/Icons/Landing';
import NFT from '../../../components/Common/NFT';

const classes = {
    root : "p-[100px] text-[#CECCCC]",
}

const AdBoost = (props) => {

    const {
    } = props;
    
    return (
        <div className={classes.root}>
            <div className=' text-[#7F7F7F] text-center mb-[50px]'>
                Blackbook Prices, Rarity, Stats, and Aggregate listings from OpenSea, Looksrare, Wilderworld Marketplace
            </div>

            <div className='text-[32px] font-semibold mb-[50px]'>
                Ad Boost
            </div>

            <div className='mb-[50px]'>
                <div className="flex items-center mb-[20px]">
                    <div className="flex items-center h-5">
                        <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer" />
                    </div>
                    <div className="ml-2 text-sm mr-[50px]">
                        <label htmlFor="helper-checkbox" className="font-medium text-[#CECCCC] dark:text-gray-300"> Selected</label>
                    </div>

                    { RecycleIcon }
                </div>
                <div className='flex !important, space-x-10'>
                    <NFT />
                    <NFT />
                </div>
            </div>

            <div className='p-[20px] border-[1px] border-[#707070] space-y-5 mb-[30px]'>
                <div className='text-[24px]'>
                    Select Boost Time
                </div>

                <div className='flex items-center space-x-5'>
                    <div className='space-y-1'>
                        <div className="flex items-center">
                            <div className="flex items-center h-5">
                                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer" />
                            </div>
                            <div className="ml-2 text-sm mr-[50px]">
                                <label htmlFor="helper-checkbox" className="font-medium text-[#CECCCC] dark:text-gray-300"> $4-1Day</label>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center h-5">
                                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hover:cursor-pointer" />
                            </div>
                            <div className="ml-2 text-sm mr-[50px]">
                                <label htmlFor="helper-checkbox" className="font-medium text-[#CECCCC] dark:text-gray-300"> $10-3Days(16% discount)</label>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center h-5">
                                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-[yellow] rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 bg-black dark:border-gray-600 hover:cursor-pointer" />
                            </div>
                            <div className="ml-2 text-sm mr-[50px]">
                                <label htmlFor="helper-checkbox" className="font-medium text-[#CECCCC] dark:text-gray-300"> $21-1week(25% discount)</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-[#CECCCC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block p-1 pl-10 w-full text-sm text-gray-900 bg-[#474747] border border-gray-300 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white" placeholder="Collection" required="" />
                            </div>
                        </form>

                        <div className='h-[150px] mt-[10px] border-[1px] border-[#707070] p-[10px]'>
                            <div className='hover:bg-[#CECCCC] hover:bg-opacity-20'>
                                Wild World Project
                            </div>
                        </div>
                    </div>

                    <div className='w-[150px]'>
                        <div> Project </div>
                        <div className='h-[150px] mt-[10px] border-[1px] border-[#707070] p-[10px]'>
                            <div className='hover:bg-[#CECCCC] hover:bg-opacity-20'>
                                Project List
                            </div>
                            <div className='hover:bg-[#CECCCC] hover:bg-opacity-20'>
                                Project List
                            </div>
                            <div className='hover:bg-[#CECCCC] hover:bg-opacity-20'>
                                Project List
                            </div>
                            <div className='hover:bg-[#CECCCC] hover:bg-opacity-20'>
                                Project List
                            </div>
                            <div className='hover:bg-[#CECCCC] hover:bg-opacity-20'>
                                Project List
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    Note: If your NFT sells before your Boosted time is finished there is no refund for remaining time.
                </div>
            </div>
            
            <div className='w-full flex justify-center mb-[70px]'>
                <button className="border-[1px] border-[#5CA4E2] hover:bg-blue-700 text-white font-bold py-2 px-10 rounded">
                    ADD TO CART
                </button>
            </div>

            <div className='p-[20px] border-[1px] border-[#707070] space-y-5 mb-[70px]'>
                <div className='text-[32px] mb-[60px]'>
                    Cart
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-2/3 text-sm text-left">
                        <thead className="text-xs uppercase bg-[none] dark:bg-gray-700">
                            <tr className='text-center'>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Token ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Boost
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Cost
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Collection
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Project
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-[12px]'>
                            <tr className="border-b dark:border-[#707070] text-center">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Walanger WT Wemi 1970
                                </th>
                                <td className="px-3 py-4">
                                    95863051
                                </td>
                                <td className="px-3 py-4">
                                    1 Day
                                </td>
                                <td className="px-3 py-2">
                                    $4
                                </td>
                                <td className="px-3 py-4">
                                    Wilder World
                                </td>
                                <td className="px-3 py-4">
                                    Wheels
                                </td>
                            </tr>
                            <tr className="border-b dark:border-[#707070] text-center">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Walanger WT Wemi 1970
                                </th>
                                <td className="px-3 py-4">
                                    95863051
                                </td>
                                <td className="px-3 py-4">
                                    1 Day
                                </td>
                                <td className="px-3 py-2">
                                    $4
                                </td>
                                <td className="px-3 py-4">
                                    Wilder World
                                </td>
                                <td className="px-3 py-4">
                                    Wheels
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='w-2/3 text-center mt-[10px]'>
                        TOTAL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$8
                    </div>
                </div>

                <div className='w-full h-[30px] flex justify-center items-center'>
                    <button className="border-[1px] border-[#5CA4E2] hover:bg-blue-700 text-white font-bold py-0 px-10 rounded">
                        Purchase Ad Boost
                    </button>
                </div>
            </div>
            
            <div className='mb-[24px]'>
                History
            </div>

            <div className='h-[200px] border-[1px] border-[#707070] space-y-5 p-[20px]'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs uppercase bg-[none] dark:bg-gray-700">
                            <tr className='text-center'>
                                <th scope="col" className="px-2 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Token ID
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Collection
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Project
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Boost
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Appear
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Clicks
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Sold
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    BB Low
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    BB High
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Sale
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    % BB Avg
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-[12px]'>
                            <tr className="text-center">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    Walanger WT Wemi 1970
                                </th>
                                <td className="px-3 py-4">
                                    95863051
                                </td>
                                <td className="px-3 py-4">
                                    Wilder World
                                </td>
                                <td className="px-3 py-2">
                                    Wilder Wheels
                                </td>
                                <td className="px-3 py-4">
                                    1 Day
                                </td>
                                <td className="px-3 py-4">
                                    12/32/22
                                </td>
                                <td className="px-3 py-4">
                                    8
                                </td>
                                <td className="px-3 py-4">
                                    8
                                </td>
                                <td className="px-3 py-4">
                                    Yes
                                </td>
                                <td className="px-3 py-4">
                                    1
                                </td>
                                <td className="px-3 py-4">
                                    2
                                </td>
                                <td className="px-3 py-4">
                                    <div className='flex items-center'>
                                        { EthSmallIcon }
                                        <div> 1.300 </div>
                                    </div>
                                </td>
                                <td className="px-3 py-4">
                                    -13.3%
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdBoost ;