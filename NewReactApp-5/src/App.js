import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import  EmployeeDiv  from './components/EmployeeDiv';

function App() {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {

     const res = await fetch("https://randomuser.me/api/?results=10");

     const data = await res.json();

     console.log(data["results"].length);

     let randomId = Math.floor(Math.random() * 50000);

     let i = 0;

     let apiData = [];

     for (; i < data["results"].length; i++) {
       let newEmployee = {
         id: randomId,
         firstName: data["results"][i].name.first,
         lastName: data["results"][i].name.last
       };
       apiData.push(newEmployee);
     }
     
    console.log(apiData)
     
  }

  

  

  return (
    <div className="App">
     <EmployeeDiv />
    </div>
  );
}

export default App;
