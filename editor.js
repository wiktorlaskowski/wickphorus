(function() {
  'use strict';
  var seeInside = document.getElementById('see-inside');
  if (!seeInside) return;
  seeInside.addEventListener('click', function() {
    var id = location.hash.replace(/^#/, '');
    if (id) {
      location.href = 'editor.html#' + id;
    } else {
      alert('Load a project first.');
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
