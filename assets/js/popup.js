$("#btn-fullscreen").click(function () {
  window.close();
});

// ------ Nav ----------
var Nav = {
  MENU_LIST: {'clock': 'clock', 'alarm': 'alarm', 'watch': 'watch', 'timer': 'timer'},

  init: function() {
    if(Nav.getCurTab() == undefined) {
      Nav.navTo(Nav.MENU_LIST.clock, true);
    }
    else {
      Nav.navTo(Nav.getCurTab(), true);
    }

    $(".nav").click(function(e) {
      Nav.navTo(e.target.id.replace('Btn', ''));
    });
  },

  // force to nav, even the same tab
  navTo: function(tab, force) {
    // default value
    force = force || false;

    // tab is not availability
    if(!Nav.MENU_LIST[tab]) {
      return;
    }

    // tab is the same
    if(tab == Nav.getCurTab() && force == false) {
      return;
    }

    /// do nav
    // clear old one
    $('#' + Nav.getCurTab() + 'Btn').removeClass('act');
    $('#' + Nav.getCurTab() + 'Container').hide();

    // update
    localStorage.curTab = tab;    // set current tab

    // start new one
    $('#' + Nav.getCurTab() + 'Btn').addClass('act');
    $('#' + Nav.getCurTab() + 'Container').show();
    switch(Nav.getCurTab()) {
      case Nav.MENU_LIST.clock:
        Clock.init();
        break;
    }
  },

  getCurTab: function() {
    return localStorage.curTab;
  }
}

Nav.init();