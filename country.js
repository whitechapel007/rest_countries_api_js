const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const singleCountry = document.querySelector(".singleCountry");
const countryName = urlParams.get("name");

const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const getCountry = async (countryName) => {
  const url = `https://restcountries.com/v2/name/${countryName}`;
  const resp = await fetch(url);

  const data = await resp.json();

  const eachCountry = data[0];
  console.log(eachCountry);
  singleCountry.innerHTML = `
  <div class="container ">
  <div class="row">
    <div class="col-sm-12 col-md-3">
      <div class="containers-2">
        <img
          src="${eachCountry.flags.svg}"
          alt=""
          class="img-responsive"
        />
      </div>
    </div>
    <div class="col-sm-12 col-md-4 mx-auto mt-3 pt-3 justify-content-center">
    <div class="content">
<div className="row">
<div className="col">

      <h4 class="heading">${eachCountry.name}</h4>
      <p> <span> Native Name: </span> ${eachCountry.nativeName}</p>
      <p>  <span> Population: </span> ${eachCountry.population}</p>
      <p> <span> Region: </span>  ${eachCountry.region}</p>
      <p> <span>Sub Region:  </span>  ${eachCountry.subregion}</p>
      <p><span>Capital:  </span>${eachCountry.capital}</p>
      </div>
      <div class="col"> 
      <p> <span>Top Level Domain: </span> ${eachCountry.altSpellings[0]}</p>
      <p> <span>  Currency: </span> ${eachCountry.currencies[0].name}</p>
      <p> <span>Languages:  </span>${eachCountry.languages[0].name}</p>
      </div>
      </div>
    </div>
  </div>
</div>

  
  `;
};

getCountry(countryName);
