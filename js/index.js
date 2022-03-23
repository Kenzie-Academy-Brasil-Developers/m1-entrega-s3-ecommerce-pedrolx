const produtos = [
    {
        img: './img/Men-Jacket.png',
        flag: 'Camisetas',
        nome: 'Lightweight Jacket',
        descricao: 'Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...',
        preco: '100.00'
    },
    {
        img: './img/hat.png',
        flag: 'Acessórios',
        nome: 'Black Hat',
        descricao: 'O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...',
        preco: '100.00'
    },
    {
        img: './img/Surgical-Mask-Black.png',
        flag: 'Acessórios',
        nome: 'Mask',
        descricao: 'Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...',
        preco: '40.00'
    },
    {
        img: './img/Men-TShirt-Black-Front.png',
        flag: 'Camisetas',
        nome: 'T-Shirt',
        descricao: 'Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...',
        preco: '100.00'
    },
    {
        img: './img/mockup-a0dc2330.png',
        flag: 'Camisetas',
        nome: 'Short-Sleeve T-Shirt',
        descricao: 'Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...',
        preco: '100.00'
    },
    {
        img: './img/mockup-9b9894f1__67347.png',
        flag: 'Camisetas',
        nome: 'Champion Packable Jacket',
        descricao: 'Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...',
        preco: '100.00'
    },
]

let vitrine = document.getElementById('listaDeProdutos');
let boxCarrinho = document.querySelector('.caixaLista');
let produtoListaCarrinho = document.getElementById(`${produtos.nome}`);
let soma = 0;


function mostraProduto (imgSrc, flag, nome, descr, preco) {
        let produto = document.createElement('figure');
        produto.setAttribute('class', 'produto');
        produto.innerHTML = `<div id="img">
        <img id="imagemProduto" src=${imgSrc} alt="">
    </div>
    <figcaption id="detalhesProduto">
        <div id="caixaDetalhes">
            <p id="categoriaProduto">${flag}</p>
            <h4 id="nomeProduto">${nome}</h4>
            <p id="descricaoProduto">${descr}</p>
            <h5 id="precoProduto">${'R$ ' + preco}</h5>
            <a id="${nome}" class="linkCarrinho">Adicionar ao Carrinho</a>
    </figcaption>`;
    produto.setAttribute('id', flag);
    vitrine.appendChild(produto);
}

function atualizaLista (font=produtos) {
    vitrine.innerHTML = '';
    font.forEach((item) => {
        mostraProduto(item.img, item.flag, item.nome, item.descricao, item.preco);
    })
}

atualizaLista();
clicaProduto()


/* Função para o link de adicionar ao carrinho */

const carrinho = document.querySelector('div#produtosSelecionados');
const ol = document.createElement('ol');
ol.setAttribute('class', 'caixaLista');
carrinho.appendChild(ol);


function montarCarrinho (produtos, click) {
    produtos.forEach((produto) => {
        if (click === produto.nome) {
            const li = document.createElement('li');
            li.setAttribute('class', 'produtoLista');
            const img = document.createElement('img');
            img.setAttribute('class', 'imagemLista');
            const nome = document.createElement('h3');
            nome.setAttribute('class', 'nomeLista');
            const preco = document.createElement('p');
            preco.setAttribute('class', 'precoList');
            const remove = document.createElement('a');
            remove.setAttribute('class', 'remove');
            img.src = produto.img;
            nome.innerText = produto.nome;
            preco.innerText = 'R$ ' + produto.preco;
            remove.innerHTML =`<a id="linkRemove">Remover do Carrinho</a>`
            li.appendChild(img);
            li.appendChild(nome);
            li.appendChild(preco);
            li.appendChild(remove);
            ol.appendChild(li);

            /* Mostra a div de soma dos valores ao clicar em um produto*/

            let escondido = document.getElementById('total');
            let elements = ol.childElementCount;
            if (elements !== 0) {
                escondido.style.visibility = 'visible';
            }

            let valor1 = document.getElementById('valor1');
            let valor2 = document.getElementById('valor2');
            valor1.innerText = `${ol.children.length}`;
            soma += parseFloat(produto.preco);
            valor2.innerText = `R$${soma}.00`;

            remove.addEventListener('click', (removeItem));
            function removeItem() {
                boxCarrinho = document.querySelector('.caixaLista');
                let quantidade = ol.children.length - 1;
                valor1.innerText = `${quantidade}`;
                let retirar = parseFloat(li.childNodes[2].textContent.replace('R$', ''));
                soma = soma - retirar;
                valor2.innerText = `R$ ${soma}.00`;
                boxCarrinho.removeChild(li);
            } 
        }
    });

}

/* Função para filtrar pela barra de navegação */

let nav = document.getElementById('navMenu');
let botao = document.getElementById('pesquisa');
nav.addEventListener('click', filtro);
function filtro (event) {
    let itemClicado = event.target;
    let categoriaProduto = itemClicado.innerText;

    if (categoriaProduto !== 'Todos') {
        let categoriaFiltrada = produtos.filter(function(item){
        return item.flag.includes(categoriaProduto);
    });
        atualizaLista(categoriaFiltrada);
        clicaProduto()

    } else {
        atualizaLista(); 
        clicaProduto()

    }
    }

    /* Ao clicar no link, adiciona ao carrinho */
function clicaProduto() {
    let item = document.querySelectorAll('a.linkCarrinho');
    item.forEach((element)=>{
    element.addEventListener('click', logId);
    });

    let mensagemCarrinho = document.getElementById('tituloCarrinho');
    let mensagemCarrinho1 = document.getElementById('mensagemCarrinho');
    let carrinhoBox = document.getElementById('produtosSelecionados');

    function logId (event) {
        const click = event.target.id;
        carrinhoBox.style.padding = 0;
        mensagemCarrinho.style.visibility = 'hidden';
        mensagemCarrinho1.style.visibility = 'hidden';
        montarCarrinho(produtos, click);
    }

}







    