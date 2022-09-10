import React, { useState } from 'react'
import {Avatar, Divider, Flex, Heading, IconButton} from '@chakra-ui/react'
import '../assets/ViperPfP.jpg'


export default function Navbar(){
    return (
        <>
        <Flex
            pos='sticky'
            left='5'
            h='95vh'
            marginTop='2.5vh'
            boxShadow='0 4px 12px 0 rgba(0,0,0, 1)'
            w='200px'
            flexDir='column'
            justifyContents='space-between' 
        >        
            <Flex>
                <Heading> Icons </Heading>
                <IconButton
                    background = "none"
                    mt = {5}
                />
            </Flex>
            <Flex
                p='5%'
                flexDir = 'column'
                w = '100%'
                alignText = 'flex-start'
                mb={4}
            >
                
                <Divider/>
 
                <Divider/>
                <Flex mt = {4} align = "center"> 
                                <Avatar size="sm" src ="ViperPfP.jpg"/>
                                <Flex flexDir="column" ml = {4}>
                                    <Heading as= 'h3' size='sm' >Jhon Doe</Heading>
                                    <p color="gray"> Admin </p>
                                </Flex>
                </Flex>
            </Flex>
        </Flex>


        </>
    )
}
