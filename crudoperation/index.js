const storage = require('node-persist');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const jsonbody = bodyparser.json();
//initialize node persist
storage.init();
app.get("/employee",async(req,res)=>{
    const employees = await storage.getItem("employees");
    //res.send(employees);
    console.log(employees)
    let html=`<h1>Employee data</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th><th>Name</th><th>Email</th><th>Password</th>
                </tr>
            </thead>
    `
    const data= employees.forEach(ele=>{
        html+=
        `<tbody>
            <tr>
                <td>${ele.id}</td>
                <td>${ele.name}</td>
                <td>${ele.email}</td>
                <td>${ele.password}</td>
            </tr>
        </tbody>`
    })
    html+= '</table>';
    res.send(html);
})
app.get("/employee/test/:id",async(req,res)=>{
    const id= req.params.id;
    const employee = await storage.valuesWithKeyMatch('employees')
    console.log(employee);

})
app.get("/employee/:id",async(req,res)=>{
    const employees = await storage.getItem("employees");
    const id= req.params.id;
    res.send(employees.filter(x=>x.id==id));
})
app.post('/employee', jsonbody, async (req, res) => {

    const employees = await storage.getItem("employees");
    const newEmp = req.body;
    newEmp.id = employees ? employees.length + 1 : 1;
    await storage.setItem("employees", [...employees, newEmp]);
    res.send(employees);
})
app.listen(8080, () => {
    console.log("My Server Started..!")
})
