import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {}
export function ButtonPrimary(props: Props) {
  const { children, ...rest } = props;

  return (
    <Button
      variant="solid"
      px="32px"
      fontSize="14px"
      bgColor={"#92000E"}
      {...rest}
    >
      {children}
    </Button>
  );
}
