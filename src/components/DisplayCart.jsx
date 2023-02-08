import React, { useState } from 'react'
import { Panel, IconButton } from 'rsuite'
import { Trash, Plus, Minus } from '@rsuite/icons';

const DisplayCart = ({ id, name, price, currency, img, deleteProduct, decrQuantity, incrQuantity }) => {

  const [quantity, setQuantity] = useState(1)

  const onDeleteClick = () =>{
    deleteProduct(id)
  }

  const plusClick = ()=>{
    if(quantity < 10){
      setQuantity(quantity + 1)
    }
    incrQuantity(price, quantity)

  }

  const minusClick = ()=>{
    if(quantity !== 1){
      setQuantity(p => p-1)

    }
    decrQuantity(price, quantity)
  }

  return (
    <Panel shaded bordered bodyFill style={{ display: 'flex' }}>
      <img src={img} height="150" width="240" style={{ objectFit: 'scale-down' }} alt='product' />

      <div style={{ display: 'inline-block' }} >

        <Panel header={name} >
          <div>
            <small className=' font-bolder' >{`Price: `}</small>
            <small className='text-green' >{`${price} ${currency}`}</small>
          </div>
          <div>
            <IconButton
              onClick={onDeleteClick}
              color="red"
              appearance="primary"
              icon={<Trash />}
            >
              Remove
            </IconButton>

            <IconButton icon={<Plus/>} onClick={plusClick} >
              
            </IconButton>
            {quantity}
            <IconButton  icon={<Minus/>} onClick={minusClick} >

            </IconButton>
          </div>
        </Panel>

      </div>
    </Panel>
  )
}

export default DisplayCart