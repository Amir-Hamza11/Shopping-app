import React from 'react'
import { useEffect } from 'react'
import { Col, Panel, Row, Tag } from 'rsuite'
import DisplayCart from '../components/DisplayCart'
import MainPageLayout from '../components/MainPageLayout'
import { useCart } from '../misc/Cart.context'
import { useCartProducts } from '../misc/Custom-hook'
import { useProducts } from '../misc/Product.context'

const Checkout = () => {

  const products = useProducts()
  const [cartData, setCartData] = useCart()
  const [cartProducts, dispatch] = useCartProducts()

  const deleteProduct = (pId) => {
    dispatch({ type: 'REMOVE', productId: pId })
  }

  const onMinusClick = (pId) => {
    dispatch({ type: 'SUBTRACT', productId: pId })
  }
  const onPlusClick = (pId) => {
    dispatch({ type: 'ADD', productId: pId })
  }


  const subTotals = products.filter((item) =>
    cartProducts.includes(item.id)).map(({ id, price }) => {
      const count = cartProducts.filter(x => x === id).length;
      const subTotal = count * price;
      return subTotal;
    })

  const TOTAL_AMOUNT = subTotals.reduce((total, num) => total + num, 0);
  const COUNT = cartProducts.length;

  useEffect(() => {
    setCartData([TOTAL_AMOUNT, COUNT])

  }, [COUNT, TOTAL_AMOUNT, setCartData])

  // useEffect(()=>{
  //   update()
  // },[update])

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
            <p className='font-bolder' >Total Amount:</p>
            <Tag><p className='text-green' >{`${TOTAL_AMOUNT} USD`}</p></Tag>
          </Panel>}
        </Col>
      </Row>
    </MainPageLayout>
  )
}

export default Checkout