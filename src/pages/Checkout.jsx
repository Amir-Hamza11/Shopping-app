import React from 'react'
import { Col, Panel, Row, Tag } from 'rsuite'
import DisplayCart from '../components/DisplayCart'
import MainPageLayout from '../components/MainPageLayout'
import { useCart } from '../context/Cart.context'
import { useProducts } from '../context/Product.context'



const Checkout = () => {

  const products = useProducts()
  const { deleteProduct1, onMinusClick1, onPlusClick1, cartProducts } = useCart()

  const deleteProduct = (pId) => {
    deleteProduct1(pId)
  }

  const onMinusClick = (pId) => {
    onMinusClick1(pId)
  }
  const onPlusClick = (pId) => {
    onPlusClick1(pId)
  }

  const subTotals = products.filter((item) =>
    cartProducts.includes(item.id)).map(({ id, price }) => {
      const count = cartProducts.filter(x => x === id).length;
      const subTotal = count * price;
      return subTotal;
    });

  const TOTAL_AMOUNT = subTotals.reduce((total, num) => total + num, 0);

  return (
    <MainPageLayout>
      <Row>
        <Col sm={20} md={20} lg={20} >
          <Panel >
            {cartProducts.length > 0 &&
              products.filter((item) =>
                cartProducts.includes(item.id)).map(({ id, name, price, currency, thumbnail }) => (
                  <DisplayCart
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    currency={currency}
                    img={thumbnail}
                    deleteProduct={deleteProduct}
                    onMinusClick={onMinusClick}
                    onPlusClick={onPlusClick}
                    quantity={cartProducts.filter(x => x === id).length}
                  />
                ))}

            {cartProducts.length === 0 &&
              <h4 className='text-center mt-3' >Cart is empty...</h4>}
          </Panel>
        </Col>
        <Col sm={4} md={4} lg={4} >
          {<Panel bordered shaded >
            <p className='font-bolder' >Total</p>
            <Tag color='green' >{`${TOTAL_AMOUNT} USD`}</Tag>
          </Panel>}
        </Col>
      </Row>
    </MainPageLayout>
  )
}

export default Checkout