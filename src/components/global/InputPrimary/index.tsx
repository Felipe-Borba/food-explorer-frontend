import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface Props extends InputProps {
  label?: string
}

export function InputPrimary(props: Props) {
  const { children,label,  ...rest } = props;

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Input {...rest} />
    </FormControl>
  );
}
