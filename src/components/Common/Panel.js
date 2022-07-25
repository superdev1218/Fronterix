import React, { useEffect, useRef } from 'react' ;

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const classes = {
    cardList : "p-[50px]  grid grid-cols-4 gap-4",
    longCard : "h-[88px] flex justify-between text-[white] border-[1px] rounded-[12px] p-[10px]",
    smallCard : "h-[88px] text-[white] border-[1px] rounded-[12px] p-[10px]",
    cardTitle : "text-[24px]",
    cardText : "text-[16px] text-[#707070]",
    progressbar : "w-[60px]",
    board : "w-3/6 m-[auto] text-[#CECCCC] bg-[#474747] "
}

const Panel = () => {

    return (
        <>
            <img src={'/smallboard.png'} className='w-full' />
            <div className={classes.cardList}>
                <div className={classes.longCard}>
                    <div className={classes.cardTitle}>
                        Unique Owners
                        <div className={classes.cardText}>
                            5500 out of 7000 items
                        </div>
                    </div>
                    <div className={classes.progressbar}>
                        <CircularProgressbar value={76} text={`${Number(76).toFixed(1)}%`}/>
                    </div>
                </div>
                <div className={classes.smallCard}>
                    <div className='w-full text-[24px] flex justify-between items-center'>
                        <div>
                            0.382
                        </div>
                        <div className={classes.cardText}>
                            Floor
                        </div>
                    </div>
                    <img src={'/chart.png'} className="w-full h-[40px]"/>
                </div>
                <div className={classes.smallCard}>
                    <div className='w-full text-[24px] flex justify-between items-center'>
                        <div>
                            2476
                        </div>
                        <div className={classes.cardText}>
                            Volume
                        </div>
                    </div>
                    <img src={'/chart.png'} className="w-full h-[40px]"/>
                </div>
                <div className={classes.longCard}>
                    <div className={classes.cardTitle}>
                        HODLers
                        <div className={classes.cardText}>
                            % not Listed for sale
                        </div>
                    </div>
                    <div className={classes.progressbar}>
                        <CircularProgressbar value={95} text={`${Number(95).toFixed(1)}%`}/>
                    </div>
                </div>
            </div>

            {/* <div className={classes.board}>
                <div className='flex justify-between text-[16px] border-[1px] border-[#707070] p-[15px]'>
                    DESCRIPTION (Collapsible Group Item #1)
                    <div className='flex'>
                        <img src={'/greydiscord.png'} className='mr-[10px]'/>
                        <img src={'/instagram.png'} className='mr-[10px] w-[30px]'/>
                        <img src={'/greytwitter.png'} className='mr-[10px]' />
                        <img src={'/mail.png'} className='mr-[10px]'/>
                        <img src={'/telegram.png'} className='mr-[10px]'/>
                    </div>
                </div>
                <div className='text-[14px] border-[1px] border-[#707070] p-[25px]'>
                    Blah blah blah
                </div>
            </div> */}
        </>
    )
}

export default Panel ;