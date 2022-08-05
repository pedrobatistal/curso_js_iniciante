function carregar(){ 
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('foto')
  var data = new Date()
  var hora = data.getHours()
  var hora = 13


  if(hora > 1 && hora < 12) {
    msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
    img.innerHTML = '<img src="fotomanha.jpg">' 
    document.body.style.background = '#24c0eb'

  } else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
    img.innerHTML = '<img src="fototarde.jpg">' 
    document.body.style.background = '#a5c3a7'

  } else {
    msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
    img.innerHTML = '<img src="fotonoite.jpg">' 
    document.body.style.background = '#243a69'

  }
  


}
