import React, { useEffect, useRef } from 'react' ;
import { useState } from 'react';

import { 
    AddIcon,
    MinusIcon,
    FilterIcon,
    FilterLessIcon
} from '../../assets/Icons/Landing';

const classes = {
    root : "bg-[#474747] h-[850px] text-[#CECCCC] rounded-[10px] p-[10px]",
    attribute_title : 'flex justify-between items-center border-[1px] border-[#5CA4E2] border-b-0 p-[10px]',
    attribute_item : 'flex justify-between items-center pl-[10px] pr-[10px] pb-[5px]',
    rank : 'border-[1px] border-[#5CA4E2] border-b-0',
    rank_item : 'flex items-center border-b-[1px] border-[#707070] hover:bg-[#CECCCC] hover:bg-opacity-20',
    attributes : 'border-b-[1px] border-[#707070] hover:bg-[#CECCCC] hover:bg-opacity-20',
    attribute_property : 'flex justify-between p-[10px] '
}

const SideBar = (props) => {

    const {
        open, setOpen
    } = props;
    const handleDrawClose = () => {
        // setOpen(false);
    }
    
    const handleDrawOpen = () => {
        setOpen(true);
    }

    return (
        <>
            {/* { open ?  */}
                <div className={classes.root}>
                        <div className='flex justify-between text-[#CECCCC]'>
                            <div className='flex items-center'>
                                <span className="ml-3 mr-[10px]">Add</span>
                                <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-800 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-alls peer-checked:bg-blue-600"></div>
                                    <span className="ml-3">Narrow</span>
                                </label>
                            </div>
                            <div onClick={handleDrawClose}>
                                {FilterIcon}
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='mt-[20px]'>
                                <div className={classes.attribute_title}>
                                    <div>
                                        PRIMARY ATTRIBUTE
                                    </div>
                                    <div  className='text-[12px]'>2</div>
                                </div>
                                <div className='text-[13px] border-[1px] border-[#5CA4E2] space-y-2 pb-[30px]'>
                                    <div className='hover:bg-[#CECCCC] hover:bg-opacity-20 pt-[10px]' >
                                        <div className={classes.attribute_item}>
                                            <div className='flex items-center'>
                                                { AddIcon }
                                                { MinusIcon }
                                                <div className='ml-[10px]'>Wilder.Wheels</div>
                                            </div>
                                            <div>
                                                1000
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hover:bg-[#CECCCC] hover:bg-opacity-20' >
                                        <div className={classes.attribute_item}>
                                            <div className='flex items-center'>
                                                { AddIcon }
                                                { MinusIcon }
                                                <div className='ml-[10px]'>Wilder.Kicks</div>
                                            </div>
                                            <div>
                                                1000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-[1px] border-[#707070]'>
                                <div className={classes.rank_item}>
                                    <div className='p-[10px]'>
                                        Rank
                                    </div>
                                </div>
                                <div className={classes.rank_item}>
                                    <div className='p-[10px]'>
                                        Scale Type
                                    </div>
                                </div>
                                <div className={classes.rank_item}>
                                    <div className='p-[10px]'>
                                        Price Range
                                    </div>
                                </div>
                                <div className={classes.rank_item}>
                                    <div className='p-[10px]'>
                                        Currency
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'> ATTRIBUTES </div>
                            <div className='border-[1px] border-[#707070]'>
                                <div className={classes.attributes}>
                                    <div className={classes.attribute_property}>
                                        <div>#1 Attribute</div>
                                        <div className='text-[12px]'>2</div>
                                    </div>
                                </div>
                                <div className={classes.attributes}>
                                    <div className={classes.attribute_property}>
                                        <div>#2 Attribute</div>
                                        <div className='text-[12px]'>2</div>
                                    </div>
                                </div>
                                <div className={classes.attributes}>
                                    <div className={classes.attribute_property}>
                                        <div>#3 Attribute</div>
                                        <div className='text-[12px]'>2</div>
                                    </div>
                                </div>
                                <div className={classes.attributes}>
                                    <div className={classes.attribute_property}>
                                        <div>#4 Attribute</div>
                                        <div className='text-[12px]'>2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                {/* :
                <div className='w-[50px] h-[50px] relative rounded-[50px] bg-[#707070]' onClick={handleDrawOpen}>
                    {FilterLessIcon}
                </div>
            } */}
        </>
    )
}

export default SideBar ;