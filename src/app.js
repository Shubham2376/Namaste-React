import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./component/Header";
import {Header} from "./component/Header";

import Body from "./component/Body";



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


root.render(parent); 

episode-3 */

// root.render(container);



// -----------Episode-3-----------

// creating h1 tag using react(creating react element using core react)
//React.createElement => object => HTMLElement(render)

// const heading = React.createElement("h1",
//     {id:"heading"},
//     "i am h1 tag"
// );
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// JSX 

// lets create h1 tag using JSX(creating react element using JSX)
// ---------React Element-------------------
// const elem = <span>This is react element</span>

// const jsxHeading = (
//     <h1 id="heading" className="hello" tabIndex = "1">
//         {elem}
//         Namaste react using JSX
//     </h1>
//     ); //by seeing this alot of people thing that we write html inside javascript but JSX is not html inside javascript. jsx is not html , jsx is html like syntax.jsx is different , html is different , react is different . jsx is html like or xml like
// the code that we written here is much more cleaner than above code

// <h1>Namaste react using JSX</h1> this piece of code is jsx when this piece of code is executed this becomes react element . jsx is just the syntax react element is object . these piece of code is equivalent to above code (in which we create react element using core react)

// console.log(jsxHeading);
// when we console heading and jsxHeading you see that both are exactly same


// ------------React Component----------------

// React Functional Component(it is normal js function which return some piece of jsx element)

/*
const ReactComponent = () => {
    return <h1 className="heading">Namaste React Functional Component</h1> //this is how we return jsx element
};
*/

// above and below react components both are same 
// const ReactComponent2 = () => (               //as we go to multiple lines so that we enclose it in a parenthesis
// <h1 className="heading">Namaste React Functional Component2</h1>
// );

// const number = 1000;
// // jsx can be nested also
// const ReactComponent3 = () => (
//     <div id = "container">
//         {ReactComponent2()}
//         {jsxHeading} 
//         {number}
//         <h2>{number}</h2>
//         {200 + 300}
//         {console.log("ahddddf")}
//         <ReactComponent2/> 
//         <ReactComponent2></ReactComponent2>
//         <h1 className="heading">Namaste React Functional Component3</h1>
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

//  Babel transpiled a code so that react and browser engine understand it . React understands because as we see her we pass jsxHeading in to render function(this comes in ReactDOM) will your ReactDOM understand this jsx code(in jsxHeading) no , so what happens it this code transpiled before it reaching there who transpiled our code, parcel will do this transpilation for us . is parcel do it itself no parcel use Babel package to do this transpilation


// ------------------------------Episode 4-----------------------------------

    // Header
    //     - Logo
    //     - Navigation item
    // Body
    //     - Search
    //     - resturantContainer //there are lot of resturantcard we have to make our code modular so whenever you see there     repeating a lot of code here we see there are lots of resturant card so we will make separate component for resturant card so here we make resturantCard component . component is like a function why we create a function in program so that we can reuse it so whenever you see something is reuse always create separate component for that 
    //         - resturantCard
                // - img
                // - name of ResturantCard, star rating, cuisine,etc
    // Footer
    //     - copyright
    //     - address
    //     - links
    //     - contact



// This is js object
const stylecard = {
    backgroundColor:"#f0f0f0",
}


// Now we use live data which we pick it from the swiggy backend api this is js object 


const AppLayout = () => {
    console.log(<Body/>);
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// This is a way to render React Element to a page
// root.render(jsxHeading);


// This is a way to render React Component to a page
root.render(<AppLayout/>)
