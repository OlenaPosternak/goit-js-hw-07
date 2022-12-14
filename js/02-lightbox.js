import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const allGallery = document.querySelector(`.gallery`);

const galleryMarkUp = galleryItems
  .map(
    (picture) =>
    `<a class="gallery__item" href="${picture.original}">
      <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
    </a>
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
//   получить ссылку на link картинки 
let gallery = new SimpleLightbox('.gallery a',{
    captionType: 	'attr',
    captionsData: `alt`,
    captionDelay: 250,
});
  

gallery.on('show.simplelightbox', function () {
   
});
}


