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

- whenever you asked to build any app the first thing as a senior engineer you think what you should do it's our planning if your planning is good code is very easy to write 

planning steps:
    step 1:-  you should exactly know what you are going to build and what is process of building it and how it look in the planning first thing is UI (how app look like) first of all we do that planning and then we start writing code for that don't just blindly writing code what lot of people do they want to make header they start coding header or they want to make resaturant card they start making it . first of all we have to make planning . build wireframe do planning 

    let us do low level planning how my app look like . once you exactly know how my app looks like lets discuss what components can my app have . we divided our app in to three pieces Header,Body and Footer so we have these three components .Inside Header component we have Logo component, we have navigation item component. Inside Body component we have search Bar component, we have resturantContainer component inside resturantContainer we have Restaurant card. Inside Footer component we have copyright,address, links,contact

    Header
        - Logo
        - Navigation item
    Body
        - Search
        - resturantContainer
            - resturantCard
    Footer
        - copyright
        - address
        - links
        - contact

    lets build our app. first of all i make a top level component(named as appLayout component) where all the app components reside . we build appLayout component as we know component is normal js function which return some jsx code(at the end it is div which component return it contain all the things which our app want) 

    in html we write inline css like this 
    <div class = "root" style = "width:100px">
        <h1> Not rendered </h1>
    </div>

    but in react we don't write inline css like this . style attribute in react don't take like how to used to take inside html over here style taken as js object basically style take js object we know when we use any js inside jsx we enclose it inside { } . whenever you have to give inline style you have to give it as a js object.Inline style is not preffered way to write code 

    const stylecard = {
    backgroundColor:"yellow",
    }
    const ResturantCard = () => {
        return (
            <div className="res-card" style = {stylecard}>
                <h3>meghana food</h3>
            </div>
        );
    };

    Beauty of jsx that we writing css inside jsx eariler we see that we write html inside jsx 

    In react we have something known as props . props is shortform of properties. properties is something which we want to pass to a component. suppose i want to pass some data dynamically to a component. how we can do that we can pass it as a props. As we know what functional component at the end of the day its a normal javascript function similarly props at the end of the day are just normal arguments to a function

    when i say i pass props to a component it is a exactly like saying i am passing some arguments to a function
    
    when you have to pass dynamically some data to a component passing it as a props 

    <ResturantCard resName="meghana food" cuisine="Biryani,North Indian, Asia" Rating="4.4" Time="38 minutes"/> 
    here as we see resName,cuisine,Rating and Time are the props(attributes or properties). In the react world these are called passing props to the component 
    what react do is it take all these resName,cuisine,Rating and Time properties(props) and it will wrap inside a object and it pass to the component as a props 

        const ResturantCard = (props) => {
        console.log(props); // if we go to the console window we see that 2 different object . props are a object over here
        return (
            <div className="res-card" style = {stylecard}>
                <img alt ="res-logo" className = "res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/MoMiPizVeg"/>
                <h3>{props.resName}</h3> // as props is an js object and you remember how can it used that we just wrap inside it in { }. we do it so that our card becomes dynamic 
                <h4>{props.cuisine}</h4>
                <h4>{props.Rating}</h4>
                <h4>{props.Time}</h4>
            </div>
        );
    };
        const Body = () => {
        return (
            <div className="body">
                <div className = "search">search</div>
                <div className = "resturantContainer"> 
                    <ResturantCard resName="meghana food" cuisine="Biryani,North Indian, Asia" Rating="4.4" Time="38 minutes"/>
                    <ResturantCard resName="KFC" cuisine="Burger,Fast food" Rating="4.5" Time="40 minutes"/>
                </div>
            </div>
        );
    };

    what react do it . react make object of all the props and pass to it to the component . what some react developers do is instead of writing props they "destructing on the fly" so after doing destructing on the fly above code looks like 

    const ResturantCard = ({resName,cuisine,Rating,Time} //as we see here we do destructing on fly react bind all of the props and passing to this function and here we do destructing on fly this destructing on fly is not in react it is in js this is js this thing not done by react) => {
        console.log(props);
        return(
            <div className="res-card" style = {stylecard}>
                <img alt ="res-logo" className = "res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/MoMiPizVeg"/>
                <h3>{resName}</h3> // as we see after destructing on fly our code is more readable than above code 
                <h4>{cuisine}</h4>
                <h4>{Rating}</h4>
                <h4>{Time}</h4>
            </div>
        );
    };
        const Body = () => {
        return (
            <div className="body">
                <div className = "search">search</div>
                <div className = "resturantContainer"> 
                    <ResturantCard resName="meghana food" cuisine="Biryani,North Indian, Asia" Rating="4.4" Time="38 minutes"/>
                    <ResturantCard resName="KFC" cuisine="Burger,Fast food" Rating="4.5" Time="40 minutes"/>
                </div>
            </div>
        );
    };

    we can destructing also like this:
    const ResturantCard = (props) => {
        const {resName,cuisine,Rating,Time} = props; //this is also a way to destructing on fly 
        console.log(props);
        return(
            <div className="res-card" style = {stylecard}>
                <img alt ="res-logo" className = "res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/MoMiPizVeg"/>
                <h3>{resName}</h3> 
                <h4>{cuisine}</h4>
                <h4>{Rating}</h4>
                <h4>{Time}</h4>
            </div>
        );
    };
        const Body = () => {
        return (
            <div className="body">
                <div className = "search">search</div>
                <div className = "resturantContainer"> 
                    <ResturantCard resName="meghana food" 
                    cuisine="Biryani,North Indian, Asia" 
                    Rating="4.4" 
                    Time="38 minutes"/>
                    <ResturantCard resName="KFC" cuisine="Burger,Fast food" Rating="4.5" Time="40 minutes"/>
                </div>
            </div>
        );
    };

    In reality the data is not like this 
    resName="meghana food" 
    cuisine="Biryani,North Indian, Asia" 
    Rating="4.4" 
    Time="38 minutes"
    how this resturant data from backend came to us. It came in the form of JSON 


                                 ------------------Config Driven UI-----------------------

    when you open swiggy site you see some offer is display on her site and that offer is in our city . In some other city these offer are different . crausles are different in different different city so how can you build a UI like that will you build a different webiste for delhi, for mumbai,for banglore obviously no . our webiste is driven by data so these are known as config driven ui . our webiste is driven by config. what basically config driven ui means controlling our ui(how ui look) using config(data). where config come from config comes from backend . what is config that api in backend from where data comes from. we written ui once and according to data comes from backend my ui change


        const ResturantCard = (props) => {
        console.log(props); // by console.log we can see that api which we take from backend

        // const {resName,cuisine,Rating,Time} = props;
        const {resData} = props;
        // now from resData we can use the data which is present inside resObj data which came from backend api of swiggy
        console.log(props);
        return (
            <div className="res-card" style = {stylecard}>
                <img alt ="res-logo" className = "res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/MoMiPizVeg"/>
                <h3>{resData.info.name}</h3>
                <h4>{resData.info.cuisines}</h4> // cuisines are array in api if we write in this way resData.info.cuisines then all the array element comes without comma separated jabki array element are comma separated so if we want that array element comes in comma separated way then we use js concept here there is propertu on array array_name.join(',') it separate array element in comma separated way
                <h4>{resData.info.avgRating}</h4>
                <h4>{resData.info.costForTwo}</h4>
                <h4>{resData.info.avgRating}</h4>
            </div>
        );
    };
        const resObj = {
            kfc resturant api from backend
        };

        const Body = () => {
        return (
            <div className="body">
                <div className = "search">search</div>
                <div className = "resturantContainer"> 
                    <ResturantCard 
                        // will i keep passing data one by one no our head will be messed up because imagine if we have so many data
                    // resName="meghana food" 
                    // cuisine="Biryani,North Indian, Asia" 
                    // Rating="4.4" 
                    // Time="38 minutes"

                        // we pass like this i.e we pass the js object
                    resData = {resObj} // i have to pass js object so we enclose it in { }
                    />
                </div>
            </div>
        );
    };

    cloudinaryImageId is in seen in backend api . what is cloudinary it is CDN when we build large scale applications you put all images in CDN. so swiggy use cloudinary to host all of the images here
    This is image url of KFC in swiggy site : https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/5d695f6a-7fc1-45d6-ae8f-c5986b904b34_584332.JPG

    cloudinaryImageId of burger king in swiggy backend api : RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/24badc96-e293-444e-be18-52d5f5ae9b74_78041.jpg

    so to get image url of burger king which uploaded in swiggy site just replace cloudinaryImageId of KFC with cloudinaryImageId of burger king i.e https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/24badc96-e293-444e-be18-52d5f5ae9b74_78041.jpg

    so general URL of image in swiggy site : 
    https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/cloudinaryImageId_given_in_swiggy_api

    i have to add cloudinaryImageId for each resturant at the end of the this url https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/ add(append) is a js operation so we have to wrap it inside a { }
    i.e <img alt ="res-logo" className = "res-logo" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + resData.info.cloudinaryImageId}/> 
    // here concatenation of two strings occur resData.info.cloudinaryImageId this give us string 
    resData.info.cloudinaryImageId this is different for different resturant but the url link remains the same for all 


    The data which come from backend in real world it is array of object . data will be list of objects and each object represents a resturant so we take list of objects(array of objects) from backend and pass it one by one 

    now our ResturantCard become dynamic

        const ResturantCard = (props) => {
        console.log(props);

        // const {resName,cuisine,Rating,Time} = props;
        const {resData} = props;
        // now from resData we can use the data which is present inside resObj data which came from backend api of swiggy
        
        return (
            <div className="res-card" style = {stylecard}>
                <img alt ="res-logo" className = "res-logo" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + resData.info.cloudinaryImageId}/>
                <h3>{resData.info.name}</h3>
                <h4>{resData.info.cuisines.join(',')}</h4>
                <h4>{resData.info.avgRating}</h4>
                <h4>{resData.info.costForTwo}</h4>
                <h4>{resData.info.sla.deliveryTime + " mins"}</h4>
            </div>
        );
    };

        const resList = [ list of objects ];

        const Body = () => {
        return (
            <div className="body">
                <div className = "search">search</div>
                <div className = "resturantContainer"> 
                    // as we see that we pass one by one
                    <ResturantCard resData = {resList[0]} />
                    <ResturantCard resData={resList[1]}/>
                    <ResturantCard resData={resList[2]}/>
                    <ResturantCard resData={resList[3]}/>
                    <ResturantCard resData={resList[4]}/>
                    <ResturantCard resData={resList[5]}/>
                    <ResturantCard resData={resList[6]}/>

                    // when we see output you would be amazed this is a beauty of writing reusable components. when we build production ready app you have to write reusable components. just because we create a reusable component we are able to pass it dynamic props inside that 
                </div>
            </div>
        );
    }; 

                            --------- clean version of above code -----------------------

    The code that we write above is messy code let's clean up the messyness that we do above . this is resData.info.avgRating
    not a good practice to write this is complicated UI .this looks messy . so the good practice is to destructure this. we gonna don't write resData.info again and again we destructure this . as we get rid of  resData.info.cuisines, resData.info.avgRating,resData.info.costForTwo, resData.info.avgRating,resData.info.name and instead of this we want to write cuisines,avgRating,costForTwo,avgRating,name so here we use optional chaining while we destructuring this . as we destructing more than one thing so we do optional chaining here
    so clean code looks like this:

    const ResturantCard = (props) => {
        const {resData} = props;
        const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,deliveryTime} = resData?.info // here we do destructing for cleaniness purposes. resData?.info as we see we use ? this is optional chaining 
        return (
            <div className = "res-card">
                <img className = "res -logo" alt = "res-logo" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + cloudinaryImageId}/>
                <h3>{name}</h3>
                <h4>{cuisine.join(',')}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime} mins</h4>
            </div>
        );
    };

    lets refactor/clean the body component of the code today we have 15 resturant which comes as data from the backend what if there are 20 what if there are 25 we don't know the count so we loop over array and create a card dynamically now above it write hardcoded.
    How to loop resList for that we use javascript map function as we have to write js so we write inside { } we can also write for loop to looping over resList array but the best practice which is used in industry is to use functional programming(map,filter and reduce)

    // now we don't need to worry the no of resturants(data) comes from backend 

        const Body = () => {
        return (
            <div className="body">
                <div className = "search">search</div>
                <div className = "resturantContainer"> 
                // here we use map function of js 
                    {
                    // inside my resList i am looping and for each resturant i am returning some piece of jsx 
                    resList.map((resturant) => (
                        <ResturantCard resData = {resturant}/>
                    ))
                    }
                </div>
            </div>
        );
    }; 

    now when we see it render all the resturants which is present in the resList which is array which contains all the resturants which comes from the backend
    we build the reusable resturant card component we using the same resturant card component for each resturant we build config driven ui

# when react was build it was build with the fundamental that in js only we will build a markup as well as logic . eariler we have different html file for markup and different javascript file for logic . now we can write html and javascript inside the jsx and everything we do in the same place This is how beautiful the javascript is , JSX is and React is

    when you see the console window of our browser you see the Warning: Each child in a list should have a unique "key" prop.
    these warning give us by react . what does it mean- unique "key" property it means each of this items <ResturantCard resData = {resturant}/> should be uniquely represented. whenever you looping any list you have to given key property for each resturant we have unique id here we have to pass that unique id . so we will passs resturant id as a key over here 
    <ResturantCard key = {resturant.info.id} resData = {resturant}/> so above body component code modified slightly. key is a reserved keyword which is used to uniquely identify something

    const Body = () => {
        return (
            <div className="body">
                <div className = "search">search</div>
                <div className = "resturantContainer"> 
                // here we use map function of js 
                    {
                    // inside my resList i am looping and for each resturant i am returning some piece of jsx 
                    resList.map((resturant) => (
                        <ResturantCard key = {resturant.info.id} resData = {resturant}/>
                    ))
                    }
                </div>
            </div>
        );
    }; 

    now if you see that warning gone from the console
    Always make a habit when you loop over something you always have to give key. WHY ?

    Lets see why we always have to give key or why we need key 

    we have resturantContainer and inside it we have so many children as a resturantCard component so what happens is react optimize its render cycle . when we have component of same level this are the components in which we loop this component should need to have unique id they should need to have uniquely represented why they need to be uniquely represented suppose the new resturant came in and they came in first place if you don't give id any of the resturant and incoming resturants as well so what will react do react re-render all the resturants card because react doesn't know which resturant card is new react doesn't uniquely identify this resturant card react re-render all the resturants card

    if new resturant card come inside the resturant container react does not know at what place we have to put this resturant card whether it is coming on first place or second place or third place. react cleans the whole resturant container and re renders all the resturants card. react does not which resturant card new it will react all the resturants card same  
    But if you give id to each resturant card and if new resturant card come with some id xyz suppose if we have resturants card1 with id1 and resturant card2 with id2 and resturant card3 with id3 and if new resturant card come with some id xyz
    as it is unique now react exactly know that id1,id2 and id3 are already there the new resturant card come at a first place so it just render one resturant card it will not render all of the resturant card this is the huge optimization while you writing code.
    suppose you build infinite scrolling , resturant page in which 100 of resturants card in the page think about everytime react re render it will re render all the 100 resturants everytime its a bad thing. so that is why we need to uniquely identify the each loop item or list item

    so whenever you are in the loop or whenever you use map make a habit to use key. it take big performance hit if you don't have write key

    some people also use indexes as the key . whenever you do map,reduce,filter there is a index like 0,1,2---- for each element and they keep updating and these index is the second property of map. some people say that you can use index as the key this logically looks right because everytime there is unique key for each resturant card But react itself says that never use index as the key(see official documentation of react).It won't complain to use index as the key but it's not recommended to use index as the key . If our data doesn't have id (data comes from backend does not have id) then you can use index as the id but it's not recommended to use

    priority order:
    not using key(not acceptable) <<< index as key <<< unique id(best practice)

    if you don't have unique key then atleast use index it is better than using not key. not putting key is not acceptable



#                       ------------------------------------------Episode 5---------------------------------------

    everything you do with react you can do same thing using normal html,css and javascript then why do we use react any framework whatever you can do with that you can do it by normal html,css and javascript. The beauty of using any library or framework is it make our developer experience easy it makes you write less code and do more on webpage This is more job of library or framework. At the end of the day react uses javascript behind the scenes.
    React makes our coding experience very fast and also optimizing something on web page so that things happen very fast

    from these episodes we start to see more super power of react

    we are going to cover react hokes

    before dive into react hokes we first of all clean our app . we wrote a app.js file and we create a lot of components and we wrote everything in to single file and because of that our app.js file become big so it is not good practice to keep such large files in our app. Best practice is to make separate file for separate components. we not write whole thing in app.js file we break down our app into multiple file 
    right now we have all file in the root directory we basically start from starch and we kept everything in namaste react folder now let us restructing our app there is good convention in the industry all the main code of react library we generally kept it in the src folder we can build our whole app without src folder but we have to follow the industry standards 
    all the source code of our app we will kept it in the src folder . so i kept my app.js file in the src folder

    it is good practice to make separate files for separate components because the code we write is for humans for humans it is very logical to create separate files for separate components. our app can have 1000 components you can write the all components in the same file 
    so the best practice is to create a component folder inside the src folder whatever component that i make inside my app.js i put it this component folder you can give folder name to any naming it is upon the maintance of the project what folder name that it was given. read react file structure official documentation

    i will try to basic folder structure and as time as our app grow suppose our app has lot of components we will keep restructing that's the best way so don't overthink stating you are always restructing later

    let us create a first component file header.js whenever you create a file for component try to name a file exactly what the component name was. try to match with the component name. so our file name would be Header.js if the file name is Header.js it would contain the header component . some people like to write the file name as Header.jsx .it's a personal choice but according to akshay using .js extension is good . you can use .jsx extension it hardly matters. jsx is js at the end of the day

    so i put the code of Header component into the Header.js file . so if Header component is use in some other file react throw an error that Header is not defined. so for accessible Header component outside the Header.js file so i will import Header from Header.js file. In app.js we use Header component but now Header component is not present in app.js so because of this react throw an error so what we need to do now we have to import Header component from Header.js but before we import Header
    component we need to export Header component from Header.js file for export Header component from Header.js we write this line at the end of Header.js file export default <component_name> -> export default Header;
    now we can import it inside in app.js. for import in app.js file we have to write this line at the top of app.js file
    import <component_name> from "path of that file in which that component is present" -> import Header from "./component/Header.js"; here we don't write file name with extension it also work i.e this also works -> import Header from "./component/Header"; react will treat it as js file at itself 
    every project has different conventions

    make ResturantCard file for ResturantCard component as i use ResturantCard component inside my Body so i import ResturantCard.js file inside Body.js as both these file are present inside same folder(are in same level) so we import it like this ./ResturantCard.js 

    move resList in body.js then only resList present inside body.js can understands what is resList. this is not a good practice becasue whenever you have any hardcoded data you can never put it in a component file this is industry standard practice. resList is hardcoded data. so we don't put resList in body.js file because body.js file contain Body component. you can put react won't complaint but this is not a good practice. so i won't keep resList(hardcoded data) into our app i won't keep resList in body.js file 
    similarly the url which is present inside ResturantCard.js which is cdn url we won't keep url inside ResturantCard.js file or inside in our app. url is also hardcoded string . if we see we have hardcoded string(url) inside Header.js . Never ever put hardcoded string inside our app . so where should we keep it so common practice is to keep inside a separate file that separate file known as config or utils or common. util means utility that will be use all accross our app . logo image can be used anywhere in our app . so i create utils folder and inside it i make constants.js inside it i put all the hardcoded strings. as we see that i name constants.js name in small letter because it is not a component .

    anything we create here it's not mandatory it is good practice 

    let's move all the constants things(hardcoded things like resList,cdn url, logo url) inside the constants.js file . it's a good practice to name all the constants in capital letter. i can put resList in to constant.js file let's make it separate file mockData.js and put resList inside it

    why we name utils folder whatever is present inside this is use all accross our app

    In body.js i have to import resList 

    There are 2 types of export and import : default and named export 
                                             default and named import 

    named export is used when from one file you have to export multiple things . In one file you can write only one default export you can't write it twice so when you have to export multiple things you can' use default export . bydefault our file export one thing suppose you have to export multiple things then in that case you have to use named export 

    how to use named export -> write export keyword before variable or something that you want to export

    if you have to export multiple things from one file then you use named export 

    if you want to import the named export you can write this -> import {named_export_variable_name} from "path_from_where_we_export"

- Default export/import
    export default <component_name>
    import <component_name> from "path"

- named export/import
    export const component_variable = something
    import {component_variable_name} from "path"


    good practice is to use default export/import unless you have two things which you want to export 

    can we use default export along with named export -> yes we can 

    it's a standard practice to not keep our file content more than 100 lines . every file in our app should not exceed 100 line.if it exceed more than 100 lines then break it in to some more file


Right now our website is static what do you mean by static right now we have no interaction with my app . lets make it dynamic . it is plane static website(it is read only website) . now we make our website dynamic or interactive 

    lets build a feature when we click that feature(or button) it show top rated resturant. now we see that how we will do something on click of button 

    when i click Top Rated Restaurant button my app show the top rated resturant(whose rating is above 4).How do i handle click handler when i click that button something can happen how can i do that. let's first see event handler how can i handle on click event 
    I have to do something on click so in button i will pass onClick attribute and this onClick takes a callback function it is called after we click on that button . callback function is js so we wrap it inside a {} in jsx 
    go to body.js and see it 
        <div className = "filter">
                <button className="filter-btn" onClick = {() => 
                    {}}
                >Top Rated Resturants</button>
        </div>
    whatver we pass inside this function after clicking when that function call it will be executed
        <div className = "filter">
                <button className="filter-btn" onClick = {() => 
                    {console.log("Button Clicked")}}
                >Top Rated Resturants</button>
        </div>
        it print Button Clicked on console after clicking the button () => {console.log("Button Clicked")} this is callback function which will be called when we click the button 
        
    This is how you add click handlers. you can add more event handler apart from onClick handler. you can also use onMouseHover event handler also 
        <div className = "filter">
                <button className="filter-btn" onMouseHover = {() => 
                    {console.log("Button Clicked")}}
                >Top Rated Resturants</button>
        </div>
        now whenever you hover cursor on Top Rated Resturants button then on console window you see Button Clicked text

        you can put any event you wish to 

        onclick the Top Rated Resturants button my resturant list should change there should be high rated resturants should visible to me . lets go to basic how this resturants card coming over here these resturants cards are coming from resList and this resList contain some mock data in it so suppose i want to show just 3 resturants cards i just have to change resList. our ui is config driven so if my resList change everything will be changed.our card is generated from resList so anything change in resList our webpage get changed 

        onclick i have to do something so that i can filter out top rated resturants so basically i have to somehow write a filter logic inside the callback function i.e instead of writing console.log("Button Clicked") i have to write some filer logic over here 
        <div className = "filter">
                <button className="filter-btn" onMouseHover = {() => {
                    // some filter logic so that on click of this button i need to filter out something
                    }}
                >Top Rated Resturants</button>
        </div>


        whenever you have react app you have 2 layer ui layer and data layer . the ui layer displayed what is sent by data layer 
        suppose my listOfResturants modified to one resturant(one card) what will happen the ui will automatically shown one resturant 

        as soon as we click Top Rated Resturants button our listOfResturants update to resturant whose average Rating is greater than 4.5 . we can see the modified/updated/filter listOfResturants(by doing console.log)after clicking the Top Rated Resturants button 

            const Body = () => {
            // this is normal js variable
            let listOfResturants =[];  // this should be let variable otherwise further we can't modified listOfResturants
            return (
            <div className="body">
                <div className = "search">search</div>
                <div className = "filter">
                <button className="filter-btn" onClick={() => 
                    {
                    listOfResturants = listOfResturants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    console.log(listOfResturants); 
                    }
                }
                    >Top Rated Resturants</button>
                </div>
                <div className = "resturantContainer"> 
                    {
                    listOfResturants.map((resturant) => (
                        <ResturantCard key = {resturant.info.id} resData = {resturant}/>
                    ))
                    }
                </div>
            </div>
        );
    };

    if we change our code only this our data will be filtered but our ui cannot update . so basically if we think as my 
    listOfResturants changes so my ui should automatically get changing (automatically my page should refreshed) how cool it will be instead of writing that logic This is the superpower that react has 
    when we say react is fast react is fast in dom manipulation(efficient in dom manipulation). if you want to keep your ui and data layer tied consistent to each other this is were react comes in and all other frameworks apart from react . all these frameworks are trying to solve this that our ui and data layer work each other that if my data changes my ui also changes.This is the things that all the frameworks trying to solve. update dom efficiently 
    why react is fast ? because react can do fast or efficient dom manipulation

    Right now our listOfResturants change but my ui can't change according to that . React solve this problem . when i click that button my listOfResturants changes according to that so my ui also changes accordingly this is the exact problem that react solve . To do this react give you a super power right now listOfResturants is normal js variable but if you give super power of react it will become super energetic react variable . super powerful react variable it also called as state variable
    how to create super powerful react variable for that we will use react hooks which is known as use state 

# At the end of the day react hooks is normal js function which is given to us by react it's a pre build the only thing is that function comes with some super power that function comes with some logic written behind the scenes it's a utility function that react given to us . There are multiple such functions that react given to us so all those are react hooks 

    facebook developer wrote that function which react given to us where they write it inside the react that you import when we do npm install react we got all these react utility functions inside my code 
    How to use it . we will have to import these utility function(hooks)

    There are 2 most important hooks:
    - useState() : it is use to generate super powerful state variable in react
    - useEffect()
    There are multiple hooks in react but in most of time you will use this 2 hooks

# Lets see how to use useState() hooks:
    first of all you have to import useState() . you have to import it using named import by writing : import { useState} from "react"
    when we able to import something it means somebody definitely export it from some file that why we are able to import it so above what we write that we import useState from react it means somebody definitely named export it from react 

    useState hooks is used to make state variables. why it is called state variable because it maintains the state of our application 

    How to use useState hooks it is used to create a state variable why it is called state variable because it maintains the state of our component. scope of local state variable is inside the component 

    when you call the useState() hook it will give you state variable and how you recieve state variable inside the array 
    const [listOfResturants] = useState() . now listOfResturants is super powerful react variable(state variable)

    Normal js varaible:
    let listOfResturants;

    Local state variable:
    let [listOfResturants] = useState();

    whatever we pass inside the useState() they become the default value of state variable . so const [listOfResturants] = useState([]) now default value of listOfResturants is [] . if you want to give the list of resturants as default value you can pass it inside the useState and how to use listOfResturants state variable normally it behaves as normal varaible 

    lets see how to modified this variable(state variable) suppose i want to modify the listOfResturants state variable you can't do this listOfResturants = []; How to modified it we modify the state variable by using function you can name anything to this function but the standard practice which use in industry that if state variable name is listOfResturants then our function name will be setlistOfResturants. basically you applied set before it . its not mandatory but it is normal nomenclature. This function is to use to update the state variable. How to update the state variable i will call the function and pass the new data that i want to insert(update) it to the state variable(which i want to push inside the state variable)

    you can make normal variable like this and update it like this:
        let list = []; //MAKING
        list = ["ABC]; //UPDATION  
            OR
        const list = []; //MAKING
        list.push("absf"); //UPDATION
    you can make state variable like this and update it like this:
        let [list,setlist] = useState([]) //MAKING a list and set a default value to empty list
        setlist(["acse"]) // UPDATING the list state variable by setlist method 



    import ResturantCard from "./ResturantCard";
    import resList from "../utils/mockData";
    import {useState} from "react";
    const Body = () => {
        const [listOfResturants,setlistOfResturants] = useState(resList)
        return (
            <div className="body">
                <div className = "search">search</div>
                <div className = "filter">
                <button className="filter-btn" onClick={() => 
                    {
                    const filterdList = listOfResturants.filter(
                        (res) => res.info.avgRating > 4.5
                    );

                    // by this we update the listOfResturants state variable data . we use setlistOfResturants function to update the data of  listOfResturants state variable data

                    setlistOfResturants(filterList);

                    }
                }
                    >Top Rated Resturants</button>
                </div>
                <div className = "resturantContainer"> 
                    {
                    listOfResturants.map((resturant) => (
                        <ResturantCard key = {resturant.info.id} resData = {resturant}/>
                    ))
                    }
                </div>
            </div>
        );
    };
    export default Body;

    when we go to our page we can see all the resturants that are in resList are shown there why all resturants of resList are shown because we give a default value resList to listOfResturants state variable.
    when i click the button of Top Rated Resturants it will create a filterdList and update the listOfResturants state variable so because of that as soon as we click the button our ui got filtered automatically bassed on filterdList

    when i clicked that button state variable (listOfResturants) changes

    so super powerful variable(state variable) keeps ui layer in sync with data layer . if listOfResturants is normal variable and if i update listOfResturants my ui can't updated .But if we have super powerful varaible(state varaible) it sync ui layer with data layer as soon as listOfResturants changes it will automatically refresh our component This is known as render In react term how do we call render whenever a state varaiable updates react re render the component. as soon as my data layer update my ui layer will automatically update how will it update by re rendering . As soon as my data layer updates react re render my component react do it very fast,very efficient and in very less code. This is why React is most popular library in world to build the ui application. How large scale application super fast what it makes it super fast React will make DOM operations super fast and efficient. The logic of updating the ui is known rendering this is were react is best .

    from anywhere when setlistOfResturants calls our listOfResturants updates . react remove that body and updates it, react quickly do that it quickly update our ui . you can see it go to inspect -> elements and see as soon as we click that button the elements section changes . now only those elements(resturant card shown in inspect) which satisfy that condition.

    as we see how much less code that we write to achieve the functionality. If you implement this feature by writing the js you have to write a tons of code but when we write code in react we see that we write less code  


    why our webapp is fast or optimize The answer is not that react is minified our code ,bundling our code . React not do anything of this . React is only good for DOM manipulation or DOM operation. How react do this 

    How React works behind the scenes (what is react algorithm) React use something known as Reconcilation algorithm It is also known as React fiber . in our ui we have DOM . suppose we have res-container and inside it we have 7 resturant card and suppose my ui changes to filering this 7 cards into 3 cards . what react do and why react fast. whereever this ui(7 resturant card) present react create virtual dom of it . Virtual Dom is not a actual dom .actual dom is a tag
    This is actual Dom 
    <div>
        <div>
            <img>
    Virtual Dom is a representation of actual Dom what do you mean by actual dom .Do you remember that React.createElement return the React Element which is object similarly when you have big structure it is all an object . As body is big structure so how react treats this body jsx react create object of it we can also see it lets console body component write console.log(<Body/>) inside the app.js 
    
        const AppLayout = () => {
        // see console window you see object and this object is react virtual dom 
        console.log(<Body/>); 
        return (
            <div className="app">
                <Header/>
                <Body/>
            </div>
        );
    }; 

    Virtual Dom is js object 

    Diff Algorithm find the difference between updated virtual dom and previous virtual dom 

    Supose old virtual dom contains 7 Resturant Card and after clicking the button updated virtual dom contains 3 resturants card then what Diff algorithm do it calculate the difference(which is 4 resturants card) and then it will actually update the DOM on every render cycle 
    When something changes in ui this is called reconcilation . In React16 An algorithm known as ReactFiber came it give you the new way to find the difference and update the DOM
    Diff Algorithm finds out the difference between the old and new object then it updates the actual dom that is why react is faster 
    Finding out the difference between two html code is tough but finding out the difference between the two objects is fast because js is fast

    whatever you see in the ui React keeps a track of all these html or dom elements as a virtual Dom(it's kind a object representation of whole actual dom). as soon as we clicked that button a new object is formed then it finds out the differenece between these two objects and then it actually updates the dom

    React constantly monitoring the listOFResturants(state Variable) why react do this because we use useState to create this listOFResturants . React Monitor the listOFResturants as soon as listOFResturants changes it findout the diff and update the ui . React do this update very efficiently that is the core job of React. as soon as we call the setlistOFResturants react find out the diff and update the ui this is the core job of React 

    const [listOfResturants,setlistOfResturants] = useState(resList) why their are two things why we can't just modify directly because their need to be triggered to start the diff algorithm and update the ui that why we create the setlistOfResturants second function whenever you call the second function it automatically updates the ui 

    useState() this function returns the array so const [listOfResturants,setlistOfResturants] = useState(resList) this can also be written as 
    const array = useState(resList);
    array[0] = listOfResturants;
    array[1] = setlistOfResturants;

    OR 

    it can also be written as 
    const arr = useState(resList);
    const [listOfResturants,setlistOfResturants] = arr; // this is destructuring on fly
