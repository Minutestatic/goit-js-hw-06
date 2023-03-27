const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// display: flex;
// gap: 10px;
// justify-content: space-around;
// list-style: none;
// align-items: center;
// padding-left: 0;
// margin: 0;

const gallery = document.querySelector(".gallery");
gallery.style.listStyle = "none";
gallery.style.paddingLeft = "0";
gallery.style.margin = "0";
gallery.style.display = "flex";
gallery.style.justifyContent = "space-evenly";
gallery.style.alignItems = "center";
// gallery.style.gap = "";

console.log(gallery);

const imageElements = images.map((image) => {
  console.log(image);
  return `<li><img src="${image.url}" alt="${image.alt}" width=500></li>`;
});
gallery.insertAdjacentHTML("beforeend", imageElements.join(""));
