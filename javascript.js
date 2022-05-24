let quotes = [

	"Singapore - https://www.webuildvalue.com/en/megatrends/singapore-smart-city.html",
	"Oslo - https://smartcity.press/climate-change-in-oslo/",
	"Amsterdam - https://hub.beesmart.city/city-portraits/smart-city-portrait-amsterdam",
	"Copenhagen - https://www.copcap.com/set-up-a-business/key-sectors/smart-city",
	"Helsinki - https://www.hel.fi/uutiset/en/kaupunginkanslia/helsinki-ranks-second-in-worldwide-smart-city-index",
]

function newQuote() {
	let randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: false
})