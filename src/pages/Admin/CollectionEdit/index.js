import React, { useState } from 'react' ;
import { useMutation, useQuery } from "@apollo/client";
import { PRIVATE_OPENSEA_API } from 'src/pages/api/constant';
import { GET_GEN_3, Create_Contract } from '../../api/hasura_gql';

import AdminSideBar from '../AdminSideBar';
import Edit from './Edit';
// import { initContracts, parseMetadata } from 'src/pages/api/jdoodle';
import { fetchData } from 'src/pages/api/opensea';
import clsx from 'clsx';

const classes = {
    rootDiv : 'bg-[#1F1F1F] w-[100vw] text-[#CECCCC]'
}


const CollectionEdit = () => {

    const [CreateContractMutation] = useMutation(Create_Contract);

    const [ modalIsOpen, setIsOpen ] = useState(true);

    const [ contractAddress, setContractAddress ] = useState('');

    const [ bannerUrl, setBannerUrl ] = useState(null);
    const [ linktree, setLinkTree ] = useState(null);
    const [ featuredUrl, setFeaturedUrl ] = useState(null);
    const [ largeUrl, setLargeUrl ] = useState(null);
    const [ primaryDescription, setPrimaryDescription ] = useState(null);
    const [ shortDescription, setShortDescription ] = useState(null);
    const [ openseaSlug, setOpenseaSlug ] = useState(null);
    const [ devBuyerFee, setDevBuyerFee ] = useState(null);
    const [ devSellerFee, setDevSellerFee ] = useState(null);
    const [ buyerFeePoints, setBuyerFeePoints ] = useState(null);
    const [ sellerFeePoints, setSellerFeePoints ] = useState(null);
    const [ fiat, setFiat ] = useState(false);
    const [ headerDescription, setHeaderDescription ] = useState(null);
    
    const [ autoLoad, setAutoLoad ] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const handleChange = (e, type) => {
        switch(type){
            case "ContractAddress" : 
                setContractAddress(e.target.value);
                break;
            case "AutoLoad" :
                setAutoLoad(!autoLoad);
                break;
            default:
                break;
        }
    }

    const handleLoadContract = async () => {
        const url = `${PRIVATE_OPENSEA_API}${contractAddress}`;
        const options = {method: 'GET'};
        const contract = await fetchData(url, options);

        console.log(contract);
        // initContracts();
        // parseMetadata();
        CreateContractMutation({
            variables: {
                banner_image_url : contract.collection.banner_image_url,
                created_date : contract.created_date,
                featured : contract.collection.featured,
                featured_image_url : contract.collection.featured_image_url,
                hidden : contract.collection.hidden,
                safelist_request_status : contract.collection.safelist_request_status,
                is_subject_to_whitelist : contract.collection.is_subject_to_whitelist,
                large_image_url : contract.collection.large_image_url,
                collection_name : contract.collection.name,
                require_email : contract.collection.require_email,
                short_description : contract.collection.short_description,
                slug : contract.collection.slug,
                address : contract.address,
                asset_contract_type : contract.asset_contract_type,
                contract_name : contract.name,
                nft_version : contract.nft_version,
                opensea_version : contract.opensea_version,
                owner : contract.owner.toString(),
                schema_name : contract.schema_name,
                symbol : contract.symbol,
                total_supply : parseInt(contract.total_supply),
                description : contract.description,
                external_link : contract.external_link,
                image_url : contract.image_url,
                default_to_fiat : contract.default_to_fiat,
                dev_buyer_fee_basis_points : contract.dev_buyer_fee_basis_points,
                dev_seller_fee_basis_points : contract.dev_seller_fee_basis_points,
                only_proxied_transfers : contract.only_proxied_transfers,
                opensea_buyer_fee_basis_points : contract.opensea_buyer_fee_basis_points,
                opensea_seller_fee_basis_points : contract.opensea_seller_fee_basis_points,
                buyer_fee_basis_points : contract.buyer_fee_basis_points,
                seller_fee_basis_points : contract.seller_fee_basis_points,
            }
        })
    }
    
    const handleContractSubmit = () => {
        // updateContractMutation({
        //     variables: {
        //         bannerUrl : bannerUrl,
        //         linktree : linktree,
        //         featuredUrl : featuredUrl,
        //         largeUrl : largeUrl,
        //         primaryDescription : primaryDescription,
        //         shortDescription : shortDescription,
        //         openseaSlug : openseaSlug,
        //         devBuyerFee : devBuyerFee,
        //         devSellerFee : devSellerFee,
        //         openseaBuyerFee : buyerFeePoints,
        //         openseaSellerFee : sellerFeePoints,
        //         fiat : fiat,
        //         headerDescription : headerDescription
        //     }
        // })
    }



    return (
        <>
            <div className={classes.rootDiv}>
                <div className='grid grid-cols-4'>
                    <AdminSideBar />
                    <div className='col-span-3 max-sm:col-span-4 p-[30px]'>
                        <div className='mb-[10px]'>
                            Edit Collection
                        </div>
                        <Edit />
                        <div className='border border-[#707070] mt-[20px] p-[20px]'>
                            <div>
                                Add another contract to Collection
                            </div>
                            <div className='grid grid-cols-2 mt-[20px] gap-[10px]'>
                                <div className='col-span-2'>
                                    <input
                                        type="text"
                                        className="
                                            form-control
                                            block
                                            w-1/2 max-xs:w-full
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
                                        placeholder='Contract'
                                        value={contractAddress}
                                        onChange={(e) => handleChange(e, "ContractAddress")}
                                    />
                                </div>
                                <div className='col-span-2'>
                                    <select className="form-select form-select-sm
                                        appearance-none
                                        block
                                        w-1/2 max-xs:w-full
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
                                        defaultValue={'DEFAULT'}
                                    >
                                    <option value="DEFAULT"  hidden> Chain Id </option>
                                    </select>
                                </div>

                                <div className="col-span-2 form-check">
                                    <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "AutoLoad")}/>
                                    <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                        Auto Load Primary Attribute
                                    </label>
                                </div>

                                <div className={clsx('col-span-2 px-[30px] py-[10px]', !autoLoad && 'opacity-50')}>
                                    <div className='border-[1px] border-[#707070] p-[20px] space-y-3'>
                                        <div className='mb-5'>
                                            Auto Load Primary Attribute Trait
                                        </div>
                                        
                                        <div className="flex form-check">
                                            <div>
                                                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" disabled={!autoLoad} onChange={(e) => handleChange(e, "AutoLoaddPrimary")}/>
                                            </div>
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
                                            <div>
                                                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" disabled={!autoLoad} onChange={(e) => handleChange(e, "AutoLoaddPrimary")}/>
                                            </div>
                                            <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                                Auto Add All Attributes from Contract to Project_Attribute
                                            </label>
                                        </div>

                                    </div>
                                </div>

                                <div className='col-span-2'>
                                    <div className="flex justify-center gap-[10px]">
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
                                <div className="col-span-2 flex justify-center">
                                    <button type="button" className="inline-block px-6 py-2.5 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleLoadContract}>
                                        Load Contract
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-2 justify-start mt-[30px]">
                            <button type="button" className="inline-block px-6 py-2.5 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
                                RE-SCAN COLLECTION
                            </button>
                        </div>

                        <div className='border border-b-[#5CA4E2] mt-[30px] mb-[20px]' />

                        <div className='mb-[15px]'>
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
                                focus:text-white-300 focus:bg-[#474747] focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">
                                <option defaultValue>Collection Category</option>
                                <option value="1">Collection 1</option>
                                <option value="2">Collection 2</option>
                                <option value="3">Collection 3</option>
                            </select>
                        </div>

                        <div className='grid grid-cols-2 gap-[10px]'>
                            <div className='flex items-center'>
                                Collection Name
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
                                Collection Complete
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""  />
                                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                    Select
                                </label>
                            </div>
                        </div>
                        
                        <div className='mt-[20px] mb-[10px]'>
                            Collection Search Tags
                        </div>

                        <div className='mb-[10px] flex flex-row gap-[10px]'>
                            <input
                                type="text"
                                className="
                                    form-control
                                    block
                                    w-[100px]
                                    h-[30px]
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-white-700
                                    text-[10px]
                                    bg-[#474747] bg-clip-padding
                                    border border-solid border-[#707070]
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-white-700 focus:outline-none
                                "
                                placeholder='Search Tags...'
                            />
                            <div className='border border-[#707070] p-[5px] text-[10px] rounded-[5px] w-[50px] text-center'>
                                New
                            </div>
                        </div>
                        <div className='flex flex-row gap-[20px]'>
                            <div className='flex flex-col border border-[#707070] pt-[10px] pb-[20px] pl-[5px] pr-[25px]'>
                                <div>Search Tag</div>
                                <div>Search Tag</div>
                                <div>Search Tag</div>
                                <div>Search Tag</div>
                                <div>Search Tag</div>
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
                            <div className='flex flex-col border border-[#707070] pt-[10px] pb-[20px] pl-[5px] pr-[25px]'>
                                <div>Search Tag</div>
                                <div>Search Tag</div>
                                <div>Search Tag</div>
                                <div>Search Tag</div>
                                <div>Search Tag</div>
                            </div>
                        </div>


                        <div className='flex flex-row gap-[20px] mt-[30px]'>
                            <div className='flex flex-col pt-[10px] pb-[20px] pl-[5px] '>
                                Contract Order
                            </div>
                            <div className='flex flex-col justify-center gap-[10px]'>
                                <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                    <i className="fas fa-angle-up text-[#5CA4E2]"></i>
                                </div>
                                <div className='border border-[#5CA4E2] bg-[#474747] w-[25px] h-[25px] flex justify-center items-center'>
                                    <i className="fas fa-angle-down text-[#5CA4E2]"></i>
                                </div>
                            </div>
                            <div className='flex flex-col border border-[#707070] pt-[10px] pb-[20px] pl-[5px] pr-[25px]'>
                                <div>Contract 01 List</div>
                                <div>Contract 01 List</div>
                                <div>Contract 01 List</div>
                                <div>Contract 01 List</div>
                                <div>Contract 01 List</div>
                                <div>Contract 01 List</div>
                            </div>
                        </div>


                        <div className='mt-[25px]'>
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
                                defaultValue={"ContractInfo"}
                                >
                                <option defaultValue="ContractInfo" hidden>Contract Info</option>
                                <option value="1">Collection 1</option>
                                <option value="2">Collection 2</option>
                                <option value="3">Collection 3</option>
                            </select>
                        </div>

                        <div className="flex space-x-2 justify-start mt-[30px]">
                            <button type="button" className="inline-block px-6 py-2.5 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">
                                RE-SCAN COLLECTION
                            </button>
                        </div>

                        <div className='grid grid-cols-2 gap-[10px] mt-[20px]'>
                            <div className='flex items-center'>
                                Collection banner Url
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
                                    onChange={(e) => handleChange(e, "CollectionBannerUrl")}
                                />
                            </div>
                            <div className='flex items-center'>
                                Linktree
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
                                    onChange={(e) => handleChange(e, "LinkTree")}
                                />
                            </div>
                            <div className='flex items-center'>
                                Featured Image Url
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
                                    onChange={(e) => handleChange(e, "FeaturedImageUrl")}
                                />
                            </div>
                            <div className='flex items-center'>
                               Large Image Url
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
                                    onChange={(e) => handleChange(e, "LargeImageUrl")}
                                />
                            </div>
                            <div className='flex items-start'>
                                Primary Description
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
                                    onChange={(e) => handleChange(e, "PrimaryDescription")}
                                />
                            </div>
                            <div className='flex items-start'>
                                Short Description
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
                                    onChange={(e) => handleChange(e, "ShortDescription")}
                                />
                            </div>
                            <div className='flex items-center'>
                               Opensea slug
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
                                    onChange={(e) => handleChange(e, "OpenseaSlug")}
                                />
                            </div><div className='flex items-center'>
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
                                    onChange={(e) => handleChange(e, "BlackbookDevBuyerBasisFee")}
                                />
                            </div><div className='flex items-center'>
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
                                    onChange={(e) => handleChange(e, "BlackbookDevSellerBasisFee")}
                                />
                            </div><div className='flex items-center'>
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
                                    onChange={(e) => handleChange(e, "BlackbookBuyerFeeBasisPoints")}
                                />
                            </div><div className='flex items-center'>
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
                                    onChange={(e) => handleChange(e, "BlackbookSellerFeeBasisPoints")}
                                />
                            </div><div className='flex items-center'>
                               Blackbook seller fee fiat
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
                                    onChange={(e) => handleChange(e, "BlackbookSellerFeeFiat")}
                                />
                            </div>
                            <div>
                                Blackbook fee cap
                            </div>
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-[#707070] rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value=""   onChange={(e) => handleChange(e, "BlackbookFeeCap")}/>
                                <label className="form-check-label inline-block text-white-300" htmlFor="flexCheckDefault">
                                    Select
                                </label>
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
                                    onChange={(e) => handleChange(e, "BlackbookHeaderDescription")}
                                />
                                <div className="flex space-x-2 justify-end">
                                    <button type="button" className="inline-block px-6 py-2.5 border border-[1px] border-[#5CA4E2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out mt-[50px]" onClick={handleContractSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <AdminSideBarDialog
                        modalIsOpen={modalIsOpen}
                        closeModal={closeModal}
                    />
                </div> */}
            </div>
        </>
    )
}

export default CollectionEdit ;