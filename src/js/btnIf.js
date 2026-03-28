import pnotify from './pnotify'

export default function btnIf({ btn, state, numberRef, keyClick, keys }) {
  btn.addEventListener("click", () => {

    state.currentKeyIndex = 0
    numberRef.textContent = 0;
    keyClick.textContent = keys[0];
    
        pnotify.info({
        text: 'Нова гра клавіатури',
        delay: 1500,
    })
  });
}