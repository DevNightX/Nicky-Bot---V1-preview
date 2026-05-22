# 🤖 Nicky Bot - V1 preview

> Projeto de bot para WhatsApp desenvolvido por **NightX** e **Nich**.  
> Versão de visualização e testes, em desenvolvimento. 🚀

---

## 📋 Sobre o Projeto
O **Nicky Bot** é um sistema de automação para WhatsApp, criado com estrutura organizada, focado em desempenho e facilidade para adicionar novas funções.  
Essa é a **Versão 1 Preview**, ainda em fase de construção e testes.

---

## 🛠️ Tecnologias Utilizadas
- Node.js
- whatsapp-web.js
- JavaScript

---

## 📂 Estrutura do Projeto
nicky-main/
├── config/         # Arquivos de configuração e mensagens auxiliares
│   ├── config.js
│   └── helper.js
├── src/
│   ├── commands/   # Todos os comandos separados por arquivo
│   │   ├── s.js
│   │   ├── bug.js
│   │   ├── suporte.js
│   │   └── tagme.js
│   ├── connection/ # Gerenciamento de conexão e eventos
│   │   ├── connect.js
│   │   ├── qr.js
│   │   ├── ready.js
│   │   └── sessions/
│   ├── services/   # Serviços e inicialização do cliente
│   │   └── client.js
│   └── index.js    # Cérebro principal do sistema
├── .gitignore      # Arquivos/pastas ignoradas pelo Git
├── package.json    # Dependências e informações do projeto
└── README.md       # Documentação do projeto