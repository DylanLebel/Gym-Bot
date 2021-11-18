
module.exports.execute = () => {


    var Excel = require('exceljs');
    var workbook = new Excel.Workbook();

    workbook.xlsx.readFile('Gym1.xlsx')
        .then(function () {
       
            var worksheet = workbook.getWorksheet(1);
            var row = worksheet.getRow(1);


         
            const cars2 = row.values.length

            /**
            var cars = "A" + cars2 + ":A" + (cars2 + 1)
            console.log(cars)
            worksheet.mergeCells(cars);
            */
            cars3 = cars2 + 1
            console.log(cars3)
            


            var d = new Date();
            DateE = d.toLocaleDateString();
            console.log(cars2)
            row.getCell(24).value = "Something"; // A5's value set to 5
            row.commit();
            return workbook.xlsx.writeFile('new.xlsx');
        })


}