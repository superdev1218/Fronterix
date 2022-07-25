import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { Create_Attribute, Create_TraitValue, Delete_Attribute, Delete_TraitValue, GET_TRAITVALUE, Update_TraitValue } from "src/pages/api/hasura_gql";

import clsx from "clsx";
import { Alert } from 'react-alert'

const classes = {
    item : "grid grid-cols-5 items-center text-center space-x-[8px] hover:cursor-pointer",
    item1 : "flex items-center text-center space-x-[8px] hover:cursor-pointer",
    selectItem : "bg-[#CECCCC] bg-opacity-20",
    orderButton : 'border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center hover:cursor-pointer'
}

const AddAttribute = (props) =>{

    const {
        Att_data,
        handleChange,
        primaryAttribute,
        rarityInclude,
        attributeName,
        addTraitValueName,
    } = props;


    const {loading, error, data} = useQuery(GET_TRAITVALUE);
    
    const [CreateAttributeMutation] = useMutation(Create_Attribute);
    const [CreateTraitValueMutation] = useMutation(Create_TraitValue);
    const [UpdateTraitValueMutation] = useMutation(Update_TraitValue);
    const [DeleteAttributeMutation] = useMutation(Delete_Attribute);
    const [DeleteTraitValueMutation] = useMutation(Delete_TraitValue);

    const [attributeId, setAttributeId] = useState(null);
    const [traitId, setTraitId] = useState('');

    const [traitValuePlus, setTraitValuePlus] = useState(false);
    const [traitValueName, setTraitValueName] = useState(null);
    const [currentOrder, setCurrentOrder] = useState('');
    const [traitTemp, setTraitTemp] = useState('');
    const [traitValueData, setTraitValueData] = useState('');
    const [selectId, setSelectId] = useState('');
    const [newAttribute, setNewAttribute] = useState(false);
    const [traitValueLength, setTraitValueLength] = useState(0);
    const [lastOrder, setLastOrder] = useState(null);

    const handleSelectAttribute = (element) => {
        setAttributeId(element.id);
    }

    const handleSelectTrait = (element, index) => {
        setCurrentOrder(element.order);
        setSelectId(index);
        setTraitValueName(element.trait_value_name)
    }
    
    const handleSubmit = (type) => {
        if(type === "Attribute"){
            CreateAttributeMutation({
                variables : {
                    primaryAttribute : primaryAttribute,
                    rarityInclude : rarityInclude,
                    name : attributeName
                }
            })
        }
        if(type === "Trait"){
            if(attributeId){
                console.log(traitValueLength);
                CreateTraitValueMutation({
                    variables : {
                        name : addTraitValueName,
                        attributeId : attributeId,
                        order : traitValueLength + 1,
                    }
                })
            }
            else{
                alert("Please assest attribute_name");
            }
        }
    }

    const handleItemUp = () => {
        if(currentOrder === 1) return;
        const newArr = traitValueData.map(object => {
            if(object.order === currentOrder) {
                return{  ...object, order : object.order - 1};
            }
            if(object.order === currentOrder - 1) {
                return{  ...object, order : object.order + 1};
            }
            return object;
        });
        newArr.map((element, index) => {
            UpdateTraitValueMutation({
                variables : {
                    id : traitId[index],
                    order : element.order
                }
            })
        })
        setTraitValueData(newArr);
        setCurrentOrder(currentOrder - 1);
    }
    
    const handleItemDown = () => {
        if(currentOrder === traitValueData.length) return;
        const newArr = traitValueData.map(object => {
            if(object.order === currentOrder) {
                return{  ...object, order : object.order + 1};
            }
            if(object.order === currentOrder + 1) {
                return{  ...object, order : object.order - 1};
            }
            return object;
        });
        newArr.map((element, index) => {
            UpdateTraitValueMutation({
                variables : {
                    id : traitId[index],
                    order : element.order
                }
            })
        })

        setTraitValueData(newArr);
        setCurrentOrder(currentOrder + 1);
    }

    const handleDeleteItem = (type, value) => {
        if(type === "Attribute"){
            DeleteAttributeMutation({
                variables : {
                    attributeId : value
                }
            })
        }
        if(type === "TraitValue"){
            traitValueData.map((element, index) => {
                if(index > selectId)
                    UpdateTraitValueMutation({
                        variables : {
                            id : traitId[index],
                            order : element.order - 1
                        }
                    })
            })
            DeleteTraitValueMutation({
                variables : {
                    traitValueId : value
                }
            })
        }
    } 

    useEffect(() => {
        if(data && attributeId){
            setTraitTemp('');
            setTraitValueData('');
            setNewAttribute(!newAttribute);
            let temp = 0;
            data.trait_value.map((element, index) => {
                if(element.attribute_id === attributeId){
                    temp++;
                }
            })
            setTraitValueLength(temp);
        }
    }, [attributeId])

    useEffect(() => {
        if(attributeId && newAttribute !== ''){
            data.trait_value.map((element, index) => {
                if(element.attribute_id === attributeId)
                    setTraitTemp(traitTemp => [...traitTemp, element]);
            })
        }
    }, [newAttribute])

    useEffect(() => {
        if(traitTemp !== ''){
            traitTemp.map((element, index) => {
                for(let traitData of traitTemp){
                    if(traitData.order === index + 1){
                        setTraitValueData(traitValueData => [...traitValueData, element]);
                        setTraitId(traitId => [...traitId, element.id]);
                    }
                }
            })
        }
    }, [traitTemp])

    useEffect(() => {
    }, [traitValueData])

    return(
        <>
            <div className='text-[24px] font-semibold'>
                Add/Delete Attributes/Traits Pairs & Order
            </div>
            <div className='border-[1px] border-[#707070] space-y-1 p-[10px] mt-[20px]'>
                <div className='grid grid-cols-2 gap-4 mt-[20px] space-y-3'>
                    <div className="max-lg:col-span-2 space-y-5">
                        <div className='flex justify-center items-end'>
                            <div className="flex-col items-center w-[30px]">
                                <div className='flex justify-center'>
                                    <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                        P
                                    </label>
                                </div>
                                <div className='flex justify-center'>
                                    <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer" type="checkbox" checked={primaryAttribute}  onChange={(e) => handleChange(e, "PrimaryAttribute")}/>
                                </div>
                            </div>
                            <div className="flex-col items-center w-[30px]">
                                <div className='flex justify-center'>
                                    <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                        R
                                    </label>
                                </div>
                                <div className='flex justify-center'>
                                    <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer" type="checkbox" checked={rarityInclude} onChange={(e) => handleChange(e, "RarityInclude")}/>
                                </div>
                            </div>
                            <input
                                type="text"
                                className="
                                    form-control
                                    block
                                    w-[150px]
                                    px-3
                                    py-1
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
                                onChange={(e) => handleChange(e, "AttributeName")}
                                value={attributeName}
                            />
                            <button type="button" className="inline-block h-[30px] px-4 ml-2 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => handleSubmit("Attribute")}>ADD</button>
                        </div>
                        <div className='w-[400px] max-xs:w-[300px] ml-auto mr-auto'>
                            <div className='grid grid-cols-5 ml-[8px] text-center'>
                                <div className="max-xs:col-span-5 flex justify-around">
                                    <div> P </div>
                                    <div> R </div>
                                    <div> A </div>
                                </div>
                                <div className="col-span-4 max-xs:col-span-5">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            Order
                                        </div>
                                        <div>
                                            Attribute
                                        </div>
                                        <div>
                                            Usage
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[150px] border-[1px] border-[#707070] p-[5px]'>
                                <div className='space-y-[5px]'>
                                    {
                                        Att_data && Att_data.attribute.map((element, index) => {
                                            return(
                                                <div key={index} className={clsx(classes.item, attributeId === element.id && classes.selectItem)} onClick={() => handleSelectAttribute(element)}>
                                                    <div className="flex justify-around">
                                                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer" type="checkbox" checked={element.primary_attribute} onClick={handleChange}/>
                                                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer" type="checkbox" checked={element.attribute_rarity_include}/>
                                                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer" type="checkbox" checked={element.attribute_plus}/>
                                                    </div>
                                                    <div>
                                                        {element.order}
                                                    </div>
                                                    <div className="overflow-hidden whitespace-nowrap">
                                                        {element.attribute_name}
                                                    </div>
                                                    <div>
                                                        Usage
                                                    </div>
                                                    <div onClick={() => handleDeleteItem("Attribute", element.id)}>
                                                        X
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-lg:col-span-2 space-y-5">
                        <div className='flex justify-center items-end'>
                            <input
                                type="text"
                                className="
                                    form-control
                                    block
                                    w-[150px]
                                    px-3
                                    py-1
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
                                value={addTraitValueName}
                                onChange={(e) => handleChange(e, "TraitValueName")}
                            />
                            <button type="button" className="inline-block h-[30px] px-4 ml-2 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => handleSubmit("Trait")}>ADD</button>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex flex-col justify-center gap-[10px] mr-[20px]'>
                                <div className={classes.orderButton} onClick={handleItemUp} >
                                    <i className="fas fa-angle-up text-[#5CA4E2]"></i>
                                </div>
                                <div className={classes.orderButton} onClick={handleItemDown}>
                                    <i className="fas fa-angle-down text-[#5CA4E2]"></i>
                                </div>
                            </div>
                            <div>
                                
                                <div className='flex ml-[8px] w-[250px]'>
                                    <div className="w-[20px]"> A </div>
                                    <div className="grid grid-cols-4 text-center">
                                        <div>
                                            Order
                                        </div>
                                        <div>
                                            Attribute
                                        </div>
                                        <div>
                                            Usage
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[150px] border-[1px] border-[#707070] p-[5px]'>
                                    <div className='space-y-[5px]'>
                                        {
                                            traitValueData && traitValueData.map((element, index) => {
                                                for(let traitData of traitValueData){
                                                    if(traitData.order === index + 1){
                                                        return(
                                                            <div className={clsx(classes.item1, traitValueName === traitData.trait_value_name && classes.selectItem)} onClick={() => handleSelectTrait(traitData, index)}>
                                                                <div className='w-[20px] flex items-center'>
                                                                    <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer" type="checkbox" checked={traitValuePlus} />
                                                                </div>
                                                                <div className="grid grid-cols-4 text-center w-[320px]">
                                                                    <div>
                                                                        {traitData.order}
                                                                    </div>
                                                                    <div className="overflow-hidden whitespace-nowrap">
                                                                        {traitData.trait_value_name}
                                                                    </div>
                                                                    <div>
                                                                        Usage
                                                                    </div>
                                                                    <div onClick={() => handleDeleteItem("TraitValue", element.id)}>
                                                                        X
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='max-lg:col-span-2 ml-auto mr-auto'>
                        <div>
                            P- Primary Attribute (Only One)
                        </div>
                        <div>
                            R- Include in Rarity
                        </div>
                        <div>
                            A- Admin Added
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAttribute;