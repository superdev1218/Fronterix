import React, { useEffect, useRef } from 'react' ;
import { BadgeIcon, EthIcon } from '../../../../assets/Icons/Landing';

const classes = {
    root : "text-[18px] font-semibold p-[100px] pt-[30px]"
}

const Detail = () => {

    return (
        <div className={classes.root}>
            <div className=' text-[#7F7F7F] text-center mb-[50px]'>
                Blackbook Prices, Rarity, Stats, and Aggregate listings from OpenSea, Looksrare, Wilderworld Marketplace
            </div>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <img src={'/nft.png'} className='w-full h-full'/>
                </div>
                <div className='space-y-8'>
                    <div className='text-[#CECCCC]'>
                        RANK# 10,000 &nbsp;&nbsp;
                        <span className='text-[#7F7F7F] text-[16px]'>
                            Owner | Token id
                        </span>
                        <div className='text-[32px] text-[CECCCC]'>
                            Walanger WT Wemi 1970
                        </div>
                        <div className='flex text-[#7F7F7F] items-center'>
                                Wilder World &nbsp;
                                { BadgeIcon }
                                &nbsp; |&nbsp;
                            <div className='text-[16px]'>
                                Contract
                            </div>
                        </div>
                    </div>

                    <div className='text-[#7F7F7F]'>
                        Min. Bid
                        <div className='flex items-center'>
                            { EthIcon } &nbsp;
                            <div className='text-[#FF6700] text-[42px] mr-[20px]'>0.5841</div>
                            <div className='border-[1px] border-[#5CA4E2] rounded-[4px] p-[5px] pl-[15px] pr-[15px] font-bold'> BID </div>
                        </div>
                        <div className='text-[16px] font-[regular] pl-[25px] space-y-1'>
                            <div>($2,000.00)</div>
                            <div>
                                Top Offer &nbsp;
                                <span className='text-[#CECCCC] font-semibold mr-[30px]'> 0.5241 </span>
                                Last &nbsp;
                                <span className='text-[#CECCCC] font-semibold'> 0.5241 </span>
                            </div>
                            <div>Time Left(D:H:M:S) &nbsp;01:14:05:02</div>
                        </div>
                    </div>

                    <div>
                        <div className='border-[1px] border-[#707070] rounded-[12px] space-y-2 p-[10px]'>
                            <div className='text-[#CECCCC]'>
                                Blackbook Pricing <span className='text-[#7F7F7F] text-[16px] font-regular'> (Range) </span>
                            </div>
                            <div className='text-[#7F7F7F] text-[16px] flex items-center'>
                                rarity price&nbsp;
                                <div className='text-[#CECCCC] text-[24px]'> 0.5841 </div>
                            </div>
                            <div className='text-[#7F7F7F] text-[16px] flex items-center'>
                                sales price&nbsp;
                                <span className='text-[#CECCCC] text-[24px]'> 0.5841 </span>
                            </div>
                        </div>

                        <div className='text-[16px] text-[#7F7F7F] font-regular flex justify-between items-center mt-[20px] '>
                            <div>
                                Views &nbsp;
                                <span className='text-[12px] text-[#CECCCC]'>1000</span>
                            </div>
                            <div>
                                Sales &nbsp;
                                <span className='text-[12px] text-[#CECCCC]'>1000</span>
                            </div>
                            <div className='flex items-center'>
                                <img src={'/heart.png'} /> &nbsp;
                                <span className='text-[12px] text-[#CECCCC]'>1000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail ;