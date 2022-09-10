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

    return(
        <><Flex
            mt={30}
            flexDir="column"
            w='100%'
            >
                <Menu>
                    
                        <MenuButton>
                            <Flex>
                                <Button colorScheme='teal' variant='ghost'>
                                    Button  
                                </Button>
                            </Flex>
                        </MenuButton>
                    
                    <Link>
                        <MenuButton>
                            <Flex>
                                <Button colorScheme='teal' variant='ghost'>
                                    Button  
                                </Button>
                            </Flex>
                        </MenuButton>
                    </Link>
                    <Link>
                        <MenuButton>
                            <Flex>
                                <Button colorScheme='teal' variant='ghost'>
                                    Button  
                                </Button>
                            </Flex>
                        </MenuButton>
                    </Link>
                    <Link>
                        <MenuButton>
                            <Flex>
                                <Button colorScheme='teal' variant='ghost'>
                                    Button  
                                </Button>
                            </Flex>
                        </MenuButton>
                    </Link>
                </Menu>

            </Flex>
        </>
    )
}