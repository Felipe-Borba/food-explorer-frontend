import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";

interface Props extends InputProps {
  label?: string;
  leftIcon?: React.ReactNode;
}

export function InputPrimary(props: Props) {
  const { children, leftIcon, label, ...rest } = props;

  return (
    <FormControl>
      {label && (
        <FormLabel
          fontSize="16px"
          fontFamily="Roboto"
          fontWeight="400"
          color="#C4C4CC"
        >
          {label}
        </FormLabel>
      )}
      <InputGroup>
        {leftIcon && (
          <InputLeftElement
            pointerEvents="none"
            children={leftIcon}
            alignItems="flex-end"
          />
        )}
        <Input py="16px" px="14px" h="48px" fontSize="16px" {...rest} />
      </InputGroup>
    </FormControl>
  );
}
