import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#F8FFE5",
      },
    }),
  },
});

module.exports = { theme };
