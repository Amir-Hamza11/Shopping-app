import React from 'react'
import DisplayCart from '../components/DisplayCart'
import MainPageLayout from '../components/MainPageLayout'
import { useCartProducts } from '../misc/Custom-hook'
import { useProducts } from '../misc/Product.context'

const Checkout = () => {

  const products = useProducts()
  const [cartProducts, dispatch] = useCartProducts()


  const deleteProduct = (pId) => {
    dispatch({ type: 'REMOVE', productId: pId })
  }

  const incrQuantity =(price, quantity)=>{
    console.log(price, quantity)
  }

  const decrQuantity =(price, quantity)=>{
    console.log(price, quantity)
  }


  return (
    <MainPageLayout>
      {cartProducts.length > 0 && products.filter((item) => cartProducts.includes(item.id)).map(({ id, name, price, currency, thumbnail }) => (
        <DisplayCart
          key={id}
          id={id}
          name={name}
          price={price}
          currency={currency}
          img={thumbnail}
          deleteProduct={deleteProduct}
          incrQuantity={incrQuantity}
          decrQuantity={decrQuantity}
        />
      ))}

      {cartProducts.length === 0 && <h4 className='text-center mt-3' >Cart is empty...</h4>}
    </MainPageLayout>
  )
}

export default Checkout