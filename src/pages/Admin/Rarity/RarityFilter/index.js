import React, { useState, useEffect } from "react";

import clsx from "clsx";
import { useMutation } from "@apollo/client";
import { Create_RarityOption } from "src/pages/api/hasura_gql";

const classes = {
    items : "flex justify-between hover:cursor-pointer active:bg-[#CECCCC] active:bg-opacity-20 px-[10px]",
    selectItem : "bg-[#CECCCC] bg-opacity-20",
    orderButton : 'border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center hover:cursor-pointer'
}


const RarityFilter = (props) => {

    const {
        data,
    } = props;

    const [ CREATERARITYOPTIONMUTATION ] = useMutation(Create_RarityOption);

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);

    const handleChange = (e, type) => {
        let value = e.target.value;

        switch(type){
            case "Name" :
                setName(value);
                break;
            case "Description" :
                setDescription(value);
                break;
            default :
                break;
        }
    }
 
    const handleSelectItem = (e) => {
        data.rarity_option.map((element, index) => {
            console.log(element.id , e.target.value)
            if(element.id === Math.floor(e.target.value)){
                setName(element.rarity_option_name)
                setDescription(element.description)
            }
        })
    }

    const handleAddRarityOption = () => {
        CREATERARITYOPTIONMUTATION({
            variables : {
                name : name,
                description : description
            }
        })
    }
    return(
        
        <div>
            Build Rarity Option
            <div className="border-[1px] border-[#707070] p-[20px]">
                FILTERED LIST
                <div className='flex gap-[30px] p-[10px]'>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                            Selected
                        </label>
                    </div>
                    <div> 10,000 </div>
                    <div> Count </div>
                    <div> 10,000 </div>
                </div>
                <div className='border-[1px] border-[#707070] p-[10px]'>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                            Rank  Name  Created  Att_total  Contract  Description 
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                            Rank  Name  Created  Att_total  Contract  Description 
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                            Rank  Name  Created  Att_total  Contract  Description 
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                            Rank  Name  Created  Att_total  Contract  Description 
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                            Rank  Name  Created  Att_total  Contract  Description 
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                            Rank  Name  Created  Att_total  Contract  Description 
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                            Rank  Name  Created  Att_total  Contract  Description 
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                            Rank  Name  Created  Att_total  Contract  Description 
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                            Rank  Name  Created  Att_total  Contract  Description 
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                            Rank  Name  Created  Att_total  Contract  Description 
                        </label>
                    </div>
                </div>
                <div className="mt-[30px]">
                    Add to Existing
                    <div className="flex space-x-3 mt-[20px]">
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
                            onChange={(e) => handleSelectItem(e)}
                            >
                                <option defaultValue> Rarity Option </option>
                            {
                                data && data.rarity_option.map((element, index) => {
                                    return(
                                        <option key={index} value={element.id}> {element.id} </option>
                                    )
                                })
                            }
                        </select>
                        <button type="button" className="inline-block h-[30px] px-6 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">ADD</button>
                    </div>
                    <div className='w-3/4 border border-b-[#5CA4E2] mt-[25px] mb-[25px] mx-auto' />
                    Add to New
                    <div className="grid grid-cols-2 gap-4 mt-[20px]">
                        <div>
                            Rarity Option Name
                        </div>
                        <div>
                            <input
                                type="text"
                                className="
                                    form-control
                                    block
                                    w-full
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
                                    m-0
                                    focus:text-white-700 focus:bg-[#474747] focus:outline-none
                                "
                                onChange={(e) => handleChange(e, "Name")}
                                value={name}
                            />
                        </div>
                        <div>
                            Rarity Option Description
                        </div>
                        <div>
                            <textarea
                                rows={3}
                                className="
                                    form-control
                                    w-full
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
                                    m-0
                                    focus:text-white-700 focus:bg-[#474747] focus:outline-none
                                "
                                onChange={(e) => handleChange(e, "Description")}
                                value={description}
                            />
                        </div>
                        <div></div>
                        <div>
                            <button type="button" className="inline-block h-[30px] px-6 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleAddRarityOption}>ADD TO NEW RARITY OPTION</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RarityFilter;