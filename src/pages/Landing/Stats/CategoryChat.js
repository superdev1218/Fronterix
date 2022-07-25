import React from 'react' ;

const classes = {
    root : "grid grid-cols-3 gap-[20px] p-[100px] ",
}

const CategoryChat = (props) => {

    const {
    } = props;
    
    return (
        <div className={classes.root}>
            <div>
                <img src={'/groupchart.png'} />
            </div>
            <div>
                <img src={'/groupchart.png'} />
            </div>
            <div>
                <img src={'/groupchart.png'} />
            </div>
        </div>
    )
}

export default CategoryChat ;