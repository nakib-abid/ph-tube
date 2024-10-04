// fetch, load and show catagories on html
//  create load catagories function
//  create display catagories function

const loadCatagories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCatagories(data.categories))
    .catch((error) => console.log(error));
};

const displayCatagories = (data) => {
    console.log(data)
};


loadCatagories();
displayCatagories();