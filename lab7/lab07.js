const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
var outer = document.getElementsByClassName("header");
function createGenre(i) {
    let genre = document.createElement("h4");
    genre.append("Genre : ");
    let style = document.createElement("h5");
    style.append(works[i]["tips"]);
    style.style.display = "inline";
    genre.append(style);
    return genre;
}
function createAuthor(i) {
    let author = document.createElement("div");
    author.classList.add("inner-box");
    let title = document.createElement("h3");
    title.append(works[i]["author"]);
    title.style.display = "inline";
    let life = document.createElement("h4");
    life.append("lifetime:"+works[i]["lifetime"]);
    life.style.display = "inline";
    life.style.marginLeft = "1em";
    author.append(title);
    author.append(life);
    return author;
}
function createPhoto(i) {
    let photo = document.createElement("div");
    photo.classList.add("inner-box");
    let title = document.createElement("h3");
    title.append("Popular Photos");
    photo.append(title);
    for (let j=0;j<works[i]["photos"].length;j++){
        let image = document.createElement("img");
        image.src = works[i]["photos"][j];
        image.classList.add("photo");
        photo.append(image);
    }
    return photo;
}
function createButton() {
    let button = document.createElement("button");
    button.append("Visit");
    return button;
}
for (let i=0;i<works.length;i++){
    let inner = document.createElement("div");
    inner.classList.add("justify");
    inner.classList.add("item");
    let genre = createGenre(i);
    let author = createAuthor(i);
    let photo = createPhoto(i);
    let button = createButton();
    inner.append(genre);
    inner.append(author);
    inner.append(photo);
    inner.append(button);
    outer[0].append(inner);
}