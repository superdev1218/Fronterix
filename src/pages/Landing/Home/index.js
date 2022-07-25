import React,{ useEffect, useRef } from 'react' ;

const classes = {
    root : "p-[30px] mt-[100px] text-[white]",
    board : "flex w-full",
    largeSection : "w-3/4",
    contextBox : "rounded-[12px] border-[1px] border-[white] p-[10px] mt-[20px] text-[1.3vw] ",
    card : "w-[100px] h-[100px] bg-[#2B2B2B] flex flex-col justify-center items-center text-[#FF6700] text-[24px] text-center",
} 
const Home = () => {

    return (
        <div className={classes.root}>
            <div className='grid grid-cols-4 gap-4'>
                <div className={'col-span-3 text-[28px]' }>
                    Wilder World
                    <img src={'/board.png'} className="w-full"/>
                    <div className={classes.contextBox}>
                        Collect rare in-game NFTs from the Wilder World Metaverse
                        <br/>
                        <br/>
                        Wilder World is A New Dimension of Reality. An immersive 5D Metaverse powered by the $WILD token <br/> that is built on Ethereum, Unreal Engine 5 and ZERO.tech.
                    </div>
                </div>
                <div className='w-[220px] h-[220px] flex flex-col justify-between mt-[50px]'>
                    <div className='flex justify-between'>
                        <div className={classes.card}>
                            <img src={'/twitter.png'}/>
                            <div>
                                261.6k
                            </div>
                        </div>
                        <div className={classes.card}>
                            NFT&apos;s
                            <div className='text-[white] text-[18px]'> 6843 </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className={classes.card}>
                            <img src={'/discord.png'} />
                            <div>
                                261.6k
                            </div>
                        </div>
                        <div className={classes.card}>
                            NFT&apos;s
                            <div className='text-[white] text-[18px]'> 6843 </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={classes.board}>
                <div className={classes.largeSection}>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Home ;