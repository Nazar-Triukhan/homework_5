import btnIf from './js/btnIf'
import keyApp from './js/keyApp'
import keys from './js/keys'
import pnotify from './js/pnotify'

pnotify.info({
    text: 'Гра клавіатури',
    delay: 1500,
})




const keyClick = document.querySelector("#key");
const keyRef = document.querySelectorAll(".key");
const numberRef = document.querySelector(".span");
numberRef.textContent = 0;
const btnRef = document.querySelector(".btn");
const state = {
  currentKeyIndex: 0
};
keyClick.textContent = keys[state.currentKeyIndex];


btnIf({btn: btnRef,state,numberRef,keyClick,keys});
keyApp({keyClick,keyRef,numberRef,state,keys});

// 2 завдання


