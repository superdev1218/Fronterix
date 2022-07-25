import React, { useState, useEffect } from "react";

import clsx from "clsx";

const classes = {
    items : "flex justify-between hover:cursor-pointer active:bg-[#CECCCC] active:bg-opacity-20 px-[10px]",
    selectItem : "bg-[#CECCCC] bg-opacity-20",
    orderButton : 'border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center hover:cursor-pointer'
}

const Payment = (props) => {
    const {
        data,
        handleChange,
        paymentData,
        setPaymentData,
        handleAddData,
        handleSearchChange,
        handleDeleteItem
    } = props;

    const [ currentId, setCurrentId ] = useState(null);
    const [ id, setId ] = useState('');

    const handleCurrentId = (index) => {
        setCurrentId(index);
    }

    const handleItemUp = () => {
        if(currentId === 0) return;
        [id[currentId - 1] , id[currentId ]] = [id[currentId ] , id[currentId-1]];

        setCurrentId(currentId - 1);
    }

    const handleItemDown = () => {
        if(currentId === id.length - 1) return;
        [id[currentId + 1] , id[currentId]] = [id[currentId] , id[currentId + 1]];

        setCurrentId(currentId + 1);
    }
    
    const handleSelectItem = (element) => {
        setPaymentData(element)
    }

    useEffect(() => {
        if(data) {
            data.payment_tokens.map((element) => {
                setId(id => [...id, element.id])
            })
        }
    }, [data])
    
    return (
        <div className="border-[1px] border-[#707070] p-[20px] mt-[20px]">
            Payment Token
            <div className="grid grid-cols-2 gap-4 mt-[30px]">
                <div className="space-y-5">
                    <form className="w-full">   
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-[white] dark:text-[white]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-[#474747] border border-gray-300 text-[white]  rounded-[100px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[white] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ENTER COINGECKO ID, LOAD COIN..." onChange={handleSearchChange} required />
                        </div>
                    </form>
                    <div className="w-[350px] mx-auto space-y-3">
                        <div className="flex items-center justify-between">
                            Coin Name 
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
                                onChange={(e) => handleChange(e,"CoinName")}
                                value={paymentData && paymentData.coin_name}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            Coin Gecko Id
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
                                onChange={(e) => handleChange(e,"CoinGeckoId")}
                                value={paymentData && paymentData.coingecko_id}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            Symbol
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
                                onChange={(e) => handleChange(e,"Symbol")}
                                value={paymentData && paymentData.symbol}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            OpenSea id
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
                                onChange={(e) => handleChange(e,"OpenseaId")}
                                value={paymentData && paymentData.opensea_id}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            Image url
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
                                onChange={(e) => handleChange(e,"ImageUrl")}
                                value={paymentData && paymentData.image_url}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            Chain id
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
                                onChange={(e) => handleChange(e,"PaymentChainId")}
                                value={paymentData && paymentData.chain_id}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            Decimals
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
                                onChange={(e) => handleChange(e,"Decimals")}
                                value={paymentData && paymentData.decimals}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="h-[150px] flex space-x-5">
                        <div className='flex flex-col justify-center gap-[10px]'>
                            <div className={classes.orderButton}>
                                <i className="fas fa-angle-up text-[#5CA4E2]" onClick={handleItemUp}></i>
                            </div>
                            <div className={classes.orderButton}>
                                <i className="fas fa-angle-down text-[#5CA4E2]" onClick={handleItemDown}></i>
                            </div>
                        </div>
                        <div className='w-[230px] border-[1px] border-[#707070] p-[10px]'>
                            {
                                id && id.map((element,i) => {
                                    return(
                                        <div key={i} onClick={() => handleCurrentId(i)}>
                                            {data && data.payment_tokens.map((value, index) => {
                                                if(element === value.id){
                                                    return(
                                                        <div key={index} className={clsx(classes.items, currentId === i && classes.selectItem)} onClick={() => handleSelectItem(value, index)}>
                                                            <div>{value.coin_name}</div>
                                                            <div onClick={() => handleDeleteItem("Payment", value.id)}>X</div>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="ml-[50px]">
                        <button type="button" className="inline-block h-[30px] px-10 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out mt-[50px]" onClick={() => handleAddData("Payment")}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;