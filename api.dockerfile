# Declarando argumentos
ARG NODE_VERSION=22.14.0-alpine

# Construindo o container com a imagem do Node
FROM node:${NODE_VERSION} AS builder

# Declarando as variáveis de ambiente
ARG API_PORT
ARG ENVIRONMENT
ARG DATABASE_URL
ARG SECRET_KEY
ARG JWT_EXPIRATION

# Atualizando o sistema operacional e instalando o bash
RUN apk update && apk upgrade
RUN apk add bash

# Excluindo node_modules e package-lock.json caso existam
RUN rm -rf ./api/node_modules
RUN rm -rf ./api/package-lock.json

# Copiando os arquivos da aplicação para o container
RUN mkdir /api
COPY ./api /api

# Criando o arquivo .env com as variáveis de ambiente
RUN echo "API_PORT=${API_PORT}" > /api/.env && \
    echo "ENVIRONMENT=${ENVIRONMENT}" >> /api/.env && \
    echo "DATABASE_URL=${DATABASE_URL}" >> /api/.env && \
    echo "SECRET_KEY=${SECRET_KEY}" >> /api/.env && \
    echo "JWT_EXPIRATION=${JWT_EXPIRATION}" >> /api/.env

# Definindo o diretório de trabalho para a aplicação
WORKDIR /api

# Instalando as dependências do projeto dentro do container e buildando a aplicação
RUN npm install
RUN npm uninstall bcrypt
RUN npm install bcrypt

RUN npm run build