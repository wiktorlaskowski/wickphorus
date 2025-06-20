(function() {
  'use strict';
  var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    theme: Blockly.Themes.Zelos
  });

  var player = new P.player.Player();
  player.addControls();
  document.getElementById('player').appendChild(player.root);

  var id = location.hash.replace(/^#/, '') || Common.projectId;
  if (!id) return;

  player.loadProjectById(id).catch(function(e) {
    console.error(e);
  });

  fetch('https://projects.scratch.mit.edu/' + id)
    .then(function(r) { return r.arrayBuffer(); })
    .then(function(b) { return JSZip.loadAsync(b); })
    .then(function(zip) { return zip.file('project.json').async('text'); })
    .then(function(text) {
      var xml = '<xml><block type="text"><field name="TEXT">' +
        text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') +
        '</field></block></xml>';
      var dom = Blockly.Xml.textToDom(xml);
      Blockly.Xml.domToWorkspace(dom, workspace);
    })
    .catch(function(err) {
      console.error(err);
    });
})();
