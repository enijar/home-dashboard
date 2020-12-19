import { Wrapper } from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Flex({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
