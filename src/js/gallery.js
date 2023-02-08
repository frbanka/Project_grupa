const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.search-input');
const testArr = { text: 'text', text: 'text', text: 'text' };
searchInput.addEventListener('submit', findMovies);

function createGallery(arr) {
  console.log('hurra');
  const markup = arr
    .map(item => {
      return `<div class="photo-card">
        <img src="${item}" alt="${item}"/>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${item}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${item}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${item}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${item}
          </p>
        </div>
      </div>`;
    })
    .join('');
  gallery.innerHTML += markup;
}
function findMovies(e) {
  console.log('hurra');
  e.preventDefault();
  gallery.innerHTML = '';
  createGallery(testArr);
  console.log('hurra');
  return;
}
