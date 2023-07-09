import { Fragment } from "react";
import "./reset.css"
import GlobalStyle from "./Global";
import Input from "./components/Input";

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <h1>Inputs</h1>
      <h2>Input</h2>
      <Input placeholder="Placeholder"/>
      <h2>Error</h2>
      <Input placeholder="Placeholder" error/>
      <h2>Disabled</h2>
      <Input placeholder="Placeholder" disabled/>
      <h2>Helper Text</h2>
      <div style={{display:"flex"}}>
      <Input placeholder="Placeholder" helperText="Some interesting text"/>
      <Input placeholder="Placeholder" helperText="Some interesting text" error/>
      </div>

    </Fragment>
  );
}

export default App;
