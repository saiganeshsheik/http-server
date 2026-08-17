const express = require("express");
const app = express();
app.use(express.json());
const patient = [{
    name:"Alex",
    kidneys:[]
}]

app.get("/", function(req,res){
    const AlexKidneys = patient[0].kidneys;
    const numberOfKidneys = AlexKidneys.length;
    let numberOfhealthyKidneys = 0;
    for(let i =0; i<numberOfKidneys; i++){
        if(AlexKidneys[i].healthy){
            numberOfhealthyKidneys = numberOfhealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfhealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfUnhealthyKidneys,
        numberOfhealthyKidneys,

        message:"hello from feature branch AA and BB"

        

    })
});

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    patient[0].kidneys.push({
        healthy:isHealthy
    })

    res.json({
        reply:"done!"
    })
});

app.put("/", function(req,res){
    for(let i =0; i<patient[0].kidneys.length; i++){
        patient[0].kidneys[i].healthy = true
    }
    res.json({});
});

app.delete("/", function(req,res){
    if(patient[0].kidneys.length == 0){
        res.json({
            error:"no kidneys"
        })
    }else{
    const AlexKidneys = patient[0].kidneys;
    const NewKidneys = [];
    for(let i=0; i<AlexKidneys.length; i++){
        if(AlexKidneys[i].healthy){
            NewKidneys.push({
                healthy:true
            })
        }
    }
    patient[0].kidneys = NewKidneys;

    res.json({});}
})


app.listen(3000);

