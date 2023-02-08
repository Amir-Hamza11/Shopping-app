import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from 'rsuite';


const DisplayCategory = ({ id, name, description }) => {
  const navigate = useNavigate()

  const onButtonClick = () => {
    navigate(`/category/${id}`)
  }

  return (
    <div className='padded' >
      <Button block color="blue" appearance="ghost" onClick={onButtonClick} >
        <h3>{name}</h3>
        <p>{description}</p>
      </Button>
    </div>
  )
}

export default DisplayCategory