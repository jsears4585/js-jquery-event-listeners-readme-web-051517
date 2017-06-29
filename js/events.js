//define functions here

  function getIt() {
    $('p').on('click', function(e) {
      alert("Hey!")
    })
  }

  function frameIt() {
    $('img').on('load', function(e) {
      $(this).addClass('tasty')
    })
  }

  function submitIt() {
    $('form').on('submit', function(e) {
      alert("Your form is going to be submitted now.")
    })
  }

  function pressIt() {
    $('#typing').on('keydown', function(key) {
      if(key.which == 71){
        alert('G was pressed!')
      }
    })
  }

$(document).ready(function(){
  getIt()
  frameIt()
  submitIt()
  pressIt()
});
