# Testes E2E - Agenda de Contatos

Este projeto contém testes end-to-end (E2E) para a aplicação Agenda de Contatos utilizando Cypress.

## Funcionalidades Testadas

1. Adição de novos contatos
2. Edição de contatos existentes
3. Remoção de contatos

## Pré-requisitos

- Node.js instalado
- NPM ou Yarn instalado

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_SEU_REPOSITÓRIO]
cd [NOME_DO_DIRETÓRIO]
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## Executando os Testes

Para executar os testes em modo headless:
```bash
npm run cypress:run
# ou
yarn cypress:run
```

Para abrir o Cypress Test Runner:
```bash
npm run cypress:open
# ou
yarn cypress:open
```

## Estrutura do Projeto

```
├── cypress/
│   ├── e2e/
│   │   └── agenda-contatos.cy.js    # Arquivo de testes
│   ├── fixtures/                    # Arquivos de dados para testes
│   ├── support/                     # Arquivos de suporte
│   └── relatorio/                   # Relatórios de execução dos testes
├── cypress.config.js                # Configuração do Cypress
├── package.json
└── README.md
```

## Relatórios

Os relatórios dos testes são gerados na pasta `cypress/relatorio` após cada execução.

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Crie um Pull Request 