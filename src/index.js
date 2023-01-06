import _ from 'lodash';

import printMe from './printhello.js';

 function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check  console!';

  btn.onclick = printMe.bind(null, "button Click");
  element.appendChild(btn);
  return element;
 }

 document.body.appendChild(component());