import React from 'react'
import {useColorMode} from "@chakra-ui/react";
import {Stack, HStack, VStack, Image, Text} from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react'


const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <HStack>
        <Switch onChange={toggleColorMode} colorScheme="green" isChecked={colorMode === 'dark'} />
        <Text>{colorMode}</Text>
      </HStack>
    )
}

export default ColorModeSwitch