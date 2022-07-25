import React, { useState, useEffect } from "react";

import clsx from "clsx";
import { useMutation, useQuery } from "@apollo/client";
import { GET_RARITYOPTION, Update_RarityCalc, Update_RarityCalcOrder, Update_RarityOption } from "src/pages/api/hasura_gql";

const classes = {
    items : "flex justify-between hover:cursor-pointer active:bg-[#CECCCC] active:bg-opacity-20 px-[10px] pt-[5px]",
    selectItem : "bg-[#CECCCC] bg-opacity-20",
    orderButton : 'border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center hover:cursor-pointer'
}


const RarityOptionEdit = (props) => {

    const {
        calcData
    } = props;

    const { loading, error, data } = useQuery(GET_RARITYOPTION);

    const [ UpdateRarityOptionMutation ] = useMutation(Update_RarityOption);

    const [optionData, setOptionData] = useState('');
    const [selectOptionData, setSelectOptionData] = useState('');

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [calcName, setCalcName] = useState(null);
    const [maxScore, setMaxScore] = useState(null);
    const [minScore, setMinScore] = useState(null);
    const [rarityDefault, setRarityDefault] = useState(false);
    const [visible, setVisible] = useState(false);

    const [calcId, setCalcId] = useState(null);
    const [currentOptionId, setCurrentOptionId] = useState(null);
    const [currentOptionOrder, setCurrentOptionOrder] = useState(null);
    const [sortType, setSortType] = useState(false);

    const handleSelectItem = (element) => {
        setCurrentOptionId(element.id);
        setCurrentOptionOrder(element.rarity_option_order);
        setSelectOptionData(element);
    }

    const handleChange = (e, type) => {
        switch(type) {
            case "Name" :
                setName(e.target.value);
                break;
            case "CalcName" :
                setCalcName(e.target.value);
                break;
            case "Description" :
                setDescription(e.target.value);
                break;
            case "MaxScore" :
                setMaxScore(e.target.value);
                break;
            case "MinScore" :
                setMinScore(e.target.value);
                break;
            case "RarityDefault" :
                setRarityDefault(!rarityDefault);
                break;
            case "Visible" :
                setVisible(!visible);
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
    }
    

    const handleItemDown = () => {
    }

    const handleSubmit = () => {
        UpdateRarityOptionMutation({
            variables : {
                id : selectOptionData.id,
                rarity_option_name : name,
                description : description,
                attribute_max_score : maxScore,
                attribute_min_score : minScore,
                visible : visible,
                rarity_default : rarityDefault,
            }
        })
    }


    useEffect(() => {
        if(calcName){
            setOptionData('');
            calcData.rarity_calc.map((element) => {
                if(element.rarity_calc_name === calcName)
                    setCalcId(element.id)
            }) 
        }
    }, [calcName])

    useEffect(() => {
        if(calcId){
            data && data.rarity_option.map((element) => {
                if(element.rarity_calc_id === calcId){
                    setOptionData(optionData => [...optionData, element])
                }
            })
        }
    }, [calcId])

    // useEffect(() => {
    //     if(sortType){
    //         setOptionData((data) => {
    //             const dataToSort = [...data];
    //             dataToSort.sort((a, b) => Number(a.rarity_calc_order) - Number(b.rarity_calc_order));
    //             return dataToSort;
    //         });
    //     }
    // }, [sortType])
    useEffect(() => {
        if(selectOptionData){
            setName(selectOptionData.rarity_option_name);
            setDescription(selectOptionData.description);
            setMaxScore(selectOptionData.attribute_max_score);
            setMinScore(selectOptionData.attribute_min_score);
            setRarityDefault(selectOptionData.rarity_default);
            setVisible(selectOptionData.visible);
        }
    }, [selectOptionData])

    return(
            <div className="border-[1px] border-[#707070] p-[20px] mt-[20px]">
                <div>
                    RARITY OPTION
                </div>
                <div className="grid grid-cols-4 gap-10 mt-[20px]">
                    <div className="col-span-3">
                        <div className="grid grid-cols-3 gap-4 items-center">
                            <div>
                                Rarity Option Name
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
                            <select className="col-span-2 form-select form-select-sm
                                appearance-none
                                block
                                w-[300px]
                                h-[30px]
                                px-2
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
                                onChange={(e) => handleChange(e, "CalcName")}
                            >
                                <option value="" hidden selected>Rarity Calculation</option>
                                {
                                    calcData && calcData.rarity_calc.map((element) => {
                                        return(
                                            <option key={element} value={element.rarity_calc_name}> {element.rarity_calc_name} </option>
                                        )
                                    })
                                }
                            </select>
                            <div></div>
                            <div>
                                Rarity Option Description
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
                            <div>
                                Attributes Max Rarity Score
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
                                    onChange={(e) => handleChange(e, "MaxScore")}
                                    value={maxScore}
                                />
                            </div>
                            <div>
                                Attributes Min Rarity Score
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
                                    onChange={(e) => handleChange(e, "MinScore")}
                                    value={minScore}
                                />
                            </div>
                            <div>
                                Rarity Default
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer mt-1 mr-2 " type="checkbox" onChange={(e) => handleChange(e, "RarityDefault")} checked={rarityDefault}/>
                                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                    Selected
                                </label>
                            </div>
                            <div></div>
                            <div>
                                Visible
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer mt-1 mr-2 " type="checkbox" onChange={(e) => handleChange(e, "Visible")} checked={visible}/>
                                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                    Selected
                                </label>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="inline-block h-[30px] px-10 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleSubmit}>ADD</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <div className='flex flex-col justify-center gap-[10px] mr-[30px]'>
                                <div className={classes.orderButton} onClick={handleItemUp} >
                                    <i className="fas fa-angle-up text-[#5CA4E2]"></i>
                                </div>
                                <div className={classes.orderButton} onClick={handleItemDown}>
                                    <i className="fas fa-angle-down text-[#5CA4E2]"></i>
                                </div>
                            </div>
                            <div className="w-[150px] h-[150px] border-[1px] border-[#707070]">
                                {
                                    optionData && optionData.map((element, index) => {
                                            return(
                                                <div key={index} className={clsx(classes.items, currentOptionId === element.id && classes.selectItem)} onClick={() => handleSelectItem(element)}>
                                                    <div>
                                                        {element.rarity_option_order}
                                                    </div>
                                                    <div>
                                                        {element.rarity_option_name}
                                                    </div>
                                                    <div>
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
            </div>
    )
}

export default RarityOptionEdit;