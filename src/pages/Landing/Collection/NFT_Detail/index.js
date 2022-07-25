import React, { useState, useRef } from 'react' ;

import clsx from 'clsx';

import Detail from './Detail';
import Activity from './Activity';
import About from './About';

const classes = {
    root : "p-[100px]",
    active : "border-[1px] border-[#5CA4E2]",
    tab : 'w-[100px] hover:cursor-pointer'
}

const NFT_Detail = () => {

    const[ detail, setDetail ] = useState(0);

    const handleDetailChange = (value) => {
        setDetail(value);
    }

    return (
        <div className={classes.root}>
            <Detail />

            <div className='w-full text-[#CECCCC] border-b-[1px] border-[#5CA4E2]'>
                <div className='ml-[50px] flex text-center font-SemiBold'>
                    <div className={ clsx(classes.tab , detail === 0 && classes.active) } onClick={() => handleDetailChange(0)}>
                        Activity
                    </div>
                    <div  className={ clsx(classes.tab , detail === 1 && classes.active) } onClick={() => handleDetailChange(1)}>
                        About
                    </div>
                </div>
            </div>

            {
                detail === 0 && <Activity />
            }
            {
                detail === 1 && <About />
            }
        </div>
    )
}

export default NFT_Detail ;