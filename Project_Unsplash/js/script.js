var wynik = "random";
var ilosc = 10;
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
    const url = 'https://api.unsplash.com/search/photos?query='+wynik+'&per_page='+ilosc+'&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
  
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
    for(let i = 0;i < data.results.length;i++){
      let image = document.createElement("div");
      image.className = "img";
      image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
      document.getElementById("gallery").appendChild(image);
    }
  }

  document.onload(apiRequest());