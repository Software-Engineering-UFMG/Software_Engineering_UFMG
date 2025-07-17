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
# LDAP config
LDAP_URL=ldap://10.36.2.21
LDAP_BIND_DN=CN=TAGS,OU=Servicos,OU=Usuarios,OU=HCMG,OU=EBSERH,DC=ebserhnet,DC=ebserh,DC=gov,DC=br
LDAP_BIND_PASSWORD=T4g5@2022!
LDAP_BASE_DN=OU=Usuarios,OU=HCMG,OU=EBSERH,DC=ebserhnet,DC=ebserh,DC=gov,DC=br
LDAP_IDENTIFYING_ATTRIBUTE=mailNickname
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
