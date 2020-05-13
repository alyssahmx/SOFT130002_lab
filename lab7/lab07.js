const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

let justify = document.createElement("div");
	justify.setAttribute("class","justify");

for (var i=0;i<works.length;i++) {
	let item = document.createElement("div");
	item.setAttribute("class","item");
	let tips = document.createElement("h4");
	let tipText = document.createTextNode("Genre: "+works[i].tips); 
	tips.appendChild(tipText);
	item.appendChild(tips);
	
	let box1 = document.createElement("div");
	box1.setAttribute("class","inner-box");
	let author = document.createElement("h3");
	let authorText = document.createTextNode(works[i].author);
	author.style.float="left";
	author.appendChild(authorText);
	box1.appendChild(author);
	let lifetime = document.createElement("h5");
	let lifetimeText = document.createTextNode("Lifetime: "+works[i].lifetime);
	lifetime.appendChild(lifetimeText);
	lifetime.style.position="relative";
	lifetime.style.left="1em";
	lifetime.style.top="12px";
	lifetime.style.margin="14px 0";
	box1.appendChild(lifetime);
	box1.style.display="block";
	item.appendChild(box1); 

	let box2 = document.createElement("div");
	box2.setAttribute("class","inner-box");
    let popular = document.createElement("h3");
	let populatText = document.createTextNode("Popular Photos");
	popular.appendChild(populatText);
	box2.appendChild(popular);
    for (let j=0;j<works[i].photos.length;j++){
	    var imgs = document.createElement("img");
	    imgs.setAttribute("src",works[i].photos[j]);
        box2.appendChild(imgs);
        imgs.setAttribute("class","photo");
    };
	item.appendChild(box2); 

	let button = document.createElement("button");
    let buttonText = document.createTextNode("Visit");
    button.appendChild(buttonText);
	item.appendChild(button);
	
	justify.appendChild(item);
};
document.body.appendChild(justify);