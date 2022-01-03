var mysql = require("mysql");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydata"

})

con.connect(function(err){
    if(err) throw err;
    var sql = "UPDATE projectdb SET vehicle_no = 'CAY5050' WHERE vehicle_no = 'CAY4050'";
    con.query(sql, function(err,result)
    {
        if(err) throw err;
        console.log("Table Updated");
    });


})