let countries;

const search = document.querySelector(".search-term");
const disp = document.querySelector(".disp");
const app = document.querySelector(".app");
const dropdown = document.querySelector("#filter");
const dropdownLi = document.querySelectorAll(".dropdown-item");
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
const fetchCountries = async () => {
  const response = await fetch("https://restcountries.com/v2/all");
  const data = await response.json();
  display(data);
  countries = display(data);
  // eachCountry(data);
};
fetchCountries();

const display = (data) => {
  document.querySelector(".app").innerHTML = `
     
     ${data
       .map((item) => {
         const { flag, name, population, region, capital } = item;

         return `

<div class="col-lg-3 col-md-4 col-sm-12  px-4 py-4 ">
<a href="./country.html?name=${name}"  aria-label="${name} "class="page">
<div  class="containers">
<img src="${flag}" alt="${name}"  class="img-responsive"/>
</div>
<div class=" py-4 px-3 shadow">
<h6 class="country-name"> ${name}</h6>
<p>population: ${population} </p>
<p class="country-region">Region: ${region} </p>
<p>Capital: ${capital} </p>
</div>
</a>
</div>

`;
       })
       .join("")}
     
     `;
};

search.addEventListener("input", (e) => {
  const val = e.target.value;
  const countryName = document.querySelectorAll(".country-name");
  countryName.forEach((name) => {
    if (name.innerText.toLowerCase().includes(val.toLowerCase())) {
      name.parentElement.parentElement.parentElement.style.display = "block";
    } else {
      name.parentElement.parentElement.parentElement.style.display = "none";
    }
  });
});

// const searchCountry = async (name) => {
//   const response = await fetch(`https://restcountries.com/v2/name/${name}`);
//   const responseData = await response.json();

//   console.log(responseData);
// };

// const form = document.querySelector(".form-inline");
// form.addEventListener("onkeyup", (e) => {
//   const searchs = [];
//   e.preventDefault();

//   const search = document.querySelector(".search-term").value;
//   searchCountry(search);
// });

// const eachCountry = (data) => {
//   const uniqueCountry = countries.find(
//     (country) => country.alpha3code === countryByAlpha3code
//   );

//   console.log(uniqueCountry);

//   document.getElementById("unique").innerHTML = ``;
// };
// const container = document.querySelector(".containers");
// container.addEventListener("click", (e) => {
//   e.preventDefault();
//   e.target.value;
// });

dropdownLi.forEach((filter) => {
  filter.addEventListener("click", () => {
    const regions = filter.innerText;

    const countryRegion = document.querySelectorAll(".country-region");
    countryRegion.forEach((region) => {
      if (region.innerText.toLowerCase().includes(regions.toLowerCase())) {
        region.parentElement.parentElement.parentElement.style.display =
          "block";
      } else {
        region.parentElement.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

const newPage = document.querySelector(".page");
console.log(newPage);
