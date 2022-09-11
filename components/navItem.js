import { useState } from 'react'
import {Avatar, Button, Divider, Flex, Heading, IconButton, ButtonGroup,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Link,} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {

  } from '@chakra-ui/react'
import '../assets/ViperPfP.jpg'
import "../pages/index.js"
import Router from 'next/router'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'


export default function NavItem (){

    return(<>
    <Flex
        mt={30}
        flexDir="column"
        w='100%'
        >
              <Flex>
                    <div class="btn-group">
                        <Popover>
                            <PopoverTrigger PopoverTrigger="hover">
                                <Button onClick={() => Router.push('/')} width={125} colorScheme='blue' marginTop={5} marginLeft={0}>Home</Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader>Home</PopoverHeader>
                            </PopoverContent>
                        </Popover>
                            
                                
                                <Button onClick={() => Router.push('/Events')} width={125} colorScheme='blue' marginTop={5} marginLeft={0}>Events</Button>
                                <Button onClick={() => Router.push('/Resources')} width={125} colorScheme='blue' marginTop={5} marginLeft={0}>Resources</Button>
                                <Button onClick={() => Router.push('/Contacts')} width={125} colorScheme='blue' marginTop={5} marginLeft={0}>Contacts</Button>
                    </div>
                        </Flex>


        </Flex>
    </>
)
        
        
}
