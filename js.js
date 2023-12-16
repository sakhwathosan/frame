function setFrame() {
  var input = document.getElementById('imageInput');
  var output = document.getElementById('output');
  var frame = document.getElementById('frame');

  input.addEventListener('change', function() {
    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      output.src = e.target.result;
      output.style.display = 'block';
      frame.style.display = 'block';
    }

    reader.readAsDataURL(file);
  });
}
