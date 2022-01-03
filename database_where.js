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
    con.query("SELECT * FROM projectdb WHERE vehicle_no = 'AB2234'", function(err,result,fields)
    {
        if(err) throw err;
        console.log(result);
    });


})