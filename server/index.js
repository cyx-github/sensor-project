const express = require("express");
const app = express();
app.get("/temperature",(reg,res)=>{
	res.send("24℃");
});
app.get("/humidity",(reg,res)=>{
	res.send("48%")
});
app.listen(3000,()=>{
	console.log("Server listening on port 3000");
});
