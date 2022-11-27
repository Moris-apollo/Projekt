let numberOfImages = 0;
let currMiddle = 4;
let middleImage = 4;

const onLoad = () => {
	for (let i=0; i<10; i++) {
		genPicture();
	}
	setCentralImage(genPicture());
}

const genPicture = () => fetch('https://cataas.com/cat?json=true')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not OK');
		}
		return response.json();
	})
	.then((myJson) => {
		console.log(myJson);
        let divImage = document.createElement('div');
		divImage.classList.add("divImg");
        divImage.id = "divImg"+numberOfImages;
		let myImage = document.createElement('img');
		myImage.src = 'https://cataas.com'+myJson.url;
		myImage.classList.add("myImg");
        myImage.id = "img"+numberOfImages;
        numberOfImages++;
        divImage.appendChild(myImage);
		document.getElementById("gallery").appendChild(divImage);
	})
	.catch((error) => {
		console.error('There has been a problem with your fetch operation:', error);
});

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
// 		if (!response.ok) {
// 			throw new Error('Network response was not OK');
// 		}
// 		return response.json();
// 	})
// 	.then((myJson) => {
// 		console.log(myJson.access_token);
// 	});

const moveCentralImage = (side) => {
	middleImage+=side;
	setCentralImage(moveCentralImage(side));
};

async function setCentralImage(fnc){
	await fnc;
	const removeFromClassList1 = new Promise(() => {
		document.getElementById("divImg"+currMiddle).classList.remove("current");
	});
	removeFromClassList1
		.catch((e) => {console.error("Class list is empty")});
	const addToClassList1 = new Promise(() => {
		document.getElementById("divImg"+middleImage).classList.add("current");
	});
	addToClassList1
		.catch((e) => console.error("Class list is empty"));
	currMiddle = middleImage;
	setPrevImage();
	setNextImage();
}

const setPrevImage = () => {
	const removeFromClassList2 = new Promise(() => {
		document.getElementById("divImg"+parseInt(currMiddle-1)).classList.remove("prev");
	});
	removeFromClassList2
		.catch((e) => {console.error("Class list is empty")});
	const addToClassList2 = new Promise(() => {
		document.getElementById("divImg"+parseInt(middleImage-1)).classList.add("prev");
	});
	addToClassList2
		.catch((e) => console.error("Class list is empty"));
}

const setNextImage = () => {
	const removeFromClassList3 = new Promise(() => {
		document.getElementById("divImg"+parseInt(currMiddle+1)).classList.remove("next");
	});
	removeFromClassList3
		.catch((e) => {console.error("Class list is empty")});
	const addToClassList3 = new Promise(() => {
		document.getElementById("divImg"+parseInt(middleImage+1)).classList.add("next");
	});
	addToClassList3
		.catch((e) => console.error("Class list is empty"));
}

window.addEventListener("load", (event) => {
	onLoad();
});