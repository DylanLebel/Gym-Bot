

module.exports.execute = () =>{


    var Excel = require('exceljs');
    var workbook = new Excel.Workbook();

    workbook.xlsx.readFile('new.xlsx')
        .then(function () {

            var worksheet = workbook.getWorksheet(1);



            var row2 = worksheet.getRow(2);



            //worksheet.commit()
            var row = worksheet.getRow(1);
            const cars2 = row.values.length

            var cars4 = cars2 + 1

            /**
           
            var cars = "A" + cars2 + ":A" + (cars2 + 1)
            console.log(cars)
            worksheet.mergeCells(cars);
            */

            function colName(n) {
                var ordA = 'a'.charCodeAt(0);
                var ordZ = 'z'.charCodeAt(0);
                var len = ordZ - ordA + 1;

                var s = "";
                while (n >= 0) {
                    s = String.fromCharCode(n % len + ordA) + s;
                    n = Math.floor(n / len) - 1;
                }
                return s;
            }

            // Example:

            n = cars2 - 1
            console.log(n + ":" + colName(n) + "<br>");
            if (n == cars2 - 1) {
                partA = colName(n)
            }
            n = cars2
            if (n == cars2) {
                partB = colName(n)
            }

            partAA = partA.toUpperCase()
            partBB = partB.toUpperCase()
            console.log("This is partA and partB" + partAA + partBB)

            worksheet.mergeCells(partAA + '1:' + partBB + '1');
            //  return workbook.xlsx.writeFile('new.xlsx');

            row2.getCell(cars2).value = "Weight"
            row2.getCell(cars4).value = "Reps"
            row2.commit();




            cars3 = cars2 + 1
            console.log(cars3)



            var d = new Date();
            DateE = d.toLocaleDateString();
            console.log(cars2)
            row.getCell(cars2).value = DateE; // A5's value set to 5
            row.commit();
            return workbook.xlsx.writeFile('new.xlsx');
        })

  
      
    
} 