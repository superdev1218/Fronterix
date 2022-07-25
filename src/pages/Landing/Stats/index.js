import React from 'react' ;
import Panel from '../../../components/Common/Panel';
import CategoryChat from './CategoryChat';
import Sales from './Sales';

const classes = {
    root : "text-[#CECCCC] p-[20px]",
}

const AdBoost = (props) => {

    const {
    } = props;
    
    return (
        <div className={classes.root}>
            <Panel />
            <div>
                SALES
            </div>
            <CategoryChat />
            <Sales />
            
        </div>
    )
}

export default AdBoost ;