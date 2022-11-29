//Menu Hamburguesa

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

//Data API
  const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan");
  const data = await response.json();
  let newData = data.slice(0,3)

  //DOM Elements

  //Home Page
  document.getElementById('project1-img').src = newData[0].image_link;
  let projectName_1 = document.getElementById('project1-h2');
  let description_1 = document.getElementById('project1-p');
  document.getElementById('project2-img').src = newData[1].image_link;
  let projectName_2 = document.getElementById('project2-h2');
  let description_2 = document.getElementById('project2-p');
  document.getElementById('project3-img').src = newData[2].image_link;
  let projectName_3 = document.getElementById('project3-h2');
  let description_3 = document.getElementById('project3-p');

  //Transform Elements
  projectName_1.innerHTML = newData[0].name;
  projectName_2.innerHTML = newData[1].name;
  projectName_3.innerHTML = newData[2].name;

  description_1.innerHTML = newData[0].description;
  description_2.innerHTML = newData[1].description;
  description_3.innerHTML = newData[2].description;

  //Current date Project
  
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); 
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  document.getElementById('date').innerHTML = today
  
  //Validacion Form

 
  function validate(event){

    const formElement = document.getElementById('contact-us')
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    let name = document.forms['contact-us']['name'].value;
    let mail = document.forms['contact-us']['email'].value;
    let phone = document.forms['contact-us']['phone'].value;
    let message = document.forms['contact-us']['message'].value;

    if(!name && !mail && !phone && !message){
      alert ('Por favor rellena todos los campos');
      return false;
    }

    return true;
  
    
   
  }

    //Project Page
  document.getElementById('photo').src = newData[0].image_link;
  let title = document.getElementById('title');
  let subtitle = document.getElementById('subtitle');
  let description = document.getElementById('description');
  
  let capitalSubtitle = newData[0].brand.replace('c','C')
  title.innerHTML = newData[0].name;
  description.innerHTML = newData[0].description;
  subtitle.innerHTML = capitalSubtitle