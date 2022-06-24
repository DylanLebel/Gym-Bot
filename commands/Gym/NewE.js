const { Console } = require('console');
const Discord = require('discord.js');
module.exports.execute = function (msg, something) {

    console.log("upper ting " + msg)
    var Excel = require('exceljs');
    var workbook = new Excel.Workbook();

    const fs = require("fs");
    let RowTotal = 0
    workbook.xlsx.readFile('new.xlsx')
        .then(function () {



            var worksheet = workbook.getWorksheet(1);
            var row = worksheet.getRow(1);



            const cars2 = row.values.length




            //console.log(msg + " this is message")

          //  bonds = msg[0]
            //    console.log(bonds)

            
            worksheet.eachRow(function (row, rowNumber) {
                RowTotal++

                console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
                ex = row.values[1]

                if (ex == undefined) { }
                else { }

                console.log(rowNumber + " This is the row number")










            });
            if (something === undefined){ }
            else {
               
                RowTotal1 = (RowTotal + 1)
                var row = worksheet.getRow(RowTotal1)
                console.log(RowTotal + " After the row loop");

                console.log(RowTotal1 + " Rowtoal 1 and msg" + something);
                
                const cell = worksheet.getCell('A' + RowTotal1);
               

                cell.value = something

                row.commit();
                workbook.xlsx.writeFile('new.xlsx');

            }
        }







        )
}
