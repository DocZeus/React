import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement-JS Object => HTMLElement(render)
//It is an object at the end of the day. When we render it then it becomes a HTML element.

const heading = React.createElement("h1", { id: "heading" }, "Hello World! from React");

//Time to use JSX(JSX is not a part of React).
//It is an HTML or XML like syntax.
//JSX is a convention where we merge HTML and JS tags.

//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsx = <h1 id="heading">Namaste React using JSX</h1>;
const jsxhead = (
    <h1 className="heading" tabIndex="1">
        Namaste React using JSX
    </h1>
);
//If you want to write JSX in multiple lines, then it has to be in parenthesis. (code)
//Browsers won't understand this, parcel is helping.
//Not html, but JSX
console.log(jsx);

//JSX is transpiled(converted to the code which Browsers can understand) before it reaches the JS Engine.
/* Parcel gives transpiling code task to Babel.
Babel is converting this code to run in Browsers.
Babel is not created by Facebook. */

/*heading===jsx, both will do the same thing. heading is how you write in react core and jsx is how
you write react in JSX Syntax. */

//No more writing React.createElement now. Time for JSX.

/* React Components - 2 types
1. Class Based Component - OLD way of writing code(uses JS classes)
2. Functional Component - NEW way of writing code(uses JS functions to create classes) */

//React Functional Component - It is a function that returns some piece of JSX code.

//Capital letter in the variable when using functional component

const fn = () => true; //a.k.a shorthand writing

const fn2 = () => {
    return true;
};
//Both above codes are same.

const Heading = () => {
    return <h1>Namaste React Functional Component.</h1>;
};

const Heading2 = () => <h1>Namaste React Functional Component.</h1>;
//Both above codes are same.

//Can be nested

const Heading3 = () => (
    <div id="container">
        <h1 className="heading">Namaste React Functional Component.</h1>
    </div>
);

const Title1 = function(){
    return (
        <h1 className="head" tabIndex="5">
            Namaste React Using JSX
        </h1>
    );
};
//Normal Function
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React Using JSX
    </h1>
);
//Can create normal functions but arrow functions is the norm.

const HeadingComponent = () => (
    <div id="container">
        <Title />  //Insert component
        {title}     //Insert element
        <h2>{console.log("React")}</h2> //Will display in console
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);
//This is component composition.
//Inserting components into a function(another component).

const title = (
    <h1 className="head" tabIndex="5">
        Nicely Done
        <HeadingComponent/>
    </h1>
);
//Can include functions or elements inside element.
//Make sure the order of code, HeadingComponent should be initialized 1st or it will throw an error.
//Just an example, don't put div inside h1, use proper HTML.
root.render(title);

const HeadingComponent1 = () => (
    <div id="container">
        {Title()} //can call the title function directly
        <Title/>
        <Title></Title> //All are same thing
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading3/>);