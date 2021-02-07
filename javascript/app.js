const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

const showLoadingSpinner = () => {
	loader.hidden = false;
	quoteContainer.hidden = true;
};
//Hide Loading
const removeLoadingSpinner = () => {
	if (!loader.hidden) {
		quoteContainer.hidden = false;
		loader.hidden = true;
	}
};

// Get quote from API
async function getQuote() {
	showLoadingSpinner();
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
		removeLoadingSpinner();
		// throw new Error("oops");
	} catch (error) {
		// console.log(error);
		//recursion
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
