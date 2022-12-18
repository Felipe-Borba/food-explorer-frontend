import { Container } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export function ButtonPrimary(props: Props) {
  const { children, ...rest } = props;

  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}