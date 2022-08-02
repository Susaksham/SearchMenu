const endpoint="https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";


const cities = [];
// let value= fetch(endpoint);
// console.log(value);
fetch(endpoint)
.then(blob=>{return blob.json()})
.then(data => cities.push(...data))


function findMatches(wordToMatch, cities){
    return cities.filter(place =>{
        //here we need to figure out if the city or state matches what was searched
        /*Regular expressions are patterns used to match character combinations in strings*/
        /*here g means globally*/
        const regex = new RegExp(wordToMatch ,'gi');
        /*match method :-The match() method matches a string against a regular expression **  
        The match() method returns an array with the matches. The match() method returns null if no match is found.
        */
       /*here whenever the match method is returning some that value 
       at that postion what ever the value of the place will be present in the filtered array*/
        return place.city.match(regex) || place.state.match(regex)
    })
}
function displayMatches(){

    
    const matchArray = findMatches(this.value, cities);
    console.log(matchArray)
    /*html will be our string*/
    const html = matchArray.map(place =>{
       return  ` <li> 
            <span class ="name" > ${place.city},${place.state}</span>
            <span class="population">${place.population}</span>
            <li>
                `;    
    }).join('');/*The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string */
    console.log(html)
    document.querySelector('.suggestions').innerHTML= html;
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggesitons');
searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);