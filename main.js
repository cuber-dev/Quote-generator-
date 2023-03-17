const quoteText = document.querySelector('#quoteText');
const generateQuote = document.querySelector('#generateBtn');

const url = 'https://api.quotable.io/random';

generateQuote.addEventListener('click', async () => {
  try{
    let response = await fetch(url);
    let data = await response.json();
  quoteText.innerText = data.content;
  }catch(e){
    quoteText.innerText = "An error occurred while generating the quote. Please try again later.";
  }
});
