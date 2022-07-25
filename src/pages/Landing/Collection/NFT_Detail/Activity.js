import React, { useState, useRef } from 'react' ;

import { UploadIcon } from 'src/assets/Icons/Landing';

const classes = {
    root : "border-[1px] border-[#707070] text-[#CECCCC] ",
    title : 'border-b-[1px] border-[#707070]',
    content : 'border-b-[1px] border-[#707070]',
    dropBox : " h-[30px] bg-[#474747] hover:bg-[#474747] font-medium text-sm p-[6px] px-4 inline-flex items-center rounded-l-[4px] border-[1px]",
    rankSlider : "w-[200px] hover:cursor-pointer mr-[20px]"
}

const Activity = () => {

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
                    Attributes
                </div>
            </div>

            <div className={classes.content}>
                <div className='flex space-x-3 p-[20px] pb-[80px]'>
                    <div className='text-[#7F7F7F] font-semibold'>
                        Group Name
                        <div className='w-[500px] h-[130px] flex justify-between border-[1px] border-[#707070] rounded-[12px] p-[20px] mt-[10px]'>
                            <div>Attribute</div>
                            <div>Trait</div>
                            <div>Count</div>
                            <div>%Rarity</div>
                            <div>Min Price</div>    
                        </div>
                    </div>
                    <div className='text-[#7F7F7F] font-semibold'>
                        Group Name
                        <div className='w-[500px] h-[130px] flex justify-between border-[1px] border-[#707070] rounded-[12px] p-[20px] mt-[10px]'>
                            <div>Attribute</div>
                            <div>Trait</div>
                            <div>Count</div>
                            <div>%Rarity</div>
                            <div>Min Price</div>    
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.title}>
                <div className='p-[10px]'>
                    Ranking
                </div>
            </div>
            
            <div className={classes.content}>
                <div className='space-y-5 p-[20px]'>
                    <select className={classes.dropBox}>
                        <option value="volvo" className=" block px-4 py-2">Rarity Calculation</option>
                        <option value="saab">Rarity</option>
                    </select>

                    <div className='w-[350px] border-[1px] border-[#707070] rounded-[12px] p-[10px]'>
                        <div className='text-[24px] font-bold '>Rank</div>
                        <div>
                            <input type="range" min="1" max="100" value={rank} onChange={handleRankChange} className={classes.rankSlider}/>
                            <span className='text-[22px] font-bold'> 0.016% </span>
                        </div>
                        <div> 1 out of 5500 </div>
                    </div>
                    
                    <select className={classes.dropBox}>
                        <option value="volvo" className=" block px-4 py-2">Trait</option>
                        <option value="saab">Rarity</option>
                    </select>

                    <div className='w-[520px] h-[130px] flex justify-between border-[1px] border-[#707070] rounded-[12px] p-[20px] mt-[10px]'>
                        <div>Rank</div>
                        <div className='mr-[50px]'>Name</div>
                        <div>BB Min</div>
                        <div>BB Max</div>
                        <div>Price</div>
                        <div>Last Price</div>    
                    </div>
            </div>
            </div>
            
            <div className={classes.title}>
                <div className='p-[10px]'>
                    Description
                </div>
            </div>

            <div className={classes.content}>
                <div className='p-[30px] text-[#7F7F7F]'>
                    <div>
                        Paragraph 08  Paragraph 08  Paragraph 08  Paragraph 08  Paragraph 08 Paragraph 08  Paragraph 08 Paragraph 08  Paragraph 08 
                    </div>
                    <div>
                        Paragraph 08  Paragraph 08  Paragraph 08  Paragraph 08  Paragraph 08 Paragraph 08  Paragraph 08 Paragraph 08  Paragraph 08 
                    </div>
                    <div>
                        Paragraph 08  Paragraph 08  Paragraph 08  Paragraph 08  Paragraph 08 Paragraph 08  Paragraph 08 Paragraph 08  Paragraph 08 
                    </div>
                    <div className='flex mt-[30px]'>
                        <div className='w-[200px] space-y-1'>
                            <div> Owner </div>
                            <div> Creator </div>
                            <div> Token ID </div>
                            <div> Token IPFS </div>
                            <div> Mint date </div>
                            <div> Token Standard </div>
                            <div> Blockchain </div>
                            <div className='flex'> { UploadIcon } Image</div>
                            <div className='flex'> { UploadIcon } Image 256</div>
                            <div className='flex'> { UploadIcon } Image 512</div>
                            <div className='flex'> { UploadIcon } Image 1024</div>
                            <div className='flex'> { UploadIcon } Video </div>
                        </div>
                        <div className='w-[100px]'>
                            <div> 0x37358aa5d... </div>
                            <div> 0x37358aa5d... </div>
                            <div> 0x37358aa5d... </div>
                            <div> 0x37358aa5d... </div>
                            <div> 10/15/21 </div>
                            <div> ERC-721 </div>
                            <div> Ethereum </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity ;