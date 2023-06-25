function procurar() {
var a1 = window.document.getElementById('iprocurar')
var b1 = window.document.getElementById('res')
var b2 = window.document.querySelector('section.content')
var a2 = (a1.value)

if (a2 == 'lemon') {
    b1.innerHTML= '<section border: 1px solid white; background: #FFC62C; > <img src = "imagens/lemon-c.png" alt="lemon.png"> <h1>lemon</h1> <h2>Price</h2> <strong><p>$4.99</p></strong> <button>Buy</button> </section>'
}
}