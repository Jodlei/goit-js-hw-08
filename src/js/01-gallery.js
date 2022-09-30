// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const items = galleryItems;
const container = document.querySelector('.gallery');
const markup = items.reduce(
  (acc, items) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href=${items.original}>
    <img
      class="gallery__image"
      src=${items.preview}
      data-source=${items.original}
      alt=${items.description}
    />
  </a>
</div>`,
  ''
);
container.insertAdjacentHTML('beforeend', markup);

container.addEventListener('click', onItem);

function onItem(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const options = {
    onShow: () => window.addEventListener('keydown', HandleEsc),
    onClose: () => window.removeEventListener('keydown', HandleEsc),
  };

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    options
  );
  instance.show();
  function HandleEsc(evt) {
    if (evt.code === `Escape`) {
      instance.close();
    }
  }
}
