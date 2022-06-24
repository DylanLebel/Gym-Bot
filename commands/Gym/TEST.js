
module.exports.execute = () => {


    var Excel = require('exceljs');
    var workbook = new Excel.Workbook();

   
    workbook.xlsx.readFile('new.xlsx')
        .then(function () {
            var worksheet = workbook.getWorksheet(1);
            worksheet.eachRow(function (row, rowNumber) {
                console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values[1]));



            });
        })
        

 
                //  return workbook.xlsx.writeFile('new.xlsx');
    
        


}