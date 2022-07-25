import React from "react";
import AdminSideBar from "../AdminSideBar";
import SideBar from "../../../components/Common/SideBar";
import { GET_RARITYCALC } from "src/pages/api/hasura_gql";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import RarityCalculation from "./RarityCalculation";
import RarityOptionEdit from "./RarityOptionEdit";

const classes = {
    rootDiv : 'bg-[#1F1F1F] w-[100vw] text-[#CECCCC]'
}

const Rarity = () => {

    const { loading, error, data } = useQuery(GET_RARITYCALC);

   
    return(
        <div className={classes.rootDiv}>
            <div className="grid grid-cols-4 gap-4">
                <div className=' max-sm:col-span-4'>
                    <AdminSideBar />
                    <div className="p-[10px]">
                        <SideBar />
                    </div>
                </div>
                <div className='col-span-3 max-sm:col-span-4 p-[30px] max-sm:p-[10px] space-y-5'>
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
                        <option value="1">Collection 1</option>
                        <option value="2">Collection 2</option>
                        <option value="3">Collection 3</option>
                    </select>
                    <div>
                        <div className="font-semibold">
                            Rarity Calculation Add/Edit
                        </div>
                        <RarityCalculation
                            data={data}
                        />
                    </div>
                    
                    <div className='border border-b-[#5CA4E2] mt-[25px] mb-[25px]' />
                        <div className="font-semibold">
                            Rarity Option Edit
                        </div>
                        <RarityOptionEdit
                            calcData={data}
                        />
                </div>
            </div>

            <div className="p-[30px] max-sm:p-[10px]">
                Rarity Option Edit
                <div className="p-[20px]">
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
                        <option value="1">Collection 1</option>
                        <option value="2">Collection 2</option>
                        <option value="3">Collection 3</option>
                    </select>
                </div>
                <div className="border-[1px] border-[#707070] p-[20px] space-y-3">
                    <div>
                        RARITY OPTION
                    </div>
                    <div className="flex grid grid-cols-2 gap-3 mt-[30px]">
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
                            />
                        </div>
                        <div>
                            Primary Attribute
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
                            />
                        </div>
                        <div>
                            Attribute Max Rarity Scroe
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
                            />
                        </div>
                        <div>
                            Attribute Min Rarity Score
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
                            />
                        </div>
                        <div>
                            Visible
                        </div>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 bg-white border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                            <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                Selected
                            </label>
                        </div>
                    </div>
                </div>
                <div className="border-[1px] border-[#707070] p-[20px] mt-[50px]">
                    <div>
                        ATTRIBUTE RARITY
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-[30px]">
                        <div className='max-md:col-span-2 h-[200px] flex justify-around'>
                            <div>
                                <div> Available </div>
                                <div className='border-[1px] border-[#707070] p-[10px]'>
                                    <div> Attribute Usage </div>
                                    <div> Attribute Usage </div>
                                    <div> Attribute Usage </div>
                                    <div> Attribute Usage </div>
                                    <div> Attribute Usage </div>
                                </div>
                            </div>
                            
                            <div className='flex flex-col justify-center gap-[10px]'>
                                <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                    <i className="fas fa-angle-right text-[#5CA4E2]"></i>
                                </div>
                                <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                    <i className="fas fa-angle-double-right text-[#5CA4E2]"></i>
                                </div>
                                <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                    <i className="fas fa-angle-left text-[#5CA4E2]"></i>
                                </div>
                                <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                    <i className="fas fa-angle-double-left text-[#5CA4E2]"></i>
                                </div>
                            </div>
                            <div>
                                <div> Included in Rarity </div>
                                <div className='border-[1px] border-[#707070] p-[10px]'>
                                    <div> Attribute Usage </div>
                                    <div> Attribute Usage </div>
                                    <div> Attribute Usage </div>
                                    <div> Attribute Usage </div>
                                    <div> Attribute Usage </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-md:col-span-2 ">
                            <div className="grid grid-cols-2 gap-3 mx-auto">
                                <div className="flex items-center">
                                    Attribute Rarity
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
                                    />
                                </div>
                                <div className="flex items-center">
                                    Attribute Est Rarity
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
                                    />
                                </div>
                                <div className="flex items-center">
                                    Attribute Weighting
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
                                    />
                                </div>
                                <div className="flex items-center">
                                    Weighted Multiplier
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
                                    />
                                </div>
                                <div className="flex items-center">
                                    Max Trait Rarity Score
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
                                    />
                                </div>
                                <div className="flex items-center">
                                    Min Trait Rarity Score
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
                                    />
                                </div>
                                <div className="flex items-center">
                                    Multiplying Factor
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
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-[1px] border-[#707070] p-[20px] pr-[100px] max-md:pr-[20px] mt-[50px]">
                    <div>
                        TRAIT RARITY
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-[30px]">
                        <div className='max-sm:col-span-2 flex justify-center'>
                            <div className='border-[1px] border-[#707070] p-[10px] mr-[30px]'>
                                <div> Attribute Usage </div>
                                <div> Attribute Usage </div>
                                <div> Attribute Usage </div>
                                <div> Attribute Usage </div>
                                <div> Attribute Usage </div>
                            </div>
                            
                            <div className='border-[1px] border-[#707070] p-[10px]'>
                                <div> Trait 01 Usage </div>
                                <div> Trait 01 Usage </div>
                                <div> Trait 01 Usage </div>
                                <div> Trait 01 Usage </div>
                                <div> Trait 01 Usage </div>
                            </div>
                        </div>
                        <div className="max-sm:col-span-2 grid grid-cols-2 gap-3 flex mx-auto">
                            <div className="flex items-center">
                                Attribute Rarity
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
                                />
                            </div>
                            <div className="flex items-center">
                                Attribute Est Rarity
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
                                />
                            </div>
                            <div className="flex items-center">
                                Attribute Weighting
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
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="inline-block h-[30px] px-6 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out my-[50px]">CALCULATE RARITY/RANK</button>
                <div>
                    Rarity Groups
                    <div className="border-[1px] border-[#707070] p-[20px] mt-[20px] space-y-3">
                        <div className='flex w-[200px] items-center ml-[50px]'>
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
                            />
                            <button type="button" className="inline-block h-[30px] px-4 ml-2 border border-[1px] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">ADD</button>
                        </div>
                        <div className='grid grid-cols-3 gap-[10px] space-y-3'>
                            <div className='flex max-lg:col-span-3 justify-center'>
                                <div className='flex flex-col justify-center gap-[10px] mr-[10px]'>
                                    <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                        <i className="fas fa-angle-up text-[#5CA4E2]"></i>
                                    </div>
                                    <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                        <i className="fas fa-angle-down text-[#5CA4E2]"></i>
                                    </div>
                                </div>
                                <div className='border-[1px] border-[#707070] p-[10px] mt-[22px]'>
                                    <div> Order Trait Type </div>
                                    <div> Order Trait Type </div>
                                    <div> Order Trait Type </div>
                                    <div> Order Trait Type </div>
                                    <div> Order Trait Type </div>
                                </div>
                            </div>
                            <div className='flex justify-around col-span-2 max-lg:col-span-3'>
                                <div className='flex justify-center'>
                                    <div className='flex flex-col justify-center gap-[10px] mr-[10px]'>
                                        <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                            <i className="fas fa-angle-up text-[#5CA4E2]"></i>
                                        </div>
                                        <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                            <i className="fas fa-angle-down text-[#5CA4E2]"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div> In Trait Type List </div>
                                        <div className='border-[1px] border-[#707070] p-[10px]'>
                                            <div> Attribute Usage </div>
                                            <div> Attribute Usage </div>
                                            <div> Attribute Usage </div>
                                            <div> Attribute Usage </div>
                                            <div> Attribute Usage </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center w-[50px] mt-[22px]'>
                                    <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                        <i className="fas fa-angle-right text-[#5CA4E2]"></i>
                                    </div>
                                    <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                        <i className="fas fa-angle-double-right text-[#5CA4E2]"></i>
                                    </div>
                                    <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                        <i className="fas fa-angle-left text-[#5CA4E2]"></i>
                                    </div>
                                    <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                        <i className="fas fa-angle-double-left text-[#5CA4E2]"></i>
                                    </div>
                                </div >
                                <div>
                                    <div className='text-center'> All Attributes </div>
                                    <div className='border-[1px] border-[#707070] p-[10px]'>
                                        <div> Attribute 01 List </div>
                                        <div> Attribute 01 List </div>
                                        <div> Attribute 01 List </div>
                                        <div> Attribute 01 List </div>
                                        <div> Attribute 01 List </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-[1px] border-[#707070] p-[20px] pr-[100px] max-md:pr-[20px] mt-[50px]">
                    <div>
                        Rarity Group
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-[30px]">
                        <div className='max-sm:col-span-2 border-[1px] border-[#707070] p-[10px]'>
                            <div> Order Group </div>
                            <div> Order Group </div>
                            <div> Order Group </div>
                            <div> Order Group </div>
                            <div> Order Group </div>
                        </div>
                        <div className="max-sm:col-span-2 grid grid-cols-2 gap-3 flex mx-auto">
                            <div className="flex items-center">
                                Group Name
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
                                />
                            </div>
                            <div className="flex items-center">
                                Group Weighting
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
                                />
                            </div>
                            <div className="flex items-center">
                                Multiplying Factor
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
                                />
                            </div>
                            <div className="flex items-center">
                                Group Max Score
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
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="inline-block h-[30px] px-6 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out my-[50px]">CALCULATE RARITY/RANK</button>
            </div>
        </div>
    );
}

export default Rarity