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
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineBook,
  AiOutlineContacts,
} from "react-icons/ai";
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

export default function NavItem() {
  return (
    <>
      <Flex flexDir="column" w="auto" margin="auto">
        <Flex>
          <div class="btn-group">
            <IconButton
              onClick={() => Router.push("/")}
              backgroundColor="#64A6BD"
              color="white"
              marginTop={5}
              marginLeft={0}
              icon={<AiOutlineHome size="45" />}
              borderRadius="50%"
              width="10vh"
              height="10vh"
              _hover={{
                background: "white",
                color: "#64A6BD",
                border: "2px",
              }}
            >
              Home
            </IconButton>

            <div>
              <IconButton
                onClick={() => Router.push("/Events")}
                backgroundColor="#64A6BD"
                color="white"
                marginTop={5}
                marginLeft={0}
                icon={<AiOutlineCalendar size="45" />}
                width="10vh"
                height="10vh"
                borderRadius="50%"
                _hover={{
                  background: "white",
                  color: "#64A6BD",
                  border: "2px",
                }}
              >
                Events
              </IconButton>
            </div>
            <div>
              <IconButton
                onClick={() => Router.push("/Resources")}
                backgroundColor="#64A6BD"
                color="white"
                marginTop={5}
                marginLeft={0}
                icon={<AiOutlineBook size="45" />}
                width="10vh"
                height="10vh"
                borderRadius="50%"
                _hover={{
                  background: "white",
                  color: "#64A6BD",
                  border: "2px",
                }}
              >
                Resources
              </IconButton>
            </div>
            <div>
              <IconButton
                onClick={() => Router.push("/Contacts")}
                backgroundColor="#64A6BD"
                color="white"
                marginTop={5}
                marginLeft={0}
                icon={<AiOutlineContacts size="45" />}
                width="10vh"
                height="10vh"
                borderRadius="50%"
                _hover={{
                  background: "white",
                  color: "#64A6BD",
                  border: "2px",
                }}
              >
                Contacts
              </IconButton>
            </div>
          </div>
        </Flex>
      </Flex>
    </>
  );
}
