import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React element</span>

const Title = () => (
    <h1 className="head" tabIndex="5">
        Nicely Done
    </h1>
);

//const data = api.getData();
/* If this API is a malicious API then attacker can read information or send abrupt code. This is known
as cross-side scripting.
Code gets executed below in HeadingComponent function.

JSX can escape this. It sanitizes the data before executing. */

const HeadingComponent = () => (
    <div id="container">
        {Title()} //can call the title function directly
        <Title/>
        <Title></Title> //All are same thing
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
