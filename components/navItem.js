import { useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Link,
  Icon,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  CalendarIcon,
} from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import "../assets/ViperPfP.jpg";
import "../pages/index.js";
import Router from "next/router";
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
} from "@chakra-ui/react";

export default function NavItem(props) {
  return (
    <>
      <Flex mt={30} flexDir="column" w="100%">
        <Flex>
          <div class="btn-group">
            <Button
              onClick={() => Router.push(props.url)}
              width={125}
              colorScheme="blue"
              marginTop={5}
              marginLeft={0}
            >
              Home
            </Button>
            <div>
              <Button
                onClick={() => Router.push("/Events")}
                width={125}
                colorScheme="blue"
                marginTop={5}
                marginLeft={0}
              >
                Events
              </Button>
            </div>
            <div>
              <Button
                onClick={() => Router.push("/Resources")}
                width={125}
                colorScheme="blue"
                marginTop={5}
                marginLeft={0}
              >
                Resources
              </Button>
            </div>
            <div>
              <Button
                onClick={() => Router.push("/Contacts")}
                width={125}
                colorScheme="blue"
                marginTop={5}
                marginLeft={0}
              >
                Contacts
              </Button>
            </div>
          </div>
        </Flex>
      </Flex>
    </>
  );
}
