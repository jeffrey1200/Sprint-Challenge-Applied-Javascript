// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleCards(allData) {
  const mainDiv = document.createElement("div"); //first div class card
  mainDiv.classList.add("card");

  const headline = document.createElement("div"); //second div class headline
  headline.classList.add("headline");
  headline.textContent = allData.headline;

  const authorDiv = document.createElement("div"); //third div class author
  authorDiv.classList.add("author");
  const authorSpan = document.createElement("span");
  authorSpan.textContent = allData.authorName;

  const imgContainer = document.createElement("div"); //fourth div class img-container
  imgContainer.classList.add("img-container");
  const imgSource = document.createElement("img");
  imgSource.src = allData.authorPhoto;

  mainDiv.appendChild(headline);
  headline.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(imgSource);
  authorDiv.appendChild(authorSpan);

  return mainDiv;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res => {
  const cardsContainer = document.querySelector(".cards-container");
  const holder = Object.values(res.data.articles);
  // console.log(holder)
  holder.forEach(items => {
    for (let obj of items) {
      cardsContainer.appendChild(articleCards(obj));
      console.log(obj);
    }
    console.log(items);
  });
});

//Initial solution

// javascript jquery node technology
// for(let boots of bootstrap){

//     cardsContainer.appendChild(articleCards(boots))
//     // console.log(v)
// }
// for(let js of javascript){
//     cardsContainer.appendChild(articleCards(js))
// }
// for(let jque of jquery){
//     cardsContainer.appendChild(articleCards(jque))
// }
// for(let articleNode of node){
//     cardsContainer.appendChild(articleCards(articleNode))
// }
// for(let tech of technology){
//     cardsContainer.appendChild(articleCards(tech))
// }
// // for(let tests in res.data.articles){
// //     console.log(tests)
// // }
