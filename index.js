const express =require('express');
const app = express();
const port = 7500;
const path = require('path');
const bodyparser = require('body-parser');
app.listen(port,()=> {
    console.log(`Server is running on port http://localhost:${port}/`);
});
const mysql= require('mysql2');
const con = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'Kigalirabbits',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})
con.connect((err)=>{
    if(err) return console.log(err,"open xammp");
    return console.log("Connection successful")
})
app.use(express.static(path.join(__dirname, 'public'))); 
app.post('/contact.html',(req,res)=>{
    res.send("<h1>message successfully delivered</h1>");
})