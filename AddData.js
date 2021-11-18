const Discord = require('discord.js');
module.exports.execute =  function (msg) {

        console.log("upper ting " + msg)
        var Excel = require('exceljs');
        var workbook = new Excel.Workbook();
      
    const fs = require("fs");

        workbook.xlsx.readFile('Gym1.xlsx')
            .then(function () {

           

                var worksheet = workbook.getWorksheet(1);
                var row = worksheet.getRow(1);

            

                const cars2 = row.values.length



                fs.readFile("./Excersises.json", "utf8", (err, jsonString) => {
                    if (err) {
                        console.log("File read failed:", err);
                        return;
                    }
                  //  console.log("File data:", jsonString);
                    abc = JSON.parse(jsonString)
                    //jsonString.forEach(function (item, index, array) {
                   //     console.log(item, index)
                  //  })
                    /**
                    for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
                    var boop = jsonString[0]
                    abc1= abc[0].charAt(0)
                    console.log("boop" + abc1);
              */
              });
              
                console.log(msg + " this is message")
             
                bonds = msg[0]
                console.log(bonds)


                worksheet.eachRow(function (row, rowNumber) {
                    console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
                    ex = row.values[1]
                    
                    if (ex === undefined)
                    { }
                    else {
                      
                        const tingg = ex.split(" ")
                        console.log("this is the length: " + tingg.length)
                        var thinggg = tingg[0].charAt(0)
                        console.log(thinggg + " tingggg")

                        if (1 < tingg.length && tingg.length < 3) {
                            var thingg1 = tingg[0].charAt(0)
                            var thingg2 = tingg[1].charAt(0)
                            var thingg3 = thingg1+thingg2
                           console.log("This is thingg3: " + thingg3)
                        }
                        if (2 < tingg.length && tingg.length < 4) {
                            var thing1 = tingg[0].charAt(0)
                            var thing2 = tingg[1].charAt(0)
                            var thing3 = tingg[2].charAt(0)
                            var thing4 = thing1 + thing2+thing3
                          //  console.log("This is thingg3: " + thingg3)
                        }
                        if (3 < tingg.length && tingg.length < 5) {
                            var thig1 = tingg[0].charAt(0)
                            var thig2 = tingg[1].charAt(0)
                            var thig3 = tingg[2].charAt(0)
                            var thig4 = tingg[3].charAt(0)
                            var thig5 = thig1 + thig2 + thig3 + thig4
                            //  console.log("This is thingg3: " + thingg3)
                        }
                        if (4 < tingg.length && tingg.length < 6) {
                            var thg1 = tingg[0].charAt(0)
                            var thg2 = tingg[1].charAt(0)
                            var thg3 = tingg[2].charAt(0)
                            var thg4 = tingg[3].charAt(0)
                            var thg5 = tingg[4].charAt(0)
                            var thig6 = thg1 + thg2 + thg3 + thg4 + thg5 
                            //  console.log("This is thingg3: " + thingg3)
                        }
                        console.log(thingg3 + " This is also thingg3")
                        if (thig5 === msg || thig6 === msg || thing4 === msg || thingg3 === msg) {
                            console.log(rowNumber + " This is the row number")
                        }
                    }
                    //Do whatever you want to do with this row like inserting in db, etc
                    if (bonds === (row.values[1])) {

                        var row = worksheet.getRow(rowNumber);
                        row.getCell(cars2).value = "testubrsdtfhrsy"; // A5's value set to 5
                        row.commit();
                        return workbook.xlsx.writeFile('new.xlsx');

                    }

                });


              
                return workbook.xlsx.writeFile('new.xlsx');
            })
    }





