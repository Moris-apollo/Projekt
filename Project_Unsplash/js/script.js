var wynik = "random";
var ilosc = 10;
const url = 'https://api.unsplash.com/search/photos?query='+wynik+'&per_page='+ilosc+'&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

document.getElementById("input").addEventListener("keydown", (event) => {
    if (event.key == "Enter"){
		wynik = document.getElementById('input').value;
		ilosc = document.getElementById('count').value;
		if (wynik == ""){
			wynik = "random";
		}
		if (document.getElementById('count').value == null){
			ilosc = 10;
		}
		apiRequest();
	}
});

apiRequest = () => {
    document.getElementById("gallery").textContent = "";
    let url = 'https://api.unsplash.com/search/photos?query='+wynik+'&per_page='+ilosc+'&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    fetch(url)
    .then(response => {
        if (!response.ok) throw Error(response.statusText);
            return response.json();
    })
    .then(data => {
        loadImages(data);
    })
    .catch(error => console.log(error));   
}
  
loadImages = (data) => {
    for (let i = 0;i < data.results.length;i++) {
      let text = document.createElement("p");
      let image = document.createElement("div");
      let likeButton = document.createElement("div");

      text.innerText = data.results[i].user.name;

      likeButton.className = "likeButton";
      likeButton.innerHTML = "&#9829";

      likeButton.onclick = function(){
        const likes = document.querySelectorAll(".likeButton");
        likes.forEach(like => {
          like.addEventListener("click", (event) => {
            if (like.classList.contains("like-yes")) {
              event.target.classList.remove("like-yes");
              event.target.classList.add("like-no");
            } else {
              event.target.classList.remove("like-no");
              event.target.classList.add("like-yes");
            }
          }, {once : true});
        })
      }
      
      image.className = "img";
      image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
      image.appendChild(text);
      text.appendChild(likeButton);

      document.getElementById("gallery").appendChild(image);
    }
}

getStats = () => {
  document.getElementById("for_table").textContent = "";

  fetch(url)
    .then(response => {
        if (!response.ok) throw Error(response.statusText);
            return response.json();
    })
    .then(data => {
        createStatsTable(data);
    })
}

createStatsTable = (data) => {
    let authorsStatsText = document.createElement("h1");
    let statsTable = document.createElement("table");
    let headers = document.createElement("tr");

    authorsStatsText.innerText = "Authors Statistics";
    document.getElementById("for_table").appendChild(authorsStatsText);

    getHeader(headers, "Photo number");
    getHeader(headers, "Username");
    getHeader(headers, "First name");
    getHeader(headers, "Last name");
    getHeader(headers, "ID");
    getHeader(headers, "Collections");
    getHeader(headers, "Likes");
    getHeader(headers, "Photos");
    getHeader(headers, "Bio");
    getHeader(headers, "Location");

    statsTable.appendChild(headers);

    for(let i = 0;i < data.results.length;i++){
      let rowT = document.createElement("tr");

      getCell(rowT, parseInt(i+1));
      getCell(rowT, data.results[i].user.username);
      getCell(rowT, data.results[i].user.first_name);
      getCell(rowT, data.results[i].user.last_name);
      getCell(rowT, data.results[i].user.id);
      getCell(rowT, data.results[i].user.total_collections);
      getCell(rowT, data.results[i].user.total_likes);
      getCell(rowT, data.results[i].user.total_photos);
      getCell(rowT, data.results[i].user.bio);
      getCell(rowT, data.results[i].user.location);

      statsTable.appendChild(rowT);
    }

    document.getElementById("for_table").appendChild(statsTable);
}

getHeader = (headers, stat) => {
  let headerT = document.createElement("th");

  headerT.innerText = stat;
  headers.appendChild(headerT);
}

getCell = (rowT, stat) => {
  let cellT = document.createElement("td");
  
  cellT.innerText = stat;
  rowT.appendChild(cellT);
}

const promise = new Promise((resolve, reject) => {
    document.onload(apiRequest());
})
    .catch((e) => console.log("Wszystko banga. Zignoruj to."));