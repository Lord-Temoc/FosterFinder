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


export default function NavItem (){

    return(<><Flex
        mt={30}
        flexDir="column"
        w='100%'
        >
            <Menu>
                
                    <MenuButton>
                        <Flex>
                            <ButtonGroup variant='outline'  spacing='6' flexDir='column'>
                                <Button width={125} colorScheme='blue' marginTop={5} marginLeft={0}>Home</Button>
                                <Button width={125} colorScheme='blue' marginTop={5} marginLeft={0}>Events</Button>
                                <Button width={125} colorScheme='blue' marginTop={5} marginLeft={0}>Resources</Button>
                                <Button width={125} colorScheme='blue' marginTop={5} marginLeft={0}>Contacts</Button>
                            </ButtonGroup>
                        </Flex>
                    </MenuButton>

            </Menu>

        </Flex>
    </>
)
        
        
}
/*
<><Flex
            mt={30}
            flexDir="column"
            w='100%'
            >
                <Menu>
                    
                        <MenuButton>
                            <Flex>
                                <ButtonGroup variant='outline'  spacing='6' flexDir='column'>
                                    <Button width={125} colorScheme='blue' marginTop={5} marginLeft={0}>Home</Button>
                                    <Button width={125} colorScheme='blue' marginTop={5}>Events</Button>
                                    <Button width={125} colorScheme='blue' marginTop={5}>Resources</Button>
                                    <Button width={125} colorScheme='blue' marginTop={5}>Contacts</Button>
                                </ButtonGroup>
                            </Flex>
                        </MenuButton>

                </Menu>

            </Flex>
        </>
    )
    */