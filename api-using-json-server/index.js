const storage = require('node-persist');
const express = require('express');
const app = express();
storage.init();
//const bodyparser = require('body-parser');// const jsonbody = bodyparser.json();
app.use(express.json());//initialize node persiststorage.init();
// to add new students
app.post('/student', async (req, res) => {
    const students = await storage.getItem("students") || [];
    const newStud = req.body;
    newStud.id = students ? students.length + 1 : 1;
    await storage.setItem("students", [...students, newStud]);
    res.send(students);
})// to get all 

app.get("/student", async (req, res) => {
    const students = await storage.getItem("students");    //res.send(employees);        
    let html1 = `<h1>Employee data</h1>        
            <table>            
                <thead>                
                    <tr>                    
                        <th>Student Id :</th>                    
                        <th>Student Name :</th>                    
                        <th>GPA :</th>               
                    </tr>            
                </thead>    `

    const data = students.filter(ele => {
        html1 += `<tbody>            
                    <tr>                
                        <td>${ele.id}</td>                
                        <td>${ele.name}</td>                
                        <td>${ele.gpa}</td>            
                    </tr>        
                </tbody>` })
    html1 += '</table>';
    res.send(html1);
});// to get a specific 
app.get("/student/:id", async (req, res) => {
    const students = await storage.getItem("students");
    const id = req.params.id;
    res.send(students.filter(x => x.id == id));
});

// to get a student based on 

app.get("/bestgpa", async (req, res) => {
    const students = await storage.getItem("students");
    let bestgpa = students[0];
    for (let i = 1; i < students.length; i++) {
        if (students[i].gpa > bestgpa.gpa) { bestgpa = students[i]; }
    }
    // let bestgpa = students.filter(function(ele){        
    //     if(ele.gpa == Math.max(req.params.gpa)){           
    //          return ele;        };    })    
    res.send(bestgpa.id + " " + bestgpa.name + " " + bestgpa.gpa);
});


app.listen(5000, () => {
    console.log("Server Is been Started Successfully...!")
});