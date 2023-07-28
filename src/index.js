console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const fetchCall = () => {
    const imgs = document.querySelector("#dog-image-container")

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
      fetch(imgUrl)
      .then((res)=> res.json())
      .then(data=>{

        data.message.map(element => {
            console.log(element)
            imgs.innerHTML += `<img src=${element}>`
            
        });
      })


      const breedUrl = "https://dog.ceo/api/breeds/list/all";
      const optionA = document.querySelector('#breed-dropdown option[value="a"]');
      const optionB = document.querySelector('#breed-dropdown option[value="b"]');
      const optionC = document.querySelector('#breed-dropdown option[value="c"]');
      const optionD = document.querySelector('#breed-dropdown option[value="d"]');
      const ul = document.querySelector('#dog-breeds');
      fetch(breedUrl)
      .then((res)=> res.json())
      .then(data=>{
        Object.keys(data.message).forEach(element => {
            ul.innerHTML += `<li>${element}</li>`  
        });
            const li = document.getElementsByTagName('li')
            for(let i=0; i<=li.length; i++){
                const el = li[i];
                console.log(el)
            el.addEventListener('click', ()=>{
                el.style.color ='red'
            })
        }

        
      })}

document.addEventListener('DOMContentLoaded', fetchCall);
