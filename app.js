import React from "react";
import ReactDOM from "react-dom/client";



// const heading = React.createElement("h1",{
//     id : "title",
// },"hello from react");
// console.log(heading);

// const heading1 = React.createElement("h1",{
//     id : "title,"
// },"Heading 1");

// const heading2 = React.createElement("h2",{
//     id : "title",
// },"Heading 2");

// const container = React.createElement("div",{
//     id:"container",
// },[heading1,heading2]);



/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */

/*
const parent = React.createElement("div",
    {id:"parent"},
    React.createElement("div",
        {id:"child"},
    [React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag")]
    )
);
*/

/* <div id="parent">
    <div id="child1">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h3 tag</h1>
        <h2>I am h4 tag</h2>
    </div>
</div> */

/* episode - 3 

const parent = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
        {id:"child1"},
    [React.createElement("h1",{},"I am shubham tag"),
    React.createElement("h2",{},"I am h2 tag")]
    ),React.createElement("div",
        {id:"child2"},
    [React.createElement("h3",{},"I am h3 tag"),
    React.createElement("h4",{},"I am h4 tag")]
    )]
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 

episode-3 */

// root.render(container);



// -----------Episode-3-----------

//React.createElement => object => HTMLElement(render)
// const heading = React.createElement("h1",
//     {id:heading},
//     "i am h1 tage"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// JSX 

// lets create h1 tag using JSX
const jsxHeading = <h1>Namaste react using JSX</h1> //by seeing this alot of people thing that we write html inside javascript but JSX is not html inside javascript
