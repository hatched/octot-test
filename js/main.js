var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  var file = this[0].files[0];
  var xhr = new XMLHttpRequest();
  xhr.open('post', '/uploadfile');
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.setRequestHeader("Content-Type", "application/zip");
  xhr.send(file);
});
