import React from 'react'
import { Panel, IconButton, Tag } from 'rsuite'
import { Trash, Plus, Minus } from '@rsuite/icons';

const DisplayCart = ({ id, name, price, currency, img, deleteProduct, onPlusClick, onMinusClick, quantity }) => {

  const onDeleteClick = () => {
    deleteProduct(id)
  }

  const plusClick = () => {
    onPlusClick(id)
  }

  const minusClick = () => {
    onMinusClick(id)
  }


  return (
    <Panel shaded bordered bodyFill style={{ display: 'block' }}>
      <img src={img} height="150" width="240" style={{ objectFit: 'scale-down' }} alt='product' />

      <div style={{ display: 'inline-block' }} >

        <Panel >
          <h6 className='text-center' >{name}</h6>
          <div>
            <span className=' font-bolder' >{`Price: `}</span>
            <span className='text-green' >{`${price} ${currency}`}</span>
          </div>
          <div>
            <IconButton
              onClick={onDeleteClick}
              color="red"
              size='sm'
              appearance="primary"
              icon={<Trash />}
            />
            <div className='ml-3' style={{ display: 'inline-block' }}>
              <p className='font-bolder mb-3' >Quantity:</p>
              <IconButton size="md" icon={<Plus />} onClick={plusClick} />
              {quantity}
              <IconButton size="md" icon={<Minus />} onClick={minusClick} />
            </div>
            
            <div className='ml-3' style={{ display: 'inline-block' }}>
              <p className='font-bolder mb-3' >Sub Total:</p>
              <Tag size="lg" color='cyan' >{`${quantity * price} USD`}</Tag>
            </div>
          </div>
        </Panel>

      </div>
    </Panel>
  )
}

export default DisplayCart