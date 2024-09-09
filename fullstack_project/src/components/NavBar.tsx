import React from 'react'
import logo from "../assets/logo.webp";
import {Stack, HStack, VStack, Image, Text} from '@chakra-ui/react';
import ColorModeSwitch from "./ColorModeSwitch"

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
        <Image src={logo} alt="Logo" boxSize="60px" />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar