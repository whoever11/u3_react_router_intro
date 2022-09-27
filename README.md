## React Router

The React Router is an incredible tool that will allow us to link up our components, creating interactive Single Page Applications with multiple routes.
It follows a few basic steps to set up, which will be required for any project we create and use it in.

### Set up

To begin, create a fresh React App. Then in your SRC folder, create a new subdirectory called components, and inside of it create some new files: 
Main.jsx, Header.jsx, Nav.jsx, Home.jsx, ComponentA.jsx, and ComponentB.jsx

Populate our Home and component files to have them say their names, something like

```
const ComponentB = () => {
return <h2> I am Component B </h2>
}

export default ComponentB
```

changing up as needed for ComponentA and for the Home files.

Now, we can begin

###Installation

Because of its power and (relative) ease of use, the React Router is one of the most popular React libraries out there. Like the others, it goes through a number of regular updates; as of this past Fall, we are now in Version 6.0

To install the React Router, go into your root directory (the one that contains our Package.json) and enter the following command

```
npm i react-router-dom

```

When you open up your Package.json file, you should now see "React-router-dom"  right under the "React" package.

### Set Up

Before we do anything in our components, we will have to add in some instructions to our index.js file. 
We will first import the React Router Dom package, which we will call BrowserRouter, and then we will wrap up our App component inside of it. Because we want to take everything from the BrowserRouter, we will deconstruct it when we import it. Lets add the following to our Index.js file

```
import { BrowserRouter } from 'react-router-dom'
```

And lets make an App sandwich on BrowserRouter bread. We can keep the React.StrictMode blocks as well, just make sure they are outside of our BrowserRouter

```index.js
  <React.StrictMode>
    <BrowserRouter>
      <App>
    </BrowserRouter>
  </React.StrictMode>
```

This is doing something called providing "Context" which we will speak about in a later lesson.

Now that we have our Index.js file all set to go, we can begin working with our component files.



###React Router Usage

Our Router is going to have two main parts, Routes, and Links. Routes will tell our Browser what components to render when we go to a certain part of the page. Links will provide user friendly ways to get to these routes.

