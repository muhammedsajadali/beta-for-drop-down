let menuIcon = document.getElementById('menu-icon');
let navigationMenu = document.querySelector('.navigation-container');

let dropDown = document.querySelector('.drop-down-items-features');
let dropDownTwo = document.querySelector('.drop-down-items-company');
let featureDropDown = document.querySelector('.feature-drop-down-expanded');
let companyDropDown = document.querySelector('.company-drop-down-expanded');


menuIcon.addEventListener("click",() =>navigationMenu.style.display = 'block' );
dropDown.addEventListener("click" ,() =>featureDropDown.style.display = 'block' );
dropDownTwo.addEventListener("click" ,() =>companyDropDown.style.display = 'block' );