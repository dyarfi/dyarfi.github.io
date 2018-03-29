/**
 * Main.js
 * Client-Side JS Bootsrap
 * Loads pages and components
 */
import Pages from './pages/index.js';

import '../../_sass/main.scss';

function init(){
  Pages.init();
  console.log('test');
}

document.addEventListener('DOMContentLoaded', (event)=> { init(); });
