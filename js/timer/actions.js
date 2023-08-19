import * as elements from '../elements.js';
import state from './state.js';
import {toggleButtonBG, resetRunButtonBG} from '../themes/themeSwitch.js';
import * as timer from './timer.js';
import {buttonPressAudio} from '../themes/sounds.js';

export function toggleStart(){
  const minutes = Number(elements.minutes.textContent);
  const seconds = Number(elements.seconds.textContent);

  if(minutes == 0 && seconds == 0){
    return;
  }
  state.isRunning = !state.isRunning;
  timer.countDown();
  toggleButtonBG(elements.toggleStartButton);
  buttonPressAudio.play();
}
export function reset(){
  state.isRunning = false;
  timer.updateDisplay();
  resetRunButtonBG(elements.toggleStartButton);
  buttonPressAudio.play();
}
export function addTime(){
  let minutes = Number(elements.minutes.textContent);
  let seconds = Number(elements.seconds.textContent);
  if(minutes < 59){
    buttonPressAudio.play();
  }
  minutes = minutes + 5;
  minutes = minutes > 59 ? 59 : minutes; 
  timer.updateDisplay(minutes,seconds)
}
export function removeTime(){
  let minutes = Number(elements.minutes.textContent);
  let seconds = Number(elements.seconds.textContent);
  if(minutes > 0){
    buttonPressAudio.play();
  } 
  minutes = minutes - 5;
  minutes = minutes < 0 ? 0 : minutes;
  timer.updateDisplay(minutes,seconds)
}
