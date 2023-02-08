const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form');
const testArr = ['text', 'text', 'text'];

gallery.innerHTML = 'Find your movie';
searchForm.addEventListener('submit', findMovies);

function createGallery(array) {
  const markup = array
    .map(item => {
      return `<div class="photo-card">
        <img src="#" alt="it"/>
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
  e.preventDefault();
  gallery.innerHTML = '';
  createGallery(testArr);
}
