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
- **SM:** André
- **Backend:** Riquelme,André,Thalys e Jonas
- **Frontend:** Riquelme,André,Thalys e Jonas
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
- **Estilo:** [Material UI](https://mui.com/), [Styled Components](https://styled-components.com/)
- **Testes:** [React Testing Library](https://testing-library.com/), [Jest](https://jestjs.io/)

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
   git clone https://github.com/Riquelme3m/Software_Engineering_UFMG.git
   cd Software_Engineering_UFMG
   ```

2. **Configurar Variáveis de Ambiente**

   - Criar .env do docker compose na raiz do projeto.
   - Exemplo de `.env`:

   ```env
      DATABASE_CONTAINER_NAME=db_container
      DATABASE_VERSION=17.4-alpine
      DATABASE_PORT=5432
      DATABASE_NAME=db_red_2_green
      DATABASE_USER=db_user
      DATABASE_PASSWORD=123Seguro

      API_CONTAINER_NAME=api_container
      API_IMAGE_NAME=api_image
      NODE_VERSION=22.14-alpine
      API_PORT=5050
      ENVIRONMENT=development
      SECRET_KEY=3NG3NH4R14S0FTW4R3
      JWT_EXPIRATION=30d

      CLIENT_CONTAINER_NAME=client_container
      CLIENT_IMAGE_NAME=client_image
      CLIENT_PORT=5000

      NGINX_CONTAINER_NAME=nginx_container
      NGINX_IMAGE_NAME=nginx_image
      NGINX_VERSION=1.27.4-alpine

      RESTART_POLICY=no
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
