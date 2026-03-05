import express from 'express';
import { Employees } from './Employee.js';

const app = express();
const port = 3000

app.use(express.json());


app.get("/employees/:department", (req, res) => {
    const dept = req.params.department;
    let arr1 = [];
    for (let i = 0; i < Employees.length; i++) {
        if (Employees[i].department === dept) {
            arr1.push(Employees[i]);
            res.status(200).send(arr1);
        }
    }
    if (arr1.length > 0) {
        res.status(200).send(arr1);
    } else {
        res.status(404).send({ message: "No employees found in this department" });
    }
});


app.post("/pemployess/post", (req, res) => {

    const newPost = req.body;   
    console.log(newPost);
    if(newPost)
    {
    res.status(201).json({message: "Data sent Successfullyy ",data: newPost})
    }
    else{res.status(404).send({message:"Da"})}
});

app.delete("/demployees/:name/:id", (req, res) => {

    const name = req.params.name;
    const id = req.params.id;
    
    res.send(`Delete Employees ${name} and ID: ${id}`);

});


app.listen(port , ()=>
        {
                console.log(`Server Is Running On http://localhost:${port}`)
        });