import React from 'react'
import { Panel, IconButton, Tag, Avatar } from 'rsuite'
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

      <Avatar
        src={img} size='lg' alt='product'
        style={{ display: 'inline-block', margin: "5%" }}
      />

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
              <p className='font-bolder mb-3' >Quantity</p>

              <IconButton size="sm" icon={<Plus />} onClick={plusClick} />
              <Tag>{quantity}</Tag>
              <IconButton size="sm" icon={<Minus />} onClick={minusClick} />
            </div>

            <div className='ml-3' style={{ display: 'inline-block', }}>
              <p className='font-bolder mb-3' >Sub Total:</p>
              <Tag size="sm" color='orange' >{`${quantity * price} USD`}</Tag>
            </div>

          </div>
        </Panel>

      </div>
    </Panel>
  )
}

export default DisplayCart