let buttonTicket = document.getElementById('ticketqvadrat3')

buttonTicket.addEventListener('click', function() {
  swal({
  title: "Купить билет",
  buttons: {
    cancel: "Отмена",
    confirm:"Купить"
  }
})
.then((val) => {
  if (val) {
    swal({
      title: "Спасибо за покупку!"
    })
  }
})
})
