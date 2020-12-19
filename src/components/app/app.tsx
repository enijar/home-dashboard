import { Switch, Route } from "react-router-dom";
import { Wrapper } from "./styles";
import Style from "../style/style";
import Scroll from "../scroll/scroll";
import Dashboard from "../../screens/dashboard/dashboard";

export default function App() {
  return (
    <>
      <Style />
      <Wrapper>
        <Scroll>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Scroll>
      </Wrapper>
    </>
  );
}
