import React from 'react'

 const EmployeeList = ( { employees }) => {
  return (
    <ul id="employee-list">
        {employees.map(e1 => 
            <h3 key={e1.phone}>{`${e1.name.first} ${e1.name.last}`}</h3>)}
    </ul>
  )
}

export default EmployeeList;
