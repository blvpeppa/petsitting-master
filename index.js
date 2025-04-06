const express =require('express');
const app = express();
const port = 7500;
const path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); 
app.listen(port,()=> {
    console.log(`Server is running on port http://localhost:${port}/`);
});
app.post('/contact.html',(req,res)=>{
    res.send("<h1>message successfully delivered</h1>");
})