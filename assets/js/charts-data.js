// SEN DEPT Bar Chart JS START

if (document.querySelector("#bar-chart1")) {
    var options = {
        chart: {
            type: 'bar',
            height: '100%',
            minHeight: '247px',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
                barHeight: '100%',
                borderRadius: 8,
                dataLabels: {
                    position: 'top'
                }
            }
        },
        grid: {
            show: true,      // you can either change hear to disable all grids
            xaxis: {
              lines: {
                show: false  //or just here to disable only x axis grids
               }
             },  
            yaxis: {
              lines: { 
                show: true  //or just here to disable only y axis
               }
             },   
          },
        series: [{
            name: 'Student Count',
            data: [4, 3, 2, 5, 8, 11, 4, 13, 2, 10]
        }],
        xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            width: '100%', // Set the width of the x-axis to 100%
            labels: {
                style: {
                    fontSize: '12px', // You can adjust the font size
                },

            },
            title: {
                text: "Students count by standard",
                style: {
                    fontSize: '11px', // You can adjust the font size
                    fontWeight: 400,
                }
            }

        },

        dataLabels: {
            enabled: true,
            offsetY: -25,
            style: {
                colors: ['#ccc']
            },
            formatter: function (val) {
                return val; // Display the data value on top of each bar
            }
        },
        stroke: {
            curve: "straight"
        },
        yaxis: {
            show: false, // Disable y-axis levels
            lines: {
                show: false // Hide y-axis lines
            },
            ticks: {
                show: false // Hide y-axis ticks
            }
        },
        colors: ['#30D5C7'] // Specify custom colors for bars
    }

    var chart1 = new ApexCharts(document.querySelector("#bar-chart1"), options);

    chart1.render();
}






if (document.querySelector("#chart-line")) {
    var options2 = {
        series: [{
            name: "Progression - 2023",
            data: [15, 19, 18, 21, 19, 25, 27]
        }],
        chart: {
            height: "100%",
            type: 'area',
            // dropShadow: {
            //     enabled: true,
            //     color: '#000',
            //     top: 18,
            //     left: 7,
            //     blur: 10,
            //     opacity: 0.2
            // },
            toolbar: {
                show: false
            }
        },
        colors: ['#4A9F95'],
        stroke: {
            curve: 'smooth',
            width: 2, // Set the line width to 2 pixels
        },
        markers: {
            size: 4
        },
        xaxis: {
            show: false,
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Annual Goal',
                style: {
                    fontSize: '14px', // Adjust label font size
                    color: '#96A5B8',
                    fontWeight: 400,
                },
            },
            lines: {
                show: false // Hide y-axis lines
            },

        },
        grid: {
            show: false,      // you can either change hear to disable all grids
            xaxis: {
              lines: {
                show: true  //or just here to disable only x axis grids
               }
             },  
            yaxis: {
              lines: { 
                show: true  //or just here to disable only y axis
               }
             },   
          },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        yaxis: {
            show: false,
            lines: {
                show: false // Hide y-axis lines
            },
            // min: 5,
            // max: 40
        },
        dataLabels: {
            enabled: true, // Enable data labels
            offsetY: -10, // Adjust the vertical position of data labels
            style: {
                color: '#ccc',
                fontSize: '8px', // Adjust label font size

            },
            formatter: function (val, opts) {
                // Use X-axis categories as data labels
                // return opts.w.globals.labels[opts.dataPointIndex];
                return options2.xaxis.categories[opts.dataPointIndex];
            },
        }
    };

    var chart2 = new ApexCharts(document.querySelector("#chart-line"), options2);
    chart2.render();
}


if (document.querySelector("#bar-chart2")) {
    
    var options = {
        chart: {
            type: 'bar',
            height: '100%',
            minHeight: '247px',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '20%',
                barHeight: '100%',
                borderRadius: 5,
                dataLabels: {
                    position: 'top'
                }
            }
        },
        grid: {
            show: true,      // you can either change hear to disable all grids
            xaxis: {
              lines: {
                show: false  //or just here to disable only x axis grids
               }
             },  
            yaxis: {
              lines: { 
                show: true  //or just here to disable only y axis
               }
             },   
          },
          series: [
            {
                name: 'All Students',
                data: [4, 3, 2, 5, 8, 11, 4, 13, 2, 10]
            },
           
        ],

        

        xaxis: {
            categories: ['class 1', 'class 2', 'class 3', 'class 4', 'class 5', 'class 6', 'class 7', 'class 8', 'class 9', 'class 10'],
            width: '100%', // Set the width of the x-axis to 100%
            labels: {
                style: {
                    fontSize: '10px',
                    fontWeight:"600", // You can adjust the font size
                },

            },
            // title: {
            //     text: "Students count by standard",
            //     style: {
            //         fontSize: '11px', // You can adjust the font size
            //         fontWeight: 400,
            //     }
            // }

        },

        dataLabels: {
            enabled: true,
            offsetY: -25,
            style: {
                colors: ['#ccc']
            },
            formatter: function (val) {
                return val; // Display the data value on top of each bar
            }
        },
        stroke: {
            curve: "straight"
        },
        yaxis: {
            show: false, // Disable y-axis levels
            lines: {
                show: false // Hide y-axis lines
            },
            ticks: {
                show: false // Hide y-axis ticks
            }
        },
        colors: ['#4A9F95'] // Specify custom colors for bars
    }

    var chart1 = new ApexCharts(document.querySelector("#bar-chart2"), options);

    chart1.render();
}

if (document.querySelector("#bar-chart3")) {
    
    var options = {
        chart: {
            type: 'bar',
            height: '100%',
            minHeight: '247px',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '35%',
                barHeight: '100%',
                borderRadius: 3,
                dataLabels: {
                    position: 'top'
                }
               
            },
          
        },
        grid: {
            show: true,      // you can either change hear to disable all grids
            xaxis: {
              lines: {
                show: false  //or just here to disable only x axis grids
               }
             },  
            yaxis: {
              lines: { 
                show: true  //or just here to disable only y axis
               }
             },   
          },
          series: [
            {
                name: 'All Students',
                data: [4, 3, 2, 5, 8, 11, 4, 13, 2, 10,],
            },
            {
                name: 'Completed Students',
                data: [2, 4, 5, 3, 6, 8, 3, 6, 4, 5],
                color:'#3bd5c8' // completed students data
            }
           
           
        ],

        

        xaxis: {
            categories: ['', '', ' ', ' ', ' ', ' ', ' ', '', '', ''],
            width: '100%', // Set the width of the x-axis to 100%
            labels: {
                style: {
                    fontSize: '10px',
                    fontWeight:"600", // You can adjust the font size
                },

            },
            // title: {
            //     text: "Students count by standard",
            //     style: {
            //         fontSize: '11px', // You can adjust the font size
            //         fontWeight: 400,
            //     }
            // }

        },

        dataLabels: {
            enabled: true,
            offsetY: -25,
            style: {
                colors: ['#ccc']
            },
            formatter: function (val) {
                return val; // Display the data value on top of each bar
            }
        },
        stroke: {
            curve: "straight"
        },
        yaxis: {
            show: false, // Disable y-axis levels
            lines: {
                show: false // Hide y-axis lines
            },
            ticks: {
                show: false // Hide y-axis ticks
            }
        },
        colors: ['#4A9F95']
    }

    var chart1 = new ApexCharts(document.querySelector("#bar-chart3"), options);

    chart1.render();
}



