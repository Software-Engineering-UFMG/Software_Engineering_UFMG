# Declarando argumentos
ARG NODE_VERSION=22.14.0-alpine
ARG NGINX_VERSION=1.27.4-alpine

# Construindo o container com a imagem do Node
FROM node:${NODE_VERSION} AS builder

# Declarando as variáveis de ambiente
ARG ENVIRONMENT
ARG API_URL

# Atualizando o sistema operacional e instalando o bash
RUN apk update && apk upgrade
RUN apk add bash

# Excluindo node_modules e package-lock.json caso existam
RUN rm -rf ./client/node_modules
RUN rm -rf ./client/package-lock.json

# Copiando os arquivos da aplicação para o container
RUN mkdir /client
COPY ./client /client

# Criando o arquivo .env com as variáveis de ambiente
RUN echo "VITE_ENVIRONMENT=${ENVIRONMENT}" > /client/.env && \
    echo "VITE_API_URL=${API_URL}" >> /client/.env

# Definindo o diretório de trabalho para a aplicação
WORKDIR /client

# Instalando as dependências do projeto dentro do container e buildando a aplicação
RUN npm install
RUN npm run build

# Instalando o Nginx no container
FROM nginx:${NGINX_VERSION}

# Copiando os arquivos do build da aplicação para o a pasta de distribuição do Nginx e configurando o Nginx
COPY --from=builder /client/dist /usr/share/nginx/client
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /client/nginx.default.conf /etc/nginx/conf.d