# Namaste React
#                   -----------------------Episode 1-------------------------

# package.json is a configuration for npm
# npm is a packages manager which manages all the packages that we will install in our system
# to install npm we write this command -> init npm
# sometimes this packages are known as dependencies
# our project is dependent on various packages and npm manages all those packages npm take care what is the version of that package and where it will take care it will take care in package.json

# install pacakges the most important package in our project is bundler
# what is bundler? -> when you have html,css file we have our whole code needs to be bundle together, needs to be cached together,needs to be minified together, needs to be clean together before it sends to be the production bundler helps to do all this things (bundler bundle or package our app properly so that it can shift in to production)
# webpack,parcel,vet this are bundler
# Create React App use webpack,babel bundle behind the scences

# in our project we will use parcel if our project is skeleton parcel will give a muscle to it
# parcel will come as node package now as we have npm so we can easily install parcel
# when you have to install any dependencies(packages) in our app we use same command which is npm install package-name -> here it is npm install -D parcel
# we use -D flag also why because we have two type of dependencies one is dev and other is normal dependencies 
# dev dependencies is used when we developing our app and normal dependencies use in production also
# npm contain all the packages when we write command npm install -D parcel it install the parcel package from npm it install it in dev dependencies
# after installation we see in package.json parcel is shown in dev dependencies
# ^(caret) -> if you put caret in to our app parcel will automatically updated to latest minor version which comes in future
# ~(tilda) -> if you put caret in to our app parcel will automatically updated to latest major version which comes in future
# it is preferred to use ^(caret) instead of ~(tilda)

# when we install parcel package-lock.json file comes what is this file do we actually need this file what is the purpose of this file what is difference between package-lock.json and package.json file
# package.json is a configuration file for npm it keeps the track what version of package install in our system
# ^ -> this implies that install minor version also if there is any . ^ is present in package.json file
# package-lock.json file keeps the track of exact version of package that is installed in our system
# package.json keeps the approx version of package with ^ sign on it
# package-lock.json keeps the exact version of package
# in package-lock.json file "integrity" is present which contains the sha512 hash why this hash present over there ? you might heared that it working in my local but it does not working in production what saucery it is . To avoid this package-lock.json file keeps the hash which verified whatever is present in my machine is the same version that has been deployed in production 

# when we install npm install parcel there is one more thing that has created that was node_modules. this node_modules contains all the code that we fetched from npm. when we do npm install parcel it went to production and fetched all the code of parcel and put it into the node_modules. node_modules is like database which contains data of those packages that our package needs. node_modules basically fetches all the code of all dependencies in our system i.e node_modules is kind of a database where all of the packages exist 
# when we observe inside the node_modules along with parcel there is more things are present what they are . I only install parcel what they are random things i doesn't install it . It came over here because our project needs parcel now parcel as a project has its own dependencies and those dependencies can have their own dependencies and so on these are known as transitive dependencies.whatever is present inside the node_modules parcel will need it for doing all the crazy things for us

# how many package.json present in our project you can say only one but no it is not one every dependencies have its own package.json and each package.json has its own dependencies
# size of node_modules is big as compared to the size of the other file in the project should i push this big node_modules to git or to production should i push this big code to github the answer is no 
# i don't want to push this big node_modules to github so best practice is to push this in to git ignore file if you want some file doesn't go in to github or does not go in to production just put it in to git ignore file

# should we need to push package.json and package-lock.json in to git or in to production the answer is yes because package.json and package-lock.json both maintains note of all what dependencies our project needs. package-lock.json maintains the exact version of each dependency. so it is important to put package.json and package-lock.json to the github. you don't need to put node_modules to the github because if you have package.json and package-lock.json you can recreate all of our node_modules if you delete node_modules -> parcel is not there. when you delete node_modules by writing command npm install then node_modules is recreated that is why it is not required to push node_modules to the github.

# whatever you can regengrate don't need to put it in to git or github. git is only for essential things
# package-lock.json contains the exact version of all the dependencies that my project ever needs
# node_modules contains all the codes of it

#                          ------------------------Episode 2-----------------------------

# we will ignite our app how we will ignite our app we use parcel to ignite our app how we will do that we write command "npx install index.html" -> parcel create server(http://localhost:1234) for us and our app is available at that server. Now our code is hosted on localhost:1234 parcel is doing it for us parcel is created server for us and it was give to 1234 port for us to hosted our app in 1234 port.

# just like npm we have npx. to intall the package we write npm but to exceute the package we write npx <package_name> <source_file_name> -> npx parcel index.html this means that we exceuting the parcel package
# behind the scene what happened it that parcel go to index.html and build the development build for us and they host that development build to localhost:1234

# how we inject the react in our app using CDN link that is one way to bring react into our app another way to bring react into our app is by using npm what react it is at the end of day it is some piece of javascript code (js pacakge) it is hosted in npm also so we bring react into our app by using npm 

# CDN link is not a good way to bring react into our project(app) why ? when we fetch react from the CDN it make the network call to unpkg.com which is costly operation if i have react in my node_modules which is already present in our app then how easy it would be to fetch react from node_modules(how easy to use react in my project we don't need to make the another network call to use react in my project) if tommorow new version of react came then we have to keep change that cdn link so it is advisable to keep it in package.json so it is easier to manage react as one of the dependencies in our project.

# now we install react as a package in our project(app) for that we have to write this command "npm install react" as we observe we don't use -D because i want react as a normal dependency not a dev dependency when we install react like this we observe that a new dependencies came in our package.json file which is react with caret sign(if in future new version of react came it automatically install that) and package-lock.json also have react now and node_modules also have react now

# now we have to install react-dom also for that we write command "npm install react-dom" shorthand of this command is "npm i react-dom" this install react-dom package for us and now you go in to package.json or package-lock.json you can see that react-dom dependencies is now installed

# now we don't need CDN links so we remove cdn links from project after that we have run server by writing command "npx parcel index.html" if i go to localhost:1234 server where my project is hosted i give error because we remove cdn links eariler React and ReactDOM which is written in app.js file comes directly from react and react-dom wala cdn links that we install now we remove it so React and ReactDOM comes from package that was present in node_modules so we have to import React and ReactDOM from package react and react-dom which is present in node_modules so for that we write import React from "react" and import ReactDOM from "react-dom in top of app.js file

# still we encounter error that Browsers scripts cannot have imports and exports why we face this error basiclly in index.html we inject the app.js so it treats it as a normal js file is it a normal js file no. it can't understand what is this import it considers it as a normal js file . normal js (browser scripts) cannot have imports . we need imports so for that we tell that this file is not a normal javascript file it is a module so for that we have to write type="module" now it not considers as a normal javascripts file it is consider as a module now i save it and we go to browser and see that error has gone . 
# now our react doesn't come from cdn links it comes from pacakge that we installed as the dependencies in pacakge.json using npm

# if i do any change in my html file it automatically reflect in our console i.e our browser automatically refresh as soon as we save the html file this powerful thing was done by parcel for us

# parcel 
- it build Development Build
- it give local server and it host that Development Build in our server
- HMR = Hot Module Replacement -> when we do any changes in our html file as soon as we save the html   file it automatically refresh our page this is happening because parcel is doing something known as HMR.
parcel doing HMR in all the files basically it reads all the files. How parcel is doing that parcel uses file watching algorithm which is written in c++. parcel keep eye on every event that you do in our project 
- parcel build faster because of caching  i.e parcel do caching for you (every time you build you observe that built time decrease every time you build by parcel this is because parcel do caching for you). from where parcel caching the things ? when we install parcel or when we build our project parcel sinks in to our project and take some space as we see .parcel-cache file is observed . This parcel-cache file caching everything you do it supporting HMR . so it make our developing experience faster
- if i have new build it take some time after this build parcel-cache file is observed then if we make any subsequent build(basically if we run the server by writing the command npx parcel index.html) it take very less time as compared to previous build time because after first build parcel make .parcel-cache file and because of that file parcel caching the things
- The most important thing that your web browser do is image optimization. parcel do image optimization for us. The build in which we working is development build if i have to make a production build parcel do minification of all the file also.
- parcel do bundling also . it basically bundle everything
- files needs to be compressed so that file size is small so that smaller version of code push in to the production 
- parcel do consistent hashing for you
- parcel do code splitting for you
- parcel do Differential Bundling for you . what is Differential Bundling ? your app can be open in internet Explorer, your app open inside firefox, your app open inside chrome , your app open inside a mobile browser.parcel takes care all of these things . parcel give differential bundling to our app so your app smothly run in older versions also. parcel give ability that you have different type of bundle for different type of browsers. if you have scripts type "module" parcel genearate "nomodule" type scripts for older browsers
- parcel do error handling it give you better error suggestions(it give beautiful error so that it help you increase your development experience) 
- right now our app is hosted on HTTP parcel also give you way to host our app on HTTPS. suppose in our development environment you want to test something that works only on HTTPS parcel give you that feature also.
- parcel do tree shaking for us. suppose in our app we have 100 functions but if our app use 4-5 function only then what parcel do parcel will tree shake our file . parcel will remove unused code for you
- parcel have different dev and production bundles because production builds take little more time than dev build . their are less optimization on dev build 

# A lot of people things that react-app is fast because of react is fast but they don't know when we create production ready app react is not only things that make react-app fast there are other more things that make react-app fast. react make your app fast but react is not only things to make our app fast . there are more other things that make our app fast . there are some many more things that bundlers do.what make react app so fast parcel(bundler) doing so many things along with react to make react app fast. parcel. parcel doing all the things that mentioned above for us. parcel is give energy to our app its not just react and parcel not doing everything in its own for minification parcel use some of the libraries. parcel uses a lot of other libraries for doing all these things. parcel is manager of all these libraries 

# when you execute the parcel by writing the command "npx parcel index.html" it generates the development build of our project and it hosted in to 1234 so when it generates the development build it puts in to dist folder so the output that we see on browser window it comes from dist folder and when we refresh the page it uses parcel-cache and dist folder to update it using that HMR

# lets create a production build for that we have to write this command "npx parcel build index.html" when you run this command you get an error because we have index.html in our package.json we have "main" this is way to tell npm that this is the entry point of our app we don't need this when we use parcel we give entry point like this "index.html" so parcel conflict it with "main" entry point so we have to remove "main" form package.json then that command run without any error . when you build production build it built inside dist folder . production build takes more time to built than development build . when you see inside dist folder there are manily 3 files that you have to care about other file are map files. These 3 files all the code that you have . These 3 files contain production ready code

# like node_modules folder parcel-cache and dist folder are automatically generated when we build . so anything which will be automatically generated you don't need to put in to github so question is whether you have to put it inside gitignore or not the answer is yes

# our local not directly connected with server we push our code(which is present in local) in to git and then server fetches this code from git and then server hosts the app to end users. whatever command (npx parcel index.html or npx parcel build index.html etc) that we write in our local those commands also run inside server also . copy of node_modules , dist and parcel-cache folder in local is different from copy in remote . we push package.json , package-lock.json in to the git 

# lets make our app compatible to older version of browser for that we will use something known as browserlist inside node_modules browserlist already there . but we have to tell browserlist for what browsers does we support our app . so now you have to tell your project what browsers should your app supports. how you configure it inside your package.json . in our package.json you have to add "browserlist" this browserlist take array of browser if i need to support chrome then we have to write like this "browserslist" : ["last 2 chrome version"] now our app will be compatible for last 2 chrome versions whatever the latest 2 chrome verison would be there our app will be compatible to that .

# when i write this configuration "browserslist" : ["last 2 chrome version"] inside package.json it implies that it definetly work for last 2 chrome versions but it might work or not work to other browsers. if i write this configuration "browserslist" : ["last 2 version"] then our app will support the lastest 2 version of all the browsers that are present

# By doing all of these we create production ready react app . This all things are present inside create-react-app


#                                -----------------------Episode 3---------------------------

# lets create a npm script so that we don't have to write everytime npx parcel index.html . it is a npm script so you need to create a npm script inside a package.json . in package.json there is section of script . we can create a different scripts we can create a script to start our project in dev mode or we can cretate a script to start our project in production mode.
# lets create a script to start our project in dev mode for that we write "start" : "parcel index.html"
# inside start we have to write that command that we have required to start our project in dev mode
# lets add one more script so that our project run in production mode for that we have to write this "build" : "parcel build index.html" inside a script.
# This is industry standards to use scripts to build our project
# now we don't have to write the command npx parcel index.html to start our project. To start our project by using script we have to write this command - npm run <name of scripts> here it is npm run start to start our project(build our project in dev mode) it basically run the script 
# To start the project we write the command npm run start & to build the project in production mode we write the command npm run build
# shortand of npm run start command is npm start but shortand of npm run build command is not npm build i.e npm start work but npm build can't work

# now we remove all code from app.js and start react from scartch 
# just we have DOM elment , in react we have react element
const parent = React.createElement("div",
    {id:"parent"},
    React.createElement("div",
        {id:"child"},
    [React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag")]
    )
);
# above code is not a good way to create a browser element it is not a developer friendly when we have to make nested structure it look so clumsy so to make developer life easy facebook developer created something known as JSX what is JSX it is javascript syntax which helps to create react element easier 
# JSX is not a part of react . JSX is different and react is different there is fundamental difference. a lot of people things that react can't be written in JSX but we can write React without JSX also but JSX make developer life easy that is why we use JSX 
# what is JSX ? we used to write our markeup/skeleton of our project inside html file and logic is written in JavaScript file somewhere html and javascript file is related so libraries or frameworks even if react try to merge html and javascript file in to one file so JSX or even if in react is conventional where we merge this html and javascript together

- we writing our code for both human and machine but first of all we write code for human then for machine because our code is read by a lot of developers . if we write code for machine then we would write it in binary we write code first of all for human
- our js engine or browser engine only understand all the versions of ecmascript which is pure JavaScript so js engine doesn't understand this piece of code "const jsxHeading = <h1 id="heading">Namaste react using JSX</h1>" because this is not a pure javascript. then how this code working you know what parcel is doing the job behind the scenes .
- the jsx code that we written this code transpiled(this code transform in to the code that react or browser can understand) before it going to the js engine and js engine recieved the code that browser understands. who is transpiled this code transpiled will be done by parcel is parcel do it itself no . parcel not do something itself it as cabinet of minister. parcel is like a manager it managee everything. parcel give the responsibility of transpilation to a package which is known as Babel(it is also a normal js package). parcel install Babel we don't install Babel . Babel is not created by facebook 
- when we create tag using a pure react we use React.createElement this give us reactElement which is nothing but a js object when this js object render it is rendered as a html element
- lets see how JSX works . behind the scenes JSX code is converted in to React.createElement => reactElement(js object) => render as html element. behind the scenes JSX code is React.createElement. that is why when we do console.log(heading) and console.log(jsxHeading) both are same . who convert our JSX Code into React.createElement , Babel is doing these job. once code convert in to React.createElement now react understands the code. if you want to see how babel convert JSX code into React.createElement go to babel website and write JSX code in its playground you see how babel convert it into React.createElement code . so babel is a transpiler . Babel is also a js compiler. Babel do lot of things . some older browsers don't understand Ecmascript code babel transpile Ecmascript code into code that older browsers understand. Babel is camp of converting one code into another code. Babel is js library or npm library which take some piece of code reads that piece of code and convert it in to something else 
- lets prove that JSX code that we written "const jsxHeading = <h1 id="heading">Namaste react using JSX</h1>" is not a html code.
in html when we have to give class name we write class = " " but in JSX code when we have to give class name we have to write className = " " when you go to console and see it there it seen as class = " " we write className = " " but there it is seen as class = " "
- if you have to give attribute to JSX code you have to use camelCase syntax but in html code it don't be a case . so we write attribute in camelCase in jsx syntax but when we go to console and see it won't appear in camelCase it appear as it suppose it to be in html syntax i.e it appears in lowercase character
- JSX syntax is very similar to html but it is not html

- if JSX is in single line whic is "const jsxHeading = <h1 id="heading">Namaste react using JSX</h1>" this is perfectly valid jsx(you don't need to wrap inside a parenthesis it's not mandatory you can if you wish) suppose you want to write it in multiple lines you have to wrap it inside a parenthesis so that babel understands from where
jsx code starts and where jsx code ends i.e (const jsxHeading = <h1 id="heading">
                                        Namaste react using JSX
                                        </h1>)

------------------------------------React components-------------------------------
- Everything in react is component if you see in webpage a header is component, a footer is component, a button is component, a search bar is component, a title is component, a input box is component, a list of cards is also a component
- There are 2 components in react : 1.Class Based Component(it uses js class to write component) 2.Functional Based Component(it uses js function to write component)
-Class Based Component is old way for writing code . Functional Based Component is new way for writing code. Now a days nowbody use class Based Component to write code . Today everyone use Functional Based Component to write code and make her app
- all project in industries are write code using Functional Based Component but there are some legacy projects in industries in which code is written using class Based Component

- React Functional Component is just a normal js function
- when you create any react component , name it with first letter is capital letter otherwise you encounter a error its a react way to understand that it is a component
- React Functional Component - it is normal js function which return some piece of jsx element.
- A function which return jsx code is functional component(a javascipt function which returns react element)

- This is react element :
  const headingElement = (
    <div id="container">
       <h1 className = "heading" tabName = "1"> Hello React Element using jsx</h1>
    <div>
  );

- This is react Component :
    const HeadingComponent = () => (
    <div id="container">
       <h1 className = "heading" tabName = "1"> Hello React Element using jsx</h1>
    <div>
    );

- do you see there is slight difference between react element and react component

- To render a React Element we write this syntax:

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(headingElement);

- To render a React Component we write this syntax:

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent/>);  

- How babel understands that it is a React Component when Babel see that inside angular bracket HeadingComponent is present then there must be HeadingComponent name component Exist there 

- const HeadingComponent = () => (
    <div id="container">
       <h1 className = "heading" tabName = "1"> Hello React Element using jsx</h1>
    <div>
    );

    above is react component we can write any function in above we write arrow function we can write normal function also when we write normal function we have to write return . In Industry arrow function is written to make react component

    const HeadingComponent = function(){ 
    return(
    <div id="container">
       <h1 className = "heading" tabName = "1"> Hello React Element using jsx</h1>
    <div>
        );
    };


----------------- Component Composition(composite component into one another)---------------------

const ReactComponent2 = () => (       
<h1 className="heading">Namaste React Functional Component2</h1>
);

const ReactComponent3 = () => (
    <div id = "container"> 
         <ReactComponent2/> 
         //if i want to render ReactComponent2 component inside this div we write inisde a angular bracket beacuse then only babel know that it is a React Component when you write this <ReactComponent2/> all of code that are present inside ReactComponent2 replaced by this . browser doesn't know that we have ReactComponent2 or ReactComponent3 and it doesn't know that ReactComponent2 is inside ReactComponent3 babel do all transpilation step and convert all of these in to normal react code and then react rendering into html code that browsers understands . browsers doesn't care what component are there what component inside another component it just need to html to render 
        <h1 className="heading">Namaste React Functional Component3</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent3/>) // this root.render convert eveything into html then browser rendering it


- ---------------------------------------------------------------

- if you write anywhere curly brace { } inside a jsx . you can write any js expression inside this curly brace { } you can write any js code inside this curly brace that is why i said jsx is mix of html and javascript

    const number = 1000;
    const ReactComponent3 = () => (
        <div id = "container"> 
            {number}     //as we see that we write js inside { }
            <h2>{number}</h2>  // we can put { } inside h2 tag also here we mix html and javascript
            {100 + 200}  // we can write any js code inside { } here we see that we write arithmetic calculation code
            {console.log("aaaaaaaaaaaafff")}
            <h1 className="heading">Namaste React Functional Component3</h1>
        </div>
    );

- you can inject any javascript code inside jsx with the help of { } and it comes down as html. jsx have such a super power which is using javascript inside it. using javascript inside jsx is such a powerful thing


---------------------put react element inside a react component---------------------------


    const jsxHeading = (
        <h1 id="heading" className="hello" tabIndex = "1">
            Namaste react using JSX
        </h1>
        );  //jsxHeading is react element
    
        const ReactComponent3 = () => (
        <div id = "container"> 
            {jsxHeading}  //at the end of day if we see that jsxHeading is normal javascript variable to put normal javascript varaiable inside the jsx i can write that js variable name which is jsxHeading inside the { } everything present inside jsxHeading element comes here (go and see in browser Element window) Babel converting all these in to react code which further render in to html which browsers understand

            {number}
            <h2>{number}</h2>
            {200 + 300}
            {console.log("ahddddf")}
            <ReactComponent2/> 
            <h1 className="heading">Namaste React Functional Component3</h1>
        </div>
    );

------------put react element inside a another react element then put that react element inside a react component---------

const elem = <span>This is react element</span>

const jsxHeading = (
        <h1 id="heading" className="hello" tabIndex = "1">
            {elem} // as we see that we put react element named as elem inside a another react element jsxHeading
            Namaste react using JSX

            <ReactComponent3/> // if we write this give error on browser window that cannot access "ReactComponent3" before intialization
        </h1>
        );  //jsxHeading is react element
    
        const ReactComponent3 = () => (
        <div id = "container"> 
            {jsxHeading}
            {number}
            <h2>{number}</h2>
            {200 + 300}
            {console.log("ahddddf")}
            <ReactComponent2/>
            <ReactComponent2></ReactComponent2> // these is equivalent to <ReactComponent2/> it is only a conventional
            <h1 className="heading">Namaste React Functional Component3</h1>
        </div>
    );

    if we put "ReactComponent3" which is component inside a "jsxHeading" element it in browser window we see error which say that cannot access "ReactComponent3" before initialization this error came because at the end of day it is all javascript(the code we write which is react code at the end of day it is javascript) can you use const variable before initialization it no so that is why it give error so we have to write "jsxHeading" below of "ReactComponent3" then it doesn't give error so you need to maintain order because it is not react to do that it is javascript who not allow to that 

    if we put "jsxHeading" below the "ReactComponent3" and then if we put "ReactComponent3" component inside a "jsxHeading" element by writing <ReactComponent3/> inside the "jsxHeading" then it went it to in the infinite loop(browser go infinite loop i.e browser became hang or freeze now) because i put "jsxHeading" element inside "ReactComponent3" component and "ReactComponent3" component inside a "jsxHeading" element. we create infinite loop inside html we kind of writing html but we create infinite loop inside html how cool it is na

    - don't put div inside h1 it is considered as a bad html put h1 inside inside div


    -----------------------------------------------------

        const data = api.getData(); // these code that we written here api.getData() it is not a code it is written for understanding purposes only . suppose the api is malacious api (usually api is not malacious api we consider for the sake of discussion) attacker sending malacious code as we know whatever js is present inside data variable is exceuted below inside the react component("ReactComponent3") by writing {data} inside the react component over here js actually executing that piece of code .
        These app is present in user computer. so whatver malicious things present in data variable can run in our browser or in our computer. if attacker get access to run any js code in our browser then what attacker can do . This type of attack is known as cross-site scripting attack. if attacker execute some js code in our browser then it can steal our cokkies, it read our local storage information, it can get sessions storage information, it can get information about our laptop.JSX is so amazing that it takes care of all these injections attacks even if api sends some malicious data JSX sanitize that data when any js code is wrap inside {} browser won't blindly run it JSX sanitize our data then it pass it . JSX prevents cross-site scripting attacks for you. you don't have to take care attack feel free to use whatever you wish to. nobody can do malicious attack using this lopehole you can execute any js without any fear. JSX taking care of all of these things

        const ReactComponent3 = () => (
            <div id = "container"> 
                {data} 
                <h1 className="heading">Namaste React Functional Component3</h1>
            </div>
        );

    ---------------------------------------------------------------

    - when we have to compose a react component 1 inside another react component 2 then we write this syntax inside a react component 2 which is <react component 1 name/> we can also write this <react component 1 name ></react component 1 name> syntax also both are same it is just a conventional 
    <react_component1_name/> is equivalent to <react_component1_name></react_component1_name>

    ----------------------------------------------------------------

    - as we know functional component is normal js functions at the end of the day and we know that we can write any js code inside { } so can i call the js function inside { } i can 

    const ReactComponent2 = () => (               
    <h1 className="heading">Namaste React Functional Component2</h1>
    );
    const ReactComponent3 = () => (
        <div id = "container">
            {ReactComponent2()} // as we see we call ReactComponent2 inside the { } because ReactComponent2 is a react component which is js functions at the end of the day. if you don't want to call the function jsx give you another way to execute it which is <ReactComponent2/> or <ReactComponent2></ReactComponent2>

            <ReactComponent2/> 
            <ReactComponent2></ReactComponent2>
            {jsxHeading} 
            {number}
            <h2>{number}</h2>
            {200 + 300}
            {console.log("ahddddf")}
            <h1 className="heading">Namaste React Functional Component3</h1>
        </div>
    );

    so this 3 thing {ReactComponent2()} , <ReactComponent2/> , <ReactComponent2></ReactComponent2> is one of the same thing 

- what make your webapp code readable or faster your code is readable because you are writing jsx . jsx is not react . if your code is readable it doesn't mean that react make it readable jsx make it readable . if you make above code by using React.createElement you feel that it's so messy jsx make your code readable not react.



#                   -------------------------------------EPisode 4---------------------------------







    
