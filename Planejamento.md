--> Página principal 

    => Aplicar hover: margin 2px blue em div's, imagem do produto, botão pesquisar e sessão carrinho de compras.
    => Adicionar hover: underlined em textos || Testar sombreado nos textos na cor #6B54DE para usar no hover.

    --> Primeira section

        -- Barra de Navegação
            - Titulo à esquerda.
                => font #000000 30px weight 700.
            - Barra de navegação a direita.
                => font #828282 16px weight 400.
                => hover quando clicado: font #333333 16px weight 600.

    --> Segunda section

        -- Lista de produtos a esquerda.
                - div
                  - Imagem do produto no topo.
                    => width 170px
                    => height 131px 
                - div
                  - Tag no canto inferior esquerdo da imagem informando a categoria do produto.
                      => background color: #2E245E
                      => font white 12px weigth 400.
                  - Nome do produto
                      => font #333333 18px weight 700.
                  - Descrição do produto.
                      => font #828282 12px weigth 400.
                  - Preço do produto.
                      => font #2E245E 12px weight 600.
                  - Link para adicionar ao carrinho.
                      => font underlined #828282 14px weight 500.

    --> Terceira section

        -- Input de pesquisa a direita.
            - Input a esquerda.
                    => Placeholder: Digite aqui sua pesquisa. 
            -  Botão pesquisar a direita.
                  => Font 16 px weight 500 white.  
                  => Texto centralizado.

        -- Carrinho de compras a direita.
            - Título "Carrinho de Compras".
                  => Background #6B54DE.
                  => Font white 18px weight 700.
                  => Texto centralizado.
            - Área para os itens no carrinho.
                > Imagem do produto a esquerda.
                    => width 73px height: 53px.
                > Título do produto.
                    => font 18 px weight 700 #333333
                > Preço.
                    => font bold #2E245E weight 600.
                > Link para remover produto do carrinho. 
                    => font 12px weight 400 #828282.
                    => style none.
            - Informações gerais sobre os itens adicionados ao carrinho.
                    => Background color: #333333. 
                > Quantidade de produtos e Soma dos preços.
                    => <p> white 16px weight 500 | value font color #828282 weight 400.
                    => style none.

    --> Funcionalidades 
        -- Barra de Navegação
            - Filtro para listar produtos de acordo com categorias.
        -- Input de pesquisa a direita
            - Pesquisa de itens dentro do catálogo.
        -- Carrinho de compras
            - Mostrar produtos selecionados.
            - Somar quantidade e preços dos produtos. Além de exibi-los.
            - Mensagem default quando não houver produto.
        -- Lista de produtos
            - Quando clicado, link de adicionar ao carrinho.