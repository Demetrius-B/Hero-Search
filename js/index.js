// JS API

// Fetch Method
const input = document.querySelector('input')
const form = document.querySelector('form')
const resultsContainer = document.querySelector('.resultsContainer')
const base = `https://api.themoviedb.org/3/search/movie?api_key=`
const params = "&query="
const key = "7939efb13fa4dbec0853690ee81a7249"

const options = {
  method:"GET"
}

// When button is pressed
form.addEventListener("submit", (e)=> {
  e.preventDefault()

  let movie = encodeURI(input.value)
  let url = `${base}${key}${params}${movie}`
  console.log(url)

  fetch(url, options)
  .then(response => response.json())
  .then(responseAsJson => {
    let data = responseAsJson.results
    console.log(data)
  })

  .catch(error => {
    console.log("An Error Occurred", error);
  })
})

function randomName (results) {
  let output = ""
  results.forEach((results, index) => {
    if (result.title) {
      output+= "<p>" + result.title + "</p>"
    }
  })
  resultsContainer.innerHTML = output
}
