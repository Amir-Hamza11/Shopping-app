import React from 'react'
import { Button, Panel, Tag } from 'rsuite'

const DisplayProducts = ({ id, name, price, currency, thumbnail, inStock, addProduct, cartProducts }) => {

    let isProductExist = cartProducts.includes(id)

    const onAddClick = () => {
        addProduct(id)
        isProductExist = cartProducts.includes(id)
    }

    return (
        <Panel shaded bordered bodyFill
            style={{ display: 'inline-block', width: 240 }}
            className="ml-2 mb-2 "
        >
            <img src={thumbnail}
                height="160" width="240"
                style={{ objectFit: 'scale-down' }}
                alt='Product' />

            <Panel header={name} bordered className='ml-1 mr-1 mt-1 mb-1'>
                <div>
                    <Tag>
                        <span className='text-black-70'  >
                            {`Price: `}
                        </span>
                        <span className='text-green' >
                            {`${price} ${currency}`}
                        </span>
                    </Tag>
                    <Tag color={`${inStock ? "green" : "red"}`} >
                        {`${inStock ? "In stock" : "Out of stock"}`}
                    </Tag>
                </div>
                <div className=' text-center mt-2' >
                    <Button
                        appearance='primary'
                        disabled={!inStock} size="sm"
                        color={`${isProductExist ? 'red' : 'blue'}`}
                        onClick={onAddClick}
                    >
                        {`${isProductExist ? 'Remove from cart' : 'Add to cart'}`}
                    </Button>
                </div>
            </Panel>
        </Panel>


    )
}

export default DisplayProducts