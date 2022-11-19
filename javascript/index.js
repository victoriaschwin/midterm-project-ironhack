import fetch from '../node_modules/node-fetch';

  const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan");
  const data = await response.json();
  
  let newdata = data.slice(0,3)
  
  console.log(newdata[0].name)
  let img1 = document.getElementById('project1-img')

  let projectName = document.getElementById('project1-h2')

  projectName.innerHTML = newdata[0].name

  console.log(projectName.innerHTML)