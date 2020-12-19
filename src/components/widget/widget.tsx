import { Wrapper } from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[];
  style?: object;
};

export default function Widget({ children, style = {} }: Props) {
  return <Wrapper style={style}>{children}</Wrapper>;
}
