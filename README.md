# BookStore

## Descrição

Este projeto front-end foi desenvolvido utilizando React, React Router e React Bootstrap. Consiste em duas páginas: a página inicial exibe uma lista de produtos que podem ser adicionados a um carrinho de compras, e a segunda página exibe o conteúdo do carrinho. A funcionalidade de compra não está implementada neste momento, apenas as funcionalidades de adicionar e remover itens do carrinho.

## Tecnologias Utilizadas

- React
- React Router
- React Bootstrap

## Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Faça o clone deste repositório.
3. No diretório raiz do projeto, execute o seguinte comando no terminal para instalar as dependências:
   ```shell
   npm install
   ```
4. Execute o seguinte comando no terminal para adicionar a dependência do React Router:
    ```shell
    npm install react-router-dom
    ```
5. Em seguida, adicione a dependência do React Bootstrap executando o seguinte comando:
    ```shell
    npm install react-bootstrap bootstrap
    ```
6. Após a conclusão da instalação, abra o arquivo package.json e verifique se as dependências foram adicionadas corretamente.

## Uso

1. No diretório raiz do projeto, execute o seguinte comando no terminal para iniciar a aplicação:

   ```shell
   npm start
   ```

2. Abra o navegador e acesse `http://localhost:3000` para visualizar a página inicial.

## Funcionalidades

### Página Inicial

- Exibe uma lista de produtos disponíveis.
- Cada produto possui um botão "Adicionar ao Carrinho".
- Ao clicar no botão "Adicionar ao Carrinho", o produto é adicionado ao carrinho usando o Local Storage.

### Página do Carrinho

- Exibe os produtos adicionados ao carrinho.
- Cada produto possui um botão para remover ou adicionar um item.