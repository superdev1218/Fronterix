import React, { useEffect, useState } from 'react' ;

import Panel from '../../../components/Common/Panel';
import RarityForm from './RarityForm';

const Rarity = () => {


    return (
        <>
            <Panel />
            <div className=' mt-[50px] p-[20px]'>
                <RarityForm />
            </div>
        </>
    )
}

export default Rarity ;