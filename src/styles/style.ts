import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "5px",
  },
  sizes: {
    sm: {
      px: "24px",
      py: "12px",
    },
    md: {
      px: "36px",
      py: "17px",
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
});
