import fetchJsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');
petForm.addEventListener('submit', fetchAnimals);

//fetch animals from api

function fetchAnimals(e) {
    e.preventDefault();

    //get user input

    const animal = document.querySelector('#animal').Value;
    const zip = document.querySelector('#zip').Value;

    //fetch pets
    fetchJsonp('http://api.petfider.com/pet.find?format=json&key');


}