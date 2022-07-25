import React, { useState, useEffect } from "react";


const Collection = (props) => {

    const {
        data,
        handleChange,
        name,
        setName,
        handleAddData,
        handleDeleteItem
    } = props;

    const [currentId, setCurrentId] = useState(null);
    const [id, setId] = useState('');

    const handleCurrentId = (index) => {
        setCurrentId(index);
    }

    const handleItemUp = () => {
        if (currentId === 0) return;
        [id[currentId - 1], id[currentId]] = [id[currentId], id[currentId - 1]];

        setCurrentId(currentId - 1);
    }

    const handleItemDown = () => {
        if (currentId === id.length - 1) return;
        [id[currentId + 1], id[currentId]] = [id[currentId], id[currentId + 1]];

        setCurrentId(currentId + 1);
    }

    const handleSelectItem = (element) => {
        setName(element.mp_name)
    }

    useEffect(() => {
        if (data) {
            data.marketplace.map((element, index) => {
                setId(id => [...id, element.id])
            })
        }
    }, [data])

    return (
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
                                {
                                    id && id.map((element, i) => {
                                        return (
                                            <div key={i} onClick={() => handleCurrentId(i)}>
                                                {data && data.marketplace.map((value, index) => {
                                                    if (element === value.id) {
                                                        return (
                                                            <div key={index} className={clsx(classes.items, currentId === i && classes.selectItem)} onClick={() => handleSelectItem(value)}>
                                                                <div>{value.mp_name}</div>
                                                                <div onClick={() => handleDeleteItem("Marketplace", value.id)}>X</div>
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
    )
}

export default Collection;