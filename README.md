### SEIR 0508

# React Router

The React Router is an incredible tool that will allow us to link up our components, creating interactive Single Page Applications with multiple routes.
It follows a few basic steps to set up, which will be required for any project we create and use it in.

### Set up

To begin, create a fresh React App. Then in your SRC folder, create a new subdirectory called components, and inside of it create some new files: 
Main.jsx, Header.jsx, Nav.jsx, Home.jsx, ComponentA.jsx, and ComponentB.jsx

Populate our Home and component files to have them say their names, something like

```jsx
const ComponentB = () => {
  return <h2> I am Component B </h2>
  }

export default ComponentB
```

changing up as needed for ComponentA and for the Home files.

We are going to nest our Header and Main components inside of App.js, and nest Nav inside of our header. Home, Components A and B we will work with shortly. 


Now, we can begin

### Installation

Because of its power and (relative) ease of use, the React Router is one of the most popular React libraries out there. Like the others, it goes through a number of regular updates; as of this past Fall, we are now in Version 6.0

To install the React Router, go into your root directory (the one that contains our Package.json) and enter the following command

```sh
npm i react-router-dom
```

When you open up your Package.json file, you should now see "React-router-dom"  right under the "React" package.

### Set Up

Before we do anything in our components, we will have to add in some instructions to our index.js file. 
We will first import the React Router Dom package, which we will call BrowserRouter, and then we will wrap up our App component inside of it. Because we want to take everything from the BrowserRouter, we will deconstruct it when we import it. Lets add the following to our main.js file

```
import { BrowserRouter } from 'react-router-dom'
```

And lets make an App sandwich on BrowserRouter bread. We can keep the React.StrictMode blocks as well, just make sure they are outside of our BrowserRouter

```main.js
  <React.StrictMode>
    <BrowserRouter>
      <App>
    </BrowserRouter>
  </React.StrictMode>
```

This is doing something called providing "Context" which we will speak about in a later lesson.

Now that we have our Index.js file all set to go, we can begin working with our component files.



### React Router Usage

Our Router is going to have two main parts, Routes, and Links. Routes will tell our Browser what components to render when we go to a certain part of the page. Links will provide user friendly ways to get to these routes.


Luckily, the Router follows a basic Semantic flow, and if we want to use Links and Routes, we'll simply have to use the terms Link, Route, and Routes.


In our Nav component, lets first import the Link library in

```Nav.jsx

import { Link } from 'react-router-dom'

```

Then, we can create our Links. These follow a standard syntax that looks something like this

```jsx
<Link to="/componentA">
   <h2> Component A </h2>
</Link>

```

We are using an H2 text for our Link, but we can use anything from Buttons to Images, which you have most likely seen across the web

Using our Component A link syntax, can you deduce what our Home and Component B ones will look like?


Our Nav.jsx file should look something like this

```jsx

import { Link } from 'react-router-dom'

const Nav = () => {
  return (
  
    <Link to="/"> Home </Link>
    <Link to="/componentA"> Component A </Link>
    <Link to="/componentB"> Component B </Link>
  )
 }
 
export default Nav
```

Notice how our "Home" Link just has a "/" with no additional slug at the end. This is because Home will be our Landing Page. The name of the components, and their content may change, but keeping "/" as the landing page is very common. 

In Unit 3, when we work on Auth with React, we'll be making Login and Register links for our users, which you have no doubt seen before.

But let's not get too far ahead of ourselves yet, after our Links, we need some Routes. Lets hop back into Main.js, which we have nested within App.js


Lets start by importing in Route and Routes into our component. Noticing a pattern here? 

```jsx
 
import { Route, Routes} from 'react-router-dom'

```


Now we can get these Routes going, and see the real magic of the React Router Library. But first, lets do a quick review of the steps we've had so far

1) Installing the react-router-dom in our Root directory
2) Adding our necessary code into index.js
3) Importing our packages into their respective files
4) Setting up our Routes and Links (You can do either Routes or Links first, it doesn't matter which order you do, but both steps will be necessary for the Router to work properly)


Back to Main.js!

All Routes (singular) need to be wrapped in a Routes (plural) tag. Its going to look something like this:

```jsx
import { Route, Routes } from 'react-router-dom


const Main = () => {
  return (
    <div className="routes-container">
      <Routes>
      
        //Routes go here!
      
      </Routes>
    </div>
  )
}

```

Well we're about 90% there. All we need to do is add in our Routes. It follows a fairly simple syntax, we tell React where we are going, and what component we want to render. Something like :


```

<Route path="/componentA" element={<ComponentA/>} />

```
   
Following this same pattern, can you make routes for Component B and for our landing page?


Load up your React server and lets see these in action!


### Bonus

Using Props in our Routes follows a similar pattern to our standard components


```Main.jsx

const Main = () => {

const userName = "fakeuser123"

return (
  
  <Routes>
  
    <Route  path="/" element={<Home userName={userName}>} />
  
  </Routes>

 )
}
```

```
const Home = (props) => {

 return <h2> welcome {props.userName} ! </h2>

}

```

Now that we have the basics of the React Router down, lets practice using our React framework to create User Friendly SPA's.

Later this week, we'll take the Router up a few steps using our Params and useNavigate hook to create more dynamic pages!
