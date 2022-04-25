import React from 'react'
import Header from './Header';
import SortButton from './SortButton';
import EmployeeList from './EmployeeList';

 const EmployeeDiv = () => {
  return (
    <div>
        <Header  text="Employee Directory"/>
        <SortButton text="Sort Employees"/>
        <EmployeeList />
    </div>
  )
}

export default EmployeeDiv;
