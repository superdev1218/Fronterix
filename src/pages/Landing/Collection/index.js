import React, { useEffect, useState } from 'react' ;

import Panel from '../../../components/Common/Panel';
import NFT_Collection from './NFT_Collection';
import SideBar from '../../../components/Common/SideBar';

const Collection = () => {

    const [ open, setOpen] = useState(true);

    return (
        <>
            <Panel />
            
            <div className="w-3/6 m-[auto] text-[#CECCCC] bg-[#474747] ">
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
            </div>

            <div className=' mt-[50px] p-[20px]'>
                    <div className='flex space-x-5'>
                        <div className={`w-[${(open === true ? '500px' : '100px')}]`}>
                            <SideBar open={open} setOpen={setOpen}/>
                        </div>
                        <div className='w-full'>
                            <NFT_Collection />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Collection ;