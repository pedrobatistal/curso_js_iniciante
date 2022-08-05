function carregar() {
  var img = window.document.querySelector('div#img')
  var msg = window.document.querySelector('div#msg')
  var data = new Date()
  var hora = data.getHours()

  if(hora > 1 && hora <= 12){
    msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
    img.innerHTML = '<img src="fotomanha.jpg" alt="Foto da manhã">'
    document.body.style.background = '#f2f26f'
    
  } else if (hora > 12 && hora <= 18) {
    msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
    img.innerHTML = '<img src="fototarde.jpg" alt="Foto da manhã">'
    document.body.style.background = '#ff823a'
  } else {
    msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
    img.innerHTML = '<img src="fotonoite.jpg" alt="Foto da manhã">'
    document.body.style.background = '#f04155'
  }
}