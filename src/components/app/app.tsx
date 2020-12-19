import { Switch, Route } from "react-router-dom";
import { Wrapper } from "./styles";
import Style from "../style/style";
import Dashboard from "../../screens/dashboard/dashboard";

export default function App() {
  return (
    <>
      <Style />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Wrapper>
    </>
  );
}
