document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;

    if (item.classList.contains('disabled')) {
      return;
    }

    const content = header.nextElementSibling;
    const isActive = content.style.maxHeight;

    document.querySelectorAll('.accordion-content').forEach(item => {
      item.style.maxHeight = null;
      item.style.padding = '0';
      item.parentElement.classList.remove('open');
    });

    if (!isActive) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = '10px';
      item.classList.add('open');

      setTimeout(() => {
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  });
});