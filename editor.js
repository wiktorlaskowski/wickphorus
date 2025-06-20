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
    }
  });
})();
