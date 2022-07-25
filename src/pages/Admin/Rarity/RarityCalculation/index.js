import React, { useState, useEffect } from "react";

import clsx from "clsx";
import { useMutation, useQuery } from "@apollo/client";
import { Create_RarityCalculation, Update_RarityCalc, Update_RarityCalcOrder } from "src/pages/api/hasura_gql";

const classes = {
    items : "flex justify-between hover:cursor-pointer active:bg-[#CECCCC] active:bg-opacity-20 px-[10px] pt-[5px]",
    selectItem : "bg-[#CECCCC] bg-opacity-20",
    orderButton : 'border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center hover:cursor-pointer'
}


const RarityCalculation = (props) => {

    const {
        data
    } = props;


    const [ CreateRarityCalculationMutation ] = useMutation(Create_RarityCalculation);
    // const [ UpdateRarityCalcMutation ] = useMutation(Update_RarityCalc);
    const [ UpdateRarityCalcOrderMutation ] = useMutation(Update_RarityCalcOrder);

    const [calcData, setCalcData] = useState('');
    const [calcSelectData, setCalcSelectData] = useState('');

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [normalization, setNormalization] = useState(false);
    const [weightedRarity, setWeightedRarity] = useState(false);
    const [groupRarity, setGroupRarity] = useState(false);
    const [addGroup, setAddGroup] = useState(false);
    const [calculation, setCalculation] = useState(null);

    const [currentCalcId, setCurrentCalcId] = useState(null);
    const [currentCalcOrder, setCurrentCalcOrder] = useState(null);
    const [sortType, setSortType] = useState(false);
    const [calcCount, setCalcCount] = useState(null);

    const handleSelectItem = (element) => {
        setCurrentCalcId(element.id);
        setCurrentCalcOrder(element.rarity_calc_order);
        setCalcSelectData(element);
        setSortType(false);
    }

    const handleChange = (e, type) => {
        switch(type) {
            case "Name" :
                setName(e.target.value);
                break;
            case "Description" :
                setDescription(e.target.value);
                break;
            case "Normalization" :
                setNormalization(!normalization);
                break;
            case "WeightedRarity" :
                setWeightedRarity(!weightedRarity);
                break;
            case "GroupRarity" :
                setGroupRarity(!groupRarity);
                break;
            case "AddGroup" :
                setAddGroup(!addGroup);
                break;
            case "RarityCalculation" :
                setCalculation(e.target.value);
                break;
            default :
                break;
        }
        // UpdateRarityCalcMutation({
        //     variables : {
        //         id : currentCalcId,
        //         rarity_calc_name : name,
        //         rarity_calc_desc : description,
        //         normalization : normalization,
        //         weighted_rarity : weightedRarity,
        //         group_rarity : groupRarity,
        //         add_group : addGroup,
        //         rarity_calculation : calculation,
        //     }
        // })
    }

    const handleItemUp = () => {
        if(currentCalcOrder === 1) return;

        const newArr = calcData.map(object => {
            if(object.rarity_calc_order === currentCalcOrder){
                return{ ...object, rarity_calc_order : object.rarity_calc_order - 1};
            }
            if(object.rarity_calc_order === currentCalcOrder - 1){
                return{ ...object, rarity_calc_order : object.rarity_calc_order + 1};
            }
            return object;
        });
        
        UpdateRarityCalcOrderMutation({
            variables : {
                id : calcSelectData.id,
                order : calcSelectData.rarity_calc_order - 1
            }
        })
        
        newArr.map((element) => {
            if(element.rarity_calc_order === calcSelectData.rarity_calc_order){
                console.log(element, calcSelectData);
                UpdateRarityCalcOrderMutation({
                    variables : {
                        id : element.id,
                        order : element.rarity_calc_order
                    }
                })
            }
        })

        setCurrentCalcOrder(currentCalcOrder - 1);

        setCalcData(newArr);
    }

    const handleItemDown = () => {
        if(currentCalcOrder === calcCount) return;

        const newArr = calcData.map(object => {
            if(object.rarity_calc_order === currentCalcOrder){
                return{ ...object, rarity_calc_order : object.rarity_calc_order + 1};
            }
            if(object.rarity_calc_order === currentCalcOrder + 1){
                return{ ...object, rarity_calc_order : object.rarity_calc_order - 1};
            }
            return object;
        });
        
        UpdateRarityCalcOrderMutation({
            variables : {
                id : calcSelectData.id,
                order : calcSelectData.rarity_calc_order - 1
            }
        })
        
        newArr.map((element) => {
            if(element.rarity_calc_order === calcSelectData.rarity_calc_order){
                console.log(element);
                UpdateRarityCalcOrderMutation({
                    variables : {
                        id : element.id,
                        order : element.rarity_calc_order
                    }
                })
            }
        })

        setCurrentCalcOrder(currentCalcOrder - 1);

        setCalcData(newArr);
        
    }

    const handleSubmit = () => {
        CreateRarityCalculationMutation({
            variables : {
                rarity_calc_name : name,
                rarity_calc_desc : description,
                order : calcCount + 1,
                normalization : normalization,
                weighted_rarity : weightedRarity,
                group_rarity : groupRarity,
                add_group : addGroup,
                rarity_calculation : calculation,
            }
        })
    }


    useEffect(() => {
        if(data){
                data.rarity_calc.map((element, index) => {
                    setCalcData(calcData => [...calcData, element])
                })
            setCalcCount(data.rarity_calc.length);
        }
    }, [data])

    useEffect(() => {
        if(calcSelectData){
            setName(calcSelectData.rarity_calc_name);
            setDescription(calcSelectData.rarity_calc_desc);
            setNormalization(calcSelectData.normalization);
            setWeightedRarity(calcSelectData.weighted_rarity);
            setGroupRarity(calcSelectData.group_rarity);
            setAddGroup(calcSelectData.add_group);
            setCalculation(calcSelectData.rarity_calculation);
        }
    }, [calcSelectData])

    return(
        
            <div className="border-[1px] border-[#707070] p-[20px] mt-[20px]">
                <div className="grid grid-cols-4 gap-10 mt-[20px]">
                    <div className="col-span-3">
                        <div className="grid grid-cols-3 gap-4 ">
                            <div>
                                Name
                            </div>
                            <div className="col-span-2">
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
                                Description
                            </div>
                            <div className="col-span-2">
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
                            <div className=" max-xs:col-span-2">
                                Normalization
                            </div>
                            <div className="col-span-2 max-xs:col-span-1 flex form-check">
                                <div>
                                    <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer mt-1 mr-2 " type="checkbox" onChange={(e) => handleChange(e, "Normalization")} checked={normalization}/>
                                </div>
                                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                    Selected
                                </label>
                            </div>
                            <div className=" max-xs:col-span-2">
                                Weighted Rarity
                            </div>
                            <div className="col-span-2 max-xs:col-span-1 flex form-check">
                                <div>
                                    <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer mt-1 mr-2 " type="checkbox" onChange={(e) => handleChange(e, "WeightedRarity")} checked={weightedRarity}/>
                                </div>
                                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                    Selected
                                </label>
                            </div>
                            <div className=" max-xs:col-span-2">
                                Group Rarity
                            </div>
                            <div className="col-span-2 max-xs:col-span-1 flex form-check">
                                <div>
                                    <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer mt-1 mr-2 " type="checkbox" onChange={(e) => handleChange(e, "GroupRarity")} checked={groupRarity}/>
                                </div>
                                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                    Selected
                                </label>
                            </div>
                            <div className=" max-xs:col-span-2">
                                Add Group
                            </div>
                            <div className="col-span-2 max-xs:col-span-1 flex form-check">
                                <div>
                                    <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer mt-1 mr-2 " type="checkbox" onChange={(e) => handleChange(e, "AddGroup")} checked={addGroup}/>
                                </div>
                                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                    Selected
                                </label>
                            </div>
                            <div className=" max-xs:col-span-2">
                                Rarity Calculation
                            </div>
                            <div className="col-span-2 max-xs:col-span-1">
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
                                    onChange={(e) => handleChange(e, "RarityCalculation")}
                                    value={calculation}
                                />
                            </div>
                            <div>
                                <button type="button" className="inline-block h-[30px] px-6 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleSubmit}>ADD</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <div className='flex flex-col justify-center gap-[10px] mr-[10px]'>
                                <div className={classes.orderButton} onClick={handleItemUp} >
                                    <i className="fas fa-angle-up text-[#5CA4E2]"></i>
                                </div>
                                <div className={classes.orderButton} onClick={handleItemDown}>
                                    <i className="fas fa-angle-down text-[#5CA4E2]"></i>
                                </div>
                            </div>
                            <div className="w-[150px] h-[150px] border-[1px] border-[#707070]">
                                {
                                    calcData && calcData.map((element, index) => {
                                        for(let temp of calcData){
                                            if(temp.rarity_calc_order === index + 1){
                                                return(
                                                    <div className={clsx(classes.items, currentCalcId === temp.id && classes.selectItem)} onClick={() => handleSelectItem(temp)}>
                                                        <div>
                                                            {temp.rarity_calc_order}
                                                        </div>
                                                        <div>
                                                            {temp.rarity_calc_name}
                                                        </div>
                                                        <div>
                                                            X
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
    )
}

export default RarityCalculation;