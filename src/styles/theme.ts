import { extendTheme } from "@chakra-ui/react";
import { Button } from "./style";

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "#1E1E1E",
        color: "white",
      },
    },
  },
  components: {
    Button,
  },
});

export default theme;
