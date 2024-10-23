// * Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// * Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// * click outside Hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// * Darkmode toggle
const darkToggle = document.querySelector('.input-moon');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// * Change toggle position depend on mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// EmailJs
// function sendMail() {
//   var params = {
//     from_name: document.getElementById('fullName').value,
//     email_id: document.getElementById('email_id').value,
//     subject: document.getElementById('subject').value,
//     message: document.getElementById('message').value,
//   };
//   emailjs.send('service_62anhrg', 'template_m00h02q', params).then(function (res) {
//     alert('Success! ' + res.status);
//   });
// }

// ! Contact Form

// const form = document.querySelector('form'),
//   statusTxt = form.querySelector('.button-area span');

// form.onsubmit = (e) => {
//   e.preventDefault(); // Preventing form from submitting
//   statusTxt.style.color = '#0D6EFD';
//   statusTxt.style.display = 'block';

//   let xhr = new XMLHttpRequest(); // Creating new xml object
//   xhr.open('POST', 'message.php', true); // Sending POST request to message.php file
//   xhr.onload = () => {
//     // Once ajax loaded
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       // If ajax response status is 200 & ready status is 4 it means there is no any error
//       let response = xhr.response; // storing ajax response in response variable
//       // If response is error, then the status text color become red else reset the form
//       if (response.indexOf('Email and password field is required!') != -1 || response.indexOf('Enter a valid email address!') || response.indexOf('Sorry, failed to send your message!')) {
//         statusTxt.style.color = 'red';
//       } else {
//         form.reset();
//         setTimeout(() => {
//           statusTxt.style.display = 'none';
//         }, 3000); // hide the statusTxt after 3 seconds if the message is sent
//       }
//       statusTxt.innerText = response;
//     }
//   };
//   let formData = new FormData(form); // creating new FormData obj. This obj used to send form data
//   xhr.send(formData); // Sending form data
// };

//  ! Script Credit Section Start
$(document).ready(function () {
  $('.btn-credit').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});
const btnPeople = document.getElementById('credit-people');
const btnTech = document.getElementById('credit-tech');
const containers = {
  people: document.querySelector('.cont-credit-people'),
  tech: document.querySelector('.cont-credit-tech'),
};
const content = {
  people: {
    main: document.getElementById('content1'),
    icon: document.querySelector('.content1-people-class'),
  },
  tech: {
    main: document.getElementById('content1-tech'),
    icon: document.querySelector('.content1-tech-class'),
  },
};
const allCreditImgBox = document.querySelectorAll('.icon-credit .imgBx');
const allCreditContentBox = document.querySelectorAll('.content-credit .contentBx');

const showSection = (type) => {
  const otherType = type === 'people' ? 'tech' : 'people';

  containers[otherType].classList.add('hidden');
  containers[type].classList.remove('hidden');

  allCreditContentBox.forEach((el) => el.classList.remove('img-active'));
  allCreditImgBox.forEach((el) => el.classList.remove('img-active'));

  content[type].main.classList.add('img-active');
  content[type].icon.classList.add('img-active');
};

btnPeople.addEventListener('click', () => showSection('people'));
btnTech.addEventListener('click', () => showSection('tech'));

let imgBx = document.querySelectorAll('.imgBx');
let contentBx = document.querySelectorAll('.contentBx');

for (let i = 0; i < imgBx.length; i++) {
  imgBx[i].addEventListener('click', function () {
    for (let i = 0; i < contentBx.length; i++) {
      contentBx[i].className = 'contentBx';
    }
    document.getElementById(this.dataset.id).className = 'contentBx img-active';

    for (let i = 0; i < imgBx.length; i++) {
      imgBx[i].className = 'imgBx';
    }
    this.className = 'imgBx img-active';
  });
}
//  ! Script Credit Section End

// ! Script Particles Js
const darkTheme = document.getElementById('starParticles');
const lightTheme = document.getElementById('snowParticles');
const containersTheme = {
  dark: (localStorage.theme = 'dark'),
  light: (localStorage.theme = 'light'),
};

const showTheme = (type) => {
  const otherType = type === 'dark' ? 'light' : 'dark';

  containers[otherType].classList.add('hidden');
  containers[type].classList.remove('hidden');
};

darkTheme.addEventListener('click', () => showTheme('dark'));
lightTheme.addEventListener('click', () => showTheme('light'));
