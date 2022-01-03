var mysql = require("mysql");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydata"

})

con.connect(function(err){
    if(err) throw err;
    var sql = "DROP TABLE projectdb";
    con.query(sql, function(err,result)
    {
        if(err) throw err;
        console.log("Table Deleted");
    });


})