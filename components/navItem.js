import { useState } from 'react'
import {Avatar, Divider, Flex, Heading, IconButton} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Link,
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
                    <Link>
                        <MenuButton>
                            <Flex>
                                <p> mithun is gay</p>
                            </Flex>
                        </MenuButton>
                    </Link>
                    <Link>
                        <MenuButton>
                            <Flex>
                                <p> mithun is gay</p>
                            </Flex>
                        </MenuButton>
                    </Link>
                    <Link>
                        <MenuButton>
                            <Flex>
                                <p> mithun is gay</p>
                            </Flex>
                        </MenuButton>
                    </Link>
                    <Link>
                        <MenuButton>
                            <Flex>
                                <p> mithun is not(not) gay</p>
                            </Flex>
                        </MenuButton>
                    </Link>
                </Menu>

            </Flex>
        </>
    )
}