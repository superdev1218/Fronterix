import React, { useState, useEffect } from 'react' ;

import { useMutation, useQuery } from "@apollo/client";
import { GET_GEN_3, Update_Collection } from '../../../api/hasura_gql';

const Edit = (props) => {

    const { loading, error, data} = useQuery(GET_GEN_3);
    const [updateCollectionMutation] = useMutation(Update_Collection);
    
    const [ collectionNameArray, setCollectionNameArray ] = useState('');
    const [ collection_name, setCollectionName ] = useState("");
    const [ loadTime, setLoadTime ] = useState(null);
    const [ bbHeaderDescription, setBBHeaderDescription ] = useState(null);
    const [ collectionTotal, setCollectionTotal ] = useState(null);
    const [ priceRate, setPriceRate ] = useState(null);
    const [ collectionRate, setCollectionRate ] = useState(null);
    const [ salesRate, setSalesRate ] = useState(null);
    const [ collectionEstOn, setCollectionEstOn ] = useState(false);
    const [ collectionRarityOn, setCollectionRarityOn ] = useState(false);
    const [ attributePlusInclude, setAttributePlusInclude ] = useState(false);
    const [ collectionVerified, setCollectionVerified ] = useState(false);
    const [ collectionFeatured, setCollectionFeatured ] = useState(false);
    const [ collectionDescriptionMuilti, setCollectionDescriptionMuilti ] = useState(false);
    const [ hidden, setHidden ] = useState(false);

    const handleChange = (e, type) => {
        let value = e.target.value;

        switch(type) {
            case "collectionName" :
                setCollectionName(value);
                break;
            case "loadTime" :
                setLoadTime(value);
                break;
            case "bbHeaderDescription" :
                setBBHeaderDescription(value);
                break;
            case "CollectionTotal" :
                setCollectionTotal(value);
                break;
            case "PriceRate" :
                setPriceRate(value);
                break;
            case "CollectionRate" :
                setCollectionRate(value);
                break;
            case "SalesRate" :
                setSalesRate(value);
                break;
            case "CollectionEstOn" :
                setCollectionEstOn(!collectionEstOn);
                break;
            case "CollectionRarityOn" :
                setCollectionRarityOn(!collectionRarityOn);
                break;
            case "AttributePlusInclude" :
                setAttributePlusInclude(!attributePlusInclude);
                break;
            case "CollectionVerified" :
                setCollectionVerified(!collectionVerified);
                break;
            case "CollectionFeatured" :
                setCollectionFeatured(!collectionFeatured);
                break;
            case "CollectionDescriptionMuilti" :
                setCollectionDescriptionMuilti(!collectionDescriptionMuilti);
                break;
            case "Hidden" :
                setHidden(!hidden);
                break;


            // case "CollectionBannerUrl" :
            //     setBannerUrl(value);
            //     break;
            // case "LinkTree" :
            //     setLinkTree(value);
            //     break;
            // case "FeaturedImageUrl" :
            //     setFeaturedUrl(value);
            //     break;
            // case "LargeImageUrl" :
            //     setLargeUrl(value);
            //     break;
            // case "PrimaryDescription" :
            //     setPrimaryDescription(value);
            //     break;
            // case "ShortDescription" :
            //     setShortDescription(value);
            //     break;
            // case "OpenseaSlug" :
            //     setOpenseaSlug(value);
            //     break;
            // case "BlackbookDevBuyerBasisFee" :
            //     setDevBuyerFee(value);
            //     break;
            // case "BlackbookDevSellerBasisFee" :
            //     setDevSellerFee(value);
            //     break;
            // case "BlackbookBuyerFeeBasisPoints" :
            //     setBuyerFeePoints(value);
            //     break;
            // case "BlackbookSellerFeeBasisPoints" :
            //     setSellerFeePoints(value);
            //     break;
            // case "BlackbookSellerFeeFiat" :
            //     setFiat(value);
            //     break;
            // case "BlackbookHeaderDescription" :
            //     setHeaderDescription(value);
            //     break;
            default :
                return value;
        }
    }

    const handleCollectionSubmit = () => {
        console.log(collection_name);
        updateCollectionMutation({
            variables: {
                collection_name : collection_name,
                loadTime : loadTime,
                bbHeaderDescription : bbHeaderDescription,
                collectionTotal : collectionTotal,
                priceRate : priceRate,
                collectionRate : collectionRate,
                salesRate : salesRate,
                collectionEstOn : collectionEstOn,
                collectionRarityOn : collectionRarityOn,
                attributePlusInclude : attributePlusInclude,
                collectionVerified : collectionVerified,
                collectionFeatured : collectionFeatured,
                collectionDescriptionMuilti : collectionDescriptionMuilti,
                hidden : hidden,

            }
        })
    }

    useEffect(() => {
        if(data){
            data.collection.map((element, index) => {
                setCollectionNameArray(collectionNameArray => [...collectionNameArray, element.collection_name])
                if(index === 0){
                    setCollectionName(element.collection_name)
                }
            })
        }
        console.log(collectionNameArray);
    }, [data]);
    
    useEffect(() => {
        if(data){
            data.collection.map((element, index) => {
                if(collectionNameArray[index] === collection_name){
                    setLoadTime(element.loadtime);
                    setBBHeaderDescription(element.bb_header_description);
                    setCollectionTotal(element.collection_total);
                    setPriceRate(element.price_refresh_rate);
                    setCollectionRate(element.collection_refresh_rate);
                    setSalesRate(element.sales_refresh_rate);
                    setCollectionEstOn(element.collection_est_on);
                    setCollectionRarityOn(element.rarity_on);
                    setAttributePlusInclude(element.attribute_plus_include);
                    setCollectionVerified(element.verified);
                    setCollectionFeatured(element.featured);
                    setCollectionDescriptionMuilti(element.description_muilti);
                    setHidden(element.hidden);
                }
            })
        }
        console.log(collectionEstOn);
    }, [collection_name])

    return(
        <div className='grid grid-cols-2 gap-[20px] '>
            <div>
                <select className="form-select form-select-sm
                    appearance-none
                    block
                    w-full
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
                    <option defaultValue="Collection" hidden> Collection </option>
                    {
                        collectionNameArray && collectionNameArray.map((element, index) => {
                            return(
                                <option key={index} value={element}> {element} </option>
                            );
                        })
                    }
                </select>
            </div>
            <div>
            </div>
            <div className='flex items-center'>
                Load Time
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
                    onChange={(e) => handleChange(e,"loadTime")}
                    value={data && loadTime }
                />
            </div>
            <div className='flex items-start'>
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
                    onChange={(e) => handleChange(e, "bbHeaderDescription")}
                >
                    {bbHeaderDescription}
                </textarea>
            </div>
            <div className='flex items-center'>
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
                    onChange={(e) => handleChange(e, "CollectionTotal")}
                    value={data ? collectionTotal : null}
                />
            </div>
            <div className='flex items-center'>
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
                    onChange={(e) => handleChange(e, "PriceRate")}
                    value={data ? priceRate : null}
                />
            </div>
            <div className='flex items-center'>
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
                    onChange={(e) => handleChange(e, "CollectionRate")}
                    value={data ? collectionRate : null}
                />
            </div>
            <div className='flex items-center'>
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
                    onChange={(e) => handleChange(e, "SalesRate")}
                    value={data ? salesRate : null}
                />
            </div>
            <div>
                Colection estimate on
            </div>
            <div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" onChange={(e) => handleChange(e, "CollectionEstOn")}  checked={collectionEstOn}/>
                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                    Select
                </label>
            </div>
            <div>
                Collection rarity on
            </div>
            <div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" onChange={(e) => handleChange(e, "CollectionRarityOn")} checked={collectionRarityOn}/>
                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                    Select
                </label>
            </div>
            <div>
                Attribute plus include
            </div>
            <div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  onChange={(e) => handleChange(e, "AttributePlusInclude")}  checked={attributePlusInclude} />
                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                    Select
                </label>
            </div>
            <div>
                Collection Verified
            </div>
            <div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" onChange={(e) => handleChange(e, "CollectionVerified")}  checked={collectionVerified} />
                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                    Select
                </label>
            </div>
            <div>
                Colection Featured
            </div>
            <div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" onChange={(e) => handleChange(e, "CollectionFeatured")}  checked={collectionFeatured} />
                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                    Select
                </label>
            </div>
            <div>
                Colection Description Muilti
            </div>
            <div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" onChange={(e) => handleChange(e, "CollectionDescriptionMuilti")}  checked={collectionDescriptionMuilti} />
                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                    Select
                </label>
            </div>
            <div>
                Hidden
            </div>
            <div className='grid grid-cols-2'>
                <div className="form-check">
                    <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  onChange={(e) => handleChange(e, "Hidden")}  checked={hidden} />
                    <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                        Select
                    </label>
                </div>
                <div className="flex space-x-2 justify-center">
                    <button type="button" className="inline-block px-6 py-2.5 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleCollectionSubmit}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Edit