import React from 'react'
import Header from './Header';
import SortButton from './SortButton';
import EmployeeList from './EmployeeList';

 const EmployeeDiv = ({ employees }) => {
  return (
    <div>
        <Header  text="Employee Directory"/>
        <SortButton text="Sort Employees"/>
        <EmployeeList employees={employees}/>
    </div>
  )
}

export default EmployeeDiv;
