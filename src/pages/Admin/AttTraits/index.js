
import React, { useState, useEffect } from 'react' ;

import SideBar from 'src/components/Common/SideBar';
import { GET_ATT } from 'src/pages/api/hasura_gql';
import AdminSideBar from '../AdminSideBar';
import CollectionName from './CollectionName';

import { useQuery } from '@apollo/client';
import Modal from './Modal';
import AttributeGroup from './AttributeGroup';
import AddAttribute from './AddAttribute';
import SwitchTrait from './SwitchTrait';

const classes = {
    rootDiv : 'bg-[#1F1F1F] w-[100vw] text-[#CECCCC]'
}

const AttTraits = () => {

    const [collectionId, setCollectionId] = useState(null);

    const { loading, error, data} = useQuery(GET_ATT, {
        variables : {
            collectionId : collectionId
        }
    });

    const [collectionNameArray, setCollectionNameArray] = useState('');
    const [collectionName, setCollectionName] = useState('');
    const [traitType, setTraitType] = useState(null);
    const [attributeName, setAttributeName] = useState(null);
    const [addTraitValueName, setAddTraitValueName] = useState(null);
    const [primaryAttribute, setPrimaryAttribute] = useState(false);
    const [rarityInclude, setRarityInclude] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e, type) => {
        let value = e.target.value;

        switch(type) {
            case "CollectionName" :
                setCollectionName(value);
                break;
            case "TraitType" :
                setTraitType(value);
                break;
            case "AttributeName" :
                setAttributeName(value);
                break;
            case "PrimaryAttribute" :
                setPrimaryAttribute(!primaryAttribute);
                break;
            case "RarityInclude" :
                setRarityInclude(!rarityInclude);
                break;
            case "TraitValueName" : 
                setAddTraitValueName(value);
            default :
                return value;
        }
    }

    useEffect(() => {
        console.log(showModal)
    }, [showModal])
    return(
        <div className={classes.rootDiv}>
            <div className='grid grid-cols-4 gap-4'>
                <div className=' max-sm:col-span-4'>
                    <AdminSideBar />
                    <div className="p-[10px]">
                        <SideBar />
                    </div>
                </div>
                <div className='col-span-3 max-sm:col-span-4 p-[30px] max-sm:p-[10px]'>
                    <CollectionName 
                        handleChange={handleChange}
                        collectionNameArray={collectionNameArray}
                        setCollectionNameArray={setCollectionNameArray}
                        collectionName={collectionName}
                        setCollectionId={setCollectionId}
                    />
                    <div className=' mt-[70px]'>
                        <AddAttribute 
                            Att_data={data}
                            handleChange={handleChange}
                            traitType={traitType}
                            attributeName={attributeName}
                            setAttributeName={setAttributeName}
                            setTraitType={setTraitType}
                            primaryAttribute={primaryAttribute}
                            rarityInclude={rarityInclude}
                            addTraitValueName={addTraitValueName}
                        />

                        <SwitchTrait 
                            Att_data={data}
                        />
                        <div className='border border-b-[#5CA4E2] mt-[25px] mb-[25px]' />
                        <AttributeGroup />
                    </div>

                    <div className='mt-[70px]'>
                        <div className='text-[24px] font-semibold mb-[10px]'>
                            Add Attributes/Traits to Filtered tokens
                        </div>
                        <div>
                            FILTERED LIST
                        </div>
                        <div className='px-[30px] gap-[30px] max-sm:px-[10px]'>
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
                                <div className="flex form-check">
                                    <div>
                                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                                    </div>
                                    <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                        Rank  Name  Created  Att_total  Contract  Description 
                                    </label>
                                </div>
                                <div className="flex form-check">
                                    <div>
                                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                                    </div>
                                    <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                        Rank  Name  Created  Att_total  Contract  Description 
                                    </label>
                                </div>
                                <div className="flex form-check">
                                    <div>
                                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-none checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                                    </div>
                                    <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                        Rank  Name  Created  Att_total  Contract  Description 
                                    </label>
                                </div>
                            </div>
                            <div className='border-[1px] border-[#707070] p-[20px] max-sm:p-[10px] mt-[30px]'>
                                <div>
                                    AUTO BUILD ATTRIBUTE COUNT
                                </div>
                                <div className='grid grid-cols-2 gap-4 p-[20px] max-xs:space-y-1'>
                                    <div className='max-xs:col-span-2'>
                                        Attribute Name
                                    </div>
                                    <div className='max-xs:col-span-2'>
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
                                    <div className='max-xs:col-span-2'>
                                        Trait Suffix Name
                                    </div>
                                    <div className='max-xs:col-span-2'>
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
                                        Include In Rarity
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""  />
                                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                            Select
                                        </label>
                                    </div>
                                    <div className='flex max-xs:col-span-2'>
                                        <div>
                                            Null Placeholder
                                        </div>
                                        <div className="flex form-check ml-[30px]">
                                            <div>
                                                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""  />
                                            </div>
                                            <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                                Select
                                            </label>
                                        </div>
                                    </div>
                                    <div className='flex justify-between max-xs:col-span-2'>
                                        <input
                                            type="text"
                                            className="
                                                form-control
                                                block
                                                w-1/2
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
                                        <button type="button" className="inline-block px-6 py-2.5 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" >BUILD</button>
                                    </div>
                                    <div>
                                        Include In Rarity
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""  />
                                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                            Select
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='border-[1px] border-[#707070] p-[20px] max-sm:p-[10px] mt-[30px]'>
                                <div>
                                    AUTO BUILD MATCHING ATTRIBUTES
                                </div>
                                <div className='grid grid-cols-2 gap-4 p-[20px] max-sm:p-[10px]'>
                                    <div className='max-xs:col-span-2'>
                                        Attribute Name
                                    </div>
                                    <div className='max-xs:col-span-2'>
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
                                    <div className='max-xs:col-span-2'>
                                        Trait Suffix Name
                                    </div>
                                    <div className='max-xs:col-span-2'>
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
                                <div className='grid grid-cols-3 gap-4 p-[20px] max-sm:p-[10px]'>
                                    <div className='col-span-2 flex justify-between'>
                                        <div>
                                            Include In Rarity
                                        </div>
                                        <div className="form-check flex">
                                            <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""  />
                                            <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                                Select
                                            </label>
                                        </div>
                                    </div>
                                    <div className='max-xs:hidden'>
                                        IGNORE WORDS
                                    </div>
                                    <div className='col-span-2 max-md:col-span-3 space-y-7 max-md:mb-[30px]'>
                                        <div className='col-span-2 flex justify-end items-center'>
                                            SEARCH FOR MATCH
                                        </div>
                                        <div className='col-span-2 flex justify-between'>
                                            <div className='border-[1px] border-[#707070] p-[10px]'>
                                                <div> Attribute 01 List </div>
                                                <div> Attribute 01 List </div>
                                                <div> Attribute 01 List </div>
                                                <div> Attribute 01 List </div>
                                                <div> Attribute 01 List </div>
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
                                            <div className='border-[1px] border-[#707070] p-[10px]'>
                                                <div> Attribute 01 List </div>
                                                <div> Attribute 01 List </div>
                                                <div> Attribute 01 List </div>
                                                <div> Attribute 01 List </div>
                                                <div> Attribute 01 List </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' max-md:col-span-3 space-y-3'>
                                        <div className='flex justify-between'>
                                            <input
                                                type="text"
                                                className="
                                                    form-control
                                                    block
                                                    w-1/2
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
                                            <button type="button" className="inline-block px-4 py-2.5 border border-[1px] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" >ADD</button>
                                        </div>
                                        <div className='border-[1px] border-[#707070] p-[10px]'>
                                            <div> World List </div>
                                            <div> World List </div>
                                            <div> World List </div>
                                            <div> World List </div>
                                            <div> World List </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <button type="button" className="inline-block h-[30px] px-6 mr-5 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">Build</button>
                                </div>
                            </div>
                            <div className='border-[1px] border-[#707070] p-[10px] mt-[30px]'>
                                ADD TRAITS
                                <div className='grid grid-cols-4 gap-4 p-[20px]'>
                                    <div className='col-span-2 max-md:col-span-4 flex justify-between'>
                                        <div className='border-[1px] border-[#707070] p-[10px]'>
                                            <div> Attribute 01 List </div>
                                            <div> Attribute 01 List </div>
                                            <div> Attribute 01 List </div>
                                            <div> Attribute 01 List </div>
                                            <div> Attribute 01 List </div>
                                        </div>
                                        <div className='border-[1px] border-[#707070] p-[10px]'>
                                            <div> Trait 01 List </div>
                                            <div> Trait 01 List </div>
                                            <div> Trait 01 List </div>
                                            <div> Trait 01 List </div>
                                            <div> Trait 01 List </div>
                                        </div>
                                    </div>
                                    <div className='col-span-2 max-md:col-span-4 flex justify-end items-end'>
                                        <button type="button" className="inline-block h-[30px] px-8 mr-2 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">ADD</button>
                                    </div>
                                </div>
                            </div>
                            <div className='border-[1px] border-[#707070] p-[10px] mt-[30px] space-y-5'>
                                <div>
                                    ADD TRAIT TYPES
                                </div>
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
                                    <div className='flex max-lg:col-span-3 max-lg:justify-center'>
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
                                            <div className='flex max-lg:justify-center'>
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
                                
                                <div className='flex justify-end items-end'>
                                    <button type="button" className="inline-block h-[30px] px-4 ml-2 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AttTraits;