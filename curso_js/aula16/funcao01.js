function parImpar(n) {
  if (n%2 == 0){
    console.log(`O número ${n} é par!`)
  } else {
    console.log(`O número ${n} é ímpar!`)
  }
}

parImpar(10)

//fazendo com return
function parImpar(n) {
  if (n%2 == 0){
    return `O número ${n} é ímpar!`
  } else {
    return `O número ${n} é ímpar!`
  }
}

let res = parImpar(10)
console.log(res)