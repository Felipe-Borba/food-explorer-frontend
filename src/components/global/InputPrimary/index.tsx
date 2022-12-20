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
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={leftIcon} />
        <Input {...rest} />
      </InputGroup>
    </FormControl>
  );
}
