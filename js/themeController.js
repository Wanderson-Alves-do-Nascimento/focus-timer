import * as elements from './elements.js'
import { themeSwitch } from "./themes/themeSwitch.js";

elements.themeButtons.forEach((button)=>{
  button.addEventListener('click',(event)=>themeSwitch(event))
});