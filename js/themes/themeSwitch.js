import state from '../timer/state.js';
import * as elements from '../elements.js';
import * as sounds from './sounds.js';

export function themeSwitch(event){
  const theme = event.target.classList.value.split(' ')[1].split('-')[1];
  playerControl(theme);
  const currentTheme = elements.body.classList.value;
  
  if(!elements.body.classList.length){
    elements.body.classList.add(theme)
  }else{
    if(currentTheme != theme){
      elements.body.classList.remove(currentTheme);
      elements.body.classList.add(theme);
      return;
    }
    elements.body.classList.remove(theme)
  }
  document.querySelectorAll('#timer > span').forEach((element) => element.style.color == 'var(--main-theme)' ? element.style.color = 'var(--main-text-theme)' : element.style.color = 'var(--main-theme)');
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => imageSwitch(button))
  
}
function imageSwitch(event){
  const currentClass = event.classList
  const currentTheme = currentClass.value.split(' ')[1];
  const newTheme = String(currentTheme).match('black') ? String(currentTheme).replace('black','white') : String(currentTheme).replace('white','black');
  event.classList.remove(currentTheme);
  event.classList.add(newTheme);
}
function playerControl(theme){
  state.isPlaying = !state.isPlaying;
  if(state.isPlaying){
    sounds[theme].play();
    return;
  }
  sounds[theme].pause();
  
}
export function toggleButtonBG(event){
  const currentClass = event.classList.value.split(' ')[1]
  const newClass  = String(currentClass).match('play') ? currentClass.replace('play', 'pause') : currentClass.replace('pause', 'play');
  
  event.classList.remove(currentClass);
  event.classList.add(newClass);
}
export function resetRunButtonBG(event){
  const currentClass = event.classList.value.split(' ')[1]
  if(String(currentClass).match('play')){
    return;
  }
  event.classList.remove('black-pause');
  event.classList.add('black-play');
  console.log(currentClass);
}

