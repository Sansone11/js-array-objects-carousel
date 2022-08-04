console.log('slider')

// Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice che trovate allegato,
// Bisogna generare il murkup delle slide ciclando l’array di oggetti che trovare nel file js.
// Il murkup da generare invece lo potrete trovare nel file html.
// A parte la generezione del murkup, il resto della logica è la stessa del vecchio esercizio,
// Se posso darvi un consiglio, a volte è più facile rifare le cose da capo invece che fare copia e incolla a raffica (che potrebbero portarvi a fare enormi pasticci).


// PSEUDOCODICE

// recupero l'elemento slides wrapper
// cicliamo gli elementi dell'array con un foreach
// effettuare un consol.log per verificare la sintassi si ok
// creo una variabile che contiene il template literal di una slide
// sostituisco gli elementi statici di html con gli elementi dell'array in dot.notation
// aggiungo le slide al slides wrapper (innerHTML+=)

// creo una variabile contenent l'indice active (0) let indexActive = 0;
// creo un arrey "slidesHtmlElements" di slide con document.queryselectorAll('.slide')
// aggiungo all'Array slidesHtmlElements la classe active
// slidesHtmlElements[indexActive].classList.add('active')

// per selezionare il tasto next uso un querySelector
// agiungo un addEventListener (click)
// all'indice corrente rimuovo la classe active
// icremento indexActive ++
// se l'indice active è  unguale a slideElements length
// indexActive = 0;

// all'indice corrente aggiungo la classe active

// per selezionare il tasto next uso un querySelector
// agiungo un addEventListener (click)
// all'indice corrente rimuovo la classe active
// icremento indexActive ++
// se l'indice active è  unguale a slideElements length-1
// indexActive = 5;

// all'indice corrente aggiungo la classe active	




const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]
// recupero l'elemento slides wrapper
const wrapper = document.querySelector('.slides-wrapper');
// cicliamo gli elementi dell'array con un foreach
slides.forEach(element => {
	// effettuare un consol.log per verificare la sintassi si ok
	// console.log(element.url,element.title,element.description);

	// sostituisco gli elementi statici di html con gli elementi dell'array in dot.notation
	const listItemEL = `<li class="slide active">
	<img src="./img/${element.url}" alt="">
	<div class="slide__content">
	  <h3 class="slide__title">${element.title}</h3>
	  <p class="slide__description">${element.description}</p>
	</div>
  </li>`
  // aggiungo le slide al slides wrapper (innerHTML+=)
  wrapper.innerHTML+=`${listItemEL}`
})

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
