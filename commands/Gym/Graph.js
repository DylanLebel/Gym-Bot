

module.exports.execute = function (msg) {
    const { MessageAttachment } = require("discord.js")
    const ChartJSImage = require('chart.js-image');
    var Excel = require('exceljs');
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile('new.xlsx')
        .then(function () {
            var worksheet = workbook.getWorksheet(1);

            const dates = worksheet.getRow(1);
            worksheet.eachRow(function (row, rowNumber) {
                //console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
                ex = row.values[1]
               
                if (ex == undefined) { }
                else {

                    const tingg = ex.split(" ")

                    //console.log("this is the length: " + tingg.length)
                    var thinggg = tingg[0].charAt(0)
                    // console.log(thinggg + " tingggg")
                    if (0 < tingg.length && tingg.length < 2) {
                        var thinggggy = tingg[0].charAt(0).toUpperCase()


                        // console.log("This is thingg3: " + thingg3)
                    }
                    if (1 < tingg.length && tingg.length < 3) {
                        var thingg1 = tingg[0].charAt(0).toUpperCase()
                        var thingg2 = tingg[1].charAt(0).toUpperCase()
                        var thingg3 = thingg1 + thingg2
                        // console.log("This is thingg3: " + thingg3)
                    }
                    if (2 < tingg.length && tingg.length < 4) {
                        var thing1 = tingg[0].charAt(0).toUpperCase()
                        var thing2 = tingg[1].charAt(0).toUpperCase()
                        var thing3 = tingg[2].charAt(0).toUpperCase()
                        var thing4 = thing1 + thing2 + thing3
                        //  console.log("This is thingg3: " + thingg3)
                    }
                    if (3 < tingg.length && tingg.length < 5) {
                        var thig1 = tingg[0].charAt(0).toUpperCase()
                        var thig2 = tingg[1].charAt(0).toUpperCase()
                        var thig3 = tingg[2].charAt(0).toUpperCase()
                        var thig4 = tingg[3].charAt(0).toUpperCase()
                        var thig5 = thig1 + thig2 + thig3 + thig4
                        //  console.log("This is thingg3: " + thingg3)
                    }
                    if (4 < tingg.length && tingg.length < 6) {
                        var thg1 = tingg[0].charAt(0).toUpperCase()
                        var thg2 = tingg[1].charAt(0).toUpperCase()
                        var thg3 = tingg[2].charAt(0).toUpperCase()
                        var thg4 = tingg[3].charAt(0).toUpperCase()
                        var thg5 = tingg[4].charAt(0).toUpperCase()
                        var thig6 = thg1 + thg2 + thg3 + thg4 + thg5
                        //if thig6 === msg
                        //  console.log("This is thingg3: " + thingg3)
                    }
                   
                    //console.log(thingg3 + " This is also thingg 3" + msg)
                    if (thinggggy == msg[0] || thig5 == msg[0] || thig6 == msg[0] || thing4 == msg[0] || thingg3 == msg[0]) {
                       // console.log(rowNumber + " This is the row number")

                       // const row = worksheet.getRow(rowNumber);
                        console.log(row.values);

                       

                        for (var i = 2; i < row.values.length; i += 2) {

                            var y = [];
                            y.push(row.values[i]);
                        }
                        for (var i = 3; i < row.values.length; i += 2) {
                            console.log(row.values[i])
                            var x = [];
                            x.push(row.values[i]);
                        }

                        const line_chart = ChartJSImage().chart({
                            "type": "line",
                            "data": {
                                "labels": dates ,
                                "datasets": [
                                    {
                                        "label": "My First dataset",
                                        "borderColor": "rgb(255,+99,+132)",
                                        "backgroundColor": "rgba(255,+99,+132,+.5)",
                                        "data": y
                                    },
                                   
                            ]      
                        },
                            
                            "options": {
                                "title": {
                                    "display": true,
                                    "text": "Chart.js Line Chart"
                                },
                                "scales": {
                                    "xAxes": [
                                        {
                                            "scaleLabel": {
                                                "display": true,
                                                "labelString": "Month"
                                            }
                                        }
                                    ],
                                    "yAxes": [
                                        {
                                            "stacked": true,
                                            "scaleLabel": {
                                                "display": true,
                                                "labelString": "Value"
                                            }
                                        }
                                    ]
                                }
                            }
                        }) // Line chart
                            .backgroundColor('white')
                            .width(500) // 500px
                            .height(300); // 300px

                     //   run: async (client, interaction) => {
                            abc12 = line_chart.toURL();
                            console.log(abc12)
                            const attachment = new MessageAttachment(abc12)
                          //  interaction.followUp({ files: [attachment] })
                       // }

                    }
                }
            })
        });
}