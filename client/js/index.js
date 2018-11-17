var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var selectSVG = function selectSVG(id) {
  var el = document.getElementById(id);
  return new SVGElement(el);
};

var createSVG = function createSVG(type) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', type);
  return new SVGElement(el);
};var

SVGElement = function () {
  function SVGElement(element) {_classCallCheck(this, SVGElement);
    this.element = element;
  }_createClass(SVGElement, [{ key: 'set', value: function set(

    attributeName, value) {
      this.element.setAttribute(attributeName, value);
    } }, { key: 'style', value: function style(

    property, value) {
      this.element.style[property] = value;
    } }]);return SVGElement;}();


var colors = [
{ main: '#FBDB4A', shades: ['#FAE073', '#FCE790', '#FADD65', '#E4C650'] },
{ main: '#F3934A', shades: ['#F7B989', '#F9CDAA', '#DD8644', '#F39C59'] },
{ main: '#EB547D', shades: ['#EE7293', '#F191AB', '#D64D72', '#C04567'] },
{ main: '#9F6AA7', shades: ['#B084B6', '#C19FC7', '#916198', '#82588A'] },
{ main: '#5476B3', shades: ['#6382B9', '#829BC7', '#4D6CA3', '#3E5782'] },
{ main: '#2BB19B', shades: ['#4DBFAD', '#73CDBF', '#27A18D', '#1F8171'] },
{ main: '#70B984', shades: ['#7FBE90', '#98CBA6', '#68A87A', '#5E976E'] }];

var svg = selectSVG('svg');
var text = document.getElementById('text');
var offscreenText = document.getElementById('offscreen-text');
var input = document.getElementById('input');
var width = window.innerWidth;
var height = window.innerHeight;
var textSize = 0;
var textCenter = 0;
var letters = [];
// var prompt_ = 'Разбор на члены предложения'.split('');
var prompt_ = 'Разбирайка'.split('');
// var prompt_ = ['s', 't', 'a', 'r', 't', ' ', 't', 'y', 'p', 'i', 'n', 'g'];
var runPrompt = true;

var resizePage = function resizePage() {
  width = window.innerWidth;
  height = window.innerHeight;
  svg.set('height', height);
  svg.set('width', width);
  svg.set('viewBox', '0 0 ' + width + ' ' + height);
  resizeLetters();
};

var resizeLetters = function resizeLetters() {
  textSize = width / (letters.length);
  if (textSize > 100) textSize = 100;
  text.style.fontSize = textSize + 'px';
  text.style.height = textSize + 'px';
  text.style.lineHeight = textSize + 'px';
  offscreenText.style.fontSize = textSize + 'px';
  var textRect = text.getBoundingClientRect();
  textCenter = textRect.top + textRect.height / 2;
  positionLetters();
};

var positionLetters = function positionLetters() {
  letters.forEach(function (letter) {
    var timing = letter.shift ? 0.1 : 0;
    TweenLite.to(letter.onScreen, timing, { x: letter.offScreen.offsetLeft + 'px', ease: Power3.easeInOut });
    letter.shift = true;
  });
};

var animateLetterIn = function animateLetterIn(letter) {
  var yOffset = (0.5 + Math.random() * 0.5) * textSize;
  TweenLite.fromTo(letter, 0.4, { scale: 0 }, { scale: 1, ease: Back.easeOut });
  TweenLite.fromTo(letter, 0.4, { opacity: 0 }, { opacity: 1, ease: Power3.easeOut });
  TweenLite.to(letter, 0.2, { y: -yOffset, ease: Power3.easeInOut });
  TweenLite.to(letter, 0.2, { y: 0, ease: Power3.easeInOut, delay: 0.2 });
  var rotation = -50 + Math.random() * 100;
  TweenLite.to(letter, 0.2, { rotation: rotation, ease: Power3.easeInOut });
  TweenLite.to(letter, 0.2, { rotation: 0, ease: Power3.easeInOut, delay: 0.2 });
};

var addDecor = function addDecor(letter, color) {
  setTimeout(function () {
    var rect = letter.getBoundingClientRect();
    var x0 = letter.offsetLeft + letter.offsetWidth / 2;
    var y0 = textCenter - textSize * 0.5;
    var shade = color.shades[Math.floor(Math.random() * 4)];
    for (var i = 0; i < 6; i++) {addTri(x0, y0, shade);}
    for (var i = 0; i < 6; i++) {addCirc(x0, y0);}
  }, 150);
};

var addTri = function addTri(x0, y0, shade) {
  var tri = createSVG('polygon');
  var a = Math.random();
  var a2 = a + (-0.2 + Math.random() * 0.4);
  var r = textSize * 0.52;
  var r2 = r + textSize * Math.random() * 0.2;
  var x = x0 + r * Math.cos(2 * Math.PI * a);
  var y = y0 + r * Math.sin(2 * Math.PI * a);
  var x2 = x0 + r2 * Math.cos(2 * Math.PI * a2);
  var y2 = y0 + r2 * Math.sin(2 * Math.PI * a2);
  var triSize = textSize * 0.1;
  var scale = 0.3 + Math.random() * 0.7;
  var offset = triSize * scale;
  tri.set('points', '0,0 ' + triSize * 2 + ',0 ' + triSize + ',' + triSize * 2);
  tri.style('fill', shade);
  svg.element.appendChild(tri.element);
  TweenLite.fromTo(tri.element, 0.6, { rotation: Math.random() * 360, scale: scale, x: x - offset, y: y - offset, opacity: 1 }, { x: x2 - offset, y: y2 - offset, opacity: 0, ease: Power1.easeInOut, onComplete: function onComplete() {
      svg.element.removeChild(tri.element);
    } });
};

var addCirc = function addCirc(x0, y0) {
  var circ = createSVG('circle');
  var a = Math.random();
  var r = textSize * 0.52;
  var r2 = r + textSize;
  var x = x0 + r * Math.cos(2 * Math.PI * a);
  var y = y0 + r * Math.sin(2 * Math.PI * a);
  var x2 = x0 + r2 * Math.cos(2 * Math.PI * a);
  var y2 = y0 + r2 * Math.sin(2 * Math.PI * a);
  var circSize = textSize * 0.05 * Math.random();
  circ.set('r', circSize);
  circ.style('fill', '#eee');
  svg.element.appendChild(circ.element);
  TweenLite.fromTo(circ.element, 0.6, { x: x - circSize, y: y - circSize, opacity: 1 }, { x: x2 - circSize, y: y2 - circSize, opacity: 0, ease: Power1.easeInOut, onComplete: function onComplete() {
      svg.element.removeChild(circ.element);
    } });
};

var addLetter = function addLetter(char, i) {
  var letter = document.createElement('span');
  var oLetter = document.createElement('span');
  letter.innerHTML = char;
  oLetter.innerHTML = char;
  text.appendChild(letter);
  var color = colors[i % colors.length];
  letter.style.color = color.main;
  letter.style.padding = '10px 0 10px 0';
  offscreenText.appendChild(oLetter);
  letters[i] = { offScreen: oLetter, onScreen: letter, char: char };
  animateLetterIn(letter);
  addDecor(oLetter, color);
};

var addLetters = function addLetters(value) {
  value.forEach(function (char, i) {
    if (letters[i] && letters[i].char !== char) {
      letters[i].onScreen.innerHTML = char;
      letters[i].offScreen.innerHTML = char;
      letters[i].char = char;
    }
    if (letters[i] === undefined) {
      addLetter(char, i);
    }
  });
};

var animateLetterOut = function animateLetterOut(letter, i) {
  TweenLite.to(letter.onScreen, 0.0, { scale: 0, opacity: 0, ease: Power2.easeIn, onComplete: function onComplete() {
      offscreenText.removeChild(letter.offScreen);
      text.removeChild(letter.onScreen);
      positionLetters();
    } });
  letters.splice(i, 1);
};

var removeLetters = function removeLetters(value) {
  for (var i = letters.length - 1; i >= 0; i--) {
    var letter = letters[i];
    if (value[i] === undefined) {
      animateLetterOut(letter, i);
    }
  }
};

var onInputChange = function onInputChange() {
  var value = input.value === '' ? [] : input.value.toLowerCase().split('');
  addLetters(value);
  removeLetters(value);
  resizeLetters();
};

var keyup = function keyup(e) {
  if (runPrompt) {
    input.value = '';
    runPrompt = false;
  };
  onInputChange();
};

var addPrompt = function addPrompt(i) {
  setTimeout(function () {
    if (runPrompt && prompt_[i]) {
      input.value = input.value + prompt_[i];
      onInputChange();
      addPrompt(i + 1);
    }else {
      showStart();
    }
  }, 150);
};
var addPromptFastForWord = function addPromptFastForWord(i) {
  setTimeout(function () {
    star0.play();
    if (runPrompt && prompt_[i]) {
      input.value = input.value + prompt_[i];
      onInputChange();
      addPromptFastForWord(i + 1);
    }else {
      startGame(true);
      analisLitersToWord();
      eventOnLit();
    }
  }, 50);
};
var addPromptFast = function addPromptFast(i) {
  setTimeout(function () {
    star0.play();
    if (runPrompt && prompt_[i]) {
      input.value = input.value + prompt_[i];
      onInputChange();
      addPromptFast(i + 1);
    }else {
      startGame();
      analisLiters();
    }
  }, 50);
};
function showStart() {
  swipe.play();

  $('.start').animate({
    bottom: '+=50%'
  }, 300);
  $('.stat').animate({
    top: '+=50%'
  }, 350);
  $('.song').animate({
    top: '+=50%'
  }, 400);
  $('.bulb').animate({
    top: '+=50%'
  }, 450);
}
function startGame(word) {
swipe.play();
  $('.stars').animate({
    top: '+=50%'
  }, 250);
  $('.home').animate({
    right: '+=50%'
  }, 300);
  $('.next').animate({
    right: '+=50%'
  }, 350);
  if (!word) {
    $('.part').animate({
      bottom: '+=50%'
    }, 400);
  }else {
    $('.part_word').animate({
      bottom: '+=50%'
    }, 400);
  }
  $('.stat').animate({
    top: '+=50%'
  }, 450);
  $('.song').animate({
    top: '+=50%'
  }, 500);
  $('.bulb').animate({
    top: '+=50%'
  }, 550);
}
function hideGame(word) {
  swipe.play();
  $('hr').hide(250, function () {
    $('hr').remove();
  })
  $('.stars').animate({
    top: '-=50%'
  }, 250, function () {
    newStars();
  });
  $('.home').animate({
    right: '-=50%'
  }, 300);
  $('.next').animate({
    right: '-=50%'
  }, 350);
  if (word) {
    $('.part_word').animate({
      bottom: '-=50%'
    }, 400);
  }else {
    $('.part').animate({
      bottom: '-=50%'
    }, 400);
  }
  $('.stat').animate({
    top: '-=50%'
  }, 450);
  $('.song').animate({
    top: '-=50%'
  }, 500);
  $('.bulb').animate({
    top: '-=50%'
  }, 550, function () {
    if (word) {
      $('.pristavka').hide(300);
      $('.koren').hide(300);
      $('.okonchanie').hide(300);
      wrightWord(getId(true));
    }else {
      wrightText(getId());
    }
  });
}
function wrightWord(text) {
  text_now = array_word[text];
  input.value = '';
  text = ' '+text_now.word;
  prompt_ = text.split('');
  addPromptFastForWord(0);
}
function wrightText(text) {
  text_now = array_text[text];
  input.value = '';
  text = ' '+text_now.text;
  prompt_ = text.split('');
  addPromptFast(0);
}

function getId(word) {
  if (word) {
    var array = array_word;
  }else {
    var array = array_text;
  }
  var mayId = rand(0, array.length - 1);
  var iteraite = 0;
  JSON.parse(localStorage.getItem('ids')).forEach(function (val) {
    if (mayId == val) {
      mayId = rand(0, array.length - 1);
      iteraite++;
    }
  });
  var tmp = JSON.parse(localStorage.getItem('ids'));
  tmp.push(mayId);
  localStorage.setItem('ids', JSON.stringify(tmp));

  return mayId
}
function next_word() {
    var count_stars_on_this_words = 0;
    $('.stars div i').each(function () {
      if ($(this).hasClass('fa-star') == true) {
        count_stars_on_this_words++;
      }
    });
    localStorage.setItem('score', Number(localStorage.getItem('score'))+ 1);
    checkHelp();
    var template_array_words = JSON.parse(localStorage.getItem('words'));
    template_array_words.push({
      mode: 'morfiy',
      words: text_now.word,
      analis: text_now.analis,
      count_stars_on_this_words: count_stars_on_this_words,
      error_counts: error_counts
    });
    localStorage.setItem('words', JSON.stringify(template_array_words));
    error_counts = 0;
    hideGame(true);
}

function next(hide) {
  if (hide) {
    var count_stars_on_this_words = 0;
    $('.stars div i').each(function () {
      if ($(this).hasClass('fa-star') == true) {
        count_stars_on_this_words++;
      }
    });
    localStorage.setItem('score', Number(localStorage.getItem('score'))+ 1);
    checkHelp();
    var template_array_words = JSON.parse(localStorage.getItem('words'));
    template_array_words.push({
      mode: 'sintacsisi',
      words: text_now.text,
      analis: text_now.analis,
      count_stars_on_this_words: count_stars_on_this_words,
      error_counts: error_counts
    });
    localStorage.setItem('words', JSON.stringify(template_array_words));
    error_counts = 0;

    hideGame();
  }else {
    wrightText(getId());
  }
}

function getWords() {
  $.ajax({
    type: "POST",
    url: "/getWords",
    success: function(data){
          array_word = data.text;
        }
    });
}

function getText() {
  $.ajax({
    type: "POST",
    url: "/getText",
    success: function(data){
          array_text = data.text;
        }
    });
}

function fill_word(part, color) {
    $('#text span').each(function () {
      if ($(this).data('part') == part) {
        $(this).css('background-color', color)
      }
    });
}
function analisLitersToWord() {
  array_choosed_word = JSON.parse(text_now.analis);
  var array_morfem = text_now.morf_word.split('-');
  morfems_now2 = [];
  array_choosed_word.forEach(function (elem, index) {
    morfems_now2.push({
        lit: array_morfem[index],
        analised: false,
        analis: elem
      });
    array_morfem[index].split('').forEach(lit => {
      morfems_now.push({
          lit: lit,
          analis: elem
        });
    });
  });
  var num = -1;
  $('#text span').each(function () {
    if ($(this).text() == ' ') {
    }else {
      this.dataset.part = morfems_now[num].analis;
    }
    num++;
  });
}
function analisLiters() {
  array_choosed_word = JSON.parse(text_now.analis);
  JSON.parse(text_now.analis).forEach(function (part, index) {
    var num = -1;
    $('#text span').each(function () {
      if ($(this).text() == ' ') {
        num++;
      }
      if (index == num) {
        this.dataset.part = part;
      }
    });
  })
}
function newStars() {
  $('.stars div').each(function () {
    $(this).removeClass('star-added');
    $(this).find('i').removeClass();
    $(this).find('i').addClass('fa');
    $(this).find('i').addClass('fa-star-o');
  })
}
function addStar(num) {
  $($('.stars div')[num]).find('i').removeClass();
  $($('.stars div')[num]).find('i').addClass('fa');
  $($('.stars div')[num]).find('i').addClass('fa-star');
  $($('.stars div')[num]).addClass('star-added');
  setTimeout(function () {
    var x0 = $('.stars div')[num].offsetLeft + 90;
    var y0 = $('.stars div')[num].offsetTop + 45;
    for (var i = 0; i < 6; i++) {addTri(x0, y0, '#fbdb4a');}
    for (var i = 0; i < 6; i++) {addCirc(x0, y0);}
  }, 250);
}

function checkHelp() {
  $('.score').text(localStorage.getItem('score'));
  if (localStorage.getItem('score') >= 10) {
    $('.bulb').addClass('star-added');
  }else {
    $('.bulb').removeClass('star-added');
  }
}

resizePage();
if (localStorage.getItem('ids') == null) {
  localStorage.setItem('ids', '[0]');
}
if (localStorage.getItem('words') == null) {
  localStorage.setItem('words', '[]');
}
if (localStorage.getItem('score') == null) {
  localStorage.setItem('score', '0');
}
// localStorage.setItem('words', '[]');
// localStorage.setItem('ids', '[0]');
function hideStart(no_start) {
  swipe2.play();
      if (!no_start) {

      $('.stat').animate({
        top: '-=50%'
      }, 350);
      $('.bulb').animate({
        top: '-=50%'
      }, 450);
      $('.song').animate({
        top: '-=50%'
      }, 400, function () {
        wrightText(getId());
      });
    }else {
      $('.start').animate({
        bottom: '-=50%'
      }, 300, function() {
        input.value = '';
        onInputChange();
      });

    }
}

function eventOnLit() {
  var count_fulters = 0;
  $('.text span').on('touchstart', function (e) {
    if (selected_morfem != 0) {
      $(this).addClass('filter');
      count_fulters = 1;
      cnock.play();
      if (selected_morfem == 1) {
        $('.pristavka').show();
        $('.pristavka').css('left',  $(this).offset().left+'px');
        $('.pristavka').css('top',  $(this).offset().top+'px');
        $('.pristavka').css('width',  $(this).width()+'px');
      }else if (selected_morfem == 2) {
        $('.koren').show();
        $('.koren').css('left',  $(this).offset().left+'px');
        $('.koren').css('top',  $(this).offset().top+'px');
        $('.koren').css('width',  $(this).width()+'px');
      }else if (selected_morfem == 3) {
        $('.sufics').show();
        $('.sufics').css('left',  $(this).offset().left-11+'px');
        $('.sufics').css('top',  $(this).offset().top+'px');
        $('.sufics').css('width',  $(this).width()+'px');
        $('.sufics').css('height',  $(this).width()+'px');
      }else if (selected_morfem == 4) {
        $('.okonchanie').show();
        $('.okonchanie').css('left',  $(this).offset().left+'px');
        $('.okonchanie').css('top',  $(this).offset().top+'px');
        $('.okonchanie').css('width',  $(this).width()+'px');
      }else if (selected_morfem == 5) {
        $('.obratochka').show();
        $('.obratochka').css('left',  $(this).offset().left+$(this).width()+7+'px');
        $('.obratochka').css('top',  $(this).offset().top+'px');
        $('.obratochka').css('width',  $(this).width()+'px');
        $('.obratochka').css('transform', 'translate(-100%,0%)');
      }
    }
  });

  $('.text span').on('touchmove', function (e) {
    if (selected_morfem != 0) {
      var choosed_lit = document.elementFromPoint(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
      if ($(choosed_lit).data('part')) {
        $(choosed_lit).addClass('filter');
        if (count_fulters != $('.filter').length) {
          cnock.play();
        }
        count_fulters = $('.filter').length
        if (selected_morfem == 1) {
          $('.pristavka').css('width',  ($(this).width() * $('.filter').length)+'px');
        }else if (selected_morfem == 2) {
          $('.koren').css('width', ($(this).width() * $('.filter').length)+'px');
        }else if (selected_morfem == 3) {
          $('.sufics').css('width', ($(this).width() * $('.filter').length)+'px');
          $('.sufics').css('height',  ($(this).width() * $('.filter').length)+'px');
          $('.sufics').css('left',  $(this).offset().left-30+'px');
        }else if (selected_morfem == 4) {
          $('.okonchanie').css('width', ($(this).width() * $('.filter').length)+'px');
        }else if (selected_morfem == 5) {
          $('.obratochka').css('width', ($(this).width() * $('.filter').length)+'px');
        }
      }
    }
  });

  $('.text span').on('touchend', function (e) {
    if (selected_morfem != 0) {
      // if (selected_morfem == 1) {
        var morfem = '';
        $('.filter').each(function () {
          morfem += $(this).text();
        });
        if (morfem == chack_morfem(selected_morfem)) {
          //success
          var star_two = false;
          var end_game = 0;
          morfems_now2.forEach(elem => {
            if (elem.lit == morfem) {
              elem.analised = true;
            }
            if (elem.analised == true) {
              end_game++;
            }
          });
          if (end_game != morfems_now2.length) {
            star.play();
            if (selected_morfem != 2) {
              addStar(0);
            }else if (selected_morfem == 2) {
              addStar(1);
            }
          }else {
            star2.play();
            addStar(0);
            addStar(1);
            addStar(2);
            next_word();
          }
        }else {
          //error
          error_counts++;
          if (selected_morfem == 1) {
            $('.pristavka').hide();
          }else if (selected_morfem == 2) {
            $('.koren').hide();
          }else if (selected_morfem == 3) {
            $('.sufics').hide();
          }else if (selected_morfem == 4) {
            $('.okonchanie').hide();
          }else if (selected_morfem == 5) {
            $('.obratochka').hide();
          }
          error.play();
          console.log('error');
        }
      // }
      $('.text span').each(function () {
        $(this).removeClass('filter');
      })
    }
  });

  $('.text span').on('touchleave', function (e) {
    if (selected_morfem != 0) {
      $('.text span').each(function () {
        $(this).removeClass('filter');
      })
    }
  });
}

function chack_morfem(anal) {
  var forReturn = '';
  morfems_now2.forEach(elem => {
    if (elem.analis == anal) {
      forReturn = elem.lit;
    }
  });
return forReturn;
}
var mode = 0;
var array_text = [];
var array_word = [];
var text_now = '';
var morfems_now = [];
var morfems_now2 = [];
var selected_morfem = 0;
var error_counts = 0;
var part_block;
var array_choosed_word = [];
var choose;
checkHelp();
window.addEventListener('resize', resizePage);
input.addEventListener('keyup', keyup);
// input.focus();
$(document).ready(function () {
  input.value = '';
  addPrompt(0);
  getText();
  getWords();
  checkHelp();
  $('.bulb').on('touchstart', function () {
      if ($(this).hasClass('star-added')) {
        tap.play();
        // if (mode == 1) {
        $('#text span').each(function () {
          if ($(this).data('part') == '1') {
            $(this).css('background-color', '#93a3bf');
            $(this).css('opacity', '0.5');
          }else if ($(this).data('part') == '2') {
            $(this).css('background-color', '#b693bb');
            $(this).css('opacity', '0.5');
          }else if ($(this).data('part') == '3') {
            $(this).css('background-color', '#9dbdb5');
            $(this).css('opacity', '0.5');
          }else if ($(this).data('part') == '4') {
            $(this).css('background-color', '#bdb590');
            $(this).css('opacity', '0.5');
          }else if ($(this).data('part') == '5') {
            $(this).css('background-color', '#98c1a3');
            $(this).css('opacity', '0.5');
          }
        });
        localStorage.setItem('score', Number(localStorage.getItem('score'))-10);
        // }else {
        //
        // }
      }else {
        error.play();
      }

    checkHelp();
    alert(test.getGreeting(''));

  });
  $('.competition').on('touchstart', function () {
    // if (localStorage.getItem('username') == null) {
    //   var username = prompt("Введите ваш username");
    //   localStorage.setItem('username', username);
    // }
    tap2.play();
    mode = 1;
    $('#arrow4').hide();
    $('#arrow5').hide();
    $('#arrow6').hide();
    $('.sint').hide(200);
    $('.morf').hide(250);
    $('.sale').hide(300);
    checkHelp();
    hideStart();
    $('.mode-select .sintacs').animate({
      left: '-50%'
    },300);
    $('.mode-select .competition').animate({
      left: '150%'
    },300);
    $('.mode-select .sostav').animate({
      top: '-50%'
    },300, function () {
      $('.mode-select').hide();
    });
  });
  $('.sintacs').on('touchstart', function () {
    tap2.play()
    mode = 1;
    $('#arrow4').hide();
    $('#arrow5').hide();
    $('#arrow6').hide();
    $('.sint').hide(200);
    $('.morf').hide(250);
    $('.sale').hide(300);
    checkHelp();
    hideStart();
    $('.mode-select .sintacs').animate({
      left: '-50%'
    },300);
    $('.mode-select .competition').animate({
      left: '150%'
    },300);
    $('.mode-select .sostav').animate({
      top: '-50%'
    },300, function () {
      $('.mode-select').hide();
    });
  });
  $('.sostav').on('touchstart', function () {
    tap2.play()
    mode = 2;
    $('#arrow4').hide();
    $('#arrow5').hide();
    $('#arrow6').hide();
    $('.sint').hide(200);
    $('.morf').hide(250);
    $('.sale').hide(300);
    checkHelp();
    $('.stat').animate({
      top: '-=50%'
    }, 350);
    $('.bulb').animate({
      top: '-=50%'
    }, 450);
    $('.song').animate({
      top: '-=50%'
    }, 400, function () {
    });
    $('.mode-select .sintacs').animate({
      left: '-50%'
    },300);
    $('.mode-select .competition').animate({
      left: '150%'
    },300);
    $('.mode-select .sostav').animate({
      top: '-50%'
    },300, function () {
      $('.mode-select').hide();
      wrightWord(getId(true));
    });
  });
  $('.start').on('touchstart', function () {
    $('#arrow4').show();
    $('.sint').show(300);
    $('#arrow5').show();
    $('.morf').show(300);
    $('#arrow6').show();
    $('.sale').show(300);
    $('.mode-select').show(200);
    checkHelp();
    tap.play()
    hideStart(true)
  });
  $('.switch label i').on('touchstart', function () {
    if(parseInt($(this).css('left')) < 10){
      $(this).animate({
        left: '63%'
      }, 100);
      swipe2.play();
      $('.string-block .sintacsisi').hide();
      $('.string-block .morfiy').show();
      $('.switch span').text('морфемный разбор');
    }else {
      $(this).animate({
        left: '0%'
      }, 100);
      swipe.play();
      $('.switch span').text('синтаксический разбор');
      $('.string-block .sintacsisi').show();
      $('.string-block .morfiy').hide();
    }
  });
  $('.stat').on('touchstart', function () {
    tap.play();
    checkHelp();
    $('#arrow1 .draw-arrow').addClass('animate');
    $('#arrow2 .draw-arrow').addClass('animate');
    $('#arrow3 .draw-arrow').addClass('animate');
    $('.string-block').empty();
    var words = JSON.parse(localStorage.getItem('words'));
    var count_errors = 0;
    var mean_count_errors = 0;
    if (words.length > 0) {
      words.forEach(function (obj) {
        count_errors += obj.error_counts;
        var text = `
        <div class="string `+obj.mode+`"><span>`+obj.words+`</span>
          <div class="stars-stat">`;
          for (let i = 0; i < obj.count_stars_on_this_words; i++) {
            text += `<i class="fa fa-star" aria-hidden="true"></i>`;
          }
          for (let i = 0; i < 3-obj.count_stars_on_this_words; i++) {
            text += `<i class="fa fa-star-o" aria-hidden="true"></i>`;
          }
          text += `</div>
          <div class="error-count">`+obj.error_counts+`</div>
        </div>`;
        $('.string-block').append(text);
        var sintacsisi_count = 0;
        var morfiy_count = 0;
        words.forEach(elem => {
          if (elem.mode == 'sintacsisi') {
            sintacsisi_count++;
          }else if (elem.mode == 'morfiy') {
            morfiy_count++;
          }
        });
        $($('.count_analised_words span')[0]).text(sintacsisi_count);
        $($('.count_analised_words span')[1]).text(morfiy_count);
        $('.count_errors span').text(count_errors);
        $('.mean_count_errors span').text(Number(count_errors/words.length).toFixed(2));
      });
    }else {
      var text = `
      <div class="string morfiy"><span>пусто</span></div>
      <div class="string sintacsisi"><span>пусто</span></div>`;
      $('.string-block').append(text);
    }
    swipe2.play();
    $('.statistic').animate({
      top: '0%'
    },250)
  });
  $('.stat-back').on('touchstart', function () {
    tap.play();
    $('#arrow1 .draw-arrow').removeClass('animate');
    $('#arrow2 .draw-arrow').removeClass('animate');
    $('#arrow3 .draw-arrow').removeClass('animate');
    swipe.play();
    $('.statistic').animate({
      top: '-110%'
    },250)
  });
  $('.song').on('touchstart',function () {
    tap.play();
    if (localStorage.getItem("sound") == 'true') {
      localStorage.setItem("sound", 'false');
      $('.song i').removeClass();
      $('.song i').addClass('fa');
    	$('.song i').addClass('fa-volume-off');
    	star.gameSounds.lineOut.volume  = 0.0;
    }else {
      localStorage.setItem("sound", 'true');
      $('.song i').removeClass();
      $('.song i').addClass('fa');
    	$('.song i').addClass('fa-volume-up');
    	star.gameSounds.lineOut.volume  = 1;
    }
  });
  $('.home').on('touchstart', function () {
    swipe2.play();
    $('#text').animate({
      opacity: 0
    },500)
    $('.interface').animate({
      opacity: 0
    },500)
    hideGame()
    setTimeout(function () {
      location.reload();
    }, 500);
  });
  $('.next').on('touchstart', function () {
    swipe2.play()
    if (rand(1,99) < 75) {
      alert(test.getGreeting(''));
    }
    if (mode == 1) {
      next(true);
    }else {
      next_word();
    }
  });

  $('.part_word div').on('touchstart', function (e) {
    checkHelp();
    if (selected_morfem == $(this).data('part')) {
      tap.play()
      selected_morfem = '0';
      $(this).css('box-shadow', 'none');
    }else {
      tap.play();
      if (selected_morfem == 0) {
        selected_morfem = $(this).data('part');
        $(this).css('box-shadow', '0 0 10px '+$(this).css('background-color'));
      }else {
        $('.part_word div').each(function () {
          $(this).css('box-shadow', 'none');
        });
        selected_morfem = $(this).data('part');
        $(this).css('box-shadow', '0 0 10px '+$(this).css('background-color'));
      }
    }
  });




  $('.part div').on('touchstart', function(e) {
    checkHelp();
    tap.play()
    part_block = $(this);
      $('.interface').css('z-index', '-5');
    $('body').append('<hr style="z-index:50">');
    $($('hr')[$('hr').length-1]).css('color', part_block.css('background-color'));
    $($('hr')[$('hr').length-1]).css('top', e.changedTouches[0].pageY);
    $($('hr')[$('hr').length-1]).css('left', e.changedTouches[0].pageX);
    $($('hr')[$('hr').length-1]).css('transform-origin', '0% 0%');
  });
  $('.part div').on('touchmove', function(e) {
    var a = e.changedTouches[0].pageX - parseInt($($('hr')[$('hr').length-1]).css('left'));
    var b = parseInt($($('hr')[$('hr').length-1]).css('top')) - e.changedTouches[0].pageY;
    var c = (Math.sqrt((a*a)+(b*b)))-10;
    var r = 360 - 180 / Math.PI * Math.atan2(b, a);
    $($('hr')[$('hr').length-1]).css('width', c+'px');
    $($('hr')[$('hr').length-1]).css('transform', 'translate(0%, -100%) rotate('+r+'deg)');
  });
  $('.part div').on('touchend', function(e) {
    var choosed_lit = document.elementFromPoint(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
    if ($(choosed_lit).data('part') == part_block.data('part')) {
      if ($(choosed_lit).data('part') == 1) {
        star.play()
        addStar(0);
      }
      if ($(choosed_lit).data('part') == 2) {
        star.play()
        addStar(1);
      }
      array_choosed_word = array_choosed_word.filter(function(item) {
          return item != $(choosed_lit).data('part')
      })
      if (array_choosed_word.length == 0) {
        star2.play()
        addStar(2);
        if (rand(1,99) < 10) {
          alert(test.getGreeting(''));
        }
        setTimeout(function () {
          next(true);
        }, 500);
      }else {
        star0.play()
      }
      fill_word($(choosed_lit).data('part'), ''+part_block.css('background-color'));
      $($('hr')[$('hr').length-1]).css('z-index', '0');
    }else {
      error.play();
      error_counts++;
      $('hr')[$('hr').length-1].remove()
    }
      $('.interface').css('z-index', '1');
  });
  $('.part div').on('touchleave', function(e) {
      $('hr')[$('hr').length-1].remove();
        $('.interface').css('z-index', '1');
  });
})


var sounds = new WebAudiox.GameSounds();
var star0;
var star;
var star2;
var swipe;
var swipe2;
var error;
var error1;
var error2;
var tap;
var tap2;
var cnock;
sounds.createClip().load('music/Puzzle_Stars_Stars_Stars_04_02.mp3', function(soundClip){
   star0 = soundClip;
 });
sounds.createClip().load('music/Puzzle_Stars_Stars_Stars_03_01.wav', function(soundClip){
   star = soundClip;
   if (localStorage.getItem("sound") == null) {
     localStorage.setItem("sound", 'true');
   }
   if (localStorage.getItem("sound") == 'true') {
     $('.song i').removeClass();
     $('.song i').addClass('fa');
   	$('.song i').addClass('fa-volume-up');
   	star.gameSounds.lineOut.volume  = 1;
   }else {
     $('.song i').removeClass();
     $('.song i').addClass('fa');
   	$('.song i').addClass('fa-volume-off');
   	star.gameSounds.lineOut.volume  = 0.0;
   }
 });
sounds.createClip().load('music/Puzzle_Stars_Stars_Stars_03_02.wav', function(soundClip){
  star2 = soundClip;
});
sounds.createClip().load('music/interface_Swish_Swish_Swish_05.wav', function(soundClip){
   swipe = soundClip;
 });
 sounds.createClip().load('music/interface_Swish_Swish_Swish_03.wav', function(soundClip){
    swipe2 = soundClip;
  });
  sounds.createClip().load('music/interface_Music_Negative_Digital_03.wav', function(soundClip){
    error0 = soundClip;
  });
  sounds.createClip().load('music/interface_Extra_Voice_Voice_05.wav', function(soundClip){
    error1 = soundClip;
  });
  sounds.createClip().load('music/interface_Extra_Voice_Voice_06.wav', function(soundClip){
    error2 = soundClip;
  });
sounds.createClip().load('music/interface_Extra_Voice_Voice_01.wav', function(soundClip){
   tap = soundClip;
 });
 sounds.createClip().load('music/interface_Design_Wood_Complex_07.wav', function(soundClip){
    tap2 = soundClip;
  });

sounds.createClip().load('music/interface_Main_Metal_Big_01.wav', function(soundClip){
  cnock = soundClip;
});

function rand(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Error() {

}

Error.prototype.play = function(arguments) {
  if (rand(1,99) < 50) {
    error1.play();
  }else {
    error2.play();
  }
};

var error = new Error();







//---------------------------
