/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/


const navMenu = document.querySelector('.menu-button') // declaring to give access to menu-button in function


//Menu Maker Function
function menuMaker (menuItemsObj) {
  const menuNavDiv = document.createElement('div') //create the top div menu
  const ul = document.createElement('ul') // creating child unordered list

  menuNavDiv.appendChild(ul) //appending the ul to the menu div so links are visible in it

  menuNavDiv.classList.add('menu') //adding menu class to menu div

  // loops through each item in menuItems Object to produce a list item in the unordered list
  menuItemsObj.forEach(liText => {
    const li = document.createElement('li')
    li.textContent = liText
    ul.appendChild(li)
  })

  // event listener to open/close the menu when user clicks on icon
  navMenu.addEventListener ('click', ()=> {
    menuNavDiv.classList.toggle('menu--open')
  })
  return menuNavDiv // **Remember MUST return in a for loop and map
}

const newMenu = menuMaker(menuItems) //invoking menuMaker function

document.body.appendChild(newMenu) // adding newMenu to the DOM