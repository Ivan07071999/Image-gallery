// const input = document.querySelector('#inp');
// let requestURL = 'spring';
// const clientID = 'Y-BnOi2tUIqilBM3rkctwBLiqHXWaoAaD4ZrAcWQTxY'
// let url = `https://api.unsplash.com/search/photos?query=${input.value}&client_id=${clientID}`
// const container = document.querySelector('#sectionWrapper')
// const content = document.querySelector('#content');
// const search = document.querySelector('#search');
// const headerSearch = document.querySelector('#searchImg');
// //const input = document.querySelector('#inp');

// let bufferArray = [];
// async function getData() {
//     try {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(res);
//   console.log(data)
//   if (res) {
//     bufferArray = data.results;
//     showData();
//   }
//     } catch (err) {
//       console.log(err)
//     }
// };
// getData();

// const showData = () => {
//   return bufferArray.map(({urls: {regular}}) => {
//     let div = document.createElement("div");
//     div.classList.add("content");  
//     let img = document.createElement("img");
//     img.classList.add("img"); 
//     img.src = regular;
//     img.alt = `image`;
//     div.appendChild(img);
//     content.append(div);
//   })
// };


// // function createElementInput() {
// //   let newInput = document.createElement('input')
// //   newInput.setAttribute('id', 'newInp')
// //   newInput.setAttribute('value', newInput.value)
// // };

// search.addEventListener('click', (e) => {
//   // input.setAttribute('value', input.value)
//   // requestURL = input.value
//   requestURL = input.value
//   url = `https://api.unsplash.com/search/photos?query=${requestURL}&client_id=${clientID}`
// })
const content = document.querySelector('#content');
const search = document.querySelector('#search');
const input = document.querySelector('#inp');
const clientID = 'Y-BnOi2tUIqilBM3rkctwBLiqHXWaoAaD4ZrAcWQTxY'
let requestURL = 'spring';
let url 
const contents = document.querySelector('.contents');
// `https://api.unsplash.com/search/photos?query=spring&client_id=${clientID}`
//console.log(url)


function showPrevData() {
  let showImages = [];
async function getData() {
    try {
  const res = await fetch(`https://api.unsplash.com/search/photos?query=spring&client_id=${clientID}`);
  const data = await res.json();
  console.log(res);
  console.log(data)
  if (res) {
    showImages = data.results;
    showData();
  }
    } catch (err) {
      console.log(err)
    }
};
getData();

const showData = () => {
  return showImages.map(({urls: {regular}}) => {
    let div = document.createElement("div");
    div.classList.add("images");  
    let img = document.createElement("img");
    img.classList.add("img"); 
    img.src = regular;
    img.alt = `image`;
    div.appendChild(img);
    content.append(div);
  })
};
};

showPrevData();


search.addEventListener('click', (e) => {

input.setAttribute('value', '')
let inpValue = input.value
if (inpValue.length === 0) {
  url = `https://api.unsplash.com/search/photos?query=spring&client_id=${clientID}`
} else {
url = `https://api.unsplash.com/search/photos?query=${inpValue}&client_id=${clientID}`
}
console.log(url)

clear()

let bufferArray = [];
async function getNewData() {
    try {
  const res = await fetch(url);
  const data = await res.json();
  console.log(res);
  console.log(data)
  if (res) {
    bufferArray = data.results;
    showNewData();
  }
    } catch (err) {
      console.log(err)
    }
};
getNewData();

const showNewData = () => {
  return bufferArray.map(({urls: {regular}}) => {
    let div = document.createElement("div");
    div.classList.add("images");  
    let img = document.createElement("img");
    img.classList.add("img"); 
    img.src = regular;
    img.alt = `image`;
    div.appendChild(img);
    content.append(div);
  })
};
});

function clear() {
  while(content.firstChild) {
    content.removeChild(content.lastChild)
  }
}

input.addEventListener('mouseenter', function(event) {
  event.target.setAttribute('autocomplete', 'off')
});