import state from './state.js';
import * as events from './events.js';
import * as timer from './timer.js';

export function timerController(minutes, seconds){
  state.minutes = minutes;
  state.seconds = seconds;

  timer.updateDisplay(minutes, seconds);
  events.setControls();
}