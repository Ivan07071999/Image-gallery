const content = document.querySelector('#content');
const search = document.querySelector('#glyph');
const input = document.querySelector('#inp');
const clientID = 'Y-BnOi2tUIqilBM3rkctwBLiqHXWaoAaD4ZrAcWQTxY'
let requestURL = 'spring';
let url 
const contents = document.querySelector('.contents');

input.focus()

function showPrevData() {
  let showImages = [];
async function getData() {
  try {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=spring&client_id=${clientID}`);
    const data = await res.json();

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

function newItems() {

  input.setAttribute('value', '')
  let inpValue = input.value
if (inpValue.length === 0) {
  url = `https://api.unsplash.com/search/photos?query=spring&client_id=${clientID}`
} else {
url = `https://api.unsplash.com/search/photos?query=${inpValue}&client_id=${clientID}`
};

clear()

let bufferArray = [];
async function getNewData() {
    try {
  const res = await fetch(url);
  const data = await res.json();
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
};

function clear() {
  while(content.firstChild) {
    content.removeChild(content.lastChild);
  };
};

input.addEventListener('mouseenter', function(event) {
  event.target.setAttribute('autocomplete', 'off');
});


search.addEventListener('click', newItems);
document.addEventListener('keydown', function(e) {
if (e.code === 'Enter') {
  newItems()
 }
});

