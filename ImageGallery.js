const clientID = 'icksnBH11K1IoSmW4x0pE3_TDe-7Ly84yNf1HquxSj8'
const url = `https://api.unsplash.com/search/photos?query=spring&client_id=${clientID}`
const container = document.querySelector('#sectionWrapper')
const content = document.querySelector('#content');


let bufferArray = [];


async function getData() {
    try {
  const res = await fetch(url);
  const data = await res.json();
  console.log(res);
  console.log(data)
  if (res) {
    bufferArray = data.results;
    showData();
  }
    } catch (err) {
        console.log(err)
    }
};
getData();

// const render = () => {
//         return bufferArray.map(({urls: {regular}}) => {
//         return `<div class="content" style="background-image: url(${regular})">
              
//                 </div>`

//     })
// }

const showData = () => {
   return bufferArray.map(({urls: {regular}}) => {
       let div = document.createElement("div");
       div.classList.add("content");  
       let img = document.createElement("img");
       img.classList.add("img"); 
       img.src = regular;
       img.alt = `image`;
       div.appendChild(img);
       content.append(div);
   })

};





// async function showData(data) {
// const img = document.createElement("img");
// img.classList.add("gallery-img");
// img.src = data.urls.regular;
// img.alt = `image`;
// container.append(img);
  
// }








// async function getData() {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   showData(data);

// }
// getData();

// async function showData(data) {
// let div = document.createElement("div");
// div.classList.add("img");
// let img = document.createElement("img");
// img.classList.add("gallery-img");
// img.src = data.urls.regular;
// img.alt = `image`;
// div.appendChild(img);
// container.append(div);

// }