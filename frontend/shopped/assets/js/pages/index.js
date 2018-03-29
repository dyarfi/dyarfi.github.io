import React from 'react';
import ReactDOM from 'react-dom';

import Example from '../components/example';
import Home from './home.js';


const $body = $('body');
//const $responsive =

export default {
  init: ()=>{

    // if ($body.hasClass('main-page')){
    //   ReactDOM.render(<Example />, document.getElementById('wrapper'));
    //   Home.init();
    // }

    APPSCRIPT.responsiveClasses();
  }
}

const APPSCRIPT = {
  responsiveClasses : function() {
      if( typeof jRespond === 'undefined' ) {
        console.log('responsiveClasses: jQuery jRespond not Defined.');
        return true;
      }
      var jRes = jRespond([
        {
          label: 'smallest',
          enter: 0,
          exit: 479
        },{
          label: 'handheld',
          enter: 480,
          exit: 767
        },{
          label: 'tablet',
          enter: 768,
          exit: 991
        },{
          label: 'laptop',
          enter: 992,
          exit: 1199
        },{
          label: 'desktop',
          enter: 1200,
          exit: 10000
        }
      ]);
      jRes.addFunc([
        {
          breakpoint: 'desktop',
          enter: function() { $body.addClass('device-lg'); },
          exit: function() { $body.removeClass('device-lg'); }
        },{
          breakpoint: 'laptop',
          enter: function() { $body.addClass('device-md'); },
          exit: function() { $body.removeClass('device-md'); }
        },{
          breakpoint: 'tablet',
          enter: function() { $body.addClass('device-sm'); },
          exit: function() { $body.removeClass('device-sm'); }
        },{
          breakpoint: 'handheld',
          enter: function() { $body.addClass('device-xs'); },
          exit: function() { $body.removeClass('device-xs'); }
        },{
          breakpoint: 'smallest',
          enter: function() { $body.addClass('device-xxs'); },
          exit: function() { $body.removeClass('device-xxs'); }
        }
      ]);
  }
}
