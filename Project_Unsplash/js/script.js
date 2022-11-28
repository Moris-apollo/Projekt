document.getElementById("input").addEventListener("keydown", (event) => {
    if (event.key == "Enter")
        apiRequest();
});

apiRequest = () => {
    document.getElementById("gallery").textContent = "";
    const url = 'https://api.unsplash.com/search/photos?query='+document.getElementById('input').value+'&per_page='+document.getElementById('count').value+'&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
  
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