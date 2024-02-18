## What is this?
A project I made with a team for a hackathon!
I did the programming (frontend and backend) and the team did the design, idea and a bit of the CSS animations, logos and text on the home screen
## Fun video
https://github.com/ZarmDev/plantcoppa/assets/80705328/e992f7c4-1b2f-41f7-aa96-257415b46976
## How do you run this?
This doesn't run... (if you did run it you would need to run the repl's) it's just for me to check out the code sometimes.
## Credits
I used the Repl Auth React Example 2022 on replit as a template for the authentication
### Notes
## What the heck is React?!?
Basically if you want to edit the HTML or Javascript, just scroll down to the return() and the HTML is there.
Here's a explanation:
<div id="navbar">
  <img src="/favicon.png"></img>
  <!-- Just like in normal HTML, you can add onclick but here it's captalized at C and it has this wierd arrow function which you can ignore, it's just saying run the function goHome() when the button is clicked -->
  <button onClick={() => { goHome() }}>Home</button>
  <button onClick={() => { findPlants() }}>Find plants</button>
  <button onClick={() => { yourPlants() }}>Your plants</button>
  <img id="shoppingcart" src="/assets/shoppingcart.png"></img>
</div>
<div id="content">
    <!-- This code puts the variable contentToDisplay on the site in the div, "content" -->
    {contentToDisplay}
</div>

## Code you should worry about as a frontend dev
All the buttons on the top (home, find plants, etc) all have their corresponding code in src/pages
The src/main folder has everything you probably need.
If you need to find the html file, it's index.html - the content is injected there
All the image files are in public/assets and importantly, IF YOU EVER WANT TO IMPORT IMAGES:
You should put /assets/whateverimage.png in the src attribute, because the "root" is public. Basically just do /assets/whateverfile

## Ignore these files:
The file, index.tsx, is run FIRST. It's just a page that decides whether the authentication page is open or the web app.
App.tsx can be ignored as it's where the authentication code happens
databaseFeatures folder should be ignored

## Note for submissions
The technologies we used:
- HTML
- CSS
- JS
- Vite
- React
- Express
- Typescript
Libraries:
- cors
- morgan
- @replit/database
- express-rate-limit
- react-toastify

## random feature requests ##
The shopping cart doesn't work, the CSS aesthetics can definitely be improved, it would be nice to have skelton loading css effects in all of the pages, the websites true purpose is kind of unclear as you can't actually do anything, the navbar can definitely be better and it would be nice to have a contact page, the find plants page should have a filter to find usernames or sort it. Additionally, it would be nice if the add product and other buttons had a nice popup UI and the Home button seems redundant as there is quotes there but it doesn't contribute to the functionality of the site, although it's unclear where we would put the quotes instead; maybe on the first time the user logins? 

## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.
