var mysql = require("mysql");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydata"

})

con.connect(function(err){
    
    if(err) throw err;
    //console.log("connected");
    con.query("SELECT * FROM projectdb", function(err,result,fields)
    {
        if(err) throw err;
        console.log(result);
    });

    /*con.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log("records inserted:" +result.affectedRows)
    })*/
})