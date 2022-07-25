import React from 'react' ;

const classes = {
    root : "mt-[50px]",
}

const mock_header = [
    "Event",
    "Item",
    "Price",
    "Market",
    "From",
    "To",
    "Date"
];

const mock_data = [
    {
        attribute: 'Tire and Rim Color',
        Est_Count: '564',
        Count: '254',
        Remain: '254',
        Est_Rarity: '1.20000%',
        Rarity: '2.4564%',
        Weighting: '10%'
    },
    {
        attribute: 'Tire and Rim Color',
        Est_Count: '564',
        Count: '254',
        Remain: '254',
        Est_Rarity: '1.20000%',
        Rarity: '2.4564%',
        Weighting: '10%'
    },
    {
        attribute: 'Tire and Rim Color',
        Est_Count: '564',
        Count: '254',
        Remain: '254',
        Est_Rarity: '1.20000%',
        Rarity: '2.4564%',
        Weighting: '10%'
    },
]

const NFTList = (props) => {

    const {
    } = props;
    
    return (
        <div className={classes.root}>
            <table className="w-full text-[16px] text-left inline-block rounded-lg border shadow-2xl">
                <thead className="w-full bg-[none] dark:bg-gray-700">
                    <tr>
                        {
                            mock_header.map((element, index) => {
                                return (
                                    <th key={index}>
                                        {element}
                                    </th>
                                );
                            })
                        }
                    </tr>
                </thead>
                <tbody className='text-[12px]'>
                    {
                        mock_data.map((element, index) => {
                            return (
                                <tr key={index} className="border-b dark:border-[#707070] p-[20px]">
                                    <th className='w-[200px] py-[10px]'>
                                        {element.attribute}
                                    </th>
                                    <td className='w-[170px]'>
                                        {element.Est_Count}
                                    </td>
                                    <td className='w-[170px]'>
                                        {element.Count}
                                    </td>
                                    <td className='w-[170px]'>
                                        {element.Remain}
                                    </td>
                                    <td className='w-[170px]'>
                                        {element.Est_Rarity}
                                    </td>
                                    <td className='w-[170px]'>
                                        {element.Rarity}
                                    </td>
                                    <td className='w-[170px]'>
                                        {element.Weighting}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
                
            </table>
        </div>
    )
}

export default NFTList ;