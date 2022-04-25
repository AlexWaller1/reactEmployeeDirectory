import React from 'react'
import Header from './Header';
import SortButton from './SortButton';
import EmployeeList from './EmployeeList';

 const EmployeeDiv = ({ employees, sortEmployees }) => {
  return (
    <div>
        <Header  text="Employee Directory"/>
        <SortButton text="Sort Employees" sortEmployees={sortEmployees}/>
        <EmployeeList employees={employees}/>
    </div>
  )
}

export default EmployeeDiv;
