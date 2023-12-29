const express=require('express')
const application=express()
application.use(express.json())
const db = require("./models");


application.post('/',async(req,res)=>{
    let data=await db.account.create({
        companyName:"sdghgshfs",
        website:"www.nexsales.com",
        empSize:55,
        empRange:"51 - 200",
        revenu:5234,
        revenueRange: "$1M - $10M"

    })
    console.log(data);
    res.status(200).send(data)
})

application.listen(9000,()=>{
    console.log("server run on 9000 port ");
})