/*
1)import all the requires
2)Initialize the Express app
3)Middleware setup
4) Database connection setup
5)Connect to the database
6)Define a simple route
7) Define a route to fetch data from the database
8) Define a route to insert/update/delete data into the database
9)start the server 
*/

//1)
const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const mysql=require("mysql");

//2)
const app=express();
const port=3000;

//3)
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//4)
const db=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"portfolio_front"
})

//5)
db.connect(err=>{
  if(err){
    console.error("there is an error to connect",err.stack);
    return;
  }
  console.log("successfully connected....!!!");
})

//6)
app.get('/',(req,res)=>{
  res.send("hello world")
})

//7)
app.get('/api/data',(req,res)=>{
  const query="SELECT * FROM data"
  db.query(query,(err,result)=>{
    if(err)
      {
        res.status(500).json({error:err.message});
        return;
      }
      res.json(result)
  })
})

//8)

app.post('.api/data',(req,res)=>{
  const {name,email,message}=req.body;
  const query='INSERT INTO data (name, email, message) VALUES (?, ?, ?)';
  db.query(query,[name,email,messege],(err,result)=>{
    if(err){
      res.status(500).json({error:err.message});
      return;
    }
    res.json({id:result.insertId,name,email,message})
  })
})
app.put('/api/data',(req,res)=>{
  const{name,email,message}=req.body;
  const query="UPDATE INTO data (name, email, message) VALUES (?, ?, ?)";
  db.query(query,[name,email,message],(err,result)=>{
    if(err){
      res.status(500).json({error:err.message})
    }
    res.json({name,email,message});
  })
})

//9)
app.listen(port,()=>{
  console.log("congratulations you are connected")
})