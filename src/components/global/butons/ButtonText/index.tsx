import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {}
export function ButtonText(props: Props) {
  const { children, ...rest } = props;

  return (
    <Button variant="link" fontSize="14px" color={"#FFFFFF"} {...rest}>
      {children}
    </Button>
  );
}
