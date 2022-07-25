import React, { useEffect, useState } from 'react';


const classes = {
    root: " text-[32px] text-[white] space-y-[50px]",
    dropBox: "w-[250px] h-[47px] bg-[#474747] hover:bg-[#474747] hover:cursor-pointer font-medium text-[20px] px-4 inline-flex items-center rounded  ml-[50px]",
}

const mock_header = [
    "Attribute",
    "Est.Count",
    "Count",
    "Remain",
    "Est.Rarity",
    "Rarity",
    "Weighting"
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
    }
]

const options = {
    animationEnabled: true,
    title: {
    },
    data: [{
        type: "doughnut",
        showInLegend: true,
        dataPoints: [
            { name: "Unsatisfied", y: 60 },
            { name: "Very Unsatisfied", y: 23 },
            { name: "Very Satisfied", y: 17 },
        ]
    }],
}
const RarityForm = () => {

    return (
        <>
            <div className={classes.root}>
                <div className='flex items-center'>
                    RARITY
                    <select className={classes.dropBox}>
                        <option value="volvo">Primary Attribute</option>
                    </select>
                </div>

                <div>
                    Attribute
                </div>

                <div className='grid grid-cols-4 gap-4'>
                    <div>
                        {/* <CanvasJSChart options = {options} 
			/> */}
                        <img src={'/groupchart.png'} />
                    </div>
                    <div className='col-span-3 h-[300px] text-[#CECCCC] border-[1px] border-[#707070] rounded-[12px] p-[20px]'>
                        <table className="w-full text-[16px] text-left">
                            <thead className="bg-[none] dark:bg-gray-700">
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
                                                <td>
                                                    {element.Est_Count}
                                                </td>
                                                <td>
                                                    {element.Count}
                                                </td>
                                                <td>
                                                    {element.Remain}
                                                </td>
                                                <td>
                                                    {element.Est_Rarity}
                                                </td>
                                                <td>
                                                    {element.Rarity}
                                                </td>
                                                <td>
                                                    {element.Weighting}
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='flex items-center'>
                    Traits
                    <select className={classes.dropBox}>
                        <option value="volvo">Attribute</option>
                    </select>
                </div>

                <div className='grid grid-cols-4 gap-4'>
                    <div>
                        <img src={'/groupchart.png'} />
                    </div>
                    <div className='col-span-3 h-[300px] text-[#CECCCC] border-[1px] border-[#707070] rounded-[12px] p-[20px]'>
                        <table className="w-full text-[16px] text-left">
                            <thead className="bg-[none] dark:bg-gray-700">
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
                                                <td>
                                                    {element.Est_Count}
                                                </td>
                                                <td>
                                                    {element.Count}
                                                </td>
                                                <td>
                                                    {element.Remain}
                                                </td>
                                                <td>
                                                    {element.Est_Rarity}
                                                </td>
                                                <td>
                                                    {element.Rarity}
                                                </td>
                                                <td>
                                                    {element.Weighting}
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RarityForm;