import React, { useState, useRef } from 'react' ;

import { EthIcon, UploadIcon } from 'src/assets/Icons/Landing';

const classes = {
    root : "border-[1px] border-[#707070] text-[#CECCCC] ",
    title : 'border-b-[1px] border-[#707070]',
    content : 'border-b-[1px] border-[#707070]',
    rankSlider : "w-[200px] hover:cursor-pointer mr-[20px]",
    button : "w-[80px] border-[1px] border-[#707070] rounded-[5px] p-[5px] hover:bg-[rgb(100,100,100)]"
}

const About = () => {

    const[ detail, setDetail ] = useState();
    const[ rank, setRank ] = useState(30);

    const handleDetailChange = (value) => {
        setDetail(value);
    }

    const handleRankChange = (e) => {
        setRank(e.target.value);
    }

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <div className='p-[10px]'>
                    Price History
                </div>
            </div>

            <div className={classes.content}>
                <div className='relative flex space-x-3'>
                <div className='absolute left-1/2 top-0 h-full border-[2px] border-[#707070]'></div>

                    <div className='w-full p-[20px] '>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <div className='w-[350px] flex items-center border-[2px] border-[#707070] rounded-[12px] space-x-3 p-[20px]'>
                                    <div>
                                        <div className='flex items-center'>
                                            { EthIcon }
                                            <div className='text-[24px]'> 1.200 </div>
                                        </div>
                                        <div className='text-[14px] text-[#707070]'> Purchase </div>
                                    </div>

                                    <div className='text-[40px]'> | </div>
                                    
                                    <div >
                                        <div className='flex items-center'>
                                            { EthIcon }
                                            <div className='text-[24px]'> 0.200 </div>
                                        </div>
                                        <div className='text-[14px] text-[#707070]'> Offer </div>
                                    </div>
                                    
                                    <div className='text-[40px]'> | </div>
                                    
                                    <div>
                                        <div className='flex items-center'>
                                            { EthIcon }
                                            <div className='text-[24px] text-[#5CA4E2]'> -1.0 </div>
                                        </div>
                                        <div className='text-[14px] text-[#5CA4E2]'> Profit/Loss </div>
                                    </div>
                                </div>
                                <img src={'/pricechart.png'} className="ml-[-30px]"/>
                            </div>
                            <div>
                                <div className='text-[#7F7F7F] font-semibold'>
                                    Offers / Listings &nbsp;&nbsp; <span className='text-[12px]'> Click for Market </span>
                                    <div className='w-[500px] h-[130px] flex justify-between text-[#CECCCC] border-[2px] border-[#707070] rounded-[12px] p-[20px] mt-[10px]'>
                                        <div>Date</div>
                                        <div>Event</div>
                                        <div>Price</div>
                                        <div>Market</div>
                                        <div>Expiry</div>    
                                        <div>Offer from</div>    
                                    </div>
                                </div>
                                <div className='text-[#7F7F7F] font-semibold'>
                                    Sales &nbsp;&nbsp; <span className='text-[12px]'> Click to View </span>
                                    <div className='w-[500px] h-[130px] flex justify-between text-[#CECCCC] border-[2px] border-[#707070] rounded-[12px] p-[20px] mt-[10px]'>
                                        <div>Date</div>
                                        <div>Price</div>
                                        <div>Market</div>
                                        <div>Tran.Type</div>    
                                        <div>Previous Owner</div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.title}>
                <div className='p-[10px]'>
                    Events
                </div>
            </div>

            <div className={classes.content}>
                <div className='p-[20px] space-y-3'>
                    <div className='flex space-x-1'>
                        <button className={classes.button}> Listing </button>
                        <button className={classes.button}> Bid </button>
                        <button className={classes.button}> Sale </button>
                        <button className={classes.button}> Transfer </button>
                        <button className={classes.button}> Mint </button>
                    </div>

                    <div className='flex p-[20px] pb-[5px]'>
                        <div className='min-w-[120px]'> Event </div>
                        <div className='min-w-[120px]'> Price </div>
                        <div className='min-w-[120px]'> Market </div>
                        <div className='min-w-[120px]'> From </div>
                        <div className='min-w-[120px]'> To </div>
                        <div className='min-w-[120px]'> Date </div>
                    </div>

                    <div className='h-[200px] flex border-[2px] border-[#707070] rounded-[12px] p-[20px]'>
                        <div className='w-[120px]'> Sale </div>
                        <div className='w-[120px]'> 0.580 </div>
                        <div className='w-[120px]'> WilderWorld </div>
                        <div className='w-[120px]'> CryptoMNK </div>
                        <div className='w-[120px]'> 0b9dff </div>
                        <div className='w-[120px]'> 2/12/22 12:00 </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About ;