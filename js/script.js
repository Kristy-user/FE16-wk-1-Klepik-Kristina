const TAB_LIST = document.querySelector('.tabs_list');
const TAB_1 = document.querySelector('.tab_link_1');
const TAB_2 = document.querySelector('.tab_link_2');
const TAB_3 = document.querySelector('.tab_link_3');

const TEXT = document.querySelector('.tab_content_text');

TAB_LIST.addEventListener('click', (event) => {
  const tab = event.target;
  if (!tab.closest('.tabs_list_item')) {
    return;
  }
  if (tab === TAB_1) {
    TEXT.innerHTML = `<p class="tab_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
    bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra 
    justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque 
    penatibus et magnis dis parturient montes. </p>
    
    <p class="tab_content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
    bibendum laoreet.</p>`;
  }
  if (tab === TAB_2) {
    TEXT.innerHTML = `<p class="tab_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
      bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra 
      justo commodo.</p>`;
  }
  if (tab === TAB_3) {
    TEXT.innerHTML = `<p class="tab_content">Aenean
      euismod bibendum laoreet. Proin gravida dolor sit amet lacus
      accumsan et viverra.</p><p class="tab_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
        bibendum laoreet. </p>`;
  }
});

const iconBurger = document.querySelector('.header_burger');
const menuBody = document.querySelector('.header_menu');
function removeBurger() {
  document.body.classList.remove('lock');
  iconBurger.classList.remove('active');
  menuBody.classList.remove('active');
}

if (iconBurger) {
  iconBurger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    iconBurger.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}
if (iconBurger.classList.contains('active')) {
  removeBurger();
}

menuBody.addEventListener('click', function (e) {
  if (
    e.target === iconBurger ||
    e.target.classList.contains('header_link_nav')
  ) {
    removeBurger();
  }
});
