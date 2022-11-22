//Data API
  const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan");
  const data = await response.json();
  let newData = data.slice(0,3)
 console.log(newData)
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


  //Validacion Form



  function validate(){
    let mail = document.forms['contact']['email'].value
    
    if(!mail){
      alert('Por favor escribe tu correo')
      return false;
    }
  }

    //Project Page
  document.getElementById('photo').src = newData[0].image_link;
  let title = document.getElementById('title');
  let subtitle = document.getElementById('subtitle');
  let description = document.getElementById('description');
  
  title.innerHTML = newData[0].name;
  description.innerHTML = newData[0].description;
  subtitle.innerHTML = newData[0].brand