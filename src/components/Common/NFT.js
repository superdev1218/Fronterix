import React, { useEffect, useRef } from 'react' ;
import Link from 'next/link';

const classes = {
    card : "relative w-[220px] bg-[#474747] text-[#CECCCC] text-[14px] cursor-pointer border-[1px] border-[#707070] rounded-[9.5px] "
}

const NFT = () => {

    return (
        // <>
        <Link href={'/Landing/Collection/NFT_Detail'}>
            <div className={classes.card}>
                <div className="flex justify-end items-end h-[30px] p">
                    <img src={'/nft_tab.png'} className="absolute top-0 left-0"/>
                    <div className='flex mr-[10px]'>
                        Rank # 10050
                    </div>
                </div>
                
                <img src={'/nft.png'} />

                <div className='w-full h-[115px] flex flex-col justify-around p-[5px]'>
                    <div className='font-semibold'>
                        Walanger WT Wemi 1970
                        <div className='w-[132px] flex items-center text-[12px] border-b-[1px] border-[#5CA4E2]'>
                            BB Price : &nbsp;
                            <div className='text-[10px]'> 0.4200 - 0.880 </div>
                        </div>
                    </div>

                    <div className='text-[10px]'>
                        <div className='flex justify-between items-center'>
                            <div> Offer 0.4200 </div>
                            <div>
                                <div className='text-[14px] text-[#5CA4E2]'>
                                    0.5200
                                    <span className='text-[10px] text-[#CECCCC]'> Min Bid </span>
                                </div>
                            </div>
                        </div>
                        <div className=' border-b-[1px] border-[#707070] m-1 ml-[-5px] mr-[-5px]' />
                        <div className='flex justify-between'>
                            <div> Wilder World </div>
                            <div className='flex items-center'> 
                                <img src={'/heart.png'} style={{width : "13px", height : "13px"}}/>
                                <div>1000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Link>
        // </>
    )
}

export default NFT ;