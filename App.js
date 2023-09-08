import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello World! from React");
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

/*package.json is a configuration for NPM, it keeps a track of what(approx) version of the package is 
installed in our system.
Packages are also known as dependencies. 
There are 2 types of dependencies that we can install. 
1. Dev dependencies - required for development phases(npm install -D parcel)
2. Normal dependencies - used in production(npm install parcel) 

In package.json
^(caret) - upgrades to minor versions
~(tilde) - upgrades to major versions 

package-lock.json - keeps a track of exact version that is installed, i.e., it keeps a record of what
version is installed.
Integrity has a hash key. It is present there to compare that whatever version that is in our machine is 
the same version that is deployed in the production.

Node modules folder contains all the code that we fetched from NPM. It is kind of like a database. There's 
also a Parcel folder for our package.
Parcel has it's own dependencies, and those dependencies might have their own dependencies. This is known
as transitive dependencies.

If we have package-lock.json and package.json, we can regenerate the node modules.

npm is used to install a package.
npx means executing a package.

When hosting, code is coming from dist folder which had dependencies in parcel-cache. You can see the
compression and all other things parcel did. See index.html inside the dist folder and the normal index.html
you created for comparison.
Parcel-cache and dist is also automatically generated every time we build a Dev/Prod build.

We write everything in local and push it to GIT, the server fetches data from GIT. Server also does an npm 
install.
Lastly, end user will see it.

browserslist.dev, to make support in older browsers, configure package.json.
Add "browserslist".
*/