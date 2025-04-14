import "fastify";

declare module "fastify" {
  interface FastifyRequest {
    user?: {
      id: number;
      username: string;
      role: string;
    };
    cookies: Record<string, string>;
  }

  interface FastifyReply {
    clearCookie: (name: string, options?: Record<string, any>) => FastifyReply;
  }
}
