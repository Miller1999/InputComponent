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
      <h2>Icons</h2>
      <div style={{display:"flex"}}>
      <Input placeholder="Placeholder" startIcon/>
      <Input placeholder="Placeholder" endIcon/>
      </div>
      <h2>Value</h2>
      <Input placeholder="Placeholder" value="Text"/>
      <h2>Sizes</h2>
      <Input placeholder="Placeholder" size="sm"/>
      <Input placeholder="Placeholder" size="md"/>
      <Input placeholder="Placeholder" fullwidth/>
      <h2>Multiline</h2>
      <Input placeholder="Placeholder" multiline rows="4"/>
    </Fragment>
  );
}

export default App;
