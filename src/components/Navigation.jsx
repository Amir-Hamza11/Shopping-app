import React from 'react'
import { IconButton, Nav, Navbar, Tag } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { BsCart4 } from 'react-icons/bs';
import { Icon } from '@rsuite/icons';
import { useNavigate } from "react-router-dom";
import { useCart } from '../misc/Cart.context';
import { useProducts } from '../misc/Product.context';


const Navigation = () => {
  const nevigate = useNavigate()
  const { cartProducts } = useCart()
  const products = useProducts()


  const navigateHome = () => {
    return nevigate("/")
  }

  const navigateCart = () => {
    return nevigate("/checkout")
  }

  const subTotals = products.filter((item) =>
    cartProducts.includes(item.id)).map(({ id, price }) => {
      const count = cartProducts.filter(x => x === id).length;
      const subTotal = count * price;
      return subTotal;
    })

  const TOTAL_AMOUNT = subTotals.reduce((total, num) => total + num, 0);
  const COUNT = cartProducts.length;

  return (
    <Navbar>
      <Nav pullRight >
        <IconButton icon={<HomeIcon />} onClick={navigateHome} />
        <IconButton icon={<Icon as={BsCart4} size="1em" />} onClick={navigateCart} />
        <Tag>{COUNT}</Tag>
        <Tag>{`${TOTAL_AMOUNT} USD`}</Tag>
      </Nav>
    </Navbar>
  )
}

export default Navigation