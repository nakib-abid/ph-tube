// fetch, load and show catagories on html
//  create load catagories function
//  create display catagories function

const loadCatagories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCatagories(data.categories))
    .catch((error) => console.log(error));
};

const displayCatagories = (catagories) => {
    const categoryContainer = document.getElementById('categories');
    catagories.forEach(item => {
        // create a button
        console.log(item)
        const button = document.createElement('button');
        button.classList = "btn";
        button.innerText = item.category;
        categoryContainer.append(button);
    });
};


loadCatagories();
displayCatagories();