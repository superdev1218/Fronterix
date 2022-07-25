import React from 'react' ;

// import { FileInput } from '../../../components/Common/FileInput';
// import './style.css';

const classes = {
    root : "",
}

const Account = (props) => {

    const {
    } = props;
    
    return (
        <div className={classes.root}>
            <div className=' text-[#7F7F7F] text-center mb-[50px]'>
                Blackbook Prices, Rarity, Stats, and Aggregate listings from OpenSea, Looksrare, Wilderworld Marketplace
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <div></div>
                <div>
                    <select className={classes.dropBox}>
                        <option value="volvo" className=" block px-4 py-2">$</option>
                    </select>
                    <div>Invested</div>
                </div>
            </div>
        </div>
    )
}

export default Account ;