const form = document.querySelector('form');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = searchInput.value;
  const response = await fetch('./emaillist.txt');
  const text = await response.text();
  const emailList = text;
  // .split('\n');
  const found = emailList.includes(email);
  let message = '';
  if (found) {
    message = `${email} was found in the email list.`;
    resultsDiv.classList.add('found');
  } else {
    message = `${email} was not found in the email list.`;
  }
  resultsDiv.textContent = message;
});
