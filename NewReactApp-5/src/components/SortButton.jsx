import React from 'react'

 const SortButton = ({text, sortEmployees}) => {
  return (
    <button className='btn btn-primary' id="employee-sort-button" onClick={sortEmployees}>{text}</button>
  )
}

export default SortButton;
