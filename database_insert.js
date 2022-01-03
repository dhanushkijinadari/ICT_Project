var mysql = require("mysql");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydata"

})

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql="INSERT INTO projectdb (vehicle_no,driver_name,route,valid_date) VALUES ?";
    var values=[
        ['CAY4005','uvini','colombo to horana','2022.03.01'],
        ['CAY4050','perera','colombo to matara','2022.01.10'],
        ['AB2234','sunil','colombo to puttalam','2021.12.31']
    ]

    con.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log("records inserted:" +result.affectedRows)
    })
})