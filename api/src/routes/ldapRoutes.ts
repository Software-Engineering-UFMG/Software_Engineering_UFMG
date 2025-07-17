import { FastifyInstance } from "fastify";
import { checkLdapUserHandler } from "../controllers/ldapController";

export const ldapRoutes = (app: FastifyInstance) => {
  app.post("/ldap/check-user", checkLdapUserHandler);
};
