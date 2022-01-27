const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");
const { urlencoded } = require("body-parser");
const path = require('path');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(bodyparser.json());
//app.use(express.urlencoded({extended: false}));
//const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(path.join(__dirname,'./')));


const mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Uvini@98',
    database : 'userdb'
});

mysqlConnection.connect(function(err){
    if(!err)
    console.log("DB connection succeed");
    else
    console.log("Connection failed! \n Error: " + JSON.stringify(err, undefined,2));
});
app.listen(3000,()=>console.log('express server is running at port no: 3000'));


// -------USER Table-CRUD------------

//POST(Create -> insert) admin sign up
app.post('/adminsignup', function(req, res) {
        //console.log("hello");
        console.log(req.body);

        var sql = `INSERT INTO admin VALUES ('${req.body.policeid}' , '${req.body.fname}', '${req.body.lname}','${req.body.phone}','${req.body.password}')`;
        mysqlConnection.query(sql, (err, res1) => {
            if (!err){
                
                const response = {
                    message:"Admin Data added to the database !"
                }
                res.send(response)
            }

            else{
                console.log(err);
            }
        });
        
    });

//POST(Create -> insert) user sign up
app.post('/usersignup', function(req,res){

        console.log(req.body);

        var sql = `INSERT INTO user VALUES ('${req.body.policeid}' , '${req.body.fname}', '${req.body.lname}','${req.body.division}','${req.body.phone}','${req.body.password}')`;
        mysqlConnection.query(sql, (err, res1) => {
            if (!err){  
                const response = {
                    message:"User data added to the database !"
                }
                res.send(response)
            }
            else{
                console.log(err);
            }
        });
});
    
//POST(Create -> insert) Vehicle Add permission
app.post('/vehicleaddpermission', function(req,res){
    console.log(req.body);

    var sql = `INSERT INTO vehicle VALUES ('${req.body.vehicleNo}' , '${req.body.company}', '${req.body.driverName}','${req.body.travelpur}','${req.body.route}')`;
    mysqlConnection.query(sql, (err, res1) => {
        if (!err){  
            const response = {
                message:"Vehicle data added to the database !"
            }
            res.send(response)
        }
        else{
            console.log(err);
        }
    });
       
    
});

//DELETE(Delete -> delete) a vehicle data from vehicle table
app.delete('/vehicledelete', function(req,res){
    console.log(req.body)

    var sql = `DELETE FROM vehicle WHERE vehicle_no = ('${req.body.vehicleNo}' )`;
    mysqlConnection.query(sql,(err,res1)=>{
        if (!err){  
            const response = {
                message:"Vehicle data deleted successfully !",
            }
            res.send(response)
        }
        else{
            console.log(err);
        }
    })
});

//GET(Read -> select) a vehicle data from vehicle table 
app.get('/vehiclesearch', function(req,res){
    console.log(req.body);

    var sql = `SELECT* FROM vehicle WHERE vehicle_no = ('${req.body.vehicleNo}' )`;
    mysqlConnection.query(sql,(err,res1)=>{
        if (!err){  
            const response = {
                message:"Vehicle data found !",
                //vehicleno: [req.body.vehicleNo]
                //vehicleNO:('${req.body.vehicleNo}')
            }
            res.send(response)
            //res.send(` vehicleno: ${row.vehicleNo},    Name: ${row.company}`);
        }
        else{
            console.log(err);
        }
    });
});

//PUT(Update -> update) an vehicle data in vehicle table
app.put('/vehicleupdate', function(req,res){
    console.log(req.body)

    //var sql = 'UPDATE vehicle SET driver_name = ? WHERE vehicle_no = ?',([req.body.driverName , req.body.vehicleNO]);

    mysqlConnection.query('UPDATE vehicle SET driver_name= ? WHERE vehicle_no= ?',[req.body.driverName,req.body.vehicleNo],(err,rows,fields)=>{
        if(!err)
        res.send('Updated successfully');
        else
        console.log(err);
    })
});





//GET(Read -> select) search a vehicle data from vehicle table 
app.get('/adminsearch/:PoliceId', (req,res)=>{
    mysqlConnection.query('SELECT * FROM admin WHERE PoliceId=222 ',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});






//GET(Read -> select) all user data from user table
app.get('/user', (req,res)=>{
    mysqlConnection.query('SELECT * FROM user',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        
        //console.log(rows);
        //console.log(rows[0].id);    ----- row 0's id
        else
        console.log(err);
    })
});

//GET(Read -> select) an user data from user table using PoliceId
app.get('/user/:policeId', (req,res)=>{
    mysqlConnection.query("SELECT * FROM user WHERE policeId = 45",(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});


/*mysqlConnection.query("INSERT INTO user (policeId,fname,lname,division,phoneno,password) VALUES (467,'xxx','xxx','xxx',1234,'xxxx')",(err,rows,fields)=>{
        if(!err)
        res.send('Successfully inserted to User table');
        else
        console.log(err);
     });*/



    /*var sql = 'INSERT INTO admin (PoliceId,fname,lname,phoneno,password) VALUES (${id}, ${fname},${lname},${phone},${password}")';
        res.send('Successfully inserted to User table');
        mysqlConnection.query("INSERT INTO admin (PoliceId,fname,lname,phoneno,password) VALUES ("${id} , ${fname},${lname},${phone},${password}")",(err,rows,fields)=>{
            if(!err)
            res.send('Successfully inserted to Admin Table');
            else
            console.log(err);
         });*/


/*app.use('/',(req,res)=>{
    res.sendFile('/index.html',{root:__dirname});
})*/