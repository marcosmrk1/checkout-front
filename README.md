# 🛒 CnShopping

Bem-vindo ao **CnShopping**, sua plataforma de e-commerce completa. Este projeto demonstra um fluxo de compra do início ao fim, incluindo autenticação, catálogo de produtos, gerenciamento de carrinho e diversas opções de pagamento.

## 🚀 Começando

Siga as instruções abaixo para configurar e rodar o projeto localmente.

### ⚙️ Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Você pode usar `npm`, `pnpm` ou `yarn` como gerenciador de pacotes.

### 🛠️ Instalação e Execução

1.  **Instale as dependências:**
    ```bash
    # Usando npm
    npm install
    # ou usando pnpm
    pnpm install
    # ou usando yarn
    yarn install
    ```

2.  **Crie o arquivo de variáveis de ambiente (`.env`):**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione as seguintes variáveis:

    ```env
    # Necessário para autenticação local via NextAuth
    NEXTAUTH_URL=http://localhost:3000
    # Gere um segredo de 32 caracteres usando o link abaixo e cole aqui
    NEXTAUTH_SECRET= (Use [https://generate-secret.vercel.app/32](https://generate-secret.vercel.app/32) para gerar)
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou pnpm run dev
    # ou yarn dev
    ```

O sistema estará disponível em `http://localhost:3000`.

---

## 🔑 Acesso e Login

Você pode acessar o sistema de duas formas:

### 1. Acesso Local (Credenciais Padrão)

Use uma das seguintes contas de usuário para testar o login localmente:

| E-mail | Senha |
| :--- | :--- |
| `marcospl.134@gmaill.com` | `1234` |
| `Leandra@gmail` | `1234` |

### 2. Acesso em Produção (Login com Google)

Se preferir testar a autenticação via Google, acesse o *deploy* do projeto:

> **🔗 Link do Deploy:** [https://checkout-front-zeta.vercel.app/login](https://checkout-front-zeta.vercel.app/login)

---

## ✨ Funcionalidades Principais

Após o login, você será direcionado para o **Catálogo de Produtos**.

### 🛍️ Catálogo e Carrinho

* **Comprar:** Ao passar o mouse sobre o cifrão de dinheiro em um produto, a opção de compra será exibida, adicionando-o ao carrinho.
* **Visualização do Carrinho:** Na página do carrinho, é possível:
    * **Adicionar / Diminuir:** Altere a quantidade de um item.
    * **Remover:** Apague um item do carrinho.

### 💳 Etapas do Pedido e Pagamento

Ao prosseguir para a próxima etapa, o sistema exige a escolha obrigatória de uma das opções de pagamento: **Boleto**, **PIX** ou **Cartão de Crédito**.

#### 📄 Boleto

* **Fluxo:** O sistema entra em um estado de espera.
* **Conclusão:** Clique em **"Pagar"** para concluir o pedido.
* **Expiração:** Se o tempo expirar antes do clique, o pedido será marcado como **"Expirado"**, e o carrinho deverá  voltar ao estágio inicial .
* **Redirecionamento:** Após a conclusão, você será redirecionado automaticamente (ou poderá escolher) para o catálogo.

#### 🪙 PIX (Teste de Falha Proposital)

* **Primeira Tentativa:** **Propositalmente**, a primeira tentativa de pagamento via PIX resultará em falha, solicitando que você tente novamente.
* **Segunda Tentativa:** Na segunda tentativa, o processo será concluído com sucesso.
* **Expiração:** Se o tempo expirar antes do clique, o pedido será marcado como **"Expirado"**, e o carrinho deverá  voltar ao estágio inicial .

#### 💳 Cartão de Crédito

* **Requisito:** É **obrigatório** ter um cartão de crédito cadastrado. Se não houver, você deverá cadastrar um para prosseguir.
* **Fluxo:** Após selecionar o cartão, basta clicar no botão de confirmação para que o pedido seja concluído, repetindo o fluxo de confirmação.
* **Expiração:** Se o tempo expirar antes do clique, o pedido será marcado como **"Expirado"**, e o carrinho deverá  voltar ao estágio inicial .

---

## 🎨 Tema (Dark/Light Mode)

O sistema oferece temas **Claro** e **Noturno** para a preferência do usuário.

* **Detecção Automática:** Ao entrar na página, o `ThemeProvider` irá identificar o tema configurado no sistema operacional do usuário e o definirá como padrão.
* **Alternância:** Há um botão de alternância disponível para mudar o tema manualmente.

---

## 💡 Tecnologias Principais

Este projeto foi construído utilizando as seguintes bibliotecas para gerenciar estado e autenticação:

* ⚛️ **NextAuth:** Utilizado para o sistema de **autenticação** (login com credenciais e Google).
* 🐻 **Zustand:** Uma solução de gerenciamento de estado global leve e escalável, usada para **controlar variáveis globais** e criar *stores* (estados).

---

## 💻 Padrões de Código e Qualidade

Para garantir a qualidade e a consistência do código, este projeto utiliza:

* **Husky:** Para ganchos de *git*.
* **ESLint:** Para análise estática de código e identificação de problemas.
* **Prettier:** Para formatação de código automática.

Os *hooks* do Husky rodam o ESLint com Prettier, garantindo que o código seja padronizado antes de cada *commit*.
