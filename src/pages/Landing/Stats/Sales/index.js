import React from 'react' ;
import SideBar from 'src/components/Common/SideBar';
import ApexChart from './ApexChart';
import NFTList from './NFTList';
// import { Doughnut } from "react-chartjs-2";
// const Doughnut = dynamic(() => import('./Doughnut'),{ssr:false});
// import BarChart from './BarChart';

const classes = {
    root : "grid grid-cols-4 gap-[50px]",
}

const Sales = (props) => {

    const {
    } = props;
    
    return (
        <div className={classes.root}>
            <SideBar />
            <div className='col-span-3'>
                {/* <BarChart /> */}
                <ApexChart />
                <NFTList />
            </div>
        </div>
    )
}

export default Sales ;