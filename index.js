const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/',(req,res) => {res.send('Welcome to zcart');})
app.post('/',(req,res) => {
    console.log(req.body); 
    res.json({status:"executed"});
})

app.post('/as',(req,res) => {
    let d1=req.body.data; 
    let d2=d1.split(":");
    let d3=d2[0].slice(0,3);
    console.log(d3+":"+d2[1]);
     
    res.json({status:"executed"});
})

app.listen(port, () => {console.log(`server running on ${port}`)});

//callback