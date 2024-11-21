# Namaste React
#                   --------Episode 1-----------
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

#                           ---------Episode 2-----------
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


# --------------------Episode 3------------------------

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