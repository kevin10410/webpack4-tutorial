import _ from 'lodash';
import './index.styl';
import './index.scss';
import Icon from './assets/images/icon.svg';

const image = () => {
  const myImage = document.createElement('img');
  myImage.src = Icon;

  return myImage;
}

const component = () => {
  const element = document.createElement('h1');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(image());
document.body.appendChild(component());
