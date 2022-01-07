const artistContainer = document.querySelector('.artists');
let content = '';

const menuIcon = document.querySelector('.burger');
const menuContainer = document.querySelector('.menu-container');
const closeButton = document.querySelector('.closeIcon');

menuIcon.addEventListener('click', () => {
  menuContainer.classList.toggle('isActive');
});

closeButton.addEventListener('click', () => {
  menuContainer.classList.remove('isActive');
});

const bandMenbers = [
  {
    image: 'assets/images/andrew.jpeg',
    job: 'Employed',
    name: 'Andrew Odiaka',
    decription: 'Andrew is a seasoned Praise Leader.',
    instrument: 'Singer',
  },
  {
    image: 'assets/images/toyin.jpg',
    job: 'Instructor',
    name: 'Toyin Odiaka',
    decription: 'A lover of worship. ',
    instrument: 'Singer',
  },
  {
    image: 'assets/images/wunmi.jpeg',
    job: 'Employed',
    name: 'Wunmi',
    decription: 'A minister in praise and worship',
    instrument: 'Singer',
  },
  {
    image: 'assets/images/odun.jpeg',
    job: 'Employed',
    name: 'Odun',
    decription: `Music minister`,
    instrument: 'Singer',
  },
  {
    image: 'assets/images/femi.jpg',
    job: 'Self-Employed',
    name: 'Femi',
    decription: 'A music minister',
    instrument: 'Singer, Keyboardist and Drummer',
  },
  {
    image: 'assets/images/ayo.jpg',
    job: 'Employed',
    name: 'Ayodele Samuel',
    decription: `A minister with saxophone`,
    instrument: 'Saxophone',
  },
];



const createContent = () => {
  for (let i = 0; i < bandMenbers.length; i += 1) {
    content += `
      <ul class="u-listi">
        <li class="criteria primary-color"><img class="member-face image-dimension" src=${bandMenbers[i].image} alt=""></li>
        <li class="exp">
          <p class="highlight secondary-color">${bandMenbers[i].name}</p> 
          <div class="instrument primary-color">
            ${bandMenbers[i].job}
            </div>
          <div class="ze-line"></div>
          <div class="more-info">
            <p class="sub-highlight secondary-color">
            ${bandMenbers[i].decription}
            </p>
            <div class="instrument primary-color">
            ${bandMenbers[i].instrument}
            </div>
          </div>
        </li>
      </ul>
    `;
  }
  
  artistContainer.innerHTML = content;
};
window.onload = () => {
  createContent();
};