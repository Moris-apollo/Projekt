let numberOfImages = 0;

// const genPicture = () => fetch('https://api.unsplash.com/photos/random?client_id=CDjc8q0nVTQjBw3Zs9lMqQCuzGdhqYwOWhFnq1XU82g')
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error('Network response was not OK');
// 		}
// 		return response.json();
// 	})
// 	.then((myJson) => {
// 		let myImage;
// 		console.log(myJson);
//         divImage = document.createElement('div');
//         divImage.class = "divImage";
// 		myImage = document.createElement('img');
// 		myImage.width = "800";
// 		myImage.height = "500";
// 		myImage.src = myJson.urls.raw;
// 		myImage.class = "myImg";
//         myImage.id = "img"+numberOfImages;
//         numberOfImages++;
//         divImage.appendChild(myImage);
// 		let LikeButton = document.createElement('button');
// 		const newText = document.createTextNode("Like");
// 		LikeButton.appendChild(newText);
// 		LikeButton.class = "LikeButton" + myJson.id;
// 		LikeButton.onclick = function() {likeImage(myJson.id)};
// 		document.querySelector('body').appendChild(myImage);
// 		document.body.insertBefore(LikeButton, myImage);
// 	})
// 	.catch((error) => {
// 		console.error('There has been a problem with your fetch operation:', error);
// });

const genPictureTest = () => {
	let myImage;
    let divImage;
	console.log("Creating new image...");
    divImage = document.createElement('div');
	divImage.width = "800";
	divImage.height = "500";
    divImage.class = "divImage";
    divImage.id = "divImage"+numberOfImages;
	myImage = document.createElement('img');
	myImage.width = "800";
	myImage.height = "500";
	myImage.src = "../img/img"+numberOfImages+".png";
    console.log(myImage.src);
	myImage.class = "myImg";
    myImage.id = "img"+numberOfImages;
    numberOfImages++;
    divImage.appendChild(myImage);
    console.log(divImage);
	let LikeButton = document.createElement('button');
	const newText = document.createTextNode("Like");
	LikeButton.appendChild(newText);
}

// const likeImage = (id) => fetch("https://api.unsplash.com/photos/"+id+"/like", 
// 	{
// 	method: 'POST',
// 	headers: {
// 		Authorization: "Client-ID CDjc8q0nVTQjBw3Zs9lMqQCuzGdhqYwOWhFnq1XU82g"
// 	}
// 	})
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error('Network response was not OK');
// 		}
// 		return response.json();
// 	})
// 	.then((myPhoto) => {
// 		console.log(myPhoto.photo.likes);
// 		console.log(myPhoto.photo.liked_by_user);
// 	});

// const params = {
// 	client_id: "CDjc8q0nVTQjBw3Zs9lMqQCuzGdhqYwOWhFnq1XU82g",
// 	client_secret: "dllzg3N0Q8Q0hDIyMIrwYIiexQRj_6fcYq03Wn2l98g",
// 	redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
// 	code: "e8Jzkk8LlbOn7ztmcDPNPlr2InxZDM2ojlybW697c_k",
// 	grant_type: "authorization_code"
// };

// const authorize = () => window.location.replace("https://unsplash.com/oauth/authorize?client_id=CDjc8q0nVTQjBw3Zs9lMqQCuzGdhqYwOWhFnq1XU82gredirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=code&scope=read_user+write_user")

// const postToken = () => fetch("https://unsplash.com/oauth/token", 
// 	{
// 	method: 'POST',
// 	body: JSON.stringify(params)
// 	})
// 	.then((response) => {
	// 	if (!response.ok) {
	// 		throw new Error('Network response was not OK');
	// 	}
	// 	return response.json();
	// })
	// .then((myJson) => {
	// 	console.log(myJson.access_token);
	// });

for (let i=0; i<10; i++) {
    genPictureTest();
}

// const setCentralImage = (mid) => {myImage.id == "img"+mid}