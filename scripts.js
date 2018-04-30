//inserting some HTML elements to build the page
const app = document.querySelector('#root');
const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);




//Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

//Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
	//Begin accessing JSON data here
	var data = JSON.parse(this.response);
	
	if(request.status >= 200 && request.status < 400) {
	console.log('data success');
	
		data.forEach(movie => {
		
		//Create a div with the Card Class
		const card = document.createElement('div');
		card.setAttribute('class', 'card');
		
		//Create a H1 and set the text.content to the films title
		const h1 = document.createElement('h1');
		h1.textContent = movie.title;
			
		//create a P and set it to the films description
		const p = document.createElement('p');
		movie.description = movie.description.substring(0, 300);
		p.textContent = movie.description;
	
		//append the cards to the container element
		container.appendChild(card);
			
		card.appendChild(h1);
		card.appendChild(p);
		
		
		})
	}
	else {
		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = "Error";
		app.appendChild(errorMessage);
	}
}

//send the request
request.send();

console.log(request);





