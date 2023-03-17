const quoteText = document.querySelector('#quoteText');
const author = document.querySelector('#author');
const generateQuote = document.querySelector('#generateBtn');

const url = 'https://api.quotable.io/random';
generateQuote.addEventListener('click', makeRequest);

async function makeRequest(){
   try {
     let response = await fetch(url);
     let data = await response.json();
     quoteText.innerText = data.content;
     author.innerText = '-' + data.author;
   } catch (e) {
     quoteText.innerText = "An error occurred while generating the quote. Please try again later.";
   }
}

window.addEventListener('load',() => {
  makeRequest();
});
