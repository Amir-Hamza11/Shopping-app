import React from 'react'
import { IconButton, Nav, Navbar } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { BsCart4 } from 'react-icons/bs';
import { Icon } from '@rsuite/icons';
import { useNavigate } from "react-router-dom";


const Navigation = () => {

  const nevigate = useNavigate()

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
      </Nav>
    </Navbar>
  )
}

export default Navigation