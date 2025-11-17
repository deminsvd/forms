import { Tooltip } from "../tooltip.js";
//import btn from "../index.js";

const tooltipFactory = new Tooltip();



test('Проверка tooltip', () => {
  document.body.innerHTML = '';
  const element = document.createElement('div');
  element.style.right = 1;
  element.style.top = 1;
  tooltipFactory.showTooltip('Тест', 'Тест', element);
  const popup = document.querySelector('.form-popup');
  expect(popup).not.toBeNull();
});

test('Проверка tooltipremove', () => {
  document.body.innerHTML = '';
  const element = document.createElement('div');
  tooltipFactory.removeTooltip([element]);
  console.log(element);
  expect(document.querySelector('div')).toBeNull();
});
