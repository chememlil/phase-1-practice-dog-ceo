console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'dog';
                dogImageContainer.appendChild(img);
            });
        });
});
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
    // Challenge 1: Fetch and render dog images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImageContainer = document.getElementById('dog-image-container');
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = 'dog';
                dogImageContainer.appendChild(img);
            });
        });

    // Challenge 2: Fetch and render dog breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const dogBreedsList = document.getElementById('dog-breeds');
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                dogBreedsList.appendChild(li);
            });
        });
});
document.addEventListener("DOMContentLoaded", () => {
    // Previous code for Challenge 1 and 2...

    // Challenge 3: Change font color on click
    const dogBreedsList = document.getElementById('dog-breeds');
    dogBreedsList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; // Change color as per your preference
        }
    });

});
document.addEventListener("DOMContentLoaded", () => {
    // Previous code for Challenge 1, 2, and 3...

    // Challenge 4: Filter breeds by starting letter
    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', (event) => {
        const selectedLetter = event.target.value;
        const dogBreedsList = document.getElementById('dog-breeds');
        const breeds = dogBreedsList.getElementsByTagName('li');

        for (let i = 0; i < breeds.length; i++) {
            const breed = breeds[i];
            if (breed.textContent.startsWith(selectedLetter)) {
                breed.style.display = 'block';
            } else {
                breed.style.display = 'none';
            }
        }
    });
});
