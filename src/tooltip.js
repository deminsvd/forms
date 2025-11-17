export class Tooltip {
    construtor() {
    }

    showTooltip(header, message, element) {
        const tooltipElementheader = document.createElement('div');
        const tooltipElement = document.createElement('div');
        tooltipElementheader.classList.add('form-popup-header');
        tooltipElement.classList.add('form-popup');
        tooltipElementheader.textContent = header;
        tooltipElement.textContent = message;

        document.body.append(tooltipElementheader);
        document.body.append(tooltipElement);

        const { right, top } = element.getBoundingClientRect();

        tooltipElement.style.left = right - element.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + 'px';
        tooltipElement.style.top = top - 5 - tooltipElement.offsetHeight + 'px';
        tooltipElementheader.style.left = right - element.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + 'px';
        tooltipElementheader.style.top = top - tooltipElement.offsetHeight - tooltipElementheader.offsetHeight + 'px';
    }

    removeTooltip(element) {
        element.forEach(function(el) {
            el.remove();
        })
    }
}