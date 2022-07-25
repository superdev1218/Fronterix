import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { useState } from "react";
import { GET_TRAITVALUE, Update_TraitValueAttributeId, Update_TraitValueOrder } from "src/pages/api/hasura_gql";
import clsx from "clsx";
import { useEffect } from "react";

const classes = {
    item : "flex items-center text-center space-x-[8px] overflow-hidden whitespace-nowrap hover:cursor-pointer px-[10px]",
    traitItem : "overflow-hidden whitespace-nowrap hover:cursor-pointer",
    selectItem : "bg-[#CECCCC] bg-opacity-20",
}

const SwitchTrait = (props) => {

    const {
        Att_data
    } = props;

    const {loading, error, data} = useQuery(GET_TRAITVALUE);

    const [UpdateTraitValueAttributeId] = useMutation(Update_TraitValueAttributeId);
    const [UpdateTraitValueOrderMutation] = useMutation(Update_TraitValueOrder);

    const [attributeCurrentId, setAttributeCurrentId] = useState(null);
    const [newAttributeCurrentId, setNewAttributeCurrentId] = useState(null);
    const [traitCurrentId, setTraitCurrentId] = useState(null);
    const [lastOrder, setLastOrder] = useState(null);
    const [tempOrder, setTempOrder] = useState('');

    const handleSelectAttribute = (id) => {
        setAttributeCurrentId(id);
    }

    const handleSelectNewAttribute = (id) => {
        setNewAttributeCurrentId(id);
    }

    const handleSelectTrait = (id) => {
        setTraitCurrentId(id);
    }

    const handleSubmit = () => {
        UpdateTraitValueAttributeId({
            variables : {
                id : traitCurrentId,
                attribute_id : newAttributeCurrentId,
                order : lastOrder
            }
        })

        let temp;
        console.log(data.trait_value, traitCurrentId);
        
        data.trait_value.map((element, index) => {
            if(element.id === traitCurrentId){
                console.log(element.order);
                temp = element.order;
            }
        })

        console.log(temp);

        data && data.trait_value.map((element, index) => {
            if(element.attribute_id === attributeCurrentId && element.order > temp){
                console.log(element.order, temp);
                UpdateTraitValueOrderMutation({
                    variables : {
                        id : element.id,
                        order : element.order - 1
                    }
                })
            }
        })
    }

    useEffect(() => {
        if(newAttributeCurrentId){
            data && data.trait_value.map((element, index) => {
                if(element.attribute_id === newAttributeCurrentId){
                    setTempOrder(tempOrder => [...tempOrder, element.order]);
                }
            })
        }
    }, [newAttributeCurrentId])

    useEffect(() => {
        if(tempOrder){
            let temp = 1;
            for( let i = 0 ; i < tempOrder.length ; i++){
                if(temp <= tempOrder[i]){
                    temp = tempOrder[i] + 1
                }
            }
            setLastOrder(temp);
        }
    }, [tempOrder])

    return(
        <div className='border-[1px] border-[#707070] p-[10px] mt-[50px]'>
            <div>
                Switch Trait Attribute Link
            </div>
            <div className='grid grid-cols-3 max-xs:grid-cols-2 p-[20px] space-y-3'>
                <div className='max-xs:col-span-2 flex flex-col items-center '>
                    <div>
                        Current Attribute
                    </div>
                    <div className='w-[150px] h-[150px] border-[1px] border-[#707070]'>
                        {
                            Att_data && Att_data.attribute.map((element, index) => {
                                return(
                                    <div key={index} className={clsx(classes.item, attributeCurrentId === element.id && classes.selectItem)} onClick={() => handleSelectAttribute(element.id)}>
                                        {element.attribute_name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='h-[150px] w-[150px] border-[1px] border-[#707070] mt-[25px]'>
                        <div className=" px-[10px]">
                        {
                            data && data.trait_value.map((element, index) => {
                                if(element.attribute_id === attributeCurrentId){
                                    return(
                                        <div className={clsx(classes.traitItem, traitCurrentId === element.id && classes.selectItem)} onClick={() => handleSelectTrait(element.id)}>
                                            {element.trait_value_name}
                                        </div>
                                    )
                                }
                            })
                        }
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center '>
                    <div>
                        New Attribute
                    </div>
                    <div className='w-[150px] h-[150px] border-[1px] border-[#707070]'>
                        {
                            data && Att_data && data.attribute.map((element, index) => {
                                if(element.id !== attributeCurrentId){
                                    return(
                                        <div className={clsx(classes.item, newAttributeCurrentId === element.id && classes.selectItem)} onClick={() => handleSelectNewAttribute(element.id)}>
                                            {element.attribute_name}
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <button type="button" className="inline-block h-[30px] px-10 mr-5 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleSubmit}>MOVE</button>
            </div>
        </div>
    )
}

export default SwitchTrait;