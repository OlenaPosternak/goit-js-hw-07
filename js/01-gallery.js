import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const allGallery = document.querySelector(`.gallery`);

const galleryMarkUp = galleryItems
  .map(
    (picture) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${picture.original}">
      <img
        class="gallery__image"
        src="${picture.preview}"
        data-source="${picture.original}"
        alt="${picture.description}"
      />
    </a>
  </div>
    `
  )
  .join(``);

allGallery.innerHTML = galleryMarkUp;

allGallery.addEventListener(`click`, onPictureClick);

function onPictureClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
//   получить ссылку на датасорс картинки 
  const instance = basicLightbox.create(`
     <img src="${event.target.dataset.source}" width="1280">
`);

  instance.show();
}
