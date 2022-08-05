let num = [2,3,42,4,3]

console.log(num)
console.log(`O nosso vetor é ${num}`)

// para acrescentar um valor ao vetor, basta utilizar o nome do vetor, junto com um numero dentro de colchetes em frente ao nome do vetor. Esse número diz em que posição o novo valor será adicionado. Em seguida, coloque o operador de atribuiçao (=) e o valor desejado:

num[8] = 10
console.log(num)

num[2] = 55
console.log(num)

// para adicionar na ultima posição, basta utilizar o método arrayName.push(param) e utilizar como parâmetro o número que se deseja adicionar.

num.push(180)
console.log(num)

//para saber o comprimento do array com o atributo: arrayName.length; Por ser um atributo, ele não recebe parâmetros, portanto não tem parêntesis

console.log(`O vetor tem tamanho ${num.length}`)

//para organizar em ordem crescente é utilizado o método: arrayName.sort()

//usando o loop for para imprimir cada elemento do array
for(let pos = 0; pos < num.length; pos++){
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//outra maneira de fazer
for(let pos in num){
  console.log(num[pos])
}

//buscar valores nm vetor é feito com o método arrayName.indexOf(elemento que está buscando). A função retornará o índice do array. Caso o js não encontre o elemento, ele retornará o valor -1, que significa que o js pesquisou dentro do vetor e não encontro nenhma ocorrencia.
console.log(`O índice do valor 10 é ${num.indexOf(10)}`)