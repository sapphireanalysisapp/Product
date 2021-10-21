const express=require('express');
const path=require('path');
const port=process.env.PORT||2620;
const app=express();
app.use(express.static(__dirname));
app.get('*',(req,res)=>
{ res.sendFile(path.resolve(__dirname,'index.html'))});
//app.listen(port);
app.listen(port, () => {
console.log('server started on port',port)
});
