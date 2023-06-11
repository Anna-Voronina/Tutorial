// Напиши функцію для гри в Бінго. Гравцю даються рандомні числа,які він збирає(в масив).
//Для цього треба записати число в змінну.
//Якщо гравець отримав число,яке в нього є,то він його не може взяти другий раз і функція викликає сама себе знову.
//Коли гравець збирає числа від 1 до 5,то він перемагає і функція повертає рядок 'БІНГО' , масив очищається і фунція більше себе не викликає.
// Рандомні числа исла отримуються за допомогою допоміжної функції RandomNumber.

// function randomNumber(){
// return (Math.random() * (5 - 1) + 1).toFixed(0)
// }

// let playerDesk = [];

///Створити обєкт dog,дати йому ім'я
// Створити функцію dogArr на основі функції з обєкту animal
// Створити функцію showLegs,яка буде портати рядок з імям собаки та кількістю ніг з animal(call)
// Cтворити функцю зміни кількості ніг в animal,передати її в dog так,щоб при виклиці з dog вона змінювала кількість ніг в animal

// const animal = {
//     legs:4,
//     changeLeg(newLegs){
// this.legs = newLegs
//     },
//     sayArrr(){
//     return `${this.name} say arrrr!`
//     }
// }

// const topBooksAPI = new SwaggerAPI();

// window.addEventListener('resize', onWindowResize);

// function onWindowResize() {
//   if (window.matchMedia('(max-width: 376px)').matches) {
//   }

//   if (window.matchMedia('(min-width: 768px)').matches) {
//   }

//   if (window.matchMedia('(min-width: 1440px)').matches) {
//   }
// }

// async function createCategory() {
//   const { data } = await topBooksAPI.fetchTopBooks();

//   const markUp = `<li>
//    <p class="category-name">${}</p>
//   <ul>
//   </ul>
//   <button class="category-list-button">see more</button>
//     </li>`;
// }

// createCategory();

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyA-c5ktNEt2bpwdrjlWbguPygCPHCJWGLM',
  authDomain: 'authentication-6949a.firebaseapp.com',
  projectId: 'authentication-6949a',
  storageBucket: 'authentication-6949a.appspot.com',
  messagingSenderId: '312217541484',
  appId: '1:312217541484:web:32ea78d2e9302b00f63149',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authForm = document.querySelector('.auth-form');
const signUpButton = document.querySelector('.sign-up-button');
const signInButton = document.querySelector('.sign-in-button');

const userSignUp = async () => {
  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
      alert('Your account has been created!');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

const userSignIn = async event => {
  console.log(event.currentTarget);
  const signInEmail = event.currentTarget.elements.user_email;
  const signInPassword = event.currentTarget.elements.user_password;
  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then(userCredential => {
      const user = userCredential.user;
      alert('You have signed in successfully!');
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

const checkAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      authForm.style.display = 'none';
      secretContent.style.display = 'block';
    } else {
      authForm.style.display = 'block';
      secretContent.style.display = 'none';
    }
  });
};

const userSignOut = async () => {
  await signOut(auth);
};

checkAuthState();

signUpButton.addEventListener('click', userSignUp);
signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);
