const menuIcon = document.getElementById('menu-icon');
const navigationMenu = document.querySelector('.navigation-container');
const closeMenuIcon = document.getElementById('close-menu-icon');

const dropDown = document.querySelector('.drop-down-items-features');
const dropDownTwo = document.querySelector('.drop-down-items-company');
const featureDropDown = document.querySelector('.feature-drop-down-expanded');
const companyDropDown = document.querySelector('.company-drop-down-expanded');

const arrowUp = "./images/icon-arrow-up.svg";
const arrowDown = "./images/icon-arrow-down.svg";

const imgArrowFeatures =document.getElementById("icon-down-features");
const imgArrowCompany =document.getElementById("icon-down-company");



menuIcon.addEventListener("click",() =>navigationMenu.style.display = 'block' );
closeMenuIcon.addEventListener("click" ,() =>navigationMenu.style.display = 'none' );

dropDown.addEventListener("click" ,() =>{
    if(featureDropDown.style.display === 'block'){
        featureDropDown.style.display = 'none'
        imgArrowFeatures.classList.remove('icon-up')
    }else if(featureDropDown.style.display === ''){
        featureDropDown.style.display = 'block'
        imgArrowFeatures.classList.toggle('icon-up')
    }else if(featureDropDown.style.display === 'none'){
        imgArrowFeatures.classList.toggle('icon-up')
        featureDropDown.style.display = 'block'
    }
});

dropDownTwo.addEventListener("click" ,() =>{
    if(companyDropDown.style.display === 'block'){
        companyDropDown.style.display = 'none'
        imgArrowCompany.classList.remove('icon-up')
    }else if(companyDropDown.style.display === ''){
        companyDropDown.style.display = 'block'
        imgArrowCompany.classList.toggle('icon-up')
    }else if(companyDropDown.style.display === 'none'){
        imgArrowCompany.classList.toggle('icon-up')
        companyDropDown.style.display = 'block'
    }
});

