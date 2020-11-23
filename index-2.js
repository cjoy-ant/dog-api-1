// default is set to 3 in html
let quantity = 3;

function getDogImages(quantity) {
  console.log('Fetching your dog images');
   fetch (`https://dog.ceo/api/breeds/image/random/3`)
   .then(response => response.json())
   .then(responseJson => generateDogHtml(responseJson))
   .then(dogHtml => displayResults(dogHtml))
   .catch(error => alert('Something went wrong.Try again later.'))
}

// appends the html for responseJson to section
function generateDogHtml(responseJson) {
  console.log(responseJson);
  for (let i=0; i < quantity; i++) {
    $('section').append(`<br><img src="${responseJson.message[i]}" class="results-img">`);
  }
}

// displaysResults to the DOM
function displayResults(dogHtml) {
  $('section h2').replaceWith(`<h2>You got ${quantity} dogs!</h2>`);
  $('#placeholder').remove();
  $('.results').removeClass('hidden');
}

// listens for user to submit form
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages(quantity);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
