import React, { useState, useEffect } from "react";

import clsx from "clsx";

const classes = {
    items : "flex justify-between hover:cursor-pointer active:bg-[#CECCCC] active:bg-opacity-20 px-[10px]",
    selectItem : "bg-[#CECCCC] bg-opacity-20",
    orderButton : 'border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center hover:cursor-pointer'
}

const Category = (props) => {
    const {
        data,
        handleChange,
        name,
        setName,
        handleAddData,
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
        setName(element.category_name)
    }

    useEffect(() => {
        if(data) {
            data.collect_category.map((element, index) => {
                setId(id => [...id, element.id])
            })
        }
    }, [data])
    
    return (
        <div className="border-[1px] border-[#707070] p-[20px] mt-[20px]">
            COLLECTION CATEGORIES
            <div className="grid grid-cols-2 gap-4 mt-[30px]">
                <div className="space-y-5">
                    <div className="flex items-center mx-auto">
                        Category Name 
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
                            onChange={(e) => handleChange(e,"CategoryName")}
                            value={name}
                        />
                    </div>
                    <button type="button" className="inline-block h-[30px] px-10 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => handleAddData("Category")}>ADD</button>
                </div>
                <div className="flex space-x-5">
                    <div className='flex flex-col justify-center gap-[10px]'>
                        <div className={classes.orderButton} onClick={handleItemUp}>
                            <i className="fas fa-angle-up text-[#5CA4E2]"></i>
                        </div>
                        <div className={classes.orderButton} onClick={handleItemDown}>
                            <i className="fas fa-angle-down text-[#5CA4E2]"></i>
                        </div>
                    </div>
                    <div>
                        <div className='w-[230px] h-[150px] border-[1px] border-[#707070] p-[10px]'>
                            {
                                id && id.map((element,i) => {
                                    return(
                                        <div key={i} onClick={() => handleCurrentId(i)}>
                                            {data && data.collect_category.map((value, index) => {
                                                if(element === value.id){
                                                    return(
                                                        <div key={index} className={clsx(classes.items, currentId === i && classes.selectItem)} onClick={() => handleSelectItem(value)}>
                                                            <div>{value.category_name}</div>
                                                            <div onClick={() => handleDeleteItem("Category", value.id)}>X</div>
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
    )
}

export default Category;