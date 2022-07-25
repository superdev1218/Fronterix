import { useQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GET_TRAITVALUE } from "src/pages/api/hasura_gql";

const classes = {
    item : "flex items-center text-center space-x-[8px] overflow-hidden whitespace-nowrap hover:cursor-pointer px-[10px]",
    traitItem : "overflow-hidden whitespace-nowrap hover:cursor-pointer",
    selectItem : "bg-[#CECCCC] bg-opacity-20",
    orderButton : 'border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center hover:cursor-pointer'
}

const AttributeGroup = (props) => {

    const { loading, error, data} = useQuery(GET_TRAITVALUE);

    const [primeFilter, setPrimeFilter] = useState(false);
    const [rarityInclude, setRarityInclude] = useState(false);
    const [addAdmin, setAddAdmin] = useState(false);
    const [attributeName, setAttributeName] = useState(null);

    useEffect(() => {
        if(data) {
            
        }
    }, [data])
    
    return(
        <div>
            <div className="text-[24px] font-semibold mb-[20px]">
                Attribute Groups
            </div>
            <div className='border-[1px] border-[#707070] p-[20px]'>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='max-lg:col-span-3 flex justify-around items-center gap-[10px]'>
                        <div className='flex flex-col items-center '>
                            <div>
                                Prime Attribute Traits
                            </div>
                            <div className='w-full border-[1px] border-[#707070] px-[20px]'>
                                <div>Word Wustang King Wilder 1978</div>
                                <div>wiami</div>
                                <div>Lightbeam</div>
                                <div>Light Spectrum</div>
                                <div>Teal Tones</div>
                                <div>Wokewagen Warmann Ghia 1967</div>
                                <div>WMW W5 W39 2003</div>
                                <div>Blue Studio</div>
                                <div>Purple Studio</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 max-lg:col-span-3 flex justify-around items-center gap-[10px]'>
                        <div className='flex flex-col items-center '>
                            <div>
                                Attributes in Group
                            </div>
                            <div className='border-[1px] border-[#707070] p-[10px]'>
                                <div>Order Attribute Usage</div>
                                <div>Order Attribute Usage</div>
                                <div>Order Attribute Usage</div>
                                <div>Order Attribute Usage</div>
                                <div>Order Attribute Usage</div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center gap-[10px] mt-[20px]'>
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

                        <div className='flex flex-col items-center mr-[30px]'>
                            <div>
                                Attributes in Collection
                            </div>
                            <div className='w-full border-[1px] border-[#707070] p-[10px]'>
                                <div>Attribute</div>
                                <div>Attribute</div>
                                <div>Attribute</div>
                                <div>Attribute</div>
                                <div>Attribute</div>
                                <div>Attribute</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttributeGroup;