import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react' ;
import AdminSideBar from '../AdminSideBar';
import { EthSmallIcon } from 'src/assets/Icons/Landing';
import { Create_Boost, GET_BOOST } from '../../api/hasura_gql';
import { useEffect } from 'react';

const classes = {
    rootDiv : 'bg-[#1F1F1F] w-[100vw] text-[#CECCCC]',
    items : "flex justify-between hover:cursor-pointer active:bg-[#CECCCC] active:bg-opacity-20",
    selectItem : "bg-[#CECCCC] bg-opacity-20",
    orderButton : 'border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center hover:cursor-pointer'
}
const Boost = () => {

    const { loading, error, data } = useQuery(GET_BOOST);
    const [ CreateBoostMutation ] = useMutation(Create_Boost);

    const [ adBoostName, setAdBoostName ] = useState(null);
    const [ cost, setCost ] = useState(null);
    const [ time, setTime ] = useState(null);
    const [ searchText, setSearchText ] = useState('');
    const [ boostId, setBoostId ] = useState('');
    const [ currentId, setCurrentId ] = useState('');

    const handleChange = (e, type) => {
        let value = e.target.value;

        switch(type) {
            case "AdBoostName" :
                setAdBoostName(value);
                break;
            case "Cost" :
                setCost(value);
                break;
            case "Time" :
                setTime(value);
                break;
            default :
                break;
        }
    }

    const handleAddData = () => {
        CreateBoostMutation({
            variables : {
                adBoostName : adBoostName,
                cost : cost,
                time : time
            }
        })
    }

    const handleCurrentId = (index) => {
        setCurrentId(index);
    }

    const handleSelectItem = (element, index) => {
        setAdBoostName(element.description)
        setCost(element.cost)
        setTime(element.time)
        // setCurrentId(index);
    }

    const handleSearchChange = (e) => {
        const {value} = e.target;
        setSearchText(value);
    }

    const handleItemUp = () => {
        if(currentId === 0) return;
        [boostId[currentId - 1] , boostId[currentId ]] = [boostId[currentId ] , boostId[currentId-1]];
        setCurrentId(currentId - 1);
    }
    
    const handleItemDown = () => {
        if(currentId === boostId.length - 1) return;
        [boostId[currentId + 1] , boostId[currentId]] = [boostId[currentId] , boostId[currentId + 1]];
        setCurrentId(currentId + 1);
    }

    useEffect(() => {
        if(data) {
            data.boost.map((element,index) => {
                setBoostId(boostId => [...boostId, element.id])
            })
        }
    }, [data])
    

    return(
        <div className={classes.rootDiv}>
            <div className='grid grid-cols-4'>
                <AdminSideBar />
                <div className='col-span-3 mt-[50px]'>
                    <div className='text-[32px] font-semibold'>
                        Ad Boost
                    </div>
                    <div className='border-[1px] border-[#707070] p-[20px] pt-[50px]'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='w-[380px] mx-auto space-y-3'>
                                <div className='flex items-center justify-between'>
                                    Ad Boost Name
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
                                        onChange={(e) => handleChange(e,"AdBoostName")}
                                        value={adBoostName}
                                    />
                                </div>
                                <div className='flex items-center justify-between'>
                                    Cost
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
                                        onChange={(e) => handleChange(e,"Cost")}
                                        value={cost}
                                    />
                                </div>
                                <div className='flex items-center justify-between'>
                                    Time(DD/HH)
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
                                        onChange={(e) => handleChange(e,"Time")}
                                        value={time}
                                    />
                                </div>
                                <div className='flex justify-center'>
                                    <button type="button" className="inline-block h-[30px] px-10 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out mt-[20px] " onClick={handleAddData}>ADD</button>
                                </div>
                            </div>
                            <div>
                                <div className="flex space-x-5">
                                    <div className='flex flex-col justify-center gap-[10px]'>
                                        <div className={classes.orderButton}>
                                            <i className="fas fa-angle-up text-[#5CA4E2]" onClick={handleItemUp}></i>
                                        </div>
                                        <div className={classes.orderButton}>
                                            <i className="fas fa-angle-down text-[#5CA4E2]" onClick={handleItemDown}></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='w-[230px] h-[150px] border-[1px] border-[#707070] p-[10px]'>
                                            {
                                                boostId && boostId.map((element,i) => {
                                                    return(
                                                        <div key={i} onClick={() => handleCurrentId(i)}>
                                                            {data && data.boost.map((value, index) => {
                                                                if(element === value.id){
                                                                    return(
                                                                        <div key={index} className={classes.items} onClick={() => handleSelectItem(value, index)}>
                                                                            <div>{value.description}</div>
                                                                            <div>X</div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-[100px]'>
                <form className="w-1/3">   
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-[white] dark:text-[white]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-[#474747] border border-gray-300 text-[white]  rounded-[100px] focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[white] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ENTER COINGECKO ID, LOAD COIN..." onChange={(e) => handleSearchChange(e)} required />
                    </div>
                </form>
                <div className='h-[200px] border-[1px] border-[#707070] space-y-5 p-[20px] mt-[30px]'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs bg-[none] dark:bg-gray-700">
                                <tr className='text-center'>
                                    {
                                        data && Object.keys(data.sponsor_ad[0]).map((element, index) => {
                                            return(
                                                element !== "__typename" && element !== "id"  &&
                                                <th key={index} className="px-3 py-4">
                                                    {element}
                                                </th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody className='text-[12px]'>
                                    {
                                        data && data.sponsor_ad.filter(list => list.ad_name.toLowerCase().search(searchText) >= 0).map((element, index) => {
                                            return(
                                                <tr key={index} className="text-center">
                                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                        {element.ad_name}
                                                    </th>
                                                    <td className="px-3 py-4">
                                                        {element.token_id}
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        {element.boost}
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        {element.sponsor_start}
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        {element.sponsor_end}
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        {element.appear}
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        {element.click_through}
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        {element.sold}
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        {element.bb_low}
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        {element.bb_high}
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        {element.sale_price}
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        <div className=' flex items-center'>
                                                            { EthSmallIcon }{element.bb_avg}
                                                        </div>
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        {element.referred_user}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boost;