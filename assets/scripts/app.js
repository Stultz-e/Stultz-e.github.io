function openSlideMenu() {
    document.getElementById('side-menu').style.width = '65vw';
    document.getElementById('main').style.marginLeft = '65vw';
  }

  function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }
                   
 var wow = new WOW ({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       5,          // default
    mobile:       true,       // default
    live:         true        // default
  })
  wow.init();
