console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const fetchCall = () => {
    const imgs = document.querySelector("#dog-image-container");

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then((res) => res.json())
        .then(data => {
            data.message.map(element => {

                imgs.innerHTML += `<img src=${element}>`;
            });
        });

        const breedUrl = "https://dog.ceo/api/breeds/list/all";
        const ul = document.querySelector('#dog-breeds');
        const dropdown = document.querySelector('#breed-dropdown');
        
        fetch(breedUrl)
            .then((res) => res.json())
            .then(data => {
                const breedList = Object.keys(data.message);
                const filterBreedsByLetter = (letter) => {
                    ul.innerHTML = ''; 
                    breedList.forEach(breed => {
                        if (letter === 'all' || breed.startsWith(letter)) {
                            ul.innerHTML += `<li>${breed}</li>`;
                        }
                    });
                    const li = document.getElementsByTagName('li');
                    for (let i = 0; i < li.length; i++) {
                        const el = li[i];
                        el.addEventListener('click', () => {
                            el.style.color = 'red';
                        });
                    }
                };

                filterBreedsByLetter('all');
                dropdown.addEventListener('change', () => {
                    const selectedLetter = dropdown.value;
                    filterBreedsByLetter(selectedLetter);
                });
            });
        }  

document.addEventListener('DOMContentLoaded', fetchCall);

