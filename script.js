const li= document.querySelector('.lista')
console.log(li)

function listandoItens(valor, cesao){
for(let i = 0; i < valor.length; i++){
    let item = valor[i]
    let x = criarCard(item)
    cesao.appendChild(x)
    // console.log(x)
}
}
console.log(listandoItens(produtosList, li))
// Criador de cards
function criarCard(valor){
    // coletando informações
let nome        = valor.nome
let preco       = valor.preco
let id          = valor.id

// criando elementos
let li           = document.createElement('li')
let img          = document.createElement('img')
let div          = document.createElement('div')
let p            = document.createElement('p')
let button       = document.createElement('button')

// tratando os elementos
li.className     = 'item'
img.src          = './img/produto.png'
img.alt          = nome
p.innerText      = nome
button.innerText = `R$ ${preco}`.replace(".",",")
button.id        = id

// montando elementos
// li.append(img, div)
li.append(img, div)
div.append(p, button)

// retornando elemento
return li
}
// selecionando botões
li.addEventListener('click', adicionarCarrinho)
// verificando se o click foi em um botão
function adicionarCarrinho(event){
   let btnComprar = event.target

   if(btnComprar.tagName == "BUTTON"){
    // identificando produto pelo ID
    let btnId = btnComprar.id
    // verificando se o produto existe
    let produtoX = produtosList.find(function(produtoX){
        if(produtoX.id == btnId && produtoX.estoque == true){
            return produtoX
        }
        if(produtoX.id == btnId && produtoX.estoque == false) {
            console.log(alert ('Produto indisponível')) 
        }
    })  
    carrinhoEnviar(produtoX)
    // console.log(btnComprar.closest('li'))
    // console.log(btnComprar.parentElement)
   }
}
function carrinhoEnviar(valor){
    if(valor !== undefined){
        carrinho.push(valor)
        listandoCompra(carrinho)
        carrinho.splice([i])
    }
}
let carrinhoList = document.querySelector('.list')
console.log(carrinhoList)

function listandoCompra(valor){
    carrinhoList.innerText = ""
    for(let i = 0; i < valor.length; i++){
        itemComprado = valor[i]
        objeto = addCarrinho(itemComprado)
        carrinhoList.append(objeto)
    }
    somando(valor)
}
console.log(listandoCompra(carrinho))




function addCarrinho(valor){
    let nome            = valor.nome
    let preco           = valor.preco
    let indetificador   = valor.id

    itemListado         = document.createElement('li')
    itemNome            = document.createElement('p')
    itemValor           = document.createElement('p')
    excluir             = document.createElement('button')
    itempreco           = document.createElement('section')

    itemNome.innerText  = nome
    itemValor.innerText = `R$ ${preco}`.replace(".",",")
    excluir.innerText   = 'X'
    excluir.className   = 'excluir'
    excluir.id          = indetificador
    

    itemListado.append(itemNome, itempreco)
    itempreco.append(itemValor, excluir)

    return itemListado
}


function somando(valor){
    valorTotal = document.querySelector('.valor')
    let precoTotal = 0
    let precoString = precoTotal.toString()
    for(let x = 0; x < valor.length; x++){
        numero = valor[x].preco
        precoTotal += Number(numero)
    }
    valorTotal.innerText = `R$ ${precoTotal}`.replace(".",",")

}





// carrinhoList.addEventListener('click', excluirUmProduto)


// function excluirUmProduto(event){
//     carrinhoList.innerText = ""

//     btnExcluir = event.target
    
//     for(let i = 0; i < carrinho.length; i++){
//         if(carrinho[i].id == btnExcluir.id){
//             console.log ([i])
//             carrinho.splice([i])
//         }else{
//             console.log("teste2")
//         }
//     }
//     console.log(btnExcluir.id)
//     // carrinho.splice([i])
//     console.log('teste')

// }

// function excluirProduto(valor){
//     carrinho.splice(valor)
// }

// function adicionarCarrinho(event){
//     let btnComprar = event.target
 
//     if(btnComprar.tagName == "BUTTON"){
//      // identificando produto pelo ID
//      let btnId = btnComprar.id
//      // verificando se o produto existe
//      let produtoX = produtosList.find(function(produtoX){
//          if(produtoX.id == btnId && produtoX.estoque == true){
//              return produtoX
//          }
//          if(produtoX.id == btnId && produtoX.estoque == false) {
//              console.log(alert ('Produto indisponivel')) 
//          }
//      })  
//      carrinhoEnviar(produtoX)
//      // console.log(btnComprar.closest('li'))
//      // console.log(btnComprar.parentElement)
//     }




// function excluindoItem(valor){
//     carrinho.remove(valor)
// }




/////////////////////////////////////////////////////////////


// let botoes = document.querySelectorAll('ul li button')

 // target é Quem recebeu o click
    // console.log(event.target)
    //  currentTarget é quem está monitorando o evento
    // console.log(event.currentTarget)


// for(let i = 0; i < botoes.length; i++){
    
//     let botaoComprar = botoes[i]
//     botaoComprar.addEventListener('click', adicionarCarrinho)
// }

// function adicionarCarrinho(event){
//     let btn = event.target
//     console.log(btn)
// }


