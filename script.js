'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `<article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} M </p>
//       <p class="country__row"><span>🗣️</span>${Object.values(
//         data.languages
//       )}</p>
//       <p class="country__row"><span>💰</span>${
//         Object.keys(data.currencies)[0]
//       }</p>
//     </div>
//   </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// const inp1 = prompt('Enter the country');
// getCountryData(inp1.toLowerCase());

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} M </p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${
      Object.keys(data.currencies)[0]
    }</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //Render country 1
//     renderCountry(data);

//     //render neighbour
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //AJAX call country 2
//     const nRequest = new XMLHttpRequest();
//     nRequest.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     nRequest.send();
//     nRequest.addEventListener('load', function () {
//       const [nData] = JSON.parse(this.responseText);
//       console.log(nData);

//       renderCountry(nData, 'neighbour');
//     });
//   });
// };

// const inp1 = prompt('Enter the country');
// getCountryAndNeighbour(inp1.toLowerCase());

// const request = fetch('https://restcountries.com/v3.1/name/india');
// console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};

const inp1 = prompt('Enter the country');
getCountryData(inp1.toLowerCase());
