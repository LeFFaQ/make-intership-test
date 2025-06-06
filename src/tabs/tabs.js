const tabLinks = document.querySelectorAll('.tab-link');

const desktopTab = document.querySelector('.tab-link[view-mode="desktop"]');
if (desktopTab) {
  desktopTab.classList.add('active');
}

const tabContentDesktop = document.getElementById('typo-content-desktop');
const tabContentMobile = document.getElementById('typo-content-mobile');


tabLinks.forEach(tab => {
  tab.addEventListener('click', function() {

    tabLinks.forEach(t => t.classList.remove('tab-link-active'));

    this.classList.add('tab-link-active');

    const viewMode = this.getAttribute('view-mode');
    if (viewMode === 'desktop') {
      tabContentDesktop.classList.remove('typo-hidden');
      tabContentMobile.classList.add('typo-hidden');
    } else if (viewMode === 'mobile') {
      tabContentMobile.classList.remove('typo-hidden');
      tabContentDesktop.classList.add('typo-hidden');
    }
  });
});