import React from 'react'
import { IconButton, Nav, Navbar, Tag } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { BsCart4 } from 'react-icons/bs';
import { Icon } from '@rsuite/icons';
import { useNavigate } from "react-router-dom";
import { useCart } from '../misc/Cart.context';


const Navigation = () => {
  const nevigate = useNavigate()
  const [cartData] = useCart()
 
  console.log('test',cartData)
  const [TOTAL_AMOUNT, COUNT] = cartData;

  const navigateHome = () => {
    return nevigate("/")
  }

  const navigateCart = () => {
    return nevigate("/checkout")
  }

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