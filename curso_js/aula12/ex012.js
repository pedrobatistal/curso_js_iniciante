var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)

if (hora < 12 && hora > 1) {
  console.log('Bom dia!')
} else if (hora < 18 && hora > 12) {
  console.log('Boa tarde!')
} else {
  console.log('Boa noite!')
}
