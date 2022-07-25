import { useMutation, useQuery } from '@apollo/client';
import clsx from 'clsx';
import React, { useState } from 'react' ;
import { useEffect } from 'react';
import { Create_Template, Delete_Create_Template, GET_COLLECTIONADD } from '../../api/hasura_gql';
import AdminSideBar from '../AdminSideBar';

const classes = {
    rootDiv : 'bg-[#1F1F1F] w-[100vw] text-[#CECCCC]'
}
const CollectionCreate = () => {

    const { loading, error, data} = useQuery(GET_COLLECTIONADD);
    const [ createTemplateMutation ] = useMutation(Create_Template)
    const [ deleteCreateTemplateMutation ] = useMutation(Delete_Create_Template)

    const [ open, setOpen ] = useState(false);

    const [ chainId, setChainId ] = useState(null);
    const [ Setting, setSetting ] = useState(null);
    const [ templateName, setTemplateName ] = useState(null);
    const [ headerDescription, setHeaderDescription ] = useState(null);
    const [ buyerFeePoints, setBuyerFeePoints ] = useState(null);
    const [ sellerFeePoints, setSellerFeePoints ] = useState(null);
    const [ sellerFeeFlat, setSellerFeeFlat ] = useState(null);
    const [ feeCap, setFeeCap ] = useState(false);
    const [ sellerFeeCap, setSellerFeeCap ] = useState(null);
    const [ devBuyerFee, setDevBuyerFee ] = useState(null);
    const [ devSellerFee, setDevSellerFee ] = useState(null);
    const [ collectionTotal, setCollectionTotal ] = useState(null);
    const [ collectionComplete, setCollectionComplete ] = useState(false);
    const [ collectionEstOn, setCollectionEstOn ] = useState(false);
    const [ collectionRarityOn, setCollectionRarityOn ] = useState(false);
    const [ attributePlusInclude, setAttributePlusInclude ] = useState(false);
    const [ collectionVerified, setCollectionVerified ] = useState(false);
    const [ collectionDescriptionMuilti, setCollectionDescriptionMuilti ] = useState(false);
    const [ tokenCountWithoutAttribute, setTokenCountWithoutAttribute ] = useState(null);
    const [ priceRefreshRate, setPriceRefreshRate ] = useState(null);
    const [ collectionRefreshRate, setCollectionRefreshRate ] = useState(null);
    const [ salesRefreshRate, setRefreshRate ] = useState(null);
    const [ category, setCategory ] = useState(null);
    
    const [ categoryNameArray, setCategoryNameArray ] = useState('');
    const [ chainIdArray, setChainIdArray ] = useState('');
    const [ templateData, setTemplateData ] = useState('');

    const [ autoLoad, setAutoLoad ] = useState(false);

    const handleChange = (e, type) => {
        let value = e.target.value;

        switch(type) {
            case "TemplateName" : 
                setTemplateName(value);
                break;
            case "ChainId" : 
                setChainId(value);
                break;
            case "DefaultSetting" : 
                setTemplateName(value);
                break;
            case "BlackbookHeaderDescription" : 
                setHeaderDescription(value);
                break;
            case "Blackbookbuyerfeebasispoints" : 
                setBuyerFeePoints(value);
                break;
            case "Blackbooksellerfeebasispoints" : 
                setSellerFeePoints(value);
                break;
            case "Blackbooksellerfeeflat" : 
                setSellerFeeFlat(value);
                break;
            case "Blackbookfeecap" : 
                setFeeCap(!feeCap);
                break;
            case "Blackbooksellerfeecap" : 
                setSellerFeeCap(value);
                break;
            case "Blackbookdevbuyerbasisfee" : 
                setDevBuyerFee(value);
                break;
            case "Blackbookdevsellerbasisfee" : 
                setDevSellerFee(value);
                break;
            case "Collectiontotal" : 
                setCollectionTotal(value);
                break;
            case "Collectioncomplete" : 
                setCollectionComplete(!collectionComplete);
                break;
            case "Collectionestimateon" : 
                setCollectionEstOn(!collectionEstOn);
                break;
            case "Collectionrarityon" : 
                setCollectionRarityOn(!collectionRarityOn);
                break;
            case "Attributeplusinclude" : 
                setAttributePlusInclude(!attributePlusInclude);
                break;
            case "CollectionVerified" : 
                setCollectionVerified(!collectionVerified);
                break;
            case "CollectionDescriptionMuilti" : 
                setCollectionDescriptionMuilti(!collectionDescriptionMuilti);
                break;
            case "TokenCountwithoutattribute" : 
                setTokenCountWithoutAttribute(value);
                break;
            case "Pricerefreshrate" : 
                setPriceRefreshRate(value);
                break;
            case "Collectionrefreshrate" : 
                setCollectionRefreshRate(value);
                break;
            case "Salesrefreshrate" : 
                setRefreshRate(value);
                break;
            case "Category" : 
                setCategory(value);
                break;

            case "AutoLoad" :
                setAutoLoad(!autoLoad);
                break;
            default :
                break;
        }
    }

    const handleSaveClick = () => {
        createTemplateMutation({
            variables : {
                templateName : templateName,
                headerDescription : headerDescription,
                buyerFeePoints : buyerFeePoints,
                sellerFeePoints : sellerFeePoints,
                sellerFeeFlat : sellerFeeFlat,
                feeCap : feeCap,
                sellerFeeCap : sellerFeeCap,
                devBuyerFee : devBuyerFee,
                devSellerFee : devSellerFee,
                collectionTotal : collectionTotal,
                collectionComplete : collectionComplete,
                collectionEstOn : collectionEstOn,
                collectionRarityOn : collectionRarityOn,
                collectionVerified : collectionVerified,
                collectionDescriptionMuilti : collectionDescriptionMuilti,
                tokenCountWithoutAttribute : tokenCountWithoutAttribute,
                attributePlusInclude : attributePlusInclude,
                priceRefreshRate : priceRefreshRate,
                collectionRefreshRate : collectionRefreshRate,
                salesRefreshRate : salesRefreshRate,
                category : category
            }
        })
    }

    const handleDeleteClick = () => {
        deleteCreateTemplateMutation({
            variables : {
                category : category
            }
        })
    }

    useEffect(() => {
        if(data) {
            data.collect_category.map((element, index) => {
                setCategoryNameArray(categoryNameArray => [...categoryNameArray, element.category_name])
                if(index === 0){
                    setCategory(element.category_name)
                }
            })
            data.chain.map((element, index) => {
                setChainIdArray(chainIdArray => [...chainIdArray, element.chain_id])
            })
        }
    }, [data])

    useEffect(() => {
        if(templateName) {
            data.create_template.map((element, index) => {
                if(element.create_template_name === templateName)
                    setTemplateData(element);
            })
        }
        console.log(templateData.collection_category)
    }, [templateName])

    return(
        <div className={classes.rootDiv}>
            <div className='grid grid-cols-4'>
                <AdminSideBar open={open} setOpen={setOpen}/>
                <div className='col-span-3 max-sm:col-span-4 p-[30px] pr-[200px] max-lg:pr-[30px] '>
                    <div className='grid grid-cols-2 gap-[20px]'>
                        <div className="max-xs:col-span-2 space-y-3">
                            <div>Load New Collection</div>
                            <div className='col-span-2'>
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
                                    onChange={(e) => handleChange(e,"loadTime")}
                                    value="Contract"
                                />
                            </div>
                            <div className='col-span-2'>
                                <select className="form-select form-select-sm
                                    appearance-none
                                    block
                                    w-full
                                    px-2
                                    py-2
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
                                    onChange={(e) => handleChange(e, "ChainID")}
                                >
                                <option defaultValue="Chain Id"> Chain Id </option>
                                {
                                    chainIdArray && chainIdArray.map((element, index) => {
                                        return(
                                            <option value={element} key={index}> {element} </option>
                                        );
                                    })
                                }
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-[10px] mt-[30px] space-y-3'>
                        <div className='col-span-2'>
                            Default Setting
                        </div>
                        <div className='max-xs:col-span-2'>
                            <select className="form-select form-select-sm
                                appearance-none
                                block
                                w-full
                                px-2
                                py-2
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
                                onChange={(e) => handleChange(e, "DefaultSetting")}
                                >
                                <option defaultValue> Load Collection Template </option>
                                {
                                    data && data.create_template.map((element, index) => {
                                        return(
                                            <option value={element.create_template_name} key={index}> {element.create_template_name} </option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className="max-xs:col-span-2 flex space-x-2 justify-center">
                            <button type="button" className="inline-block px-6 py-2.5 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleSaveClick}>Save</button>
                            <button type="button" className="ml-[50px] inline-block px-6 py-2.5 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleDeleteClick}>Delete</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-[10px] mt-[20px]'>
                        <div>
                            Template Name
                        </div>
                        <div>
                            <input
                                rows={5}
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
                                onChange={(e) => handleChange(e, "TemplateName")}
                                value={templateName}
                            />
                        </div>
                        <div>
                            Blackbook Header Description
                        </div>
                        <div>
                            <textarea
                                rows={5}
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
                                onChange={(e) => handleChange(e, "BlackbookHeaderDescription")}
                                value={templateData && templateData.blackbook_header_description}
                            />
                        </div>
                        <div>
                            Blackbook buyer fee basis points
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
                                onChange={(e) => handleChange(e,"Blackbookbuyerfeebasispoints")}
                                value={templateData && templateData.blackbook_buyer_fee_basis_points}
                            />
                        </div>
                        <div>
                            Blackbook seller fee basis points
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
                                onChange={(e) => handleChange(e,"Blackbooksellerfeebasispoints")}
                                value={templateData && templateData.blackbook_seller_fee_basis_points}
                            />
                        </div>
                        <div>
                            Blackbook seller fee flat
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
                                onChange={(e) => handleChange(e,"Blackbooksellerfeeflat")}
                                value={templateData && templateData.blackbook_seller_fee_flat}
                            />
                        </div>
                        <div>
                            Blackbook fee cap
                        </div>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" onChange={(e) => handleChange(e, "Blackbookfeecap")} value={templateData && templateData.blackbook_fee_cap}/>
                            <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                Select
                            </label>
                        </div>
                        <div>
                            Blackbook seller fee cap
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
                                onChange={(e) => handleChange(e,"Blackbooksellerfeecap")}
                                value={templateData && templateData.blackbook_seller_fee_cap}
                            />
                        </div>
                        <div>
                            Blackbook dev buyer basis fee
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
                                onChange={(e) => handleChange(e,"Blackbookdevbuyerbasisfee")}
                                value={templateData && templateData.blackbook_dev_buyer_basis_fee}
                            />
                        </div>
                        <div>
                            Blackbook dev seller basis fee
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
                                onChange={(e) => handleChange(e,"Blackbookdevsellerbasisfee")}
                                value={templateData && templateData.blackbook_dev_seller_basis_fee}
                            />
                        </div>
                        <div>
                            Collection total
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
                                onChange={(e) => handleChange(e,"Collectiontotal")}
                                value={templateData && templateData.collection_total}
                            />
                        </div>
                        <div>
                            Collection complete
                        </div>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" onChange={(e) => handleChange(e, "Collectioncomplete")} checked={templateData && templateData.collection_complete}/>
                            <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                Select
                            </label>
                        </div>
                        <div>
                            Collection estimate on
                        </div>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  onChange={(e) => handleChange(e, "Collectionestimateon")} checked={templateData && templateData.collection_est_on}/>
                            <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                Select
                            </label>
                        </div>
                        <div>
                            Collection rarity on
                        </div>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" onChange={(e) => handleChange(e, "Collectionrarityon")}  checked={templateData && templateData.collection_rarity_on}/>
                            <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                Select
                            </label>
                        </div>
                        <div>
                            Attribute plus include
                        </div>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" onChange={(e) => handleChange(e, "Attributeplusinclude")}  checked={templateData && templateData.attribute_plus_include}/>
                            <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                Select
                            </label>
                        </div>
                        <div>
                            Collection Verified
                        </div>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" checked={templateData && templateData.collection_verified} onChange={(e) => handleChange(e, "CollectionVerified")}/>
                            <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                Select
                            </label>
                        </div>
                        <div>
                            Collection Description Muilti
                        </div>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" checked={templateData && templateData.collection_description_muilti} onChange={(e) => handleChange(e, "CollectionDescriptionMuilti")}/>
                            <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                Select
                            </label>
                        </div>
                        <div>
                            Token Count without attribute
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
                                onChange={(e) => handleChange(e,"TokenCountwithoutattribute")}
                                value={templateData && templateData.token_count_without_attribute}
                            />
                        </div>
                        <div>
                            Price refresh rate
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
                                onChange={(e) => handleChange(e,"Pricerefreshrate")}
                                value={templateData && templateData.price_refresh_rate}
                            />
                        </div>
                        <div>
                            Collection refresh rate
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
                                onChange={(e) => handleChange(e,"Collectionrefreshrate")}
                                value={templateData && templateData.collection_refresh_rate}
                            />
                        </div>
                        <div>
                            Sales refresh rate
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
                                onChange={(e) => handleChange(e,"Salesrefreshrate")}
                                value={templateData && templateData.sales_refresh_rate}
                            />
                        </div>
                    </div>
                    
                    <div className='grid grid-cols-2 gap-[10px] mt-[20px]'>
                        <div className='col-span-2'>
                            <select className="form-select form-select-sm
                                appearance-none
                                block
                                w-[250px]
                                px-2
                                py-2
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
                                onChange={(e) => handleChange(e, "Category")}
                                value={templateData && templateData.collection_category}
                                >
                                    <option defaultValue={"Collection Category"}> Collection Category </option>
                                {
                                    categoryNameArray && categoryNameArray.map((element, index) => {
                                        return(
                                            <option key={index} value={element}> {element} </option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className='flex space-x-3'>
                            <div>
                                Covalent
                            </div>
                            <div className="form-check form-switch mb-7">
                                <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left border border-[#707070] h-5 align-top  bg-no-repeat bg-contain focus:bg-[#1F1F1F]  focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" />
                            </div>
                            <div>
                                Moralis
                            </div>
                        </div>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "AutoLoad")}/>
                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                            Auto Load Primary Attribute
                        </label>
                    </div>

                    <div className={clsx("px-[30px] py-[10px]", !autoLoad && "opacity-50")}>
                        <div className='border-[1px] border-[#707070] p-[20px] pr-[200px] max-lg:pr-[50px] space-y-3'>
                            <div className='mb-5'>
                                Auto Load Primary Attribute Trait
                            </div>
                            <div className='flex items-center max-xs:block space-y-3'>
                                <div>
                                    <div className="form-check w-[200px]">
                                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" disabled={!autoLoad} onChange={(e) => handleChange(e, "AutoLoaddPrimary")}/>
                                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                            Primary Attribute Name
                                        </label>
                                    </div>
                                </div>
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
                                    disabled={!autoLoad}
                                />
                            </div>
                            
                            <div className="form-check w-full">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" disabled={!autoLoad} onChange={(e) => handleChange(e, "AutoLoaddPrimary")}/>
                                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                    Auto Name Project with Contract Name
                                </label>
                            </div>

                            <div className='flex items-center max-xs:block space-y-3'>
                                <div>
                                    <div className="form-check w-[200px]">
                                        <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" disabled={!autoLoad} onChange={(e) => handleChange(e, "AutoLoaddPrimary")}/>
                                        <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                            Project Name
                                        </label>
                                    </div>
                                </div>
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
                                    disabled={!autoLoad}
                                />
                            </div>

                            <div className="flex form-check w-full">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" disabled={!autoLoad} onChange={(e) => handleChange(e, "AutoLoaddPrimary")}/>
                                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                    Auto Add All Attributes from Contract to Project_Attribute
                                </label>
                            </div>

                        </div>
                    </div>
                    
                    <div className='grid grid-cols-2 gap-[10px] items-center max-lg:pr-[30px]'>
                        <div className='max-xs:col-span-2'>
                            <div className="form-check w-[300px]">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "AutoLoaddPrimary")}/>
                                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                    Add Trait Type to all Attributes
                                </label>
                            </div>
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
                    <div className="flex space-x-2 justify-center mt-[50px]">
                        <button type="button" className="inline-block px-6 py-2.5 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
                            Load Contract
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionCreate;