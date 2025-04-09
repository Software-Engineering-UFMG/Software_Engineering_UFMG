import { fastify } from "./src/app";
import { env } from "./src/config/env";

const port = env.API_PORT;

const start = async () => {
  try {
    await fastify.listen({ port, host: "0.0.0.0" });
    fastify.log.info(`Servidor rodando na porta ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
