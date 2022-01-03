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
    con.query("DELETE FROM projectdb WHERE vehicle_no = 'AB2234'", function(err,result,fields)
    {
        if(err) throw err;
        console.log("Number of rows deleted" + result.affectedRows);
    });


})