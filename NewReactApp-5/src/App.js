import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import  EmployeeDiv  from './components/EmployeeDiv';

function App() {

  const [employees, setEmployees] = useState([]);

  let apiData = []

  useEffect(() => {
    const getEmployees = async () => {
    const apiEmployees = await fetchEmployees();

    setEmployees(apiEmployees);
    }
    getEmployees();
    console.log("getEmployees");
  }, [])

  const fetchEmployees = async () => {
     

     const res = await fetch("https://randomuser.me/api/?results=10");

     const data = await res.json();

     return data["results"];

     

    
     
 
     
  }

  fetchEmployees();

  console.log(employees);

  const sortEmployees = () => {
    console.log("employees sorted");
  }



  

  

  return (
    <div className="App">
     <EmployeeDiv  employees={employees} sortEmployees={sortEmployees}/>
    </div>
  );
}

export default App;
