import React, {useEffect} from 'react';
import ReactApexChart from "react-apexcharts";

import getChartColorsArray from "../../Components/Common/ChartsDynamicColor";

const AudiencesCharts = ({ dataColors, series }) => {
    var chartAudienceColumnChartsColors = getChartColorsArray(dataColors);
    var options = {
        chart: {
            type: 'bar',
            height: 309,
            stacked: true,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                borderRadius: 6,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            fontWeight: 400,
            fontSize: '8px',
            offsetX: 0,
            offsetY: 0,
            markers: {
                width: 9,
                height: 9,
                radius: 4,
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        grid: {
            show: false,
        },
        colors: chartAudienceColumnChartsColors,
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: true,
                strokeDashArray: 1,
                height: 1,
                width: '100%',
                offsetX: 0,
                offsetY: 0
            },
        },
        yaxis: {
            show: false
        },
        fill: {
            opacity: 1
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                options={options}
                series={series}
                type="bar"
                height="309"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const AudiencesSessionsCharts = ({ dataColors, series }) => {
    var chartHeatMapBasicColors = getChartColorsArray(dataColors);

    var options = {
        chart: {
            height: 400,
            type: 'heatmap',
            offsetX: 0,
            offsetY: -8,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            heatmap: {
                colorScale: {
                    ranges: [{
                        from: 0,
                        to: 50,
                        color: chartHeatMapBasicColors[0]
                    },
                    {
                        from: 51,
                        to: 100,
                        color: chartHeatMapBasicColors[1]
                    },
                    ],
                },

            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: true,
            horizontalAlign: 'center',
            offsetX: 0,
            offsetY: 20,
            markers: {
                width: 20,
                height: 6,
                radius: 2,
            },
            itemMargin: {
                horizontal: 12,
                vertical: 0
            },
        },
        colors: chartHeatMapBasicColors,
        tooltip: {
            y: [{
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + "k";
                    }
                    return y;
                }
            }]
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                options={options}
                series={series}
                type="heatmap"
                height="400"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const CountriesCharts = ({ dataColors, series }) => {
    var barchartCountriesColors = getChartColorsArray(dataColors);
    var options = {
        chart: {
            type: 'bar',
            height: 436,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
                distributed: true,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        colors: barchartCountriesColors,
        dataLabels: {
            enabled: true,
            offsetX: 32,
            style: {
                fontSize: '12px',
                fontWeight: 400,
                colors: ['#adb5bd']
                // colors:['#878a99']
            }
        },

        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        xaxis: {
            categories: ['India', 'United States', 'China', 'Indonesia', 'Russia', 'Bangladesh', 'Canada', 'Brazil', 'Vietnam', 'UK'],
        },
    };
    return (
        <React.Fragment>
            <ReactApexChart dir="ltr"
                options={options}
                series={series}
                type="bar"
                height="436"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

const UsersByDeviceCharts = ({ dataColors, series }) => {
    useEffect(() => {
        const trackElement = document.querySelector('#progress-chart .apexcharts-radialbar-track');
        console.log(trackElement);
        if (trackElement) {
            trackElement.style.stroke = 'rgba(226, 251, 215, 1)';
        }
    }, []);

    const options = {
        chart: {
            type: "radialBar",
            height: 280,
        },
        plotOptions: {
            radialBar: {
                track: {
                    background: "rgba(226, 251, 215, 1)",
                    margin: 0,
                  },
                hollow: {
                    margin: 0,
                    size: "60%",
                    background: "rgba(226, 251, 215, 1)",
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        fontSize: '1.75rem',
                        color: '#34B53A'
                    },
                },
            },
        },
        fill: {
            colors: ['#34B53A'],
        },
        stroke: {
            lineCap: "round",
        },
        series: [25], // Set the progress percentage here
    };

    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={options.series}
                type="radialBar"
                height={options.chart.height}
                className="apex-charts"
            />
        </React.Fragment>
    );
};


export { AudiencesCharts, AudiencesSessionsCharts, CountriesCharts, UsersByDeviceCharts };