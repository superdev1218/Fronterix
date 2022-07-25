import React, { Component } from "react";
import dynamic from "next/dynamic";
import { EthSmallIcon } from "src/assets/Icons/Landing";
// import ReactApexChart from 'react-apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr : false});

class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: [9,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,31,32,33,34,35,36,37,38,39,41,42]
              }
            },
            series: [
              {
                name: "series-1",
                data: [90,30,40,45,50,49,60,70,91,34,23,76,34,78,49,23,62,69,27,54,38,74,32,58,32,89,53,37,55,18]
              }
            ]
        };
    }

    render() {
        return (
            <div>
                <Chart options={this.state.options} series={this.state.series} type="bar" height={350} className="apexcharts-theme-light"/>
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-4">
                        <div>
                            SALES
                        </div>
                        <div className="flex items-center space-x-1">
                            <div>High</div>
                            <div > {EthSmallIcon} </div>
                            <div>1.200</div>
                        </div>
                        <div className="flex items-center space-x-1">
                            <div>Avg</div>
                            {EthSmallIcon}
                            <div>1.200</div>
                        </div>
                        <div className="flex items-center space-x-1">
                            <div>Low</div>
                            {EthSmallIcon}
                            <div className="flex items-end">1.200</div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <select className="form-select form-select-sm
                            appearance-none
                            block
                            w-[50px]
                            px-2
                            py-2
                            text-sm
                            font-normal
                            text-white-300
                            bg-[#474747] bg-clip-padding bg-no-repeat
                            border border-solid border-[#707070]
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-white-300 focus:bg-[#474747] focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example"
                            onChange={(e) => handleChange(e, "ChainID")}
                        >
                        <option value="1"> $ </option>
                        </select>
                        <div className="flex items-center">
                            <div className="form-check form-switch">
                                <input className="form-check-input appearance-none w-9 rounded-full float-left border border-[#707070] h-5 bg-no-repeat bg-contain focus:bg-[#1F1F1F]  focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" />
                            </div>
                            <div> Count </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApexChart;