const url = 'https://api.unsplash.com/photos/random?query=wather&client_id=FHDioUF4WGoOQe7DF8y8NMufqqbioTkwuul0FWM7nls';
   //const url = 'https://api.unsplash.com/photos/random?query=spring&client_id=FHDioUF4WGoOQe7DF8y8NMufqqbioTkwuul0FWM7nls';
const search = document.querySelector('#search')
const container = document.querySelector('#content');
const loadImg = document.querySelector('#loadImg');



// async function getData() {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   showData(data);

// }
// getData();

// async function showData(data) {
// const img = document.createElement("img");
// img.classList.add("gallery-img");
// img.src = data.urls.regular;
// img.alt = `image`;
// container.append(img);
  
// }

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showData(data);

}
getData();

async function showData(data) {
let div = document.createElement("div");
div.classList.add("img");
let img = document.createElement("img");
img.classList.add("gallery-img");
img.src = data.urls.regular;
img.alt = `image`;
div.appendChild(img);
container.append(div);
  
}