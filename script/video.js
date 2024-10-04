function getTimeString(time){
    const hour = parseInt(time/3600);
    let remainingSecond = time%3600;
    const minute = parseInt(remainingSecond/60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}

// fetch, load and show catagories on html
//  create load catagories function
//  create display catagories function

const loadCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((error) => console.log(error));
};

const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
};

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
         <figure class = "h-[200px] relative">
    <img
      src=${video.thumbnail}
      class = "h-full w-full object-cover"
      alt="Shoes" />
      ${
        video.others.posted_date?.length === 0 ? "" : ` <span class="absolute right-2 bottom-2 bg-black rounded p-1 text-white">${getTimeString(video.others.posted_date)}<span/>`
      }
  </figure>
  <div class="px-o py-2 flex gap-2">
    <div>
     <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
    </div>
    <div>
     <h2 class="font-bold">${video.title}</h2>
     <div class="flex gap-2 items-center">
      <p class="text-gray-400">${video.authors[0].profile_name}</p>
      ${video.authors[0].verified === true ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />` : ''}
     <div/>
     
     <p></p>
    </div>
  </div>
        `;
    videoContainer.append(card);
  });
};

const displayCatagories = (catagories) => {
  const categoryContainer = document.getElementById("categories");
  catagories.forEach((item) => {
    // create a button
    // console.log(item)
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    categoryContainer.append(button);
  });
};

loadCatagories();
loadVideos();
