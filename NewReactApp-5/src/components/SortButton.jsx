import React from 'react'

 const SortButton = ({text, sortEmployees}) => {
  return (
    <button className='btn btn-primary' onClick={sortEmployees}>{text}</button>
  )
}

export default SortButton;
