const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Get quote from API
async function getQuote() {
	const proxyURL = "https://secure-citadel-62036.herokuapp.com/";
	const API_URL =
		"http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
	try {
		const res = await fetch(proxyURL + API_URL);
		const data = await res.json();
		//If author is blank add "Unknown"
		data.quoteAuthor === ""
			? (authorText.innerText = "Unknown")
			: (authorText.innerText = data.quoteAuthor);
		data.quoteText.length > 120
			? quoteText.classList.add("long-quote")
			: quoteText.classList.remove("long-quote");
		quoteText.innerText = data.quoteText;
		// console.log(data);
	} catch (error) {
		getQuote();
		console.log(`Whoops, no quote!, ${error}!`);
	}
}

//tweet quote
const tweetQuote = () => {
	const quote = quoteText.innerText;
	const author = authorText.innerText;
	const twitterURL = `https://twitter.com/intent/tweet?text=${quote} -${author}`;
	window.open(twitterURL, "_blank");
};

//event listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuote();
