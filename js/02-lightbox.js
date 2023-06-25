import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector("ul.gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
  )
  .join("");

galleryRef.innerHTML = markup;

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
