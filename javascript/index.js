import fetch from 'node-fetch';


// fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
//   .then((res) => res.json())
//   .then((data) => dataApi = data)
//   .catch((err) => console.log(err));


  
  const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan");
  const data = await response.json();
  
  
  
  