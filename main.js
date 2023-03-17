const quoteBox = document.querySelector('#quoteBox');
const quoteText = document.querySelector('#quoteText');
const author = document.querySelector('#author');
const generateQuoteBtn = document.querySelector('#generateBtn');

const url = 'https://api.quotable.io/random';
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

generateQuoteBtn.addEventListener('click', makeRequest);

quoteBox.addEventListener('click',(e) => {
  
  // copy
  const text = document.createElement('textarea');
  text.value = quoteBox.innerText;
  document.body.append(text);
  text.select();
  document.execCommand('copy');
  document.body.removeChild(text);
  
  
  // Create span 
  const span = document.createElement('span');
  span.innerText = "Copied to Clipboard!";
  span.classList.add('copy');
  
  // Append 
  document.body.append(span);
  
  // Remove
  setTimeout(() => {
    document.body.removeChild(span);
  },3500);
  
});

// Onload
window.addEventListener('load',() => {
  makeRequest();
});
