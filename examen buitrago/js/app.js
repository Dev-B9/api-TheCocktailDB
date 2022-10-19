// www.thecocktaildb.com/api/json/v1/1/ search.php?s=margarita filtra por nombre
const main = document.getElementById("main")
const filter = document.getElementById("filter")
let windowReload;
window.addEventListener('DOMContentLoaded', ()=>{
    let URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
    dataProcess(URL)
})



filter.addEventListener('keypress', (event)=>{
    if(event.key === "Enter"){
        let newUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`
        dataProcess(newUrl)
        main.innerHTML=""
        console.log(newUrl);
    }else{
    windowReload = setInterval(()=>{
    if(event.target.value === ""){
        window.location.reload()
    }
  }, 1000);
}
})


function dataProcess(url) {
    fetch(url)
    .then(response => response.json())
    .then(response => response.drinks.forEach(element => {
        createDrinks(element)
    }))
    
}


function createDrinks(data) {
    
    const {strDrink,strDrinkThumb} = data
    

    const containerCards = document.createElement("div")
    containerCards.classList.add('containerCards')

    const card = document.createElement('div')
    card.classList.add("cardImage")

    const cardText = document.createElement('div');
    cardText.classList.add("cardTitle")


    const title = document.createElement("h1")
    const img = document.createElement('img')


    title.textContent = strDrink
    img.setAttribute('src', strDrinkThumb)

    containerCards.appendChild(card)
    containerCards.appendChild(cardText)
    cardText.appendChild(title)

    card.appendChild(img)
    main.appendChild(containerCards)
    // console.log(Pcrdt);
}