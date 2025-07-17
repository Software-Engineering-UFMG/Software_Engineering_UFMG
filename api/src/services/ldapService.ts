// @ts-ignore
declare module 'ldapjs';

import ldap from "ldapjs";

const {
  LDAP_URL,
  LDAP_BIND_DN,
  LDAP_BIND_PASSWORD,
  LDAP_BASE_DN,
  LDAP_IDENTIFYING_ATTRIBUTE,
} = process.env;

if (
  !LDAP_URL ||
  !LDAP_BIND_DN ||
  !LDAP_BIND_PASSWORD ||
  !LDAP_BASE_DN ||
  !LDAP_IDENTIFYING_ATTRIBUTE
) {
  throw new Error("Missing LDAP environment variables");
}

export async function checkUserInLdap(login: string, password: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const client = ldap.createClient({ url: LDAP_URL });

    // First bind as service user
    client.bind(LDAP_BIND_DN!, LDAP_BIND_PASSWORD!, (err: Error | null) => {
      if (err) {
        client.unbind();
        return reject(new Error("LDAP service bind failed"));
      }

      const opts = {
        filter: `(${LDAP_IDENTIFYING_ATTRIBUTE}=${login})`,
        scope: "sub",
        attributes: ["dn"],
      };

      client.search(LDAP_BASE_DN!, opts, (err: Error | null, res: any) => {
        if (err) {
          client.unbind();
          return reject(new Error("LDAP search failed"));
        }

        let userDN: string | null = null;

        res.on("searchEntry", (entry: any) => {
          userDN = entry.objectName;
        });

        res.on("error", (err: Error) => {
          client.unbind();
          reject(new Error("LDAP search error"));
        });

        res.on("end", async () => {
          if (!userDN) {
            client.unbind();
            return resolve(false); 
          }

          
          const userClient = ldap.createClient({ url: LDAP_URL });
          userClient.bind(userDN, password, (err: Error | null) => {
            userClient.unbind();
            client.unbind();
            if (err) {
              return resolve(false); 
            }
            return resolve(true); 
          });
        });
      });
    });
  });
}
