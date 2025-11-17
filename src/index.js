import './styles.css';

import { Tooltip } from "./tooltip.js";

const btn = document.querySelector('button');
export default btn;
console.log(btn);

const tooltipFactory = new Tooltip();

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const header = 'Popover title';
    const message = 'And here\'s some amazing content. It\'s very engaging. Right?';

    const popupheader = document.querySelector('.form-popup-header');
    const popup = document.querySelector('.form-popup');
    
    if (popup == null)
      tooltipFactory.showTooltip(header, message, btn);
    else
      tooltipFactory.removeTooltip([popup, popupheader]);
  })