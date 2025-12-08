# 🛒 Ecommerce

Este é um projeto de Ecommerce desenvolvido com **Angular na sua versão 18**, utilizando:

- ✅ Standalone Components
- ✅ Angular SSR (Server‑Side Rendering)
- ✅ BehaviorSubject para gerenciamento de estado
- ✅ Carrinho persistido no `localStorage`
- ✅ Componente de tabela isolado e reutilizável (`product-table`)
- ✅ Navbar com contador de itens no carrinho
- ✅ Bootstrap para estilização

---

## 🚀 Tecnologias Utilizadas

- **Angular 18**
- **TypeScript**
- **Bootstrap**
- **RxJS**
- **SSR (Server‑Side Rendering)**
- **LocalStorage**
- **Roteamento moderno**
- **HttpClient para integração com backend**

---

## 📦 Funcionalidades

### ✅ Gerenciamento de Produtos

- Listagem de produtos
- Edição
- Exclusão
- Adição ao carrinho

### ✅ Carrinho de Compras

- Adicionar itens
- Remover itens
- Limpar carrinho
- Quantidade total calculada automaticamente
- Persistência via `localStorage`
- Compatível com SSR usando `isPlatformBrowser`

### ✅ Navbar com Contador

- Mostra quantidade total de itens no carrinho
- Atualiza em tempo real usando RxJS

### ✅ Componente Reutilizável: `product-table`

- Recebe produtos via `@Input`
- Emite eventos via `output()`
- Pode ser usado em qualquer página sem duplicar código

---

## 🛠️ Instalação

- #### Passos para instalação do Front-End

  git clone https://github.com/JoabPereira/ecommerce

  npm install

  ng serve

  - #### Passos para clonar o Back-End Java do projeto

  git clone https://github.com/JoabPereira/backend-ecommerce

  ***

  ## 📱 Telas

  - Tela inicial Home

  ![Tela inicial](./src/app/assets/Captura%20de%20tela%202025-12-07%20212349.png)

  - Tela de Produtos

  ![Tela de Produtos](./src/app/assets/Captura%20de%20tela%202025-12-07%20212600.png)

  - Tela de Carrinho de compras

  ![Tela de Produtos](./src/app/assets/Captura%20de%20tela%202025-12-07%20212636.png)

  ***

### Video do projeto funcionando:

- https://drive.google.com/file/d/1d3xu1Hgvvcrb9KR5RzTbHQzSNXAzqGc4/view?usp=sharing
