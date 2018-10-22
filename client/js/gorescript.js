var procent_resolution = 75;
$(document).ready(function () {
  $('.start').on('touchstart',function () {
    GAME.newGame();
    // GAME.showFPS = false;
    $('.controls').show();
    $('.start').hide();
  });
  var leftLeft = 0;
  var leftTop = 0;
  var rightTop = 0;
  var forMoveXDelta = 0;
  var forMoveYDelta = 0;
  var rightLeft = 0;
  var rightLeft = 0;
  var forXDelta = 0;
  var forYDelta = 0;
  var xAngle = 0;
  var yAngle = 0;
  var Ltouch = 1;
  var Rtouch = 1;
  $('body').on('touchstart',function () {
    if (GAME.grid.player.dead == true) {
      GAME.restartLevel();
      alert(test.getGreeting());
    }
    if (GAME.uiManager.winScreen.hasNextMap == true) {
      alert(test.getGreeting());
      GAME.loadLevel(GAME.uiManager.winScreen.aiManager.script.nextMap);
      $('.interface').show(200);
    }
    GS.Keybinds.use.inUse = true;
    setTimeout(function () {
      GS.Keybinds.use.inUse = false;
    }, 10);
  });
  $('.map').on('touchstart', function () {
    GAME.uiManager.automap.visible = !GAME.uiManager.automap.visible;
  });
  $('.change_weapon').on('touchstart', function () {
    GS.Keybinds.hyperblaster.inUse = true;
    GS.Keybinds.pistol.inUse = true;
    GS.Keybinds.shotgun.inUse = true;
    setTimeout(function () {
      GS.Keybinds.pistol.inUse = false;
      GS.Keybinds.shotgun.inUse = false;
      GS.Keybinds.hyperblaster.inUse = false;
    }, 200);
    console.log('change');
  });
  $('.pause').on('touchstart', function () {
    if ($('.pause i').hasClass('fa-pause')) {
      $('.pause i').removeClass('fa-pause');
      $('.pause i').addClass('fa-play');
      GAME.openMenu();
    }else {
      $('.pause i').removeClass('fa-play');
      $('.pause i').addClass('fa-pause');
      GAME.closeMenu();
    }
  })
  $('.left_block').on('touchstart',function (e) {
    if (Rtouch == 0) {
      var touch = e.originalEvent.touches[1];
    }else {
      var touch = e.originalEvent.touches[0];
    }
    Ltouch = touch.identifier;
    leftLeft = parseInt($('.left_block .point').css('left'));
    leftTop = parseInt($('.left_block .point').css('top'));
    forMoveXDelta = touch.pageX;
    forMoveYDelta = touch.pageY;
    if (touch.pageY > leftTop-45 && touch.pageY < leftTop+45) {
      $(this).find('.point').css('top', touch.pageY+'px');
    }
    if (touch.pageX > leftLeft-45 && touch.pageX < leftLeft+45) {
      $(this).find('.point').css('left', touch.pageX+'px');
    }
  });
  $('.left_block').on('touchmove',function (e) {

    var touch = e.originalEvent.touches[Ltouch];
    var xDelta = forMoveXDelta - touch.pageX;
    var yDelta = forMoveYDelta - touch.pageY;
    if (yDelta > 15) {
      GS.Keybinds.moveForward.inUse = true;
      GS.Keybinds.moveBackward.inUse = false;
    }else if (yDelta < -15){
      GS.Keybinds.moveForward.inUse = false;
      GS.Keybinds.moveBackward.inUse = true;
    }
    if (xDelta > 15) {
      GS.Keybinds.strafeLeft.inUse = true;
      GS.Keybinds.strafeRight.inUse = false;
    }else if(xDelta < -15) {
      GS.Keybinds.strafeLeft.inUse = false;
      GS.Keybinds.strafeRight.inUse = true;
    }
    if (touch.pageY > leftTop-45 && touch.pageY < leftTop+45) {
      $(this).find('.point').css('top', touch.pageY+'px');
    }
    if (touch.pageX > leftLeft-45 && touch.pageX < leftLeft+45) {
      $(this).find('.point').css('left', touch.pageX+'px');
    }

  });
  $('.left_block').on('touchend',function (e) {
    Ltouch = 1;
    $(this).find('.point').css('top', 'calc(85% - 45px)');
    $(this).find('.point').css('left', '15%');
    GS.Keybinds.moveForward.inUse = false;
    GS.Keybinds.moveBackward.inUse = false;
    GS.Keybinds.strafeLeft.inUse = false;
    GS.Keybinds.strafeRight.inUse = false;
  });
  $('.left_block').on('touchleave',function (e) {
    $(this).find('.point').css('top', 'calc(85% - 45px)');
    $(this).find('.point').css('left', '15%');
    GS.Keybinds.moveForward.inUse = false;
    GS.Keybinds.moveBackward.inUse = false;
    GS.Keybinds.strafeLeft.inUse = false;
    GS.Keybinds.strafeRight.inUse = false;
  });

  $('.right_block').on('touchstart',function (e) {
    if (Ltouch == 0) {
      var touch = e.originalEvent.touches[1];
    }else {
      var touch = e.originalEvent.touches[0];
    }
    Rtouch = touch.identifier;
    rightLeft = parseInt($('.right_block .point').css('left'));
    rightTop = parseInt($('.right_block .point').css('top'));
    forXDelta = touch.pageX;
    forYDelta = touch.pageY;
    xAngle = GAME.grid.player.controls.xAngle;
    yAngle = GAME.grid.player.controls.yAngle;
    if (touch.pageY > rightTop-45 && touch.pageY < rightTop+45) {
      $(this).find('.point').css('top', touch.pageY+'px');
    }
    if (touch.pageX > rightLeft-45 && touch.pageX < rightLeft+45) {
      $(this).find('.point').css('left', touch.pageX+'px');
    }
  });
  $('.right_block').on('touchmove',function (e) {
    var touch = e.originalEvent.touches[Rtouch]

    if (touch.pageY > rightTop-45 && touch.pageY < rightTop+45) {
      $(this).find('.point').css('top', touch.pageY+'px');
    }
    if (touch.pageX > rightLeft-45 && touch.pageX < rightLeft+45) {
      $(this).find('.point').css('left', touch.pageX+'px');
    }
    var xDelta = forXDelta - touch.pageX;
    var yDelta = forYDelta - touch.pageY;
    // GAME.grid.player.controls.setViewAngles(xAngle, yAngle);
    GAME.grid.player.controls.setViewAngles(xAngle-xDelta, yAngle-yDelta);
  });
  $('.right_block').on('touchend',function (e) {
    Rtouch = 1;
    $(this).find('.point').css('top', 'calc(85% - 45px)');
    $(this).find('.point').css('left', '85%');
  });
  $('.right_block').on('touchleave',function (e) {
    $(this).find('.point').css('top', 'calc(85% - 45px)');
    $(this).find('.point').css('left', '85%');
  });
})
