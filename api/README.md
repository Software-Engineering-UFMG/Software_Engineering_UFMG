## Requisitos

- Node.js v22.14

## Como executar

1. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
API_PORT=
ENVIRONMENT=
DATABASE_URL=
SECRET_KEY=
JWT_EXPIRATION=
```

2. Instale as dependências:

```sh
npm install
```

3. Migre o banco de dados:

```sh
npm run generate
npm run migrate:dev
npm run migrate
```

4. Execute o projeto:

```sh
npm run dev
```

O projeto estará disponível em `http://localhost:5050`
