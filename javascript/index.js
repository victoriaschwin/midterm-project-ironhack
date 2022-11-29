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
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const data = await response.json();
  console.log(data)
  

  //DOM Elements

  //Home Page
  document.getElementById('project1-img').src = data[12].image;
  let projectName_1 = document.getElementById('project1-h2');
  let description_1 = document.getElementById('project1-p');
  document.getElementById('project2-img').src = data[1].image;
  let projectName_2 = document.getElementById('project2-h2');
  let description_2 = document.getElementById('project2-p');
  document.getElementById('project3-img').src = data[2].image;
  let projectName_3 = document.getElementById('project3-h2');
  let description_3 = document.getElementById('project3-p');

  //Transform Elements
  projectName_1.innerHTML = data[12].title;
  projectName_2.innerHTML = data[1].title;
  projectName_3.innerHTML = data[2].title;

  description_1.innerHTML = data[12].description;
  description_2.innerHTML = data[1].description;
  description_3.innerHTML = data[2].description;

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
  document.getElementById('photo').src = data[12].image;
  let title = document.getElementById('title');
  let subtitle = document.getElementById('subtitle');
  let description = document.getElementById('description');
  
  title.innerHTML = data[12].title;
  description.innerHTML = data[12].description;
  subtitle.innerHTML = data[12].director