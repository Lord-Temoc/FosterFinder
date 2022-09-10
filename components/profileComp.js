import { useState } from 'react'
import {Avatar, Divider, Flex, Heading, IconButton} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import '../assets/ViperPfP.jpg'


export default function ProfileComponent(){
    
    return (
        <>
        <Flex
            pos='sticky'
            left='7'
            h='15vh'
            marginTop='2.5vh'

            boxShadow='0 4px 12px 0 rgba(0,0,0, 0.5)'
            w='200px'
            flexDir='column'
            justifyContents='space-between' 
        >
                            <Flex mt = {7} align = "center"> 
                                <Avatar left= '2' size="sm" src ="ViperPfP.jpg"/>
                                <Flex flexDir="column" ml = {4}>
                                    <Heading as= 'h3' size='sm' >Jhon Doe</Heading>
                                    <p color="gray"> Admin </p>
                                </Flex>
                </Flex>
        </Flex> 
        </> 
    )} 