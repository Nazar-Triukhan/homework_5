import pnotify from './pnotify'

export default function keyApp({keyClick,keyRef,numberRef,state,keys}) {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
    }

    if (state.currentKeyIndex === keys.length - 1) {
          pnotify.alert({
              text: 'Ви виграли,клацніть кнопкку <нова гра>',
              delay: 1500,
          })
    }
    if (e.key.toLowerCase() === keys[state.currentKeyIndex].toLowerCase()) {
      keyRef[state.currentKeyIndex].classList.add("hovered");
      setTimeout(() => {
        keyRef[state.currentKeyIndex - 1]?.classList.remove("hovered");
      }, 300);
      state.currentKeyIndex++;
      numberRef.textContent++;
      keyRef[state.currentKeyIndex - 2]?.classList.remove("hovered");
      if (keys.length !== state.currentKeyIndex) {
        keyClick.textContent = keys[state.currentKeyIndex];
      } else return;
    } else {
      const trueKey = keys.findIndex(
        (el) => el.toLowerCase() === e.key.toLowerCase()
      );
      if (trueKey === -1) {
        return;
      } else {
                  pnotify.error({
              text: 'Неправильна клавіша',
              delay: 1500,
          })
        keyRef[trueKey].classList.add("hovernot");

        setTimeout(() => {
          keyRef[trueKey]?.classList.remove("hovernot");
        }, 300);
      }
    }
  });
}