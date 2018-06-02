'use strict';

var colorOptionBox = document.createElement('div');

function getStyle() 
{
  if (themeInfo.colors) {
    var k;
    for (k in themeInfo.colors) {

      var colorInput = document.createElement('input');
      colorInput.id = k;
      colorInput.type = "color";
      colorInput.value = themeInfo.colors[k];
      colorInput.class = "theme-colors";
      colorInput.addEventListener('change', save);

      var colorLabel = document.createElement('label');
      colorLabel.for = colorInput.id;
      colorLabel.textContent =  (" = " + k);
      
      var colorOpt = document.createElement('li');
      colorOpt.appendChild(colorInput);
      colorOpt.appendChild(colorLabel);

      colorOptionBox.appendChild(colorOpt);
    }

    var fragment = document.createDocumentFragment();
    fragment.appendChild(colorOptionBox);

    var e = document.getElementById('ulthemecolors'); // assuming ul exists
    e.append(fragment);
  }
}


var themeInfo;

async function getCurrentThemeInfo() {
  themeInfo = await browser.theme.getCurrent();
  getStyle();
}

getCurrentThemeInfo();

function save () {
  themeInfo.colors[this.id] = this.value;
  browser.storage.local.set(themeInfo);
}

function reset () {
  browser.storage.local.clear();
  browser.runtime.reload()
}
document.getElementById('reset').addEventListener('click', reset);

