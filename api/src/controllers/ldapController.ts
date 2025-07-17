import { FastifyRequest, FastifyReply } from "fastify";
import { checkUserInLdap } from "../services/ldapService";

export const checkLdapUserHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { login, password } = request.body as { login: string; password: string };
  if (!login || !password) {
    return reply.status(400).send({ message: "Missing login or password" });
  }
  try {
    const exists = await checkUserInLdap(login, password);
    if (exists) {
      return reply.send({ exists: true });
    } else {
      return reply.send({ exists: false });
    }
  } catch (error) {
    return reply.status(500).send({ message: "LDAP error" });
  }
};
