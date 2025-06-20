(function() {
  'use strict';
  var seeInside = document.getElementById('see-inside');
  if (!seeInside) return;
  var playerArea = document.getElementById('player-area');
  var editorArea = document.getElementById('editor-area');
  var workspace;
  seeInside.addEventListener('click', function() {
    if (editorArea.style.display === 'block') {
      editorArea.style.display = 'none';
      playerArea.style.display = 'block';
    } else {
      playerArea.style.display = 'none';
      editorArea.style.display = 'block';
      if (!workspace && window.Blockly) {
        workspace = Blockly.inject('blocklyDiv', {
          toolbox: document.getElementById('toolbox'),
          theme: Blockly.Themes.Zelos
        });
      }
    }
  });
})();
