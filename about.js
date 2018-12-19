const fs = require('fs');

$('#enter').on('click',function(){
    console.log("I Have been clicked");
    var student = 
    {
        name: $('#name').val(),
        grade: $('#grade').val(),
        subteam: $('#subteam').val()
    };
    var data = JSON.stringify(student);
    console.log(data);
    fs.writeFile('students.json', data, (err) => {  
        if (err) throw err;
        console.log('Data written to file');
    });
});