
console.log("%c HI", "color: firebrick");
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
// FETCHES
// fetch collection of dog images and return a json() Promise for use elsewhere
function fetchImages() {
  return fetch(imgUrl).then(res => res.json());
}
// fetch collection of dog breeds and return a json() Promise for use elsewhere
function fetchBreeds() {
  return fetch(breedUrl).then(res => res.json());
}
function addImage(imgUrl) {
  let image = document.createElement("img");
  image.src = imgUrl;
  image.style.width = "25%";
  document.getElementById("dog-image-container").appendChild(image);
}
// requires a collection of image URLs
function addImageCollection(imageUrlArray) {
  imageUrlArray.forEach(function(dogPictureUrl) {
    addImage(dogPictureUrl);
  });
}
renderBreeds = listOfBreeds => {
  Object.keys(listOfBreeds).forEach(breed => {
    publishBreed(breed, listOfBreeds[breed]);
  });
};
printBreed = breedName => {
    let breedItem = document.createElement("li");
    breedItem.textContent = breedName;
    document.getElementById("dog-breeds").appendChild(breedItem);
    breedItem.addEventListener("click", function(e) {
      e.target.style.color = "green";
    });
}
publishBreed = (breed, subBreeds) => {
  if (subBreeds.length === 0) {
      printBreed(breed)
  } else {
    subBreeds.forEach(subBreed => {
      printBreed(`${subBreed} ${breed}`);
    });
  }
};
// PAGE LOAD
document.addEventListener("DOMContentLoaded", function() {
  fetchImages().then(json => {
    addImageCollection(json.message);
  });
  fetchBreeds().then(function(json) {
    renderBreeds(json.message);
  });
});






















// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// function addPicture(pic){
//   const picList = document.getElementById("dog-image-container")
//   const p = makePic(pic)
//   picList.appendChild(p)
// }

// function makePic(pic){
//   const p = document.createElement("p")
//   const img = document.createElement("img")
//   img.src = pic
//   p.appendChild(img)
//   return p 
  
// }

// function showPics(picArray){
//   picArray["message"].forEach(pic => addPicture(pic))
// }



// const fetchImg = fetch(imgUrl)
// .then(response => response.json())
// .then(data => showPics(data) );

// const fetchAllDogBreeds = fetch(breedUrl)
// .then(res => res.json())
// .then(data => showDogBreed(data));

// function addBreed(breed){
//   const breedList = document.getElementById("dog-breeds")
//   const li = makeBreed(breed)
//   changeColor(li)
//   breedList.appendChild(li)
// }

// function changeColor(li){
//   li.addEventListener("click", function(){
//     li.style.color = "red"
//   })
// }

// function makeBreed(breed){
//   const li = document.createElement("li")
//   li.id = breed 
//   li.innerText = breed 
//   return li 
// }

// function showDogBreed(breeds){
//   allBreeds = Object.keys()
// }








































// function addDog(dog){
//     const dogImg = document.querySelector("#dog-list");

//     const img = document.createElement("img");
//     img.src = dog;
//     dogImg.appendChild(img);
//     return dogImg
// }

// function getData(){
// fetch("https://dog.ceo/api/breeds/image/random/4")
//       .then(response => response.json())
//       .then(json => {
//         json.message.forEach(image => addImage(image))
// });
// }
