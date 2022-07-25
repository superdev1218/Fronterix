import React from 'react' ;
import { useLocation } from 'react-router-dom';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const classes = {
    root : "relative flex h-[80px] text-white border-b-[1px] border-[#474747]",
    menu : "absolute right-0 flex h-[36px] justify-around items-center",
    connectButton : "border-[1px] border-[white] rounded w-[100px]",
    divider : "border-b-[1px] border-[#474747] w-full",
    icon : 'w-[16px] hover:cursor-pointer'
}

const Header = (props) => {
    
    const [ admin, setAdmin ] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if(router){
            if(router.pathname.includes("Landing"))
                setAdmin(false);
            if(router.pathname.includes("Admin"))
                setAdmin(true);
        }
    }, [router])

    return (
        <div className={classes.root}>
        <img src={'/logo.png'} className="w-[127px] max-sm:hidden"/>
        <div className=' w-full'>
            <div className='flex justify-between h-1/2'>
                <div style={{fontSize : '28px', width : '100%', display : 'flex',justifyContent : 'center', alignItems : 'center'}}>
                {
                    admin === false &&
                    " Wilder World"
                }
                </div>
                <div className={classes.menu}>
                    <div className='flex max-sm:hidden space-x-2 mr-[10px]'>
                        <img src={'/search.png'} className={classes.icon}/>
                        <img src={'/menu.png'} className={classes.icon}/>
                        <Link href={'/Landing/Account'}>
                            <img src={'/sign.png'} className={classes.icon}/>
                        </Link>
                        <img src={'/notify.png'} className={classes.icon}/>
                    </div>
                    <button className={classes.connectButton}>CONNECT</button>
                </div>
            </div>
            <div className={classes.divider} />
            <div className="flex justify-center h-[38px]">
                <div className='w-[300px] flex content-start'>
                    <div style={{fontSize : '20px', width : '100%', display : 'flex', justifyContent : 'space-around', alignItems : 'center', fontSize : '12px'}}>
                        <Link href={'/Landing/Collection'}>
                            Collection
                        </Link>
                        <Link href={'/Landing/Stats'}>
                            Stats
                        </Link>
                        <Link href={'/Landing/Rarity'}>
                            Rarity Stats
                        </Link>
                        {
                            admin === true &&
                            <div  className="flex items-center h-[38px] content-start border-[1px] border-[#707070] px-[20px]">
                                <Link href={'/'}>
                                    Admin
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header ;