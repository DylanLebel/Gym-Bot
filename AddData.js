const Discord = require('discord.js');
module.exports.execute =  function (msg) {

        console.log("upper ting " + msg)
        var Excel = require('exceljs');
        var workbook = new Excel.Workbook();
      
    const fs = require("fs");

        workbook.xlsx.readFile('new.xlsx')
            .then(function () {

           

                var worksheet = workbook.getWorksheet(1);
                var row = worksheet.getRow(1);

            

                const cars2 = row.values.length



              
                console.log(msg + " this is message")
             
                bonds = msg[0]
                console.log(bonds)


                worksheet.eachRow(function (row, rowNumber) {
                    console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
                    ex = row.values[1]
                    
                    if (ex == undefined)
                    { }
                    else {
                    
                        const tingg = ex.split(" ")
                           
                        console.log("this is the length: " + tingg.length)
                        var thinggg = tingg[0].charAt(0)
                        console.log(thinggg + " tingggg")
                        if (0 < tingg.length && tingg.length < 2) {
                            var thinggggy = tingg[0].charAt(0).toUpperCase()
                          
                            
                            console.log("This is thingg3: " + thingg3)
                        }
                        if (1 < tingg.length && tingg.length < 3) {
                            var thingg1 = tingg[0].charAt(0).toUpperCase()
                            var thingg2 = tingg[1].charAt(0).toUpperCase()
                            var thingg3 = thingg1+thingg2
                          // console.log("This is thingg3: " + thingg3)
                        }
                        if (2 < tingg.length && tingg.length < 4) {
                            var thing1 = tingg[0].charAt(0).toUpperCase()
                            var thing2 = tingg[1].charAt(0).toUpperCase()
                            var thing3 = tingg[2].charAt(0).toUpperCase()
                            var thing4 = thing1 + thing2+thing3
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
                        console.log(thingg3 + " This is also thingg 3" + msg)
                        if (thinggggy == msg[0] || thig5 == msg[0]||thig6 == msg[0]||thing4 == msg[0]|| thingg3 == msg[0]) {
                            console.log(rowNumber + " This is the row number")

                            var row = worksheet.getRow(rowNumber);
                            row.getCell(cars2-2).value = msg[1]
                            row.getCell(cars2-1).value = msg[2]
                            row.commit();

                        }
                    }
                  

                });


              
                return workbook.xlsx.writeFile('new.xlsx');
            })
    }





