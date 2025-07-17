# Requisitos de Infraestrutura para Deployment do Sistema Red2Green

## 1. Visão Geral

O sistema Red2Green é composto por dois serviços principais:
- **Backend (API)**: Aplicação Node.js (Fastify), conectada a um banco de dados PostgreSQL.
- **Frontend (Client)**: Aplicação React (Vite), servida como arquivos estáticos.

Ambos os serviços devem ser acessíveis apenas pela rede interna do hospital.

---

## 2. Requisitos de Servidor

### Backend (API)

- **Sistema Operacional**: Linux (Ubuntu Server recomendado)
- **Node.js**: Versão 22.x
- **Banco de Dados**: PostgreSQL (pode ser em outro servidor)
- **Porta**: 5050 (ou conforme configuração)
- **Recursos mínimos**: 2 vCPU, 2GB RAM
- **Variáveis de ambiente**: `.env` com as seguintes chaves:
  - `API_PORT`
  - `ENVIRONMENT`
  - `DATABASE_URL`
  - `SECRET_KEY`
  - `JWT_EXPIRATION`
- **Acesso restrito**: Apenas rede interna

### Frontend (Client)

- **Sistema Operacional**: Linux
- **Node.js**: Para build (não obrigatório em produção)
- **Servidor de arquivos estáticos**: Nginx ou Apache (recomendado)
- **Porta**: 5000 (ou conforme configuração)
- **Recursos mínimos**: 1 vCPU, 512MB RAM
- **Variáveis de ambiente**: `.env` com as seguintes chaves:
  - `VITE_ENVIRONMENT`
  - `VITE_API_URL` (apontando para o backend na rede interna)
- **Acesso restrito**: Apenas rede interna

### Banco de Dados

- **PostgreSQL**: Versão compatível com Prisma
- **Backup periódico**
- **Acesso restrito**: Apenas servidores do sistema

---

## 3. Fluxo de Deployment

### Backend

1. Instalar dependências:
   ```sh
   npm install
   ```
2. Configurar `.env` com as variáveis apropriadas.
3. Rodar migrações do banco:
   ```sh
   npm run generate
   npm run migrate:dev
   npm run migrate
   ```
4. Iniciar o serviço (usar PM2 ou systemd para produção):
   ```sh
   npm run dev
   ```

### Frontend

1. Instalar dependências:
   ```sh
   npm install
   ```
2. Configurar `.env` com a URL interna da API.
3. Gerar build:
   ```sh
   npm run build
   ```
4. Servir os arquivos estáticos gerados (`dist/`) via Nginx/Apache.

---

## 4. Segurança e Rede

- **Acesso restrito**: Apenas rede interna do hospital.
- **Firewall**: Liberar apenas as portas necessárias.
- **HTTPS**: Recomendado, mesmo na rede interna.
- **Backups**: Banco de dados e arquivos de configuração.
- **Monitoramento**: Recomenda-se monitorar uso de CPU, RAM e espaço em disco.

---

## 5. Observações

- O sistema não deve ser exposto à internet.
- O acesso administrativo deve ser restrito a usuários autorizados.
- Documentação técnica e scripts de inicialização podem ser fornecidos sob demanda.

---

**Dúvidas ou necessidades específicas podem ser esclarecidas diretamente com a equipe de desenvolvimento.**
