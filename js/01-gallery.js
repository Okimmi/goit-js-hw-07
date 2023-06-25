import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector("ul.gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

galleryRef.innerHTML = markup;

const instance = basicLightbox.create(`<img width="800" height="600">`);
const imgLightboxRef = instance.element().querySelector("img");

galleryRef.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  const currentImage = event.target;
  event.preventDefault();

  if (currentImage.tagName !== "IMG") {
    return;
  }

  imgLightboxRef.src = `${currentImage.dataset.source}`;

  instance.show();

  document.addEventListener("keydown", onEscClick);
}

function onEscClick(event) {
  if (event.code === "Escape") {
    instance.close();
    document.removeEventListener("keydown", onEscClick);
  }
}
