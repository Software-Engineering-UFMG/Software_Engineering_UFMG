# TP de Engenharia de Software UFMG

## Descrição do Projeto

Aplicativo para implementação da metodologia SAFER Patient Flow Bundle e Red2Green days que visa basicamente melhorar o desempenho no tempo de internação no Hospital das Clínicas da UFMG.

### Autenticação e Gerenciamento de Usuários

Sistema de login seguro com suporte para três tipos de usuários: Admin, NIR e Assistencial.

Cadastro de usuários disponível para os perfis NIR e Assistencial.

Edição de cadastro para usuários dos tipos NIR e Assistencial.

### Funcionalidades Específicas por Tipo de Usuário

### Usuários Assistenciais:

Seleção de Preceptor: Interface para escolha de um preceptor.

Dashboard: Exibe a lista de pacientes atribuídos para acompanhamento e gestão.

Questionário : Interface para preenchimento do questionário RED2GREEN.

### Usuários NIR:

Dashboard: Visão geral dos preceptores e seus respectivos pacientes, facilitando a coordenação.

Questionário : Interface para preenchimento do questionário RED2GREEN.

### Usuários Admin:

Dashboard Completo: Exibe uma visão centralizada de todos os usuários da aplicação, com informações detalhadas e ferramentas de gerenciamento.

### Arquitetura

O sistema inclui um backend para gerenciamento de dados, um frontend para interação com o usuário e uma infraestrutura DevOps para automação e deploy.

## Membros da Equipe

- André Luiz Alves Costa
- Riquelme Batista
- Thalys Vinícius Barbosa Gonzaga
- Jonas Lopes

## Cargos

- **PO:** Riquelme
- **SM:** Riquelme
- **Backend:** André,Jonas
- **Frontend:** Riquelme,Thalys
- **DevOps:** André
- **UI/UX:** Riquelme

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias para o desenvolvimento e operação do sistema:

### Backend

- **Linguagem:** [Node.js](https://nodejs.org/) (versão 22.14), TypeScript
- **Framework:** [Fastify](https://www.fastify.io/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/) (versão 17.4)
- **Testes:** [Jest](https://jestjs.io/)

### Frontend

- **Linguagem:** [Node.js](https://nodejs.org/) (versão 22.14), TypeScript
- **Biblioteca:** [React.js](https://reactjs.org/)
- **Estilo:** [Material UI](https://mui.com/), [Tailwind CSS](https://tailwindcss.com/)
- 

### DevOps

- **Servidor Web:** [Nginx](https://www.nginx.com/) (versão 1.27.4)
- **Contêineres:** [Docker](https://www.docker.com/) (versão 28.0.1), Docker Compose
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)
- **Hospedagem:** [VM Azure](https://azure.microsoft.com/) (Ubuntu 24.04)

## Estrutura do Projeto

- `/api`: Código do servidor backend, incluindo rotas, controladores e modelos.
- `/client`: Código da aplicação frontend, incluindo componentes React e estilos.
- `/`: Configurações de infraestrutura, como arquivos Docker e CI/CD.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter os seguintes itens instalados em sua máquina:

- [Docker](https://www.docker.com/) (versão 28.0.1 ou superior)
- [Docker Compose](https://docs.docker.com/compose/)

## Como Executar

Siga os passos abaixo para executar o projeto utilizando Docker:

1. **Clonar o Repositório**

   ```bash
   git clone https://github.com/Software-Engineering-UFMG/Software_Engineering_UFMG.git
   cd Software_Engineering_UFMG
   ```

2. **Configurar Variáveis de Ambiente**

   - Criar .env do docker compose na raiz do projeto com as variáveis:

   ```env
      DATABASE_CONTAINER_NAME=
      DATABASE_VERSION=
      DATABASE_PORT=
      DATABASE_NAME=
      DATABASE_USER=
      DATABASE_PASSWORD=

      API_CONTAINER_NAME=
      API_IMAGE_NAME=
      NODE_VERSION=
      API_PORT=
      ENVIRONMENT=
      SECRET_KEY=
      JWT_EXPIRATION=

      CLIENT_CONTAINER_NAME=
      CLIENT_IMAGE_NAME=
      CLIENT_PORT=

      NGINX_CONTAINER_NAME=
      NGINX_IMAGE_NAME=
      NGINX_VERSION=

      RESTART_POLICY=
   ```

3. **Construir e Iniciar os Contêineres**

   - Execute o comando abaixo para construir e iniciar os serviços:

   ```bash
   docker compose up --build -d
   ```

4. **Acessar Sistema**

   - O frontend estará disponível em: http://localhost:5000
   - O backend estará disponível em: http://localhost:5050

5. **Parar os Contêineres**

   - Para parar os serviços, execute

   ```bash
   docker compose down
   ```

6. **Acessar Sistema Hospedado**

   - O frontend estará disponível em:
     - http://135.234.180.253:5000
     - http://135.234.180.253:81
   - O backend estará disponível em: http://135.234.180.253:5050
   - O banco de dados estará disponível em: http://135.234.180.253:5432
