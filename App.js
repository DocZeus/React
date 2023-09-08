const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World! from React");
//{} this is the place to give attributes 
//props are attributes({}) and children(message)
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //render is converting the object into the h1 tag

//Nested
/* 
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div>

ReactElement(Object) => HTML(Browser Understands)
*/

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I'm h1 tag")));
const head1 = ReactDOM.createRoot(document.getElementById("head1"));
head1.render(parent);

/* 
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>
*/
//If 2 children/siblings are needed then use an array
const par = React.createElement("div", { id: "par" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")]));
const head2 = ReactDOM.createRoot(document.getElementById("head2"));
head2.render(par);

/*
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="parent">
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>
</div>
*/

const pare = React.createElement("div", { id: "pare" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")]),
    ]);
const head3 = ReactDOM.createRoot(document.getElementById("head3"));
head3.render(pare);

//JSX exists for easier coding