const links = document.querySelectorAll('.nav-item a')
const checkbox = document.querySelector('#nav-toggle')

for ( const link of links ) {
  link.onclick = handleClick
}

function handleClick() {
  checkbox.checked = false
}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

$('#example').tooltip(options)
