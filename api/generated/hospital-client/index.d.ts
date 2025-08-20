
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model rap_servidores
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type rap_servidores = $Result.DefaultSelection<Prisma.$rap_servidoresPayload>
/**
 * Model ain_internacoes
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ain_internacoes = $Result.DefaultSelection<Prisma.$ain_internacoesPayload>
/**
 * Model ain_leitos
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ain_leitos = $Result.DefaultSelection<Prisma.$ain_leitosPayload>
/**
 * Model aip_pacientes
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type aip_pacientes = $Result.DefaultSelection<Prisma.$aip_pacientesPayload>
/**
 * Model rap_pessoas_fisicas
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type rap_pessoas_fisicas = $Result.DefaultSelection<Prisma.$rap_pessoas_fisicasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Rap_servidores
 * const rap_servidores = await prisma.rap_servidores.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Rap_servidores
   * const rap_servidores = await prisma.rap_servidores.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.rap_servidores`: Exposes CRUD operations for the **rap_servidores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rap_servidores
    * const rap_servidores = await prisma.rap_servidores.findMany()
    * ```
    */
  get rap_servidores(): Prisma.rap_servidoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ain_internacoes`: Exposes CRUD operations for the **ain_internacoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ain_internacoes
    * const ain_internacoes = await prisma.ain_internacoes.findMany()
    * ```
    */
  get ain_internacoes(): Prisma.ain_internacoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ain_leitos`: Exposes CRUD operations for the **ain_leitos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ain_leitos
    * const ain_leitos = await prisma.ain_leitos.findMany()
    * ```
    */
  get ain_leitos(): Prisma.ain_leitosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aip_pacientes`: Exposes CRUD operations for the **aip_pacientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aip_pacientes
    * const aip_pacientes = await prisma.aip_pacientes.findMany()
    * ```
    */
  get aip_pacientes(): Prisma.aip_pacientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rap_pessoas_fisicas`: Exposes CRUD operations for the **rap_pessoas_fisicas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rap_pessoas_fisicas
    * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.findMany()
    * ```
    */
  get rap_pessoas_fisicas(): Prisma.rap_pessoas_fisicasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    rap_servidores: 'rap_servidores',
    ain_internacoes: 'ain_internacoes',
    ain_leitos: 'ain_leitos',
    aip_pacientes: 'aip_pacientes',
    rap_pessoas_fisicas: 'rap_pessoas_fisicas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    hospitalDb?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "rap_servidores" | "ain_internacoes" | "ain_leitos" | "aip_pacientes" | "rap_pessoas_fisicas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      rap_servidores: {
        payload: Prisma.$rap_servidoresPayload<ExtArgs>
        fields: Prisma.rap_servidoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rap_servidoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_servidoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rap_servidoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_servidoresPayload>
          }
          findFirst: {
            args: Prisma.rap_servidoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_servidoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rap_servidoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_servidoresPayload>
          }
          findMany: {
            args: Prisma.rap_servidoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_servidoresPayload>[]
          }
          create: {
            args: Prisma.rap_servidoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_servidoresPayload>
          }
          createMany: {
            args: Prisma.rap_servidoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rap_servidoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_servidoresPayload>[]
          }
          delete: {
            args: Prisma.rap_servidoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_servidoresPayload>
          }
          update: {
            args: Prisma.rap_servidoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_servidoresPayload>
          }
          deleteMany: {
            args: Prisma.rap_servidoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rap_servidoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rap_servidoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_servidoresPayload>[]
          }
          upsert: {
            args: Prisma.rap_servidoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_servidoresPayload>
          }
          aggregate: {
            args: Prisma.Rap_servidoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRap_servidores>
          }
          groupBy: {
            args: Prisma.rap_servidoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rap_servidoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.rap_servidoresCountArgs<ExtArgs>
            result: $Utils.Optional<Rap_servidoresCountAggregateOutputType> | number
          }
        }
      }
      ain_internacoes: {
        payload: Prisma.$ain_internacoesPayload<ExtArgs>
        fields: Prisma.ain_internacoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ain_internacoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_internacoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ain_internacoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_internacoesPayload>
          }
          findFirst: {
            args: Prisma.ain_internacoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_internacoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ain_internacoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_internacoesPayload>
          }
          findMany: {
            args: Prisma.ain_internacoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_internacoesPayload>[]
          }
          create: {
            args: Prisma.ain_internacoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_internacoesPayload>
          }
          createMany: {
            args: Prisma.ain_internacoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ain_internacoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_internacoesPayload>[]
          }
          delete: {
            args: Prisma.ain_internacoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_internacoesPayload>
          }
          update: {
            args: Prisma.ain_internacoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_internacoesPayload>
          }
          deleteMany: {
            args: Prisma.ain_internacoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ain_internacoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ain_internacoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_internacoesPayload>[]
          }
          upsert: {
            args: Prisma.ain_internacoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_internacoesPayload>
          }
          aggregate: {
            args: Prisma.Ain_internacoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAin_internacoes>
          }
          groupBy: {
            args: Prisma.ain_internacoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ain_internacoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ain_internacoesCountArgs<ExtArgs>
            result: $Utils.Optional<Ain_internacoesCountAggregateOutputType> | number
          }
        }
      }
      ain_leitos: {
        payload: Prisma.$ain_leitosPayload<ExtArgs>
        fields: Prisma.ain_leitosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ain_leitosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_leitosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ain_leitosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_leitosPayload>
          }
          findFirst: {
            args: Prisma.ain_leitosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_leitosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ain_leitosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_leitosPayload>
          }
          findMany: {
            args: Prisma.ain_leitosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_leitosPayload>[]
          }
          create: {
            args: Prisma.ain_leitosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_leitosPayload>
          }
          createMany: {
            args: Prisma.ain_leitosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ain_leitosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_leitosPayload>[]
          }
          delete: {
            args: Prisma.ain_leitosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_leitosPayload>
          }
          update: {
            args: Prisma.ain_leitosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_leitosPayload>
          }
          deleteMany: {
            args: Prisma.ain_leitosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ain_leitosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ain_leitosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_leitosPayload>[]
          }
          upsert: {
            args: Prisma.ain_leitosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ain_leitosPayload>
          }
          aggregate: {
            args: Prisma.Ain_leitosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAin_leitos>
          }
          groupBy: {
            args: Prisma.ain_leitosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ain_leitosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ain_leitosCountArgs<ExtArgs>
            result: $Utils.Optional<Ain_leitosCountAggregateOutputType> | number
          }
        }
      }
      aip_pacientes: {
        payload: Prisma.$aip_pacientesPayload<ExtArgs>
        fields: Prisma.aip_pacientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aip_pacientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aip_pacientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aip_pacientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aip_pacientesPayload>
          }
          findFirst: {
            args: Prisma.aip_pacientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aip_pacientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aip_pacientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aip_pacientesPayload>
          }
          findMany: {
            args: Prisma.aip_pacientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aip_pacientesPayload>[]
          }
          create: {
            args: Prisma.aip_pacientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aip_pacientesPayload>
          }
          createMany: {
            args: Prisma.aip_pacientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.aip_pacientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aip_pacientesPayload>[]
          }
          delete: {
            args: Prisma.aip_pacientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aip_pacientesPayload>
          }
          update: {
            args: Prisma.aip_pacientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aip_pacientesPayload>
          }
          deleteMany: {
            args: Prisma.aip_pacientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.aip_pacientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.aip_pacientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aip_pacientesPayload>[]
          }
          upsert: {
            args: Prisma.aip_pacientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aip_pacientesPayload>
          }
          aggregate: {
            args: Prisma.Aip_pacientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAip_pacientes>
          }
          groupBy: {
            args: Prisma.aip_pacientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Aip_pacientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.aip_pacientesCountArgs<ExtArgs>
            result: $Utils.Optional<Aip_pacientesCountAggregateOutputType> | number
          }
        }
      }
      rap_pessoas_fisicas: {
        payload: Prisma.$rap_pessoas_fisicasPayload<ExtArgs>
        fields: Prisma.rap_pessoas_fisicasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rap_pessoas_fisicasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_pessoas_fisicasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rap_pessoas_fisicasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_pessoas_fisicasPayload>
          }
          findFirst: {
            args: Prisma.rap_pessoas_fisicasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_pessoas_fisicasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rap_pessoas_fisicasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_pessoas_fisicasPayload>
          }
          findMany: {
            args: Prisma.rap_pessoas_fisicasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_pessoas_fisicasPayload>[]
          }
          create: {
            args: Prisma.rap_pessoas_fisicasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_pessoas_fisicasPayload>
          }
          createMany: {
            args: Prisma.rap_pessoas_fisicasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rap_pessoas_fisicasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_pessoas_fisicasPayload>[]
          }
          delete: {
            args: Prisma.rap_pessoas_fisicasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_pessoas_fisicasPayload>
          }
          update: {
            args: Prisma.rap_pessoas_fisicasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_pessoas_fisicasPayload>
          }
          deleteMany: {
            args: Prisma.rap_pessoas_fisicasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rap_pessoas_fisicasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rap_pessoas_fisicasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_pessoas_fisicasPayload>[]
          }
          upsert: {
            args: Prisma.rap_pessoas_fisicasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rap_pessoas_fisicasPayload>
          }
          aggregate: {
            args: Prisma.Rap_pessoas_fisicasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRap_pessoas_fisicas>
          }
          groupBy: {
            args: Prisma.rap_pessoas_fisicasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rap_pessoas_fisicasGroupByOutputType>[]
          }
          count: {
            args: Prisma.rap_pessoas_fisicasCountArgs<ExtArgs>
            result: $Utils.Optional<Rap_pessoas_fisicasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    rap_servidores?: rap_servidoresOmit
    ain_internacoes?: ain_internacoesOmit
    ain_leitos?: ain_leitosOmit
    aip_pacientes?: aip_pacientesOmit
    rap_pessoas_fisicas?: rap_pessoas_fisicasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model rap_servidores
   */

  export type AggregateRap_servidores = {
    _count: Rap_servidoresCountAggregateOutputType | null
    _avg: Rap_servidoresAvgAggregateOutputType | null
    _sum: Rap_servidoresSumAggregateOutputType | null
    _min: Rap_servidoresMinAggregateOutputType | null
    _max: Rap_servidoresMaxAggregateOutputType | null
  }

  export type Rap_servidoresAvgAggregateOutputType = {
    matricula: number | null
    vin_codigo: number | null
    cct_codigo: number | null
    oca_codigo: number | null
    pes_codigo: number | null
    htr_codigo: number | null
    cct_codigo_atua: number | null
    grf_codigo: number | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    ram_nro_ramal: number | null
    carga_horaria: number | null
    cod_starh: number | null
    cct_codigo_desempenho: number | null
    version: number | null
    unf_seq_lotacao: number | null
  }

  export type Rap_servidoresSumAggregateOutputType = {
    matricula: number | null
    vin_codigo: number | null
    cct_codigo: number | null
    oca_codigo: number | null
    pes_codigo: number | null
    htr_codigo: number | null
    cct_codigo_atua: number | null
    grf_codigo: number | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    ram_nro_ramal: number | null
    carga_horaria: number | null
    cod_starh: number | null
    cct_codigo_desempenho: number | null
    version: number | null
    unf_seq_lotacao: number | null
  }

  export type Rap_servidoresMinAggregateOutputType = {
    matricula: number | null
    vin_codigo: number | null
    cct_codigo: number | null
    oca_car_codigo: string | null
    oca_codigo: number | null
    pes_codigo: number | null
    dt_inicio_vinculo: Date | null
    htr_codigo: number | null
    cct_codigo_atua: number | null
    dt_fim_vinculo: Date | null
    usuario: string | null
    email: string | null
    grf_codigo: number | null
    ind_situacao: string | null
    alterado_em: Date | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    ram_nro_ramal: number | null
    tipo_remuneracao: string | null
    carga_horaria: number | null
    horario_padrao: string | null
    cod_starh: number | null
    cct_codigo_desempenho: number | null
    version: number | null
    ind_situacao_servidor: string | null
    unf_seq_lotacao: number | null
  }

  export type Rap_servidoresMaxAggregateOutputType = {
    matricula: number | null
    vin_codigo: number | null
    cct_codigo: number | null
    oca_car_codigo: string | null
    oca_codigo: number | null
    pes_codigo: number | null
    dt_inicio_vinculo: Date | null
    htr_codigo: number | null
    cct_codigo_atua: number | null
    dt_fim_vinculo: Date | null
    usuario: string | null
    email: string | null
    grf_codigo: number | null
    ind_situacao: string | null
    alterado_em: Date | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    ram_nro_ramal: number | null
    tipo_remuneracao: string | null
    carga_horaria: number | null
    horario_padrao: string | null
    cod_starh: number | null
    cct_codigo_desempenho: number | null
    version: number | null
    ind_situacao_servidor: string | null
    unf_seq_lotacao: number | null
  }

  export type Rap_servidoresCountAggregateOutputType = {
    matricula: number
    vin_codigo: number
    cct_codigo: number
    oca_car_codigo: number
    oca_codigo: number
    pes_codigo: number
    dt_inicio_vinculo: number
    htr_codigo: number
    cct_codigo_atua: number
    dt_fim_vinculo: number
    usuario: number
    email: number
    grf_codigo: number
    ind_situacao: number
    alterado_em: number
    ser_matricula: number
    ser_vin_codigo: number
    ram_nro_ramal: number
    tipo_remuneracao: number
    carga_horaria: number
    horario_padrao: number
    cod_starh: number
    cct_codigo_desempenho: number
    version: number
    ind_situacao_servidor: number
    unf_seq_lotacao: number
    _all: number
  }


  export type Rap_servidoresAvgAggregateInputType = {
    matricula?: true
    vin_codigo?: true
    cct_codigo?: true
    oca_codigo?: true
    pes_codigo?: true
    htr_codigo?: true
    cct_codigo_atua?: true
    grf_codigo?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    ram_nro_ramal?: true
    carga_horaria?: true
    cod_starh?: true
    cct_codigo_desempenho?: true
    version?: true
    unf_seq_lotacao?: true
  }

  export type Rap_servidoresSumAggregateInputType = {
    matricula?: true
    vin_codigo?: true
    cct_codigo?: true
    oca_codigo?: true
    pes_codigo?: true
    htr_codigo?: true
    cct_codigo_atua?: true
    grf_codigo?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    ram_nro_ramal?: true
    carga_horaria?: true
    cod_starh?: true
    cct_codigo_desempenho?: true
    version?: true
    unf_seq_lotacao?: true
  }

  export type Rap_servidoresMinAggregateInputType = {
    matricula?: true
    vin_codigo?: true
    cct_codigo?: true
    oca_car_codigo?: true
    oca_codigo?: true
    pes_codigo?: true
    dt_inicio_vinculo?: true
    htr_codigo?: true
    cct_codigo_atua?: true
    dt_fim_vinculo?: true
    usuario?: true
    email?: true
    grf_codigo?: true
    ind_situacao?: true
    alterado_em?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    ram_nro_ramal?: true
    tipo_remuneracao?: true
    carga_horaria?: true
    horario_padrao?: true
    cod_starh?: true
    cct_codigo_desempenho?: true
    version?: true
    ind_situacao_servidor?: true
    unf_seq_lotacao?: true
  }

  export type Rap_servidoresMaxAggregateInputType = {
    matricula?: true
    vin_codigo?: true
    cct_codigo?: true
    oca_car_codigo?: true
    oca_codigo?: true
    pes_codigo?: true
    dt_inicio_vinculo?: true
    htr_codigo?: true
    cct_codigo_atua?: true
    dt_fim_vinculo?: true
    usuario?: true
    email?: true
    grf_codigo?: true
    ind_situacao?: true
    alterado_em?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    ram_nro_ramal?: true
    tipo_remuneracao?: true
    carga_horaria?: true
    horario_padrao?: true
    cod_starh?: true
    cct_codigo_desempenho?: true
    version?: true
    ind_situacao_servidor?: true
    unf_seq_lotacao?: true
  }

  export type Rap_servidoresCountAggregateInputType = {
    matricula?: true
    vin_codigo?: true
    cct_codigo?: true
    oca_car_codigo?: true
    oca_codigo?: true
    pes_codigo?: true
    dt_inicio_vinculo?: true
    htr_codigo?: true
    cct_codigo_atua?: true
    dt_fim_vinculo?: true
    usuario?: true
    email?: true
    grf_codigo?: true
    ind_situacao?: true
    alterado_em?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    ram_nro_ramal?: true
    tipo_remuneracao?: true
    carga_horaria?: true
    horario_padrao?: true
    cod_starh?: true
    cct_codigo_desempenho?: true
    version?: true
    ind_situacao_servidor?: true
    unf_seq_lotacao?: true
    _all?: true
  }

  export type Rap_servidoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rap_servidores to aggregate.
     */
    where?: rap_servidoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rap_servidores to fetch.
     */
    orderBy?: rap_servidoresOrderByWithRelationInput | rap_servidoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rap_servidoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rap_servidores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rap_servidores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rap_servidores
    **/
    _count?: true | Rap_servidoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rap_servidoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rap_servidoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rap_servidoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rap_servidoresMaxAggregateInputType
  }

  export type GetRap_servidoresAggregateType<T extends Rap_servidoresAggregateArgs> = {
        [P in keyof T & keyof AggregateRap_servidores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRap_servidores[P]>
      : GetScalarType<T[P], AggregateRap_servidores[P]>
  }




  export type rap_servidoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rap_servidoresWhereInput
    orderBy?: rap_servidoresOrderByWithAggregationInput | rap_servidoresOrderByWithAggregationInput[]
    by: Rap_servidoresScalarFieldEnum[] | Rap_servidoresScalarFieldEnum
    having?: rap_servidoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rap_servidoresCountAggregateInputType | true
    _avg?: Rap_servidoresAvgAggregateInputType
    _sum?: Rap_servidoresSumAggregateInputType
    _min?: Rap_servidoresMinAggregateInputType
    _max?: Rap_servidoresMaxAggregateInputType
  }

  export type Rap_servidoresGroupByOutputType = {
    matricula: number
    vin_codigo: number
    cct_codigo: number | null
    oca_car_codigo: string | null
    oca_codigo: number | null
    pes_codigo: number
    dt_inicio_vinculo: Date
    htr_codigo: number | null
    cct_codigo_atua: number | null
    dt_fim_vinculo: Date | null
    usuario: string | null
    email: string | null
    grf_codigo: number | null
    ind_situacao: string | null
    alterado_em: Date | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    ram_nro_ramal: number | null
    tipo_remuneracao: string | null
    carga_horaria: number | null
    horario_padrao: string | null
    cod_starh: number | null
    cct_codigo_desempenho: number | null
    version: number | null
    ind_situacao_servidor: string | null
    unf_seq_lotacao: number | null
    _count: Rap_servidoresCountAggregateOutputType | null
    _avg: Rap_servidoresAvgAggregateOutputType | null
    _sum: Rap_servidoresSumAggregateOutputType | null
    _min: Rap_servidoresMinAggregateOutputType | null
    _max: Rap_servidoresMaxAggregateOutputType | null
  }

  type GetRap_servidoresGroupByPayload<T extends rap_servidoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rap_servidoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rap_servidoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rap_servidoresGroupByOutputType[P]>
            : GetScalarType<T[P], Rap_servidoresGroupByOutputType[P]>
        }
      >
    >


  export type rap_servidoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matricula?: boolean
    vin_codigo?: boolean
    cct_codigo?: boolean
    oca_car_codigo?: boolean
    oca_codigo?: boolean
    pes_codigo?: boolean
    dt_inicio_vinculo?: boolean
    htr_codigo?: boolean
    cct_codigo_atua?: boolean
    dt_fim_vinculo?: boolean
    usuario?: boolean
    email?: boolean
    grf_codigo?: boolean
    ind_situacao?: boolean
    alterado_em?: boolean
    ser_matricula?: boolean
    ser_vin_codigo?: boolean
    ram_nro_ramal?: boolean
    tipo_remuneracao?: boolean
    carga_horaria?: boolean
    horario_padrao?: boolean
    cod_starh?: boolean
    cct_codigo_desempenho?: boolean
    version?: boolean
    ind_situacao_servidor?: boolean
    unf_seq_lotacao?: boolean
  }, ExtArgs["result"]["rap_servidores"]>

  export type rap_servidoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matricula?: boolean
    vin_codigo?: boolean
    cct_codigo?: boolean
    oca_car_codigo?: boolean
    oca_codigo?: boolean
    pes_codigo?: boolean
    dt_inicio_vinculo?: boolean
    htr_codigo?: boolean
    cct_codigo_atua?: boolean
    dt_fim_vinculo?: boolean
    usuario?: boolean
    email?: boolean
    grf_codigo?: boolean
    ind_situacao?: boolean
    alterado_em?: boolean
    ser_matricula?: boolean
    ser_vin_codigo?: boolean
    ram_nro_ramal?: boolean
    tipo_remuneracao?: boolean
    carga_horaria?: boolean
    horario_padrao?: boolean
    cod_starh?: boolean
    cct_codigo_desempenho?: boolean
    version?: boolean
    ind_situacao_servidor?: boolean
    unf_seq_lotacao?: boolean
  }, ExtArgs["result"]["rap_servidores"]>

  export type rap_servidoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matricula?: boolean
    vin_codigo?: boolean
    cct_codigo?: boolean
    oca_car_codigo?: boolean
    oca_codigo?: boolean
    pes_codigo?: boolean
    dt_inicio_vinculo?: boolean
    htr_codigo?: boolean
    cct_codigo_atua?: boolean
    dt_fim_vinculo?: boolean
    usuario?: boolean
    email?: boolean
    grf_codigo?: boolean
    ind_situacao?: boolean
    alterado_em?: boolean
    ser_matricula?: boolean
    ser_vin_codigo?: boolean
    ram_nro_ramal?: boolean
    tipo_remuneracao?: boolean
    carga_horaria?: boolean
    horario_padrao?: boolean
    cod_starh?: boolean
    cct_codigo_desempenho?: boolean
    version?: boolean
    ind_situacao_servidor?: boolean
    unf_seq_lotacao?: boolean
  }, ExtArgs["result"]["rap_servidores"]>

  export type rap_servidoresSelectScalar = {
    matricula?: boolean
    vin_codigo?: boolean
    cct_codigo?: boolean
    oca_car_codigo?: boolean
    oca_codigo?: boolean
    pes_codigo?: boolean
    dt_inicio_vinculo?: boolean
    htr_codigo?: boolean
    cct_codigo_atua?: boolean
    dt_fim_vinculo?: boolean
    usuario?: boolean
    email?: boolean
    grf_codigo?: boolean
    ind_situacao?: boolean
    alterado_em?: boolean
    ser_matricula?: boolean
    ser_vin_codigo?: boolean
    ram_nro_ramal?: boolean
    tipo_remuneracao?: boolean
    carga_horaria?: boolean
    horario_padrao?: boolean
    cod_starh?: boolean
    cct_codigo_desempenho?: boolean
    version?: boolean
    ind_situacao_servidor?: boolean
    unf_seq_lotacao?: boolean
  }

  export type rap_servidoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"matricula" | "vin_codigo" | "cct_codigo" | "oca_car_codigo" | "oca_codigo" | "pes_codigo" | "dt_inicio_vinculo" | "htr_codigo" | "cct_codigo_atua" | "dt_fim_vinculo" | "usuario" | "email" | "grf_codigo" | "ind_situacao" | "alterado_em" | "ser_matricula" | "ser_vin_codigo" | "ram_nro_ramal" | "tipo_remuneracao" | "carga_horaria" | "horario_padrao" | "cod_starh" | "cct_codigo_desempenho" | "version" | "ind_situacao_servidor" | "unf_seq_lotacao", ExtArgs["result"]["rap_servidores"]>

  export type $rap_servidoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rap_servidores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      matricula: number
      vin_codigo: number
      cct_codigo: number | null
      oca_car_codigo: string | null
      oca_codigo: number | null
      pes_codigo: number
      dt_inicio_vinculo: Date
      htr_codigo: number | null
      cct_codigo_atua: number | null
      dt_fim_vinculo: Date | null
      usuario: string | null
      email: string | null
      grf_codigo: number | null
      ind_situacao: string | null
      alterado_em: Date | null
      ser_matricula: number | null
      ser_vin_codigo: number | null
      ram_nro_ramal: number | null
      tipo_remuneracao: string | null
      carga_horaria: number | null
      horario_padrao: string | null
      cod_starh: number | null
      cct_codigo_desempenho: number | null
      version: number | null
      ind_situacao_servidor: string | null
      unf_seq_lotacao: number | null
    }, ExtArgs["result"]["rap_servidores"]>
    composites: {}
  }

  type rap_servidoresGetPayload<S extends boolean | null | undefined | rap_servidoresDefaultArgs> = $Result.GetResult<Prisma.$rap_servidoresPayload, S>

  type rap_servidoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rap_servidoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rap_servidoresCountAggregateInputType | true
    }

  export interface rap_servidoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rap_servidores'], meta: { name: 'rap_servidores' } }
    /**
     * Find zero or one Rap_servidores that matches the filter.
     * @param {rap_servidoresFindUniqueArgs} args - Arguments to find a Rap_servidores
     * @example
     * // Get one Rap_servidores
     * const rap_servidores = await prisma.rap_servidores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rap_servidoresFindUniqueArgs>(args: SelectSubset<T, rap_servidoresFindUniqueArgs<ExtArgs>>): Prisma__rap_servidoresClient<$Result.GetResult<Prisma.$rap_servidoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rap_servidores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rap_servidoresFindUniqueOrThrowArgs} args - Arguments to find a Rap_servidores
     * @example
     * // Get one Rap_servidores
     * const rap_servidores = await prisma.rap_servidores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rap_servidoresFindUniqueOrThrowArgs>(args: SelectSubset<T, rap_servidoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rap_servidoresClient<$Result.GetResult<Prisma.$rap_servidoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rap_servidores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_servidoresFindFirstArgs} args - Arguments to find a Rap_servidores
     * @example
     * // Get one Rap_servidores
     * const rap_servidores = await prisma.rap_servidores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rap_servidoresFindFirstArgs>(args?: SelectSubset<T, rap_servidoresFindFirstArgs<ExtArgs>>): Prisma__rap_servidoresClient<$Result.GetResult<Prisma.$rap_servidoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rap_servidores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_servidoresFindFirstOrThrowArgs} args - Arguments to find a Rap_servidores
     * @example
     * // Get one Rap_servidores
     * const rap_servidores = await prisma.rap_servidores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rap_servidoresFindFirstOrThrowArgs>(args?: SelectSubset<T, rap_servidoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__rap_servidoresClient<$Result.GetResult<Prisma.$rap_servidoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rap_servidores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_servidoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rap_servidores
     * const rap_servidores = await prisma.rap_servidores.findMany()
     * 
     * // Get first 10 Rap_servidores
     * const rap_servidores = await prisma.rap_servidores.findMany({ take: 10 })
     * 
     * // Only select the `matricula`
     * const rap_servidoresWithMatriculaOnly = await prisma.rap_servidores.findMany({ select: { matricula: true } })
     * 
     */
    findMany<T extends rap_servidoresFindManyArgs>(args?: SelectSubset<T, rap_servidoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rap_servidoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rap_servidores.
     * @param {rap_servidoresCreateArgs} args - Arguments to create a Rap_servidores.
     * @example
     * // Create one Rap_servidores
     * const Rap_servidores = await prisma.rap_servidores.create({
     *   data: {
     *     // ... data to create a Rap_servidores
     *   }
     * })
     * 
     */
    create<T extends rap_servidoresCreateArgs>(args: SelectSubset<T, rap_servidoresCreateArgs<ExtArgs>>): Prisma__rap_servidoresClient<$Result.GetResult<Prisma.$rap_servidoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rap_servidores.
     * @param {rap_servidoresCreateManyArgs} args - Arguments to create many Rap_servidores.
     * @example
     * // Create many Rap_servidores
     * const rap_servidores = await prisma.rap_servidores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rap_servidoresCreateManyArgs>(args?: SelectSubset<T, rap_servidoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rap_servidores and returns the data saved in the database.
     * @param {rap_servidoresCreateManyAndReturnArgs} args - Arguments to create many Rap_servidores.
     * @example
     * // Create many Rap_servidores
     * const rap_servidores = await prisma.rap_servidores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rap_servidores and only return the `matricula`
     * const rap_servidoresWithMatriculaOnly = await prisma.rap_servidores.createManyAndReturn({
     *   select: { matricula: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rap_servidoresCreateManyAndReturnArgs>(args?: SelectSubset<T, rap_servidoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rap_servidoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rap_servidores.
     * @param {rap_servidoresDeleteArgs} args - Arguments to delete one Rap_servidores.
     * @example
     * // Delete one Rap_servidores
     * const Rap_servidores = await prisma.rap_servidores.delete({
     *   where: {
     *     // ... filter to delete one Rap_servidores
     *   }
     * })
     * 
     */
    delete<T extends rap_servidoresDeleteArgs>(args: SelectSubset<T, rap_servidoresDeleteArgs<ExtArgs>>): Prisma__rap_servidoresClient<$Result.GetResult<Prisma.$rap_servidoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rap_servidores.
     * @param {rap_servidoresUpdateArgs} args - Arguments to update one Rap_servidores.
     * @example
     * // Update one Rap_servidores
     * const rap_servidores = await prisma.rap_servidores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rap_servidoresUpdateArgs>(args: SelectSubset<T, rap_servidoresUpdateArgs<ExtArgs>>): Prisma__rap_servidoresClient<$Result.GetResult<Prisma.$rap_servidoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rap_servidores.
     * @param {rap_servidoresDeleteManyArgs} args - Arguments to filter Rap_servidores to delete.
     * @example
     * // Delete a few Rap_servidores
     * const { count } = await prisma.rap_servidores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rap_servidoresDeleteManyArgs>(args?: SelectSubset<T, rap_servidoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rap_servidores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_servidoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rap_servidores
     * const rap_servidores = await prisma.rap_servidores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rap_servidoresUpdateManyArgs>(args: SelectSubset<T, rap_servidoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rap_servidores and returns the data updated in the database.
     * @param {rap_servidoresUpdateManyAndReturnArgs} args - Arguments to update many Rap_servidores.
     * @example
     * // Update many Rap_servidores
     * const rap_servidores = await prisma.rap_servidores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rap_servidores and only return the `matricula`
     * const rap_servidoresWithMatriculaOnly = await prisma.rap_servidores.updateManyAndReturn({
     *   select: { matricula: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rap_servidoresUpdateManyAndReturnArgs>(args: SelectSubset<T, rap_servidoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rap_servidoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rap_servidores.
     * @param {rap_servidoresUpsertArgs} args - Arguments to update or create a Rap_servidores.
     * @example
     * // Update or create a Rap_servidores
     * const rap_servidores = await prisma.rap_servidores.upsert({
     *   create: {
     *     // ... data to create a Rap_servidores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rap_servidores we want to update
     *   }
     * })
     */
    upsert<T extends rap_servidoresUpsertArgs>(args: SelectSubset<T, rap_servidoresUpsertArgs<ExtArgs>>): Prisma__rap_servidoresClient<$Result.GetResult<Prisma.$rap_servidoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rap_servidores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_servidoresCountArgs} args - Arguments to filter Rap_servidores to count.
     * @example
     * // Count the number of Rap_servidores
     * const count = await prisma.rap_servidores.count({
     *   where: {
     *     // ... the filter for the Rap_servidores we want to count
     *   }
     * })
    **/
    count<T extends rap_servidoresCountArgs>(
      args?: Subset<T, rap_servidoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rap_servidoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rap_servidores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rap_servidoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rap_servidoresAggregateArgs>(args: Subset<T, Rap_servidoresAggregateArgs>): Prisma.PrismaPromise<GetRap_servidoresAggregateType<T>>

    /**
     * Group by Rap_servidores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_servidoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rap_servidoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rap_servidoresGroupByArgs['orderBy'] }
        : { orderBy?: rap_servidoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rap_servidoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRap_servidoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rap_servidores model
   */
  readonly fields: rap_servidoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rap_servidores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rap_servidoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rap_servidores model
   */
  interface rap_servidoresFieldRefs {
    readonly matricula: FieldRef<"rap_servidores", 'Int'>
    readonly vin_codigo: FieldRef<"rap_servidores", 'Int'>
    readonly cct_codigo: FieldRef<"rap_servidores", 'Int'>
    readonly oca_car_codigo: FieldRef<"rap_servidores", 'String'>
    readonly oca_codigo: FieldRef<"rap_servidores", 'Int'>
    readonly pes_codigo: FieldRef<"rap_servidores", 'Int'>
    readonly dt_inicio_vinculo: FieldRef<"rap_servidores", 'DateTime'>
    readonly htr_codigo: FieldRef<"rap_servidores", 'Int'>
    readonly cct_codigo_atua: FieldRef<"rap_servidores", 'Int'>
    readonly dt_fim_vinculo: FieldRef<"rap_servidores", 'DateTime'>
    readonly usuario: FieldRef<"rap_servidores", 'String'>
    readonly email: FieldRef<"rap_servidores", 'String'>
    readonly grf_codigo: FieldRef<"rap_servidores", 'Int'>
    readonly ind_situacao: FieldRef<"rap_servidores", 'String'>
    readonly alterado_em: FieldRef<"rap_servidores", 'DateTime'>
    readonly ser_matricula: FieldRef<"rap_servidores", 'Int'>
    readonly ser_vin_codigo: FieldRef<"rap_servidores", 'Int'>
    readonly ram_nro_ramal: FieldRef<"rap_servidores", 'Int'>
    readonly tipo_remuneracao: FieldRef<"rap_servidores", 'String'>
    readonly carga_horaria: FieldRef<"rap_servidores", 'Int'>
    readonly horario_padrao: FieldRef<"rap_servidores", 'String'>
    readonly cod_starh: FieldRef<"rap_servidores", 'Int'>
    readonly cct_codigo_desempenho: FieldRef<"rap_servidores", 'Int'>
    readonly version: FieldRef<"rap_servidores", 'Int'>
    readonly ind_situacao_servidor: FieldRef<"rap_servidores", 'String'>
    readonly unf_seq_lotacao: FieldRef<"rap_servidores", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * rap_servidores findUnique
   */
  export type rap_servidoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_servidores
     */
    select?: rap_servidoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_servidores
     */
    omit?: rap_servidoresOmit<ExtArgs> | null
    /**
     * Filter, which rap_servidores to fetch.
     */
    where: rap_servidoresWhereUniqueInput
  }

  /**
   * rap_servidores findUniqueOrThrow
   */
  export type rap_servidoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_servidores
     */
    select?: rap_servidoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_servidores
     */
    omit?: rap_servidoresOmit<ExtArgs> | null
    /**
     * Filter, which rap_servidores to fetch.
     */
    where: rap_servidoresWhereUniqueInput
  }

  /**
   * rap_servidores findFirst
   */
  export type rap_servidoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_servidores
     */
    select?: rap_servidoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_servidores
     */
    omit?: rap_servidoresOmit<ExtArgs> | null
    /**
     * Filter, which rap_servidores to fetch.
     */
    where?: rap_servidoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rap_servidores to fetch.
     */
    orderBy?: rap_servidoresOrderByWithRelationInput | rap_servidoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rap_servidores.
     */
    cursor?: rap_servidoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rap_servidores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rap_servidores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rap_servidores.
     */
    distinct?: Rap_servidoresScalarFieldEnum | Rap_servidoresScalarFieldEnum[]
  }

  /**
   * rap_servidores findFirstOrThrow
   */
  export type rap_servidoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_servidores
     */
    select?: rap_servidoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_servidores
     */
    omit?: rap_servidoresOmit<ExtArgs> | null
    /**
     * Filter, which rap_servidores to fetch.
     */
    where?: rap_servidoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rap_servidores to fetch.
     */
    orderBy?: rap_servidoresOrderByWithRelationInput | rap_servidoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rap_servidores.
     */
    cursor?: rap_servidoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rap_servidores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rap_servidores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rap_servidores.
     */
    distinct?: Rap_servidoresScalarFieldEnum | Rap_servidoresScalarFieldEnum[]
  }

  /**
   * rap_servidores findMany
   */
  export type rap_servidoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_servidores
     */
    select?: rap_servidoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_servidores
     */
    omit?: rap_servidoresOmit<ExtArgs> | null
    /**
     * Filter, which rap_servidores to fetch.
     */
    where?: rap_servidoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rap_servidores to fetch.
     */
    orderBy?: rap_servidoresOrderByWithRelationInput | rap_servidoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rap_servidores.
     */
    cursor?: rap_servidoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rap_servidores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rap_servidores.
     */
    skip?: number
    distinct?: Rap_servidoresScalarFieldEnum | Rap_servidoresScalarFieldEnum[]
  }

  /**
   * rap_servidores create
   */
  export type rap_servidoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_servidores
     */
    select?: rap_servidoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_servidores
     */
    omit?: rap_servidoresOmit<ExtArgs> | null
    /**
     * The data needed to create a rap_servidores.
     */
    data: XOR<rap_servidoresCreateInput, rap_servidoresUncheckedCreateInput>
  }

  /**
   * rap_servidores createMany
   */
  export type rap_servidoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rap_servidores.
     */
    data: rap_servidoresCreateManyInput | rap_servidoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rap_servidores createManyAndReturn
   */
  export type rap_servidoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_servidores
     */
    select?: rap_servidoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rap_servidores
     */
    omit?: rap_servidoresOmit<ExtArgs> | null
    /**
     * The data used to create many rap_servidores.
     */
    data: rap_servidoresCreateManyInput | rap_servidoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rap_servidores update
   */
  export type rap_servidoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_servidores
     */
    select?: rap_servidoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_servidores
     */
    omit?: rap_servidoresOmit<ExtArgs> | null
    /**
     * The data needed to update a rap_servidores.
     */
    data: XOR<rap_servidoresUpdateInput, rap_servidoresUncheckedUpdateInput>
    /**
     * Choose, which rap_servidores to update.
     */
    where: rap_servidoresWhereUniqueInput
  }

  /**
   * rap_servidores updateMany
   */
  export type rap_servidoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rap_servidores.
     */
    data: XOR<rap_servidoresUpdateManyMutationInput, rap_servidoresUncheckedUpdateManyInput>
    /**
     * Filter which rap_servidores to update
     */
    where?: rap_servidoresWhereInput
    /**
     * Limit how many rap_servidores to update.
     */
    limit?: number
  }

  /**
   * rap_servidores updateManyAndReturn
   */
  export type rap_servidoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_servidores
     */
    select?: rap_servidoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rap_servidores
     */
    omit?: rap_servidoresOmit<ExtArgs> | null
    /**
     * The data used to update rap_servidores.
     */
    data: XOR<rap_servidoresUpdateManyMutationInput, rap_servidoresUncheckedUpdateManyInput>
    /**
     * Filter which rap_servidores to update
     */
    where?: rap_servidoresWhereInput
    /**
     * Limit how many rap_servidores to update.
     */
    limit?: number
  }

  /**
   * rap_servidores upsert
   */
  export type rap_servidoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_servidores
     */
    select?: rap_servidoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_servidores
     */
    omit?: rap_servidoresOmit<ExtArgs> | null
    /**
     * The filter to search for the rap_servidores to update in case it exists.
     */
    where: rap_servidoresWhereUniqueInput
    /**
     * In case the rap_servidores found by the `where` argument doesn't exist, create a new rap_servidores with this data.
     */
    create: XOR<rap_servidoresCreateInput, rap_servidoresUncheckedCreateInput>
    /**
     * In case the rap_servidores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rap_servidoresUpdateInput, rap_servidoresUncheckedUpdateInput>
  }

  /**
   * rap_servidores delete
   */
  export type rap_servidoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_servidores
     */
    select?: rap_servidoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_servidores
     */
    omit?: rap_servidoresOmit<ExtArgs> | null
    /**
     * Filter which rap_servidores to delete.
     */
    where: rap_servidoresWhereUniqueInput
  }

  /**
   * rap_servidores deleteMany
   */
  export type rap_servidoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rap_servidores to delete
     */
    where?: rap_servidoresWhereInput
    /**
     * Limit how many rap_servidores to delete.
     */
    limit?: number
  }

  /**
   * rap_servidores without action
   */
  export type rap_servidoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_servidores
     */
    select?: rap_servidoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_servidores
     */
    omit?: rap_servidoresOmit<ExtArgs> | null
  }


  /**
   * Model ain_internacoes
   */

  export type AggregateAin_internacoes = {
    _count: Ain_internacoesCountAggregateOutputType | null
    _avg: Ain_internacoesAvgAggregateOutputType | null
    _sum: Ain_internacoesSumAggregateOutputType | null
    _min: Ain_internacoesMinAggregateOutputType | null
    _max: Ain_internacoesMaxAggregateOutputType | null
  }

  export type Ain_internacoesAvgAggregateOutputType = {
    seq: number | null
    pac_codigo: number | null
    esp_seq: number | null
    ser_matricula_digita: number | null
    ser_vin_codigo_digita: number | null
    ser_matricula_professor: number | null
    ser_vin_codigo_professor: number | null
    tci_seq: number | null
    csp_cnv_codigo: number | null
    csp_seq: number | null
    oev_seq: number | null
    qrt_numero: number | null
    unf_seq: number | null
    atu_seq: number | null
    iho_seq_origem: number | null
    iho_seq_transferencia: number | null
    iph_seq: number | null
    iph_pho_seq: number | null
    doc_obito: number | null
    pjq_seq: number | null
    apo_seq: number | null
    version: number | null
    seq_medico_externo: number | null
  }

  export type Ain_internacoesSumAggregateOutputType = {
    seq: number | null
    pac_codigo: number | null
    esp_seq: number | null
    ser_matricula_digita: number | null
    ser_vin_codigo_digita: number | null
    ser_matricula_professor: number | null
    ser_vin_codigo_professor: number | null
    tci_seq: number | null
    csp_cnv_codigo: number | null
    csp_seq: number | null
    oev_seq: number | null
    qrt_numero: number | null
    unf_seq: number | null
    atu_seq: number | null
    iho_seq_origem: number | null
    iho_seq_transferencia: number | null
    iph_seq: number | null
    iph_pho_seq: number | null
    doc_obito: bigint | null
    pjq_seq: number | null
    apo_seq: number | null
    version: number | null
    seq_medico_externo: number | null
  }

  export type Ain_internacoesMinAggregateOutputType = {
    seq: number | null
    pac_codigo: number | null
    esp_seq: number | null
    ser_matricula_digita: number | null
    ser_vin_codigo_digita: number | null
    ser_matricula_professor: number | null
    ser_vin_codigo_professor: number | null
    dthr_internacao: Date | null
    env_pront_unid_int: string | null
    tci_seq: number | null
    csp_cnv_codigo: number | null
    csp_seq: number | null
    oev_seq: number | null
    ind_saida_pac: string | null
    ind_dif_classe: string | null
    ind_paciente_internado: string | null
    ind_local_paciente: string | null
    lto_lto_id: string | null
    qrt_numero: number | null
    unf_seq: number | null
    tam_codigo: string | null
    atu_seq: number | null
    dt_prev_alta: Date | null
    dthr_alta_medica: Date | null
    dt_saida_paciente: Date | null
    iho_seq_origem: number | null
    iho_seq_transferencia: number | null
    justificativa_alt_del: string | null
    dthr_primeiro_evento: Date | null
    dthr_ultimo_evento: Date | null
    iph_seq: number | null
    iph_pho_seq: number | null
    ind_alta_manual: string | null
    prontuario_legal: string | null
    doc_obito: bigint | null
    pjq_seq: number | null
    ind_cons_marcada: string | null
    apo_seq: number | null
    dthr_aviso_samis: Date | null
    dthr_prontuario_buscado: Date | null
    version: number | null
    seq_medico_externo: number | null
    proc_internacao_paciente: string | null
    local_atendimento_paciente: string | null
    mod_assistencial: string | null
  }

  export type Ain_internacoesMaxAggregateOutputType = {
    seq: number | null
    pac_codigo: number | null
    esp_seq: number | null
    ser_matricula_digita: number | null
    ser_vin_codigo_digita: number | null
    ser_matricula_professor: number | null
    ser_vin_codigo_professor: number | null
    dthr_internacao: Date | null
    env_pront_unid_int: string | null
    tci_seq: number | null
    csp_cnv_codigo: number | null
    csp_seq: number | null
    oev_seq: number | null
    ind_saida_pac: string | null
    ind_dif_classe: string | null
    ind_paciente_internado: string | null
    ind_local_paciente: string | null
    lto_lto_id: string | null
    qrt_numero: number | null
    unf_seq: number | null
    tam_codigo: string | null
    atu_seq: number | null
    dt_prev_alta: Date | null
    dthr_alta_medica: Date | null
    dt_saida_paciente: Date | null
    iho_seq_origem: number | null
    iho_seq_transferencia: number | null
    justificativa_alt_del: string | null
    dthr_primeiro_evento: Date | null
    dthr_ultimo_evento: Date | null
    iph_seq: number | null
    iph_pho_seq: number | null
    ind_alta_manual: string | null
    prontuario_legal: string | null
    doc_obito: bigint | null
    pjq_seq: number | null
    ind_cons_marcada: string | null
    apo_seq: number | null
    dthr_aviso_samis: Date | null
    dthr_prontuario_buscado: Date | null
    version: number | null
    seq_medico_externo: number | null
    proc_internacao_paciente: string | null
    local_atendimento_paciente: string | null
    mod_assistencial: string | null
  }

  export type Ain_internacoesCountAggregateOutputType = {
    seq: number
    pac_codigo: number
    esp_seq: number
    ser_matricula_digita: number
    ser_vin_codigo_digita: number
    ser_matricula_professor: number
    ser_vin_codigo_professor: number
    dthr_internacao: number
    env_pront_unid_int: number
    tci_seq: number
    csp_cnv_codigo: number
    csp_seq: number
    oev_seq: number
    ind_saida_pac: number
    ind_dif_classe: number
    ind_paciente_internado: number
    ind_local_paciente: number
    lto_lto_id: number
    qrt_numero: number
    unf_seq: number
    tam_codigo: number
    atu_seq: number
    dt_prev_alta: number
    dthr_alta_medica: number
    dt_saida_paciente: number
    iho_seq_origem: number
    iho_seq_transferencia: number
    justificativa_alt_del: number
    dthr_primeiro_evento: number
    dthr_ultimo_evento: number
    iph_seq: number
    iph_pho_seq: number
    ind_alta_manual: number
    prontuario_legal: number
    doc_obito: number
    pjq_seq: number
    ind_cons_marcada: number
    apo_seq: number
    dthr_aviso_samis: number
    dthr_prontuario_buscado: number
    version: number
    seq_medico_externo: number
    proc_internacao_paciente: number
    local_atendimento_paciente: number
    mod_assistencial: number
    _all: number
  }


  export type Ain_internacoesAvgAggregateInputType = {
    seq?: true
    pac_codigo?: true
    esp_seq?: true
    ser_matricula_digita?: true
    ser_vin_codigo_digita?: true
    ser_matricula_professor?: true
    ser_vin_codigo_professor?: true
    tci_seq?: true
    csp_cnv_codigo?: true
    csp_seq?: true
    oev_seq?: true
    qrt_numero?: true
    unf_seq?: true
    atu_seq?: true
    iho_seq_origem?: true
    iho_seq_transferencia?: true
    iph_seq?: true
    iph_pho_seq?: true
    doc_obito?: true
    pjq_seq?: true
    apo_seq?: true
    version?: true
    seq_medico_externo?: true
  }

  export type Ain_internacoesSumAggregateInputType = {
    seq?: true
    pac_codigo?: true
    esp_seq?: true
    ser_matricula_digita?: true
    ser_vin_codigo_digita?: true
    ser_matricula_professor?: true
    ser_vin_codigo_professor?: true
    tci_seq?: true
    csp_cnv_codigo?: true
    csp_seq?: true
    oev_seq?: true
    qrt_numero?: true
    unf_seq?: true
    atu_seq?: true
    iho_seq_origem?: true
    iho_seq_transferencia?: true
    iph_seq?: true
    iph_pho_seq?: true
    doc_obito?: true
    pjq_seq?: true
    apo_seq?: true
    version?: true
    seq_medico_externo?: true
  }

  export type Ain_internacoesMinAggregateInputType = {
    seq?: true
    pac_codigo?: true
    esp_seq?: true
    ser_matricula_digita?: true
    ser_vin_codigo_digita?: true
    ser_matricula_professor?: true
    ser_vin_codigo_professor?: true
    dthr_internacao?: true
    env_pront_unid_int?: true
    tci_seq?: true
    csp_cnv_codigo?: true
    csp_seq?: true
    oev_seq?: true
    ind_saida_pac?: true
    ind_dif_classe?: true
    ind_paciente_internado?: true
    ind_local_paciente?: true
    lto_lto_id?: true
    qrt_numero?: true
    unf_seq?: true
    tam_codigo?: true
    atu_seq?: true
    dt_prev_alta?: true
    dthr_alta_medica?: true
    dt_saida_paciente?: true
    iho_seq_origem?: true
    iho_seq_transferencia?: true
    justificativa_alt_del?: true
    dthr_primeiro_evento?: true
    dthr_ultimo_evento?: true
    iph_seq?: true
    iph_pho_seq?: true
    ind_alta_manual?: true
    prontuario_legal?: true
    doc_obito?: true
    pjq_seq?: true
    ind_cons_marcada?: true
    apo_seq?: true
    dthr_aviso_samis?: true
    dthr_prontuario_buscado?: true
    version?: true
    seq_medico_externo?: true
    proc_internacao_paciente?: true
    local_atendimento_paciente?: true
    mod_assistencial?: true
  }

  export type Ain_internacoesMaxAggregateInputType = {
    seq?: true
    pac_codigo?: true
    esp_seq?: true
    ser_matricula_digita?: true
    ser_vin_codigo_digita?: true
    ser_matricula_professor?: true
    ser_vin_codigo_professor?: true
    dthr_internacao?: true
    env_pront_unid_int?: true
    tci_seq?: true
    csp_cnv_codigo?: true
    csp_seq?: true
    oev_seq?: true
    ind_saida_pac?: true
    ind_dif_classe?: true
    ind_paciente_internado?: true
    ind_local_paciente?: true
    lto_lto_id?: true
    qrt_numero?: true
    unf_seq?: true
    tam_codigo?: true
    atu_seq?: true
    dt_prev_alta?: true
    dthr_alta_medica?: true
    dt_saida_paciente?: true
    iho_seq_origem?: true
    iho_seq_transferencia?: true
    justificativa_alt_del?: true
    dthr_primeiro_evento?: true
    dthr_ultimo_evento?: true
    iph_seq?: true
    iph_pho_seq?: true
    ind_alta_manual?: true
    prontuario_legal?: true
    doc_obito?: true
    pjq_seq?: true
    ind_cons_marcada?: true
    apo_seq?: true
    dthr_aviso_samis?: true
    dthr_prontuario_buscado?: true
    version?: true
    seq_medico_externo?: true
    proc_internacao_paciente?: true
    local_atendimento_paciente?: true
    mod_assistencial?: true
  }

  export type Ain_internacoesCountAggregateInputType = {
    seq?: true
    pac_codigo?: true
    esp_seq?: true
    ser_matricula_digita?: true
    ser_vin_codigo_digita?: true
    ser_matricula_professor?: true
    ser_vin_codigo_professor?: true
    dthr_internacao?: true
    env_pront_unid_int?: true
    tci_seq?: true
    csp_cnv_codigo?: true
    csp_seq?: true
    oev_seq?: true
    ind_saida_pac?: true
    ind_dif_classe?: true
    ind_paciente_internado?: true
    ind_local_paciente?: true
    lto_lto_id?: true
    qrt_numero?: true
    unf_seq?: true
    tam_codigo?: true
    atu_seq?: true
    dt_prev_alta?: true
    dthr_alta_medica?: true
    dt_saida_paciente?: true
    iho_seq_origem?: true
    iho_seq_transferencia?: true
    justificativa_alt_del?: true
    dthr_primeiro_evento?: true
    dthr_ultimo_evento?: true
    iph_seq?: true
    iph_pho_seq?: true
    ind_alta_manual?: true
    prontuario_legal?: true
    doc_obito?: true
    pjq_seq?: true
    ind_cons_marcada?: true
    apo_seq?: true
    dthr_aviso_samis?: true
    dthr_prontuario_buscado?: true
    version?: true
    seq_medico_externo?: true
    proc_internacao_paciente?: true
    local_atendimento_paciente?: true
    mod_assistencial?: true
    _all?: true
  }

  export type Ain_internacoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ain_internacoes to aggregate.
     */
    where?: ain_internacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ain_internacoes to fetch.
     */
    orderBy?: ain_internacoesOrderByWithRelationInput | ain_internacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ain_internacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ain_internacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ain_internacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ain_internacoes
    **/
    _count?: true | Ain_internacoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ain_internacoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ain_internacoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ain_internacoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ain_internacoesMaxAggregateInputType
  }

  export type GetAin_internacoesAggregateType<T extends Ain_internacoesAggregateArgs> = {
        [P in keyof T & keyof AggregateAin_internacoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAin_internacoes[P]>
      : GetScalarType<T[P], AggregateAin_internacoes[P]>
  }




  export type ain_internacoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ain_internacoesWhereInput
    orderBy?: ain_internacoesOrderByWithAggregationInput | ain_internacoesOrderByWithAggregationInput[]
    by: Ain_internacoesScalarFieldEnum[] | Ain_internacoesScalarFieldEnum
    having?: ain_internacoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ain_internacoesCountAggregateInputType | true
    _avg?: Ain_internacoesAvgAggregateInputType
    _sum?: Ain_internacoesSumAggregateInputType
    _min?: Ain_internacoesMinAggregateInputType
    _max?: Ain_internacoesMaxAggregateInputType
  }

  export type Ain_internacoesGroupByOutputType = {
    seq: number
    pac_codigo: number
    esp_seq: number
    ser_matricula_digita: number
    ser_vin_codigo_digita: number
    ser_matricula_professor: number
    ser_vin_codigo_professor: number
    dthr_internacao: Date
    env_pront_unid_int: string | null
    tci_seq: number
    csp_cnv_codigo: number
    csp_seq: number
    oev_seq: number
    ind_saida_pac: string | null
    ind_dif_classe: string | null
    ind_paciente_internado: string | null
    ind_local_paciente: string
    lto_lto_id: string | null
    qrt_numero: number | null
    unf_seq: number | null
    tam_codigo: string | null
    atu_seq: number | null
    dt_prev_alta: Date | null
    dthr_alta_medica: Date | null
    dt_saida_paciente: Date | null
    iho_seq_origem: number | null
    iho_seq_transferencia: number | null
    justificativa_alt_del: string | null
    dthr_primeiro_evento: Date | null
    dthr_ultimo_evento: Date | null
    iph_seq: number | null
    iph_pho_seq: number | null
    ind_alta_manual: string | null
    prontuario_legal: string | null
    doc_obito: bigint | null
    pjq_seq: number | null
    ind_cons_marcada: string | null
    apo_seq: number | null
    dthr_aviso_samis: Date | null
    dthr_prontuario_buscado: Date | null
    version: number
    seq_medico_externo: number | null
    proc_internacao_paciente: string | null
    local_atendimento_paciente: string | null
    mod_assistencial: string | null
    _count: Ain_internacoesCountAggregateOutputType | null
    _avg: Ain_internacoesAvgAggregateOutputType | null
    _sum: Ain_internacoesSumAggregateOutputType | null
    _min: Ain_internacoesMinAggregateOutputType | null
    _max: Ain_internacoesMaxAggregateOutputType | null
  }

  type GetAin_internacoesGroupByPayload<T extends ain_internacoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ain_internacoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ain_internacoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ain_internacoesGroupByOutputType[P]>
            : GetScalarType<T[P], Ain_internacoesGroupByOutputType[P]>
        }
      >
    >


  export type ain_internacoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    pac_codigo?: boolean
    esp_seq?: boolean
    ser_matricula_digita?: boolean
    ser_vin_codigo_digita?: boolean
    ser_matricula_professor?: boolean
    ser_vin_codigo_professor?: boolean
    dthr_internacao?: boolean
    env_pront_unid_int?: boolean
    tci_seq?: boolean
    csp_cnv_codigo?: boolean
    csp_seq?: boolean
    oev_seq?: boolean
    ind_saida_pac?: boolean
    ind_dif_classe?: boolean
    ind_paciente_internado?: boolean
    ind_local_paciente?: boolean
    lto_lto_id?: boolean
    qrt_numero?: boolean
    unf_seq?: boolean
    tam_codigo?: boolean
    atu_seq?: boolean
    dt_prev_alta?: boolean
    dthr_alta_medica?: boolean
    dt_saida_paciente?: boolean
    iho_seq_origem?: boolean
    iho_seq_transferencia?: boolean
    justificativa_alt_del?: boolean
    dthr_primeiro_evento?: boolean
    dthr_ultimo_evento?: boolean
    iph_seq?: boolean
    iph_pho_seq?: boolean
    ind_alta_manual?: boolean
    prontuario_legal?: boolean
    doc_obito?: boolean
    pjq_seq?: boolean
    ind_cons_marcada?: boolean
    apo_seq?: boolean
    dthr_aviso_samis?: boolean
    dthr_prontuario_buscado?: boolean
    version?: boolean
    seq_medico_externo?: boolean
    proc_internacao_paciente?: boolean
    local_atendimento_paciente?: boolean
    mod_assistencial?: boolean
  }, ExtArgs["result"]["ain_internacoes"]>

  export type ain_internacoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    pac_codigo?: boolean
    esp_seq?: boolean
    ser_matricula_digita?: boolean
    ser_vin_codigo_digita?: boolean
    ser_matricula_professor?: boolean
    ser_vin_codigo_professor?: boolean
    dthr_internacao?: boolean
    env_pront_unid_int?: boolean
    tci_seq?: boolean
    csp_cnv_codigo?: boolean
    csp_seq?: boolean
    oev_seq?: boolean
    ind_saida_pac?: boolean
    ind_dif_classe?: boolean
    ind_paciente_internado?: boolean
    ind_local_paciente?: boolean
    lto_lto_id?: boolean
    qrt_numero?: boolean
    unf_seq?: boolean
    tam_codigo?: boolean
    atu_seq?: boolean
    dt_prev_alta?: boolean
    dthr_alta_medica?: boolean
    dt_saida_paciente?: boolean
    iho_seq_origem?: boolean
    iho_seq_transferencia?: boolean
    justificativa_alt_del?: boolean
    dthr_primeiro_evento?: boolean
    dthr_ultimo_evento?: boolean
    iph_seq?: boolean
    iph_pho_seq?: boolean
    ind_alta_manual?: boolean
    prontuario_legal?: boolean
    doc_obito?: boolean
    pjq_seq?: boolean
    ind_cons_marcada?: boolean
    apo_seq?: boolean
    dthr_aviso_samis?: boolean
    dthr_prontuario_buscado?: boolean
    version?: boolean
    seq_medico_externo?: boolean
    proc_internacao_paciente?: boolean
    local_atendimento_paciente?: boolean
    mod_assistencial?: boolean
  }, ExtArgs["result"]["ain_internacoes"]>

  export type ain_internacoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seq?: boolean
    pac_codigo?: boolean
    esp_seq?: boolean
    ser_matricula_digita?: boolean
    ser_vin_codigo_digita?: boolean
    ser_matricula_professor?: boolean
    ser_vin_codigo_professor?: boolean
    dthr_internacao?: boolean
    env_pront_unid_int?: boolean
    tci_seq?: boolean
    csp_cnv_codigo?: boolean
    csp_seq?: boolean
    oev_seq?: boolean
    ind_saida_pac?: boolean
    ind_dif_classe?: boolean
    ind_paciente_internado?: boolean
    ind_local_paciente?: boolean
    lto_lto_id?: boolean
    qrt_numero?: boolean
    unf_seq?: boolean
    tam_codigo?: boolean
    atu_seq?: boolean
    dt_prev_alta?: boolean
    dthr_alta_medica?: boolean
    dt_saida_paciente?: boolean
    iho_seq_origem?: boolean
    iho_seq_transferencia?: boolean
    justificativa_alt_del?: boolean
    dthr_primeiro_evento?: boolean
    dthr_ultimo_evento?: boolean
    iph_seq?: boolean
    iph_pho_seq?: boolean
    ind_alta_manual?: boolean
    prontuario_legal?: boolean
    doc_obito?: boolean
    pjq_seq?: boolean
    ind_cons_marcada?: boolean
    apo_seq?: boolean
    dthr_aviso_samis?: boolean
    dthr_prontuario_buscado?: boolean
    version?: boolean
    seq_medico_externo?: boolean
    proc_internacao_paciente?: boolean
    local_atendimento_paciente?: boolean
    mod_assistencial?: boolean
  }, ExtArgs["result"]["ain_internacoes"]>

  export type ain_internacoesSelectScalar = {
    seq?: boolean
    pac_codigo?: boolean
    esp_seq?: boolean
    ser_matricula_digita?: boolean
    ser_vin_codigo_digita?: boolean
    ser_matricula_professor?: boolean
    ser_vin_codigo_professor?: boolean
    dthr_internacao?: boolean
    env_pront_unid_int?: boolean
    tci_seq?: boolean
    csp_cnv_codigo?: boolean
    csp_seq?: boolean
    oev_seq?: boolean
    ind_saida_pac?: boolean
    ind_dif_classe?: boolean
    ind_paciente_internado?: boolean
    ind_local_paciente?: boolean
    lto_lto_id?: boolean
    qrt_numero?: boolean
    unf_seq?: boolean
    tam_codigo?: boolean
    atu_seq?: boolean
    dt_prev_alta?: boolean
    dthr_alta_medica?: boolean
    dt_saida_paciente?: boolean
    iho_seq_origem?: boolean
    iho_seq_transferencia?: boolean
    justificativa_alt_del?: boolean
    dthr_primeiro_evento?: boolean
    dthr_ultimo_evento?: boolean
    iph_seq?: boolean
    iph_pho_seq?: boolean
    ind_alta_manual?: boolean
    prontuario_legal?: boolean
    doc_obito?: boolean
    pjq_seq?: boolean
    ind_cons_marcada?: boolean
    apo_seq?: boolean
    dthr_aviso_samis?: boolean
    dthr_prontuario_buscado?: boolean
    version?: boolean
    seq_medico_externo?: boolean
    proc_internacao_paciente?: boolean
    local_atendimento_paciente?: boolean
    mod_assistencial?: boolean
  }

  export type ain_internacoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"seq" | "pac_codigo" | "esp_seq" | "ser_matricula_digita" | "ser_vin_codigo_digita" | "ser_matricula_professor" | "ser_vin_codigo_professor" | "dthr_internacao" | "env_pront_unid_int" | "tci_seq" | "csp_cnv_codigo" | "csp_seq" | "oev_seq" | "ind_saida_pac" | "ind_dif_classe" | "ind_paciente_internado" | "ind_local_paciente" | "lto_lto_id" | "qrt_numero" | "unf_seq" | "tam_codigo" | "atu_seq" | "dt_prev_alta" | "dthr_alta_medica" | "dt_saida_paciente" | "iho_seq_origem" | "iho_seq_transferencia" | "justificativa_alt_del" | "dthr_primeiro_evento" | "dthr_ultimo_evento" | "iph_seq" | "iph_pho_seq" | "ind_alta_manual" | "prontuario_legal" | "doc_obito" | "pjq_seq" | "ind_cons_marcada" | "apo_seq" | "dthr_aviso_samis" | "dthr_prontuario_buscado" | "version" | "seq_medico_externo" | "proc_internacao_paciente" | "local_atendimento_paciente" | "mod_assistencial", ExtArgs["result"]["ain_internacoes"]>

  export type $ain_internacoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ain_internacoes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      seq: number
      pac_codigo: number
      esp_seq: number
      ser_matricula_digita: number
      ser_vin_codigo_digita: number
      ser_matricula_professor: number
      ser_vin_codigo_professor: number
      dthr_internacao: Date
      env_pront_unid_int: string | null
      tci_seq: number
      csp_cnv_codigo: number
      csp_seq: number
      oev_seq: number
      ind_saida_pac: string | null
      ind_dif_classe: string | null
      ind_paciente_internado: string | null
      ind_local_paciente: string
      lto_lto_id: string | null
      qrt_numero: number | null
      unf_seq: number | null
      tam_codigo: string | null
      atu_seq: number | null
      dt_prev_alta: Date | null
      dthr_alta_medica: Date | null
      dt_saida_paciente: Date | null
      iho_seq_origem: number | null
      iho_seq_transferencia: number | null
      justificativa_alt_del: string | null
      dthr_primeiro_evento: Date | null
      dthr_ultimo_evento: Date | null
      iph_seq: number | null
      iph_pho_seq: number | null
      ind_alta_manual: string | null
      prontuario_legal: string | null
      doc_obito: bigint | null
      pjq_seq: number | null
      ind_cons_marcada: string | null
      apo_seq: number | null
      dthr_aviso_samis: Date | null
      dthr_prontuario_buscado: Date | null
      version: number
      seq_medico_externo: number | null
      proc_internacao_paciente: string | null
      local_atendimento_paciente: string | null
      mod_assistencial: string | null
    }, ExtArgs["result"]["ain_internacoes"]>
    composites: {}
  }

  type ain_internacoesGetPayload<S extends boolean | null | undefined | ain_internacoesDefaultArgs> = $Result.GetResult<Prisma.$ain_internacoesPayload, S>

  type ain_internacoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ain_internacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ain_internacoesCountAggregateInputType | true
    }

  export interface ain_internacoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ain_internacoes'], meta: { name: 'ain_internacoes' } }
    /**
     * Find zero or one Ain_internacoes that matches the filter.
     * @param {ain_internacoesFindUniqueArgs} args - Arguments to find a Ain_internacoes
     * @example
     * // Get one Ain_internacoes
     * const ain_internacoes = await prisma.ain_internacoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ain_internacoesFindUniqueArgs>(args: SelectSubset<T, ain_internacoesFindUniqueArgs<ExtArgs>>): Prisma__ain_internacoesClient<$Result.GetResult<Prisma.$ain_internacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ain_internacoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ain_internacoesFindUniqueOrThrowArgs} args - Arguments to find a Ain_internacoes
     * @example
     * // Get one Ain_internacoes
     * const ain_internacoes = await prisma.ain_internacoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ain_internacoesFindUniqueOrThrowArgs>(args: SelectSubset<T, ain_internacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ain_internacoesClient<$Result.GetResult<Prisma.$ain_internacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ain_internacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ain_internacoesFindFirstArgs} args - Arguments to find a Ain_internacoes
     * @example
     * // Get one Ain_internacoes
     * const ain_internacoes = await prisma.ain_internacoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ain_internacoesFindFirstArgs>(args?: SelectSubset<T, ain_internacoesFindFirstArgs<ExtArgs>>): Prisma__ain_internacoesClient<$Result.GetResult<Prisma.$ain_internacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ain_internacoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ain_internacoesFindFirstOrThrowArgs} args - Arguments to find a Ain_internacoes
     * @example
     * // Get one Ain_internacoes
     * const ain_internacoes = await prisma.ain_internacoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ain_internacoesFindFirstOrThrowArgs>(args?: SelectSubset<T, ain_internacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ain_internacoesClient<$Result.GetResult<Prisma.$ain_internacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ain_internacoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ain_internacoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ain_internacoes
     * const ain_internacoes = await prisma.ain_internacoes.findMany()
     * 
     * // Get first 10 Ain_internacoes
     * const ain_internacoes = await prisma.ain_internacoes.findMany({ take: 10 })
     * 
     * // Only select the `seq`
     * const ain_internacoesWithSeqOnly = await prisma.ain_internacoes.findMany({ select: { seq: true } })
     * 
     */
    findMany<T extends ain_internacoesFindManyArgs>(args?: SelectSubset<T, ain_internacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ain_internacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ain_internacoes.
     * @param {ain_internacoesCreateArgs} args - Arguments to create a Ain_internacoes.
     * @example
     * // Create one Ain_internacoes
     * const Ain_internacoes = await prisma.ain_internacoes.create({
     *   data: {
     *     // ... data to create a Ain_internacoes
     *   }
     * })
     * 
     */
    create<T extends ain_internacoesCreateArgs>(args: SelectSubset<T, ain_internacoesCreateArgs<ExtArgs>>): Prisma__ain_internacoesClient<$Result.GetResult<Prisma.$ain_internacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ain_internacoes.
     * @param {ain_internacoesCreateManyArgs} args - Arguments to create many Ain_internacoes.
     * @example
     * // Create many Ain_internacoes
     * const ain_internacoes = await prisma.ain_internacoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ain_internacoesCreateManyArgs>(args?: SelectSubset<T, ain_internacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ain_internacoes and returns the data saved in the database.
     * @param {ain_internacoesCreateManyAndReturnArgs} args - Arguments to create many Ain_internacoes.
     * @example
     * // Create many Ain_internacoes
     * const ain_internacoes = await prisma.ain_internacoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ain_internacoes and only return the `seq`
     * const ain_internacoesWithSeqOnly = await prisma.ain_internacoes.createManyAndReturn({
     *   select: { seq: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ain_internacoesCreateManyAndReturnArgs>(args?: SelectSubset<T, ain_internacoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ain_internacoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ain_internacoes.
     * @param {ain_internacoesDeleteArgs} args - Arguments to delete one Ain_internacoes.
     * @example
     * // Delete one Ain_internacoes
     * const Ain_internacoes = await prisma.ain_internacoes.delete({
     *   where: {
     *     // ... filter to delete one Ain_internacoes
     *   }
     * })
     * 
     */
    delete<T extends ain_internacoesDeleteArgs>(args: SelectSubset<T, ain_internacoesDeleteArgs<ExtArgs>>): Prisma__ain_internacoesClient<$Result.GetResult<Prisma.$ain_internacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ain_internacoes.
     * @param {ain_internacoesUpdateArgs} args - Arguments to update one Ain_internacoes.
     * @example
     * // Update one Ain_internacoes
     * const ain_internacoes = await prisma.ain_internacoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ain_internacoesUpdateArgs>(args: SelectSubset<T, ain_internacoesUpdateArgs<ExtArgs>>): Prisma__ain_internacoesClient<$Result.GetResult<Prisma.$ain_internacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ain_internacoes.
     * @param {ain_internacoesDeleteManyArgs} args - Arguments to filter Ain_internacoes to delete.
     * @example
     * // Delete a few Ain_internacoes
     * const { count } = await prisma.ain_internacoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ain_internacoesDeleteManyArgs>(args?: SelectSubset<T, ain_internacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ain_internacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ain_internacoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ain_internacoes
     * const ain_internacoes = await prisma.ain_internacoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ain_internacoesUpdateManyArgs>(args: SelectSubset<T, ain_internacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ain_internacoes and returns the data updated in the database.
     * @param {ain_internacoesUpdateManyAndReturnArgs} args - Arguments to update many Ain_internacoes.
     * @example
     * // Update many Ain_internacoes
     * const ain_internacoes = await prisma.ain_internacoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ain_internacoes and only return the `seq`
     * const ain_internacoesWithSeqOnly = await prisma.ain_internacoes.updateManyAndReturn({
     *   select: { seq: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ain_internacoesUpdateManyAndReturnArgs>(args: SelectSubset<T, ain_internacoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ain_internacoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ain_internacoes.
     * @param {ain_internacoesUpsertArgs} args - Arguments to update or create a Ain_internacoes.
     * @example
     * // Update or create a Ain_internacoes
     * const ain_internacoes = await prisma.ain_internacoes.upsert({
     *   create: {
     *     // ... data to create a Ain_internacoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ain_internacoes we want to update
     *   }
     * })
     */
    upsert<T extends ain_internacoesUpsertArgs>(args: SelectSubset<T, ain_internacoesUpsertArgs<ExtArgs>>): Prisma__ain_internacoesClient<$Result.GetResult<Prisma.$ain_internacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ain_internacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ain_internacoesCountArgs} args - Arguments to filter Ain_internacoes to count.
     * @example
     * // Count the number of Ain_internacoes
     * const count = await prisma.ain_internacoes.count({
     *   where: {
     *     // ... the filter for the Ain_internacoes we want to count
     *   }
     * })
    **/
    count<T extends ain_internacoesCountArgs>(
      args?: Subset<T, ain_internacoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ain_internacoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ain_internacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ain_internacoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ain_internacoesAggregateArgs>(args: Subset<T, Ain_internacoesAggregateArgs>): Prisma.PrismaPromise<GetAin_internacoesAggregateType<T>>

    /**
     * Group by Ain_internacoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ain_internacoesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ain_internacoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ain_internacoesGroupByArgs['orderBy'] }
        : { orderBy?: ain_internacoesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ain_internacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAin_internacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ain_internacoes model
   */
  readonly fields: ain_internacoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ain_internacoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ain_internacoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ain_internacoes model
   */
  interface ain_internacoesFieldRefs {
    readonly seq: FieldRef<"ain_internacoes", 'Int'>
    readonly pac_codigo: FieldRef<"ain_internacoes", 'Int'>
    readonly esp_seq: FieldRef<"ain_internacoes", 'Int'>
    readonly ser_matricula_digita: FieldRef<"ain_internacoes", 'Int'>
    readonly ser_vin_codigo_digita: FieldRef<"ain_internacoes", 'Int'>
    readonly ser_matricula_professor: FieldRef<"ain_internacoes", 'Int'>
    readonly ser_vin_codigo_professor: FieldRef<"ain_internacoes", 'Int'>
    readonly dthr_internacao: FieldRef<"ain_internacoes", 'DateTime'>
    readonly env_pront_unid_int: FieldRef<"ain_internacoes", 'String'>
    readonly tci_seq: FieldRef<"ain_internacoes", 'Int'>
    readonly csp_cnv_codigo: FieldRef<"ain_internacoes", 'Int'>
    readonly csp_seq: FieldRef<"ain_internacoes", 'Int'>
    readonly oev_seq: FieldRef<"ain_internacoes", 'Int'>
    readonly ind_saida_pac: FieldRef<"ain_internacoes", 'String'>
    readonly ind_dif_classe: FieldRef<"ain_internacoes", 'String'>
    readonly ind_paciente_internado: FieldRef<"ain_internacoes", 'String'>
    readonly ind_local_paciente: FieldRef<"ain_internacoes", 'String'>
    readonly lto_lto_id: FieldRef<"ain_internacoes", 'String'>
    readonly qrt_numero: FieldRef<"ain_internacoes", 'Int'>
    readonly unf_seq: FieldRef<"ain_internacoes", 'Int'>
    readonly tam_codigo: FieldRef<"ain_internacoes", 'String'>
    readonly atu_seq: FieldRef<"ain_internacoes", 'Int'>
    readonly dt_prev_alta: FieldRef<"ain_internacoes", 'DateTime'>
    readonly dthr_alta_medica: FieldRef<"ain_internacoes", 'DateTime'>
    readonly dt_saida_paciente: FieldRef<"ain_internacoes", 'DateTime'>
    readonly iho_seq_origem: FieldRef<"ain_internacoes", 'Int'>
    readonly iho_seq_transferencia: FieldRef<"ain_internacoes", 'Int'>
    readonly justificativa_alt_del: FieldRef<"ain_internacoes", 'String'>
    readonly dthr_primeiro_evento: FieldRef<"ain_internacoes", 'DateTime'>
    readonly dthr_ultimo_evento: FieldRef<"ain_internacoes", 'DateTime'>
    readonly iph_seq: FieldRef<"ain_internacoes", 'Int'>
    readonly iph_pho_seq: FieldRef<"ain_internacoes", 'Int'>
    readonly ind_alta_manual: FieldRef<"ain_internacoes", 'String'>
    readonly prontuario_legal: FieldRef<"ain_internacoes", 'String'>
    readonly doc_obito: FieldRef<"ain_internacoes", 'BigInt'>
    readonly pjq_seq: FieldRef<"ain_internacoes", 'Int'>
    readonly ind_cons_marcada: FieldRef<"ain_internacoes", 'String'>
    readonly apo_seq: FieldRef<"ain_internacoes", 'Int'>
    readonly dthr_aviso_samis: FieldRef<"ain_internacoes", 'DateTime'>
    readonly dthr_prontuario_buscado: FieldRef<"ain_internacoes", 'DateTime'>
    readonly version: FieldRef<"ain_internacoes", 'Int'>
    readonly seq_medico_externo: FieldRef<"ain_internacoes", 'Int'>
    readonly proc_internacao_paciente: FieldRef<"ain_internacoes", 'String'>
    readonly local_atendimento_paciente: FieldRef<"ain_internacoes", 'String'>
    readonly mod_assistencial: FieldRef<"ain_internacoes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ain_internacoes findUnique
   */
  export type ain_internacoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_internacoes
     */
    select?: ain_internacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_internacoes
     */
    omit?: ain_internacoesOmit<ExtArgs> | null
    /**
     * Filter, which ain_internacoes to fetch.
     */
    where: ain_internacoesWhereUniqueInput
  }

  /**
   * ain_internacoes findUniqueOrThrow
   */
  export type ain_internacoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_internacoes
     */
    select?: ain_internacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_internacoes
     */
    omit?: ain_internacoesOmit<ExtArgs> | null
    /**
     * Filter, which ain_internacoes to fetch.
     */
    where: ain_internacoesWhereUniqueInput
  }

  /**
   * ain_internacoes findFirst
   */
  export type ain_internacoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_internacoes
     */
    select?: ain_internacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_internacoes
     */
    omit?: ain_internacoesOmit<ExtArgs> | null
    /**
     * Filter, which ain_internacoes to fetch.
     */
    where?: ain_internacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ain_internacoes to fetch.
     */
    orderBy?: ain_internacoesOrderByWithRelationInput | ain_internacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ain_internacoes.
     */
    cursor?: ain_internacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ain_internacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ain_internacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ain_internacoes.
     */
    distinct?: Ain_internacoesScalarFieldEnum | Ain_internacoesScalarFieldEnum[]
  }

  /**
   * ain_internacoes findFirstOrThrow
   */
  export type ain_internacoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_internacoes
     */
    select?: ain_internacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_internacoes
     */
    omit?: ain_internacoesOmit<ExtArgs> | null
    /**
     * Filter, which ain_internacoes to fetch.
     */
    where?: ain_internacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ain_internacoes to fetch.
     */
    orderBy?: ain_internacoesOrderByWithRelationInput | ain_internacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ain_internacoes.
     */
    cursor?: ain_internacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ain_internacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ain_internacoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ain_internacoes.
     */
    distinct?: Ain_internacoesScalarFieldEnum | Ain_internacoesScalarFieldEnum[]
  }

  /**
   * ain_internacoes findMany
   */
  export type ain_internacoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_internacoes
     */
    select?: ain_internacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_internacoes
     */
    omit?: ain_internacoesOmit<ExtArgs> | null
    /**
     * Filter, which ain_internacoes to fetch.
     */
    where?: ain_internacoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ain_internacoes to fetch.
     */
    orderBy?: ain_internacoesOrderByWithRelationInput | ain_internacoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ain_internacoes.
     */
    cursor?: ain_internacoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ain_internacoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ain_internacoes.
     */
    skip?: number
    distinct?: Ain_internacoesScalarFieldEnum | Ain_internacoesScalarFieldEnum[]
  }

  /**
   * ain_internacoes create
   */
  export type ain_internacoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_internacoes
     */
    select?: ain_internacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_internacoes
     */
    omit?: ain_internacoesOmit<ExtArgs> | null
    /**
     * The data needed to create a ain_internacoes.
     */
    data: XOR<ain_internacoesCreateInput, ain_internacoesUncheckedCreateInput>
  }

  /**
   * ain_internacoes createMany
   */
  export type ain_internacoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ain_internacoes.
     */
    data: ain_internacoesCreateManyInput | ain_internacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ain_internacoes createManyAndReturn
   */
  export type ain_internacoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_internacoes
     */
    select?: ain_internacoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ain_internacoes
     */
    omit?: ain_internacoesOmit<ExtArgs> | null
    /**
     * The data used to create many ain_internacoes.
     */
    data: ain_internacoesCreateManyInput | ain_internacoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ain_internacoes update
   */
  export type ain_internacoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_internacoes
     */
    select?: ain_internacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_internacoes
     */
    omit?: ain_internacoesOmit<ExtArgs> | null
    /**
     * The data needed to update a ain_internacoes.
     */
    data: XOR<ain_internacoesUpdateInput, ain_internacoesUncheckedUpdateInput>
    /**
     * Choose, which ain_internacoes to update.
     */
    where: ain_internacoesWhereUniqueInput
  }

  /**
   * ain_internacoes updateMany
   */
  export type ain_internacoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ain_internacoes.
     */
    data: XOR<ain_internacoesUpdateManyMutationInput, ain_internacoesUncheckedUpdateManyInput>
    /**
     * Filter which ain_internacoes to update
     */
    where?: ain_internacoesWhereInput
    /**
     * Limit how many ain_internacoes to update.
     */
    limit?: number
  }

  /**
   * ain_internacoes updateManyAndReturn
   */
  export type ain_internacoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_internacoes
     */
    select?: ain_internacoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ain_internacoes
     */
    omit?: ain_internacoesOmit<ExtArgs> | null
    /**
     * The data used to update ain_internacoes.
     */
    data: XOR<ain_internacoesUpdateManyMutationInput, ain_internacoesUncheckedUpdateManyInput>
    /**
     * Filter which ain_internacoes to update
     */
    where?: ain_internacoesWhereInput
    /**
     * Limit how many ain_internacoes to update.
     */
    limit?: number
  }

  /**
   * ain_internacoes upsert
   */
  export type ain_internacoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_internacoes
     */
    select?: ain_internacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_internacoes
     */
    omit?: ain_internacoesOmit<ExtArgs> | null
    /**
     * The filter to search for the ain_internacoes to update in case it exists.
     */
    where: ain_internacoesWhereUniqueInput
    /**
     * In case the ain_internacoes found by the `where` argument doesn't exist, create a new ain_internacoes with this data.
     */
    create: XOR<ain_internacoesCreateInput, ain_internacoesUncheckedCreateInput>
    /**
     * In case the ain_internacoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ain_internacoesUpdateInput, ain_internacoesUncheckedUpdateInput>
  }

  /**
   * ain_internacoes delete
   */
  export type ain_internacoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_internacoes
     */
    select?: ain_internacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_internacoes
     */
    omit?: ain_internacoesOmit<ExtArgs> | null
    /**
     * Filter which ain_internacoes to delete.
     */
    where: ain_internacoesWhereUniqueInput
  }

  /**
   * ain_internacoes deleteMany
   */
  export type ain_internacoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ain_internacoes to delete
     */
    where?: ain_internacoesWhereInput
    /**
     * Limit how many ain_internacoes to delete.
     */
    limit?: number
  }

  /**
   * ain_internacoes without action
   */
  export type ain_internacoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_internacoes
     */
    select?: ain_internacoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_internacoes
     */
    omit?: ain_internacoesOmit<ExtArgs> | null
  }


  /**
   * Model ain_leitos
   */

  export type AggregateAin_leitos = {
    _count: Ain_leitosCountAggregateOutputType | null
    _avg: Ain_leitosAvgAggregateOutputType | null
    _sum: Ain_leitosSumAggregateOutputType | null
    _min: Ain_leitosMinAggregateOutputType | null
    _max: Ain_leitosMaxAggregateOutputType | null
  }

  export type Ain_leitosAvgAggregateOutputType = {
    qrt_numero: number | null
    tml_codigo: number | null
    unf_seq: number | null
    esp_seq: number | null
    int_seq: number | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    version: number | null
    tpclsfcclto_seq: number | null
  }

  export type Ain_leitosSumAggregateOutputType = {
    qrt_numero: number | null
    tml_codigo: number | null
    unf_seq: number | null
    esp_seq: number | null
    int_seq: number | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    version: number | null
    tpclsfcclto_seq: number | null
  }

  export type Ain_leitosMinAggregateOutputType = {
    lto_id: string | null
    qrt_numero: number | null
    leito: string | null
    ind_cons_clin_unidade: string | null
    ind_bloq_leito_limpeza: string | null
    tml_codigo: number | null
    unf_seq: number | null
    ind_situacao: string | null
    esp_seq: number | null
    int_seq: number | null
    ind_pertence_refl: string | null
    ind_cons_esp: string | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    ind_acompanhamento_ccih: string | null
    version: number | null
    tpclsfcclto_seq: number | null
    ind_leito_extra: string | null
  }

  export type Ain_leitosMaxAggregateOutputType = {
    lto_id: string | null
    qrt_numero: number | null
    leito: string | null
    ind_cons_clin_unidade: string | null
    ind_bloq_leito_limpeza: string | null
    tml_codigo: number | null
    unf_seq: number | null
    ind_situacao: string | null
    esp_seq: number | null
    int_seq: number | null
    ind_pertence_refl: string | null
    ind_cons_esp: string | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    ind_acompanhamento_ccih: string | null
    version: number | null
    tpclsfcclto_seq: number | null
    ind_leito_extra: string | null
  }

  export type Ain_leitosCountAggregateOutputType = {
    lto_id: number
    qrt_numero: number
    leito: number
    ind_cons_clin_unidade: number
    ind_bloq_leito_limpeza: number
    tml_codigo: number
    unf_seq: number
    ind_situacao: number
    esp_seq: number
    int_seq: number
    ind_pertence_refl: number
    ind_cons_esp: number
    ser_matricula: number
    ser_vin_codigo: number
    ind_acompanhamento_ccih: number
    version: number
    tpclsfcclto_seq: number
    ind_leito_extra: number
    _all: number
  }


  export type Ain_leitosAvgAggregateInputType = {
    qrt_numero?: true
    tml_codigo?: true
    unf_seq?: true
    esp_seq?: true
    int_seq?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    version?: true
    tpclsfcclto_seq?: true
  }

  export type Ain_leitosSumAggregateInputType = {
    qrt_numero?: true
    tml_codigo?: true
    unf_seq?: true
    esp_seq?: true
    int_seq?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    version?: true
    tpclsfcclto_seq?: true
  }

  export type Ain_leitosMinAggregateInputType = {
    lto_id?: true
    qrt_numero?: true
    leito?: true
    ind_cons_clin_unidade?: true
    ind_bloq_leito_limpeza?: true
    tml_codigo?: true
    unf_seq?: true
    ind_situacao?: true
    esp_seq?: true
    int_seq?: true
    ind_pertence_refl?: true
    ind_cons_esp?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    ind_acompanhamento_ccih?: true
    version?: true
    tpclsfcclto_seq?: true
    ind_leito_extra?: true
  }

  export type Ain_leitosMaxAggregateInputType = {
    lto_id?: true
    qrt_numero?: true
    leito?: true
    ind_cons_clin_unidade?: true
    ind_bloq_leito_limpeza?: true
    tml_codigo?: true
    unf_seq?: true
    ind_situacao?: true
    esp_seq?: true
    int_seq?: true
    ind_pertence_refl?: true
    ind_cons_esp?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    ind_acompanhamento_ccih?: true
    version?: true
    tpclsfcclto_seq?: true
    ind_leito_extra?: true
  }

  export type Ain_leitosCountAggregateInputType = {
    lto_id?: true
    qrt_numero?: true
    leito?: true
    ind_cons_clin_unidade?: true
    ind_bloq_leito_limpeza?: true
    tml_codigo?: true
    unf_seq?: true
    ind_situacao?: true
    esp_seq?: true
    int_seq?: true
    ind_pertence_refl?: true
    ind_cons_esp?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    ind_acompanhamento_ccih?: true
    version?: true
    tpclsfcclto_seq?: true
    ind_leito_extra?: true
    _all?: true
  }

  export type Ain_leitosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ain_leitos to aggregate.
     */
    where?: ain_leitosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ain_leitos to fetch.
     */
    orderBy?: ain_leitosOrderByWithRelationInput | ain_leitosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ain_leitosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ain_leitos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ain_leitos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ain_leitos
    **/
    _count?: true | Ain_leitosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ain_leitosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ain_leitosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ain_leitosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ain_leitosMaxAggregateInputType
  }

  export type GetAin_leitosAggregateType<T extends Ain_leitosAggregateArgs> = {
        [P in keyof T & keyof AggregateAin_leitos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAin_leitos[P]>
      : GetScalarType<T[P], AggregateAin_leitos[P]>
  }




  export type ain_leitosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ain_leitosWhereInput
    orderBy?: ain_leitosOrderByWithAggregationInput | ain_leitosOrderByWithAggregationInput[]
    by: Ain_leitosScalarFieldEnum[] | Ain_leitosScalarFieldEnum
    having?: ain_leitosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ain_leitosCountAggregateInputType | true
    _avg?: Ain_leitosAvgAggregateInputType
    _sum?: Ain_leitosSumAggregateInputType
    _min?: Ain_leitosMinAggregateInputType
    _max?: Ain_leitosMaxAggregateInputType
  }

  export type Ain_leitosGroupByOutputType = {
    lto_id: string
    qrt_numero: number
    leito: string
    ind_cons_clin_unidade: string
    ind_bloq_leito_limpeza: string
    tml_codigo: number
    unf_seq: number
    ind_situacao: string | null
    esp_seq: number | null
    int_seq: number | null
    ind_pertence_refl: string | null
    ind_cons_esp: string
    ser_matricula: number | null
    ser_vin_codigo: number | null
    ind_acompanhamento_ccih: string | null
    version: number | null
    tpclsfcclto_seq: number | null
    ind_leito_extra: string
    _count: Ain_leitosCountAggregateOutputType | null
    _avg: Ain_leitosAvgAggregateOutputType | null
    _sum: Ain_leitosSumAggregateOutputType | null
    _min: Ain_leitosMinAggregateOutputType | null
    _max: Ain_leitosMaxAggregateOutputType | null
  }

  type GetAin_leitosGroupByPayload<T extends ain_leitosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ain_leitosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ain_leitosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ain_leitosGroupByOutputType[P]>
            : GetScalarType<T[P], Ain_leitosGroupByOutputType[P]>
        }
      >
    >


  export type ain_leitosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lto_id?: boolean
    qrt_numero?: boolean
    leito?: boolean
    ind_cons_clin_unidade?: boolean
    ind_bloq_leito_limpeza?: boolean
    tml_codigo?: boolean
    unf_seq?: boolean
    ind_situacao?: boolean
    esp_seq?: boolean
    int_seq?: boolean
    ind_pertence_refl?: boolean
    ind_cons_esp?: boolean
    ser_matricula?: boolean
    ser_vin_codigo?: boolean
    ind_acompanhamento_ccih?: boolean
    version?: boolean
    tpclsfcclto_seq?: boolean
    ind_leito_extra?: boolean
  }, ExtArgs["result"]["ain_leitos"]>

  export type ain_leitosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lto_id?: boolean
    qrt_numero?: boolean
    leito?: boolean
    ind_cons_clin_unidade?: boolean
    ind_bloq_leito_limpeza?: boolean
    tml_codigo?: boolean
    unf_seq?: boolean
    ind_situacao?: boolean
    esp_seq?: boolean
    int_seq?: boolean
    ind_pertence_refl?: boolean
    ind_cons_esp?: boolean
    ser_matricula?: boolean
    ser_vin_codigo?: boolean
    ind_acompanhamento_ccih?: boolean
    version?: boolean
    tpclsfcclto_seq?: boolean
    ind_leito_extra?: boolean
  }, ExtArgs["result"]["ain_leitos"]>

  export type ain_leitosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lto_id?: boolean
    qrt_numero?: boolean
    leito?: boolean
    ind_cons_clin_unidade?: boolean
    ind_bloq_leito_limpeza?: boolean
    tml_codigo?: boolean
    unf_seq?: boolean
    ind_situacao?: boolean
    esp_seq?: boolean
    int_seq?: boolean
    ind_pertence_refl?: boolean
    ind_cons_esp?: boolean
    ser_matricula?: boolean
    ser_vin_codigo?: boolean
    ind_acompanhamento_ccih?: boolean
    version?: boolean
    tpclsfcclto_seq?: boolean
    ind_leito_extra?: boolean
  }, ExtArgs["result"]["ain_leitos"]>

  export type ain_leitosSelectScalar = {
    lto_id?: boolean
    qrt_numero?: boolean
    leito?: boolean
    ind_cons_clin_unidade?: boolean
    ind_bloq_leito_limpeza?: boolean
    tml_codigo?: boolean
    unf_seq?: boolean
    ind_situacao?: boolean
    esp_seq?: boolean
    int_seq?: boolean
    ind_pertence_refl?: boolean
    ind_cons_esp?: boolean
    ser_matricula?: boolean
    ser_vin_codigo?: boolean
    ind_acompanhamento_ccih?: boolean
    version?: boolean
    tpclsfcclto_seq?: boolean
    ind_leito_extra?: boolean
  }

  export type ain_leitosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"lto_id" | "qrt_numero" | "leito" | "ind_cons_clin_unidade" | "ind_bloq_leito_limpeza" | "tml_codigo" | "unf_seq" | "ind_situacao" | "esp_seq" | "int_seq" | "ind_pertence_refl" | "ind_cons_esp" | "ser_matricula" | "ser_vin_codigo" | "ind_acompanhamento_ccih" | "version" | "tpclsfcclto_seq" | "ind_leito_extra", ExtArgs["result"]["ain_leitos"]>

  export type $ain_leitosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ain_leitos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      lto_id: string
      qrt_numero: number
      leito: string
      ind_cons_clin_unidade: string
      ind_bloq_leito_limpeza: string
      tml_codigo: number
      unf_seq: number
      ind_situacao: string | null
      esp_seq: number | null
      int_seq: number | null
      ind_pertence_refl: string | null
      ind_cons_esp: string
      ser_matricula: number | null
      ser_vin_codigo: number | null
      ind_acompanhamento_ccih: string | null
      version: number | null
      tpclsfcclto_seq: number | null
      ind_leito_extra: string
    }, ExtArgs["result"]["ain_leitos"]>
    composites: {}
  }

  type ain_leitosGetPayload<S extends boolean | null | undefined | ain_leitosDefaultArgs> = $Result.GetResult<Prisma.$ain_leitosPayload, S>

  type ain_leitosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ain_leitosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ain_leitosCountAggregateInputType | true
    }

  export interface ain_leitosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ain_leitos'], meta: { name: 'ain_leitos' } }
    /**
     * Find zero or one Ain_leitos that matches the filter.
     * @param {ain_leitosFindUniqueArgs} args - Arguments to find a Ain_leitos
     * @example
     * // Get one Ain_leitos
     * const ain_leitos = await prisma.ain_leitos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ain_leitosFindUniqueArgs>(args: SelectSubset<T, ain_leitosFindUniqueArgs<ExtArgs>>): Prisma__ain_leitosClient<$Result.GetResult<Prisma.$ain_leitosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ain_leitos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ain_leitosFindUniqueOrThrowArgs} args - Arguments to find a Ain_leitos
     * @example
     * // Get one Ain_leitos
     * const ain_leitos = await prisma.ain_leitos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ain_leitosFindUniqueOrThrowArgs>(args: SelectSubset<T, ain_leitosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ain_leitosClient<$Result.GetResult<Prisma.$ain_leitosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ain_leitos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ain_leitosFindFirstArgs} args - Arguments to find a Ain_leitos
     * @example
     * // Get one Ain_leitos
     * const ain_leitos = await prisma.ain_leitos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ain_leitosFindFirstArgs>(args?: SelectSubset<T, ain_leitosFindFirstArgs<ExtArgs>>): Prisma__ain_leitosClient<$Result.GetResult<Prisma.$ain_leitosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ain_leitos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ain_leitosFindFirstOrThrowArgs} args - Arguments to find a Ain_leitos
     * @example
     * // Get one Ain_leitos
     * const ain_leitos = await prisma.ain_leitos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ain_leitosFindFirstOrThrowArgs>(args?: SelectSubset<T, ain_leitosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ain_leitosClient<$Result.GetResult<Prisma.$ain_leitosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ain_leitos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ain_leitosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ain_leitos
     * const ain_leitos = await prisma.ain_leitos.findMany()
     * 
     * // Get first 10 Ain_leitos
     * const ain_leitos = await prisma.ain_leitos.findMany({ take: 10 })
     * 
     * // Only select the `lto_id`
     * const ain_leitosWithLto_idOnly = await prisma.ain_leitos.findMany({ select: { lto_id: true } })
     * 
     */
    findMany<T extends ain_leitosFindManyArgs>(args?: SelectSubset<T, ain_leitosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ain_leitosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ain_leitos.
     * @param {ain_leitosCreateArgs} args - Arguments to create a Ain_leitos.
     * @example
     * // Create one Ain_leitos
     * const Ain_leitos = await prisma.ain_leitos.create({
     *   data: {
     *     // ... data to create a Ain_leitos
     *   }
     * })
     * 
     */
    create<T extends ain_leitosCreateArgs>(args: SelectSubset<T, ain_leitosCreateArgs<ExtArgs>>): Prisma__ain_leitosClient<$Result.GetResult<Prisma.$ain_leitosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ain_leitos.
     * @param {ain_leitosCreateManyArgs} args - Arguments to create many Ain_leitos.
     * @example
     * // Create many Ain_leitos
     * const ain_leitos = await prisma.ain_leitos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ain_leitosCreateManyArgs>(args?: SelectSubset<T, ain_leitosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ain_leitos and returns the data saved in the database.
     * @param {ain_leitosCreateManyAndReturnArgs} args - Arguments to create many Ain_leitos.
     * @example
     * // Create many Ain_leitos
     * const ain_leitos = await prisma.ain_leitos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ain_leitos and only return the `lto_id`
     * const ain_leitosWithLto_idOnly = await prisma.ain_leitos.createManyAndReturn({
     *   select: { lto_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ain_leitosCreateManyAndReturnArgs>(args?: SelectSubset<T, ain_leitosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ain_leitosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ain_leitos.
     * @param {ain_leitosDeleteArgs} args - Arguments to delete one Ain_leitos.
     * @example
     * // Delete one Ain_leitos
     * const Ain_leitos = await prisma.ain_leitos.delete({
     *   where: {
     *     // ... filter to delete one Ain_leitos
     *   }
     * })
     * 
     */
    delete<T extends ain_leitosDeleteArgs>(args: SelectSubset<T, ain_leitosDeleteArgs<ExtArgs>>): Prisma__ain_leitosClient<$Result.GetResult<Prisma.$ain_leitosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ain_leitos.
     * @param {ain_leitosUpdateArgs} args - Arguments to update one Ain_leitos.
     * @example
     * // Update one Ain_leitos
     * const ain_leitos = await prisma.ain_leitos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ain_leitosUpdateArgs>(args: SelectSubset<T, ain_leitosUpdateArgs<ExtArgs>>): Prisma__ain_leitosClient<$Result.GetResult<Prisma.$ain_leitosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ain_leitos.
     * @param {ain_leitosDeleteManyArgs} args - Arguments to filter Ain_leitos to delete.
     * @example
     * // Delete a few Ain_leitos
     * const { count } = await prisma.ain_leitos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ain_leitosDeleteManyArgs>(args?: SelectSubset<T, ain_leitosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ain_leitos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ain_leitosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ain_leitos
     * const ain_leitos = await prisma.ain_leitos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ain_leitosUpdateManyArgs>(args: SelectSubset<T, ain_leitosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ain_leitos and returns the data updated in the database.
     * @param {ain_leitosUpdateManyAndReturnArgs} args - Arguments to update many Ain_leitos.
     * @example
     * // Update many Ain_leitos
     * const ain_leitos = await prisma.ain_leitos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ain_leitos and only return the `lto_id`
     * const ain_leitosWithLto_idOnly = await prisma.ain_leitos.updateManyAndReturn({
     *   select: { lto_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ain_leitosUpdateManyAndReturnArgs>(args: SelectSubset<T, ain_leitosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ain_leitosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ain_leitos.
     * @param {ain_leitosUpsertArgs} args - Arguments to update or create a Ain_leitos.
     * @example
     * // Update or create a Ain_leitos
     * const ain_leitos = await prisma.ain_leitos.upsert({
     *   create: {
     *     // ... data to create a Ain_leitos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ain_leitos we want to update
     *   }
     * })
     */
    upsert<T extends ain_leitosUpsertArgs>(args: SelectSubset<T, ain_leitosUpsertArgs<ExtArgs>>): Prisma__ain_leitosClient<$Result.GetResult<Prisma.$ain_leitosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ain_leitos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ain_leitosCountArgs} args - Arguments to filter Ain_leitos to count.
     * @example
     * // Count the number of Ain_leitos
     * const count = await prisma.ain_leitos.count({
     *   where: {
     *     // ... the filter for the Ain_leitos we want to count
     *   }
     * })
    **/
    count<T extends ain_leitosCountArgs>(
      args?: Subset<T, ain_leitosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ain_leitosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ain_leitos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ain_leitosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ain_leitosAggregateArgs>(args: Subset<T, Ain_leitosAggregateArgs>): Prisma.PrismaPromise<GetAin_leitosAggregateType<T>>

    /**
     * Group by Ain_leitos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ain_leitosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ain_leitosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ain_leitosGroupByArgs['orderBy'] }
        : { orderBy?: ain_leitosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ain_leitosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAin_leitosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ain_leitos model
   */
  readonly fields: ain_leitosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ain_leitos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ain_leitosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ain_leitos model
   */
  interface ain_leitosFieldRefs {
    readonly lto_id: FieldRef<"ain_leitos", 'String'>
    readonly qrt_numero: FieldRef<"ain_leitos", 'Int'>
    readonly leito: FieldRef<"ain_leitos", 'String'>
    readonly ind_cons_clin_unidade: FieldRef<"ain_leitos", 'String'>
    readonly ind_bloq_leito_limpeza: FieldRef<"ain_leitos", 'String'>
    readonly tml_codigo: FieldRef<"ain_leitos", 'Int'>
    readonly unf_seq: FieldRef<"ain_leitos", 'Int'>
    readonly ind_situacao: FieldRef<"ain_leitos", 'String'>
    readonly esp_seq: FieldRef<"ain_leitos", 'Int'>
    readonly int_seq: FieldRef<"ain_leitos", 'Int'>
    readonly ind_pertence_refl: FieldRef<"ain_leitos", 'String'>
    readonly ind_cons_esp: FieldRef<"ain_leitos", 'String'>
    readonly ser_matricula: FieldRef<"ain_leitos", 'Int'>
    readonly ser_vin_codigo: FieldRef<"ain_leitos", 'Int'>
    readonly ind_acompanhamento_ccih: FieldRef<"ain_leitos", 'String'>
    readonly version: FieldRef<"ain_leitos", 'Int'>
    readonly tpclsfcclto_seq: FieldRef<"ain_leitos", 'Int'>
    readonly ind_leito_extra: FieldRef<"ain_leitos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ain_leitos findUnique
   */
  export type ain_leitosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_leitos
     */
    select?: ain_leitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_leitos
     */
    omit?: ain_leitosOmit<ExtArgs> | null
    /**
     * Filter, which ain_leitos to fetch.
     */
    where: ain_leitosWhereUniqueInput
  }

  /**
   * ain_leitos findUniqueOrThrow
   */
  export type ain_leitosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_leitos
     */
    select?: ain_leitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_leitos
     */
    omit?: ain_leitosOmit<ExtArgs> | null
    /**
     * Filter, which ain_leitos to fetch.
     */
    where: ain_leitosWhereUniqueInput
  }

  /**
   * ain_leitos findFirst
   */
  export type ain_leitosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_leitos
     */
    select?: ain_leitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_leitos
     */
    omit?: ain_leitosOmit<ExtArgs> | null
    /**
     * Filter, which ain_leitos to fetch.
     */
    where?: ain_leitosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ain_leitos to fetch.
     */
    orderBy?: ain_leitosOrderByWithRelationInput | ain_leitosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ain_leitos.
     */
    cursor?: ain_leitosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ain_leitos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ain_leitos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ain_leitos.
     */
    distinct?: Ain_leitosScalarFieldEnum | Ain_leitosScalarFieldEnum[]
  }

  /**
   * ain_leitos findFirstOrThrow
   */
  export type ain_leitosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_leitos
     */
    select?: ain_leitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_leitos
     */
    omit?: ain_leitosOmit<ExtArgs> | null
    /**
     * Filter, which ain_leitos to fetch.
     */
    where?: ain_leitosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ain_leitos to fetch.
     */
    orderBy?: ain_leitosOrderByWithRelationInput | ain_leitosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ain_leitos.
     */
    cursor?: ain_leitosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ain_leitos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ain_leitos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ain_leitos.
     */
    distinct?: Ain_leitosScalarFieldEnum | Ain_leitosScalarFieldEnum[]
  }

  /**
   * ain_leitos findMany
   */
  export type ain_leitosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_leitos
     */
    select?: ain_leitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_leitos
     */
    omit?: ain_leitosOmit<ExtArgs> | null
    /**
     * Filter, which ain_leitos to fetch.
     */
    where?: ain_leitosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ain_leitos to fetch.
     */
    orderBy?: ain_leitosOrderByWithRelationInput | ain_leitosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ain_leitos.
     */
    cursor?: ain_leitosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ain_leitos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ain_leitos.
     */
    skip?: number
    distinct?: Ain_leitosScalarFieldEnum | Ain_leitosScalarFieldEnum[]
  }

  /**
   * ain_leitos create
   */
  export type ain_leitosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_leitos
     */
    select?: ain_leitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_leitos
     */
    omit?: ain_leitosOmit<ExtArgs> | null
    /**
     * The data needed to create a ain_leitos.
     */
    data: XOR<ain_leitosCreateInput, ain_leitosUncheckedCreateInput>
  }

  /**
   * ain_leitos createMany
   */
  export type ain_leitosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ain_leitos.
     */
    data: ain_leitosCreateManyInput | ain_leitosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ain_leitos createManyAndReturn
   */
  export type ain_leitosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_leitos
     */
    select?: ain_leitosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ain_leitos
     */
    omit?: ain_leitosOmit<ExtArgs> | null
    /**
     * The data used to create many ain_leitos.
     */
    data: ain_leitosCreateManyInput | ain_leitosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ain_leitos update
   */
  export type ain_leitosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_leitos
     */
    select?: ain_leitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_leitos
     */
    omit?: ain_leitosOmit<ExtArgs> | null
    /**
     * The data needed to update a ain_leitos.
     */
    data: XOR<ain_leitosUpdateInput, ain_leitosUncheckedUpdateInput>
    /**
     * Choose, which ain_leitos to update.
     */
    where: ain_leitosWhereUniqueInput
  }

  /**
   * ain_leitos updateMany
   */
  export type ain_leitosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ain_leitos.
     */
    data: XOR<ain_leitosUpdateManyMutationInput, ain_leitosUncheckedUpdateManyInput>
    /**
     * Filter which ain_leitos to update
     */
    where?: ain_leitosWhereInput
    /**
     * Limit how many ain_leitos to update.
     */
    limit?: number
  }

  /**
   * ain_leitos updateManyAndReturn
   */
  export type ain_leitosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_leitos
     */
    select?: ain_leitosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ain_leitos
     */
    omit?: ain_leitosOmit<ExtArgs> | null
    /**
     * The data used to update ain_leitos.
     */
    data: XOR<ain_leitosUpdateManyMutationInput, ain_leitosUncheckedUpdateManyInput>
    /**
     * Filter which ain_leitos to update
     */
    where?: ain_leitosWhereInput
    /**
     * Limit how many ain_leitos to update.
     */
    limit?: number
  }

  /**
   * ain_leitos upsert
   */
  export type ain_leitosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_leitos
     */
    select?: ain_leitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_leitos
     */
    omit?: ain_leitosOmit<ExtArgs> | null
    /**
     * The filter to search for the ain_leitos to update in case it exists.
     */
    where: ain_leitosWhereUniqueInput
    /**
     * In case the ain_leitos found by the `where` argument doesn't exist, create a new ain_leitos with this data.
     */
    create: XOR<ain_leitosCreateInput, ain_leitosUncheckedCreateInput>
    /**
     * In case the ain_leitos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ain_leitosUpdateInput, ain_leitosUncheckedUpdateInput>
  }

  /**
   * ain_leitos delete
   */
  export type ain_leitosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_leitos
     */
    select?: ain_leitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_leitos
     */
    omit?: ain_leitosOmit<ExtArgs> | null
    /**
     * Filter which ain_leitos to delete.
     */
    where: ain_leitosWhereUniqueInput
  }

  /**
   * ain_leitos deleteMany
   */
  export type ain_leitosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ain_leitos to delete
     */
    where?: ain_leitosWhereInput
    /**
     * Limit how many ain_leitos to delete.
     */
    limit?: number
  }

  /**
   * ain_leitos without action
   */
  export type ain_leitosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ain_leitos
     */
    select?: ain_leitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ain_leitos
     */
    omit?: ain_leitosOmit<ExtArgs> | null
  }


  /**
   * Model aip_pacientes
   */

  export type AggregateAip_pacientes = {
    _count: Aip_pacientesCountAggregateOutputType | null
    _avg: Aip_pacientesAvgAggregateOutputType | null
    _sum: Aip_pacientesSumAggregateOutputType | null
    _min: Aip_pacientesMinAggregateOutputType | null
    _max: Aip_pacientesMaxAggregateOutputType | null
  }

  export type Aip_pacientesAvgAggregateOutputType = {
    codigo: number | null
    cct_codigo_cadastro: number | null
    ser_matricula_cadastro: number | null
    ser_vin_codigo_cadastro: number | null
    cct_codigo_recadastro: number | null
    cdd_codigo: number | null
    nac_codigo: number | null
    ocp_codigo: number | null
    ser_matricula_recadastro: number | null
    ser_vin_codigo_recadastro: number | null
    grau_instrucao: number | null
    ddd_fone_residencial: number | null
    fone_residencial: number | null
    ddd_fone_recado: number | null
    cpf: number | null
    prontuario: number | null
    qrt_numero: number | null
    unf_seq: number | null
    nro_cartao_saude: number | null
    pac_codigo_mae: number | null
    rna_gso_pac_codigo: number | null
    rna_gso_seqp: number | null
    rna_seqp: number | null
    numero_pis: number | null
    volumes: number | null
    version: number | null
    etn_id: number | null
    id_sistema_legado: number | null
    cnh: Decimal | null
    rel_codigo: number | null
    pac_codigo_valido: number | null
  }

  export type Aip_pacientesSumAggregateOutputType = {
    codigo: number | null
    cct_codigo_cadastro: number | null
    ser_matricula_cadastro: number | null
    ser_vin_codigo_cadastro: number | null
    cct_codigo_recadastro: number | null
    cdd_codigo: number | null
    nac_codigo: number | null
    ocp_codigo: number | null
    ser_matricula_recadastro: number | null
    ser_vin_codigo_recadastro: number | null
    grau_instrucao: number | null
    ddd_fone_residencial: number | null
    fone_residencial: bigint | null
    ddd_fone_recado: number | null
    cpf: bigint | null
    prontuario: number | null
    qrt_numero: number | null
    unf_seq: number | null
    nro_cartao_saude: bigint | null
    pac_codigo_mae: number | null
    rna_gso_pac_codigo: number | null
    rna_gso_seqp: number | null
    rna_seqp: number | null
    numero_pis: bigint | null
    volumes: number | null
    version: number | null
    etn_id: bigint | null
    id_sistema_legado: bigint | null
    cnh: Decimal | null
    rel_codigo: number | null
    pac_codigo_valido: number | null
  }

  export type Aip_pacientesMinAggregateOutputType = {
    codigo: number | null
    cct_codigo_cadastro: number | null
    ser_matricula_cadastro: number | null
    ser_vin_codigo_cadastro: number | null
    nome: string | null
    nome_mae: string | null
    dt_nascimento: Date | null
    dt_identificacao: Date | null
    cct_codigo_recadastro: number | null
    cdd_codigo: number | null
    nac_codigo: number | null
    ocp_codigo: number | null
    uf_sigla: string | null
    ser_matricula_recadastro: number | null
    ser_vin_codigo_recadastro: number | null
    cor: string | null
    sexo: string | null
    grau_instrucao: number | null
    nome_pai: string | null
    naturalidade: string | null
    ddd_fone_residencial: number | null
    fone_residencial: bigint | null
    ddd_fone_recado: number | null
    fone_recado: string | null
    estado_civil: string | null
    cpf: bigint | null
    prontuario: number | null
    dt_obito: Date | null
    rg: string | null
    orgao_emis_rg: string | null
    observacao: string | null
    prnt_ativo: string | null
    cad_confirmado: string | null
    ind_gera_prontuario: string | null
    dt_ult_internacao: Date | null
    dt_ult_alta: Date | null
    dt_ult_consulta: Date | null
    dt_ult_procedimento: Date | null
    dt_ult_atend_hosp_dia: Date | null
    dt_ult_alta_hosp_dia: Date | null
    qrt_numero: number | null
    unf_seq: number | null
    lto_lto_id: string | null
    reg_nascimento: string | null
    nro_cartao_saude: bigint | null
    dt_recadastro: Date | null
    ind_paciente_vip: string | null
    pac_codigo_mae: number | null
    tipo_data_obito: string | null
    dt_obito_externo: Date | null
    rna_gso_pac_codigo: number | null
    rna_gso_seqp: number | null
    rna_seqp: number | null
    numero_pis: bigint | null
    volumes: number | null
    ind_pac_protegido: string | null
    criado_em: Date | null
    ind_pac_agfa: string | null
    sexo_biologico: string | null
    version: number | null
    etn_id: bigint | null
    id_sistema_legado: bigint | null
    nome_social: string | null
    cnh: Decimal | null
    data_validade_cnh: Date | null
    email: string | null
    rel_codigo: number | null
    dt_exp_germe_multirresistente: Date | null
    germe_multirresistente: string | null
    pac_codigo_valido: number | null
  }

  export type Aip_pacientesMaxAggregateOutputType = {
    codigo: number | null
    cct_codigo_cadastro: number | null
    ser_matricula_cadastro: number | null
    ser_vin_codigo_cadastro: number | null
    nome: string | null
    nome_mae: string | null
    dt_nascimento: Date | null
    dt_identificacao: Date | null
    cct_codigo_recadastro: number | null
    cdd_codigo: number | null
    nac_codigo: number | null
    ocp_codigo: number | null
    uf_sigla: string | null
    ser_matricula_recadastro: number | null
    ser_vin_codigo_recadastro: number | null
    cor: string | null
    sexo: string | null
    grau_instrucao: number | null
    nome_pai: string | null
    naturalidade: string | null
    ddd_fone_residencial: number | null
    fone_residencial: bigint | null
    ddd_fone_recado: number | null
    fone_recado: string | null
    estado_civil: string | null
    cpf: bigint | null
    prontuario: number | null
    dt_obito: Date | null
    rg: string | null
    orgao_emis_rg: string | null
    observacao: string | null
    prnt_ativo: string | null
    cad_confirmado: string | null
    ind_gera_prontuario: string | null
    dt_ult_internacao: Date | null
    dt_ult_alta: Date | null
    dt_ult_consulta: Date | null
    dt_ult_procedimento: Date | null
    dt_ult_atend_hosp_dia: Date | null
    dt_ult_alta_hosp_dia: Date | null
    qrt_numero: number | null
    unf_seq: number | null
    lto_lto_id: string | null
    reg_nascimento: string | null
    nro_cartao_saude: bigint | null
    dt_recadastro: Date | null
    ind_paciente_vip: string | null
    pac_codigo_mae: number | null
    tipo_data_obito: string | null
    dt_obito_externo: Date | null
    rna_gso_pac_codigo: number | null
    rna_gso_seqp: number | null
    rna_seqp: number | null
    numero_pis: bigint | null
    volumes: number | null
    ind_pac_protegido: string | null
    criado_em: Date | null
    ind_pac_agfa: string | null
    sexo_biologico: string | null
    version: number | null
    etn_id: bigint | null
    id_sistema_legado: bigint | null
    nome_social: string | null
    cnh: Decimal | null
    data_validade_cnh: Date | null
    email: string | null
    rel_codigo: number | null
    dt_exp_germe_multirresistente: Date | null
    germe_multirresistente: string | null
    pac_codigo_valido: number | null
  }

  export type Aip_pacientesCountAggregateOutputType = {
    codigo: number
    cct_codigo_cadastro: number
    ser_matricula_cadastro: number
    ser_vin_codigo_cadastro: number
    nome: number
    nome_mae: number
    dt_nascimento: number
    dt_identificacao: number
    cct_codigo_recadastro: number
    cdd_codigo: number
    nac_codigo: number
    ocp_codigo: number
    uf_sigla: number
    ser_matricula_recadastro: number
    ser_vin_codigo_recadastro: number
    cor: number
    sexo: number
    grau_instrucao: number
    nome_pai: number
    naturalidade: number
    ddd_fone_residencial: number
    fone_residencial: number
    ddd_fone_recado: number
    fone_recado: number
    estado_civil: number
    cpf: number
    prontuario: number
    dt_obito: number
    rg: number
    orgao_emis_rg: number
    observacao: number
    prnt_ativo: number
    cad_confirmado: number
    ind_gera_prontuario: number
    dt_ult_internacao: number
    dt_ult_alta: number
    dt_ult_consulta: number
    dt_ult_procedimento: number
    dt_ult_atend_hosp_dia: number
    dt_ult_alta_hosp_dia: number
    qrt_numero: number
    unf_seq: number
    lto_lto_id: number
    reg_nascimento: number
    nro_cartao_saude: number
    dt_recadastro: number
    ind_paciente_vip: number
    pac_codigo_mae: number
    tipo_data_obito: number
    dt_obito_externo: number
    rna_gso_pac_codigo: number
    rna_gso_seqp: number
    rna_seqp: number
    numero_pis: number
    volumes: number
    ind_pac_protegido: number
    criado_em: number
    ind_pac_agfa: number
    sexo_biologico: number
    version: number
    etn_id: number
    id_sistema_legado: number
    nome_social: number
    cnh: number
    data_validade_cnh: number
    email: number
    rel_codigo: number
    dt_exp_germe_multirresistente: number
    germe_multirresistente: number
    pac_codigo_valido: number
    _all: number
  }


  export type Aip_pacientesAvgAggregateInputType = {
    codigo?: true
    cct_codigo_cadastro?: true
    ser_matricula_cadastro?: true
    ser_vin_codigo_cadastro?: true
    cct_codigo_recadastro?: true
    cdd_codigo?: true
    nac_codigo?: true
    ocp_codigo?: true
    ser_matricula_recadastro?: true
    ser_vin_codigo_recadastro?: true
    grau_instrucao?: true
    ddd_fone_residencial?: true
    fone_residencial?: true
    ddd_fone_recado?: true
    cpf?: true
    prontuario?: true
    qrt_numero?: true
    unf_seq?: true
    nro_cartao_saude?: true
    pac_codigo_mae?: true
    rna_gso_pac_codigo?: true
    rna_gso_seqp?: true
    rna_seqp?: true
    numero_pis?: true
    volumes?: true
    version?: true
    etn_id?: true
    id_sistema_legado?: true
    cnh?: true
    rel_codigo?: true
    pac_codigo_valido?: true
  }

  export type Aip_pacientesSumAggregateInputType = {
    codigo?: true
    cct_codigo_cadastro?: true
    ser_matricula_cadastro?: true
    ser_vin_codigo_cadastro?: true
    cct_codigo_recadastro?: true
    cdd_codigo?: true
    nac_codigo?: true
    ocp_codigo?: true
    ser_matricula_recadastro?: true
    ser_vin_codigo_recadastro?: true
    grau_instrucao?: true
    ddd_fone_residencial?: true
    fone_residencial?: true
    ddd_fone_recado?: true
    cpf?: true
    prontuario?: true
    qrt_numero?: true
    unf_seq?: true
    nro_cartao_saude?: true
    pac_codigo_mae?: true
    rna_gso_pac_codigo?: true
    rna_gso_seqp?: true
    rna_seqp?: true
    numero_pis?: true
    volumes?: true
    version?: true
    etn_id?: true
    id_sistema_legado?: true
    cnh?: true
    rel_codigo?: true
    pac_codigo_valido?: true
  }

  export type Aip_pacientesMinAggregateInputType = {
    codigo?: true
    cct_codigo_cadastro?: true
    ser_matricula_cadastro?: true
    ser_vin_codigo_cadastro?: true
    nome?: true
    nome_mae?: true
    dt_nascimento?: true
    dt_identificacao?: true
    cct_codigo_recadastro?: true
    cdd_codigo?: true
    nac_codigo?: true
    ocp_codigo?: true
    uf_sigla?: true
    ser_matricula_recadastro?: true
    ser_vin_codigo_recadastro?: true
    cor?: true
    sexo?: true
    grau_instrucao?: true
    nome_pai?: true
    naturalidade?: true
    ddd_fone_residencial?: true
    fone_residencial?: true
    ddd_fone_recado?: true
    fone_recado?: true
    estado_civil?: true
    cpf?: true
    prontuario?: true
    dt_obito?: true
    rg?: true
    orgao_emis_rg?: true
    observacao?: true
    prnt_ativo?: true
    cad_confirmado?: true
    ind_gera_prontuario?: true
    dt_ult_internacao?: true
    dt_ult_alta?: true
    dt_ult_consulta?: true
    dt_ult_procedimento?: true
    dt_ult_atend_hosp_dia?: true
    dt_ult_alta_hosp_dia?: true
    qrt_numero?: true
    unf_seq?: true
    lto_lto_id?: true
    reg_nascimento?: true
    nro_cartao_saude?: true
    dt_recadastro?: true
    ind_paciente_vip?: true
    pac_codigo_mae?: true
    tipo_data_obito?: true
    dt_obito_externo?: true
    rna_gso_pac_codigo?: true
    rna_gso_seqp?: true
    rna_seqp?: true
    numero_pis?: true
    volumes?: true
    ind_pac_protegido?: true
    criado_em?: true
    ind_pac_agfa?: true
    sexo_biologico?: true
    version?: true
    etn_id?: true
    id_sistema_legado?: true
    nome_social?: true
    cnh?: true
    data_validade_cnh?: true
    email?: true
    rel_codigo?: true
    dt_exp_germe_multirresistente?: true
    germe_multirresistente?: true
    pac_codigo_valido?: true
  }

  export type Aip_pacientesMaxAggregateInputType = {
    codigo?: true
    cct_codigo_cadastro?: true
    ser_matricula_cadastro?: true
    ser_vin_codigo_cadastro?: true
    nome?: true
    nome_mae?: true
    dt_nascimento?: true
    dt_identificacao?: true
    cct_codigo_recadastro?: true
    cdd_codigo?: true
    nac_codigo?: true
    ocp_codigo?: true
    uf_sigla?: true
    ser_matricula_recadastro?: true
    ser_vin_codigo_recadastro?: true
    cor?: true
    sexo?: true
    grau_instrucao?: true
    nome_pai?: true
    naturalidade?: true
    ddd_fone_residencial?: true
    fone_residencial?: true
    ddd_fone_recado?: true
    fone_recado?: true
    estado_civil?: true
    cpf?: true
    prontuario?: true
    dt_obito?: true
    rg?: true
    orgao_emis_rg?: true
    observacao?: true
    prnt_ativo?: true
    cad_confirmado?: true
    ind_gera_prontuario?: true
    dt_ult_internacao?: true
    dt_ult_alta?: true
    dt_ult_consulta?: true
    dt_ult_procedimento?: true
    dt_ult_atend_hosp_dia?: true
    dt_ult_alta_hosp_dia?: true
    qrt_numero?: true
    unf_seq?: true
    lto_lto_id?: true
    reg_nascimento?: true
    nro_cartao_saude?: true
    dt_recadastro?: true
    ind_paciente_vip?: true
    pac_codigo_mae?: true
    tipo_data_obito?: true
    dt_obito_externo?: true
    rna_gso_pac_codigo?: true
    rna_gso_seqp?: true
    rna_seqp?: true
    numero_pis?: true
    volumes?: true
    ind_pac_protegido?: true
    criado_em?: true
    ind_pac_agfa?: true
    sexo_biologico?: true
    version?: true
    etn_id?: true
    id_sistema_legado?: true
    nome_social?: true
    cnh?: true
    data_validade_cnh?: true
    email?: true
    rel_codigo?: true
    dt_exp_germe_multirresistente?: true
    germe_multirresistente?: true
    pac_codigo_valido?: true
  }

  export type Aip_pacientesCountAggregateInputType = {
    codigo?: true
    cct_codigo_cadastro?: true
    ser_matricula_cadastro?: true
    ser_vin_codigo_cadastro?: true
    nome?: true
    nome_mae?: true
    dt_nascimento?: true
    dt_identificacao?: true
    cct_codigo_recadastro?: true
    cdd_codigo?: true
    nac_codigo?: true
    ocp_codigo?: true
    uf_sigla?: true
    ser_matricula_recadastro?: true
    ser_vin_codigo_recadastro?: true
    cor?: true
    sexo?: true
    grau_instrucao?: true
    nome_pai?: true
    naturalidade?: true
    ddd_fone_residencial?: true
    fone_residencial?: true
    ddd_fone_recado?: true
    fone_recado?: true
    estado_civil?: true
    cpf?: true
    prontuario?: true
    dt_obito?: true
    rg?: true
    orgao_emis_rg?: true
    observacao?: true
    prnt_ativo?: true
    cad_confirmado?: true
    ind_gera_prontuario?: true
    dt_ult_internacao?: true
    dt_ult_alta?: true
    dt_ult_consulta?: true
    dt_ult_procedimento?: true
    dt_ult_atend_hosp_dia?: true
    dt_ult_alta_hosp_dia?: true
    qrt_numero?: true
    unf_seq?: true
    lto_lto_id?: true
    reg_nascimento?: true
    nro_cartao_saude?: true
    dt_recadastro?: true
    ind_paciente_vip?: true
    pac_codigo_mae?: true
    tipo_data_obito?: true
    dt_obito_externo?: true
    rna_gso_pac_codigo?: true
    rna_gso_seqp?: true
    rna_seqp?: true
    numero_pis?: true
    volumes?: true
    ind_pac_protegido?: true
    criado_em?: true
    ind_pac_agfa?: true
    sexo_biologico?: true
    version?: true
    etn_id?: true
    id_sistema_legado?: true
    nome_social?: true
    cnh?: true
    data_validade_cnh?: true
    email?: true
    rel_codigo?: true
    dt_exp_germe_multirresistente?: true
    germe_multirresistente?: true
    pac_codigo_valido?: true
    _all?: true
  }

  export type Aip_pacientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aip_pacientes to aggregate.
     */
    where?: aip_pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aip_pacientes to fetch.
     */
    orderBy?: aip_pacientesOrderByWithRelationInput | aip_pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aip_pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aip_pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aip_pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned aip_pacientes
    **/
    _count?: true | Aip_pacientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Aip_pacientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Aip_pacientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Aip_pacientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Aip_pacientesMaxAggregateInputType
  }

  export type GetAip_pacientesAggregateType<T extends Aip_pacientesAggregateArgs> = {
        [P in keyof T & keyof AggregateAip_pacientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAip_pacientes[P]>
      : GetScalarType<T[P], AggregateAip_pacientes[P]>
  }




  export type aip_pacientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aip_pacientesWhereInput
    orderBy?: aip_pacientesOrderByWithAggregationInput | aip_pacientesOrderByWithAggregationInput[]
    by: Aip_pacientesScalarFieldEnum[] | Aip_pacientesScalarFieldEnum
    having?: aip_pacientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Aip_pacientesCountAggregateInputType | true
    _avg?: Aip_pacientesAvgAggregateInputType
    _sum?: Aip_pacientesSumAggregateInputType
    _min?: Aip_pacientesMinAggregateInputType
    _max?: Aip_pacientesMaxAggregateInputType
  }

  export type Aip_pacientesGroupByOutputType = {
    codigo: number
    cct_codigo_cadastro: number
    ser_matricula_cadastro: number
    ser_vin_codigo_cadastro: number
    nome: string
    nome_mae: string
    dt_nascimento: Date
    dt_identificacao: Date
    cct_codigo_recadastro: number | null
    cdd_codigo: number | null
    nac_codigo: number | null
    ocp_codigo: number | null
    uf_sigla: string | null
    ser_matricula_recadastro: number | null
    ser_vin_codigo_recadastro: number | null
    cor: string | null
    sexo: string | null
    grau_instrucao: number | null
    nome_pai: string | null
    naturalidade: string | null
    ddd_fone_residencial: number | null
    fone_residencial: bigint | null
    ddd_fone_recado: number | null
    fone_recado: string | null
    estado_civil: string | null
    cpf: bigint | null
    prontuario: number | null
    dt_obito: Date | null
    rg: string | null
    orgao_emis_rg: string | null
    observacao: string | null
    prnt_ativo: string | null
    cad_confirmado: string | null
    ind_gera_prontuario: string | null
    dt_ult_internacao: Date | null
    dt_ult_alta: Date | null
    dt_ult_consulta: Date | null
    dt_ult_procedimento: Date | null
    dt_ult_atend_hosp_dia: Date | null
    dt_ult_alta_hosp_dia: Date | null
    qrt_numero: number | null
    unf_seq: number | null
    lto_lto_id: string | null
    reg_nascimento: string | null
    nro_cartao_saude: bigint | null
    dt_recadastro: Date | null
    ind_paciente_vip: string
    pac_codigo_mae: number | null
    tipo_data_obito: string | null
    dt_obito_externo: Date | null
    rna_gso_pac_codigo: number | null
    rna_gso_seqp: number | null
    rna_seqp: number | null
    numero_pis: bigint | null
    volumes: number | null
    ind_pac_protegido: string | null
    criado_em: Date | null
    ind_pac_agfa: string | null
    sexo_biologico: string | null
    version: number | null
    etn_id: bigint | null
    id_sistema_legado: bigint | null
    nome_social: string | null
    cnh: Decimal | null
    data_validade_cnh: Date | null
    email: string | null
    rel_codigo: number | null
    dt_exp_germe_multirresistente: Date | null
    germe_multirresistente: string | null
    pac_codigo_valido: number | null
    _count: Aip_pacientesCountAggregateOutputType | null
    _avg: Aip_pacientesAvgAggregateOutputType | null
    _sum: Aip_pacientesSumAggregateOutputType | null
    _min: Aip_pacientesMinAggregateOutputType | null
    _max: Aip_pacientesMaxAggregateOutputType | null
  }

  type GetAip_pacientesGroupByPayload<T extends aip_pacientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Aip_pacientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Aip_pacientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Aip_pacientesGroupByOutputType[P]>
            : GetScalarType<T[P], Aip_pacientesGroupByOutputType[P]>
        }
      >
    >


  export type aip_pacientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    cct_codigo_cadastro?: boolean
    ser_matricula_cadastro?: boolean
    ser_vin_codigo_cadastro?: boolean
    nome?: boolean
    nome_mae?: boolean
    dt_nascimento?: boolean
    dt_identificacao?: boolean
    cct_codigo_recadastro?: boolean
    cdd_codigo?: boolean
    nac_codigo?: boolean
    ocp_codigo?: boolean
    uf_sigla?: boolean
    ser_matricula_recadastro?: boolean
    ser_vin_codigo_recadastro?: boolean
    cor?: boolean
    sexo?: boolean
    grau_instrucao?: boolean
    nome_pai?: boolean
    naturalidade?: boolean
    ddd_fone_residencial?: boolean
    fone_residencial?: boolean
    ddd_fone_recado?: boolean
    fone_recado?: boolean
    estado_civil?: boolean
    cpf?: boolean
    prontuario?: boolean
    dt_obito?: boolean
    rg?: boolean
    orgao_emis_rg?: boolean
    observacao?: boolean
    prnt_ativo?: boolean
    cad_confirmado?: boolean
    ind_gera_prontuario?: boolean
    dt_ult_internacao?: boolean
    dt_ult_alta?: boolean
    dt_ult_consulta?: boolean
    dt_ult_procedimento?: boolean
    dt_ult_atend_hosp_dia?: boolean
    dt_ult_alta_hosp_dia?: boolean
    qrt_numero?: boolean
    unf_seq?: boolean
    lto_lto_id?: boolean
    reg_nascimento?: boolean
    nro_cartao_saude?: boolean
    dt_recadastro?: boolean
    ind_paciente_vip?: boolean
    pac_codigo_mae?: boolean
    tipo_data_obito?: boolean
    dt_obito_externo?: boolean
    rna_gso_pac_codigo?: boolean
    rna_gso_seqp?: boolean
    rna_seqp?: boolean
    numero_pis?: boolean
    volumes?: boolean
    ind_pac_protegido?: boolean
    criado_em?: boolean
    ind_pac_agfa?: boolean
    sexo_biologico?: boolean
    version?: boolean
    etn_id?: boolean
    id_sistema_legado?: boolean
    nome_social?: boolean
    cnh?: boolean
    data_validade_cnh?: boolean
    email?: boolean
    rel_codigo?: boolean
    dt_exp_germe_multirresistente?: boolean
    germe_multirresistente?: boolean
    pac_codigo_valido?: boolean
  }, ExtArgs["result"]["aip_pacientes"]>

  export type aip_pacientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    cct_codigo_cadastro?: boolean
    ser_matricula_cadastro?: boolean
    ser_vin_codigo_cadastro?: boolean
    nome?: boolean
    nome_mae?: boolean
    dt_nascimento?: boolean
    dt_identificacao?: boolean
    cct_codigo_recadastro?: boolean
    cdd_codigo?: boolean
    nac_codigo?: boolean
    ocp_codigo?: boolean
    uf_sigla?: boolean
    ser_matricula_recadastro?: boolean
    ser_vin_codigo_recadastro?: boolean
    cor?: boolean
    sexo?: boolean
    grau_instrucao?: boolean
    nome_pai?: boolean
    naturalidade?: boolean
    ddd_fone_residencial?: boolean
    fone_residencial?: boolean
    ddd_fone_recado?: boolean
    fone_recado?: boolean
    estado_civil?: boolean
    cpf?: boolean
    prontuario?: boolean
    dt_obito?: boolean
    rg?: boolean
    orgao_emis_rg?: boolean
    observacao?: boolean
    prnt_ativo?: boolean
    cad_confirmado?: boolean
    ind_gera_prontuario?: boolean
    dt_ult_internacao?: boolean
    dt_ult_alta?: boolean
    dt_ult_consulta?: boolean
    dt_ult_procedimento?: boolean
    dt_ult_atend_hosp_dia?: boolean
    dt_ult_alta_hosp_dia?: boolean
    qrt_numero?: boolean
    unf_seq?: boolean
    lto_lto_id?: boolean
    reg_nascimento?: boolean
    nro_cartao_saude?: boolean
    dt_recadastro?: boolean
    ind_paciente_vip?: boolean
    pac_codigo_mae?: boolean
    tipo_data_obito?: boolean
    dt_obito_externo?: boolean
    rna_gso_pac_codigo?: boolean
    rna_gso_seqp?: boolean
    rna_seqp?: boolean
    numero_pis?: boolean
    volumes?: boolean
    ind_pac_protegido?: boolean
    criado_em?: boolean
    ind_pac_agfa?: boolean
    sexo_biologico?: boolean
    version?: boolean
    etn_id?: boolean
    id_sistema_legado?: boolean
    nome_social?: boolean
    cnh?: boolean
    data_validade_cnh?: boolean
    email?: boolean
    rel_codigo?: boolean
    dt_exp_germe_multirresistente?: boolean
    germe_multirresistente?: boolean
    pac_codigo_valido?: boolean
  }, ExtArgs["result"]["aip_pacientes"]>

  export type aip_pacientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    cct_codigo_cadastro?: boolean
    ser_matricula_cadastro?: boolean
    ser_vin_codigo_cadastro?: boolean
    nome?: boolean
    nome_mae?: boolean
    dt_nascimento?: boolean
    dt_identificacao?: boolean
    cct_codigo_recadastro?: boolean
    cdd_codigo?: boolean
    nac_codigo?: boolean
    ocp_codigo?: boolean
    uf_sigla?: boolean
    ser_matricula_recadastro?: boolean
    ser_vin_codigo_recadastro?: boolean
    cor?: boolean
    sexo?: boolean
    grau_instrucao?: boolean
    nome_pai?: boolean
    naturalidade?: boolean
    ddd_fone_residencial?: boolean
    fone_residencial?: boolean
    ddd_fone_recado?: boolean
    fone_recado?: boolean
    estado_civil?: boolean
    cpf?: boolean
    prontuario?: boolean
    dt_obito?: boolean
    rg?: boolean
    orgao_emis_rg?: boolean
    observacao?: boolean
    prnt_ativo?: boolean
    cad_confirmado?: boolean
    ind_gera_prontuario?: boolean
    dt_ult_internacao?: boolean
    dt_ult_alta?: boolean
    dt_ult_consulta?: boolean
    dt_ult_procedimento?: boolean
    dt_ult_atend_hosp_dia?: boolean
    dt_ult_alta_hosp_dia?: boolean
    qrt_numero?: boolean
    unf_seq?: boolean
    lto_lto_id?: boolean
    reg_nascimento?: boolean
    nro_cartao_saude?: boolean
    dt_recadastro?: boolean
    ind_paciente_vip?: boolean
    pac_codigo_mae?: boolean
    tipo_data_obito?: boolean
    dt_obito_externo?: boolean
    rna_gso_pac_codigo?: boolean
    rna_gso_seqp?: boolean
    rna_seqp?: boolean
    numero_pis?: boolean
    volumes?: boolean
    ind_pac_protegido?: boolean
    criado_em?: boolean
    ind_pac_agfa?: boolean
    sexo_biologico?: boolean
    version?: boolean
    etn_id?: boolean
    id_sistema_legado?: boolean
    nome_social?: boolean
    cnh?: boolean
    data_validade_cnh?: boolean
    email?: boolean
    rel_codigo?: boolean
    dt_exp_germe_multirresistente?: boolean
    germe_multirresistente?: boolean
    pac_codigo_valido?: boolean
  }, ExtArgs["result"]["aip_pacientes"]>

  export type aip_pacientesSelectScalar = {
    codigo?: boolean
    cct_codigo_cadastro?: boolean
    ser_matricula_cadastro?: boolean
    ser_vin_codigo_cadastro?: boolean
    nome?: boolean
    nome_mae?: boolean
    dt_nascimento?: boolean
    dt_identificacao?: boolean
    cct_codigo_recadastro?: boolean
    cdd_codigo?: boolean
    nac_codigo?: boolean
    ocp_codigo?: boolean
    uf_sigla?: boolean
    ser_matricula_recadastro?: boolean
    ser_vin_codigo_recadastro?: boolean
    cor?: boolean
    sexo?: boolean
    grau_instrucao?: boolean
    nome_pai?: boolean
    naturalidade?: boolean
    ddd_fone_residencial?: boolean
    fone_residencial?: boolean
    ddd_fone_recado?: boolean
    fone_recado?: boolean
    estado_civil?: boolean
    cpf?: boolean
    prontuario?: boolean
    dt_obito?: boolean
    rg?: boolean
    orgao_emis_rg?: boolean
    observacao?: boolean
    prnt_ativo?: boolean
    cad_confirmado?: boolean
    ind_gera_prontuario?: boolean
    dt_ult_internacao?: boolean
    dt_ult_alta?: boolean
    dt_ult_consulta?: boolean
    dt_ult_procedimento?: boolean
    dt_ult_atend_hosp_dia?: boolean
    dt_ult_alta_hosp_dia?: boolean
    qrt_numero?: boolean
    unf_seq?: boolean
    lto_lto_id?: boolean
    reg_nascimento?: boolean
    nro_cartao_saude?: boolean
    dt_recadastro?: boolean
    ind_paciente_vip?: boolean
    pac_codigo_mae?: boolean
    tipo_data_obito?: boolean
    dt_obito_externo?: boolean
    rna_gso_pac_codigo?: boolean
    rna_gso_seqp?: boolean
    rna_seqp?: boolean
    numero_pis?: boolean
    volumes?: boolean
    ind_pac_protegido?: boolean
    criado_em?: boolean
    ind_pac_agfa?: boolean
    sexo_biologico?: boolean
    version?: boolean
    etn_id?: boolean
    id_sistema_legado?: boolean
    nome_social?: boolean
    cnh?: boolean
    data_validade_cnh?: boolean
    email?: boolean
    rel_codigo?: boolean
    dt_exp_germe_multirresistente?: boolean
    germe_multirresistente?: boolean
    pac_codigo_valido?: boolean
  }

  export type aip_pacientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigo" | "cct_codigo_cadastro" | "ser_matricula_cadastro" | "ser_vin_codigo_cadastro" | "nome" | "nome_mae" | "dt_nascimento" | "dt_identificacao" | "cct_codigo_recadastro" | "cdd_codigo" | "nac_codigo" | "ocp_codigo" | "uf_sigla" | "ser_matricula_recadastro" | "ser_vin_codigo_recadastro" | "cor" | "sexo" | "grau_instrucao" | "nome_pai" | "naturalidade" | "ddd_fone_residencial" | "fone_residencial" | "ddd_fone_recado" | "fone_recado" | "estado_civil" | "cpf" | "prontuario" | "dt_obito" | "rg" | "orgao_emis_rg" | "observacao" | "prnt_ativo" | "cad_confirmado" | "ind_gera_prontuario" | "dt_ult_internacao" | "dt_ult_alta" | "dt_ult_consulta" | "dt_ult_procedimento" | "dt_ult_atend_hosp_dia" | "dt_ult_alta_hosp_dia" | "qrt_numero" | "unf_seq" | "lto_lto_id" | "reg_nascimento" | "nro_cartao_saude" | "dt_recadastro" | "ind_paciente_vip" | "pac_codigo_mae" | "tipo_data_obito" | "dt_obito_externo" | "rna_gso_pac_codigo" | "rna_gso_seqp" | "rna_seqp" | "numero_pis" | "volumes" | "ind_pac_protegido" | "criado_em" | "ind_pac_agfa" | "sexo_biologico" | "version" | "etn_id" | "id_sistema_legado" | "nome_social" | "cnh" | "data_validade_cnh" | "email" | "rel_codigo" | "dt_exp_germe_multirresistente" | "germe_multirresistente" | "pac_codigo_valido", ExtArgs["result"]["aip_pacientes"]>

  export type $aip_pacientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "aip_pacientes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      codigo: number
      cct_codigo_cadastro: number
      ser_matricula_cadastro: number
      ser_vin_codigo_cadastro: number
      nome: string
      nome_mae: string
      dt_nascimento: Date
      dt_identificacao: Date
      cct_codigo_recadastro: number | null
      cdd_codigo: number | null
      nac_codigo: number | null
      ocp_codigo: number | null
      uf_sigla: string | null
      ser_matricula_recadastro: number | null
      ser_vin_codigo_recadastro: number | null
      cor: string | null
      sexo: string | null
      grau_instrucao: number | null
      nome_pai: string | null
      naturalidade: string | null
      ddd_fone_residencial: number | null
      fone_residencial: bigint | null
      ddd_fone_recado: number | null
      fone_recado: string | null
      estado_civil: string | null
      cpf: bigint | null
      prontuario: number | null
      dt_obito: Date | null
      rg: string | null
      orgao_emis_rg: string | null
      observacao: string | null
      prnt_ativo: string | null
      cad_confirmado: string | null
      ind_gera_prontuario: string | null
      dt_ult_internacao: Date | null
      dt_ult_alta: Date | null
      dt_ult_consulta: Date | null
      dt_ult_procedimento: Date | null
      dt_ult_atend_hosp_dia: Date | null
      dt_ult_alta_hosp_dia: Date | null
      qrt_numero: number | null
      unf_seq: number | null
      lto_lto_id: string | null
      reg_nascimento: string | null
      nro_cartao_saude: bigint | null
      dt_recadastro: Date | null
      ind_paciente_vip: string
      pac_codigo_mae: number | null
      tipo_data_obito: string | null
      dt_obito_externo: Date | null
      rna_gso_pac_codigo: number | null
      rna_gso_seqp: number | null
      rna_seqp: number | null
      numero_pis: bigint | null
      volumes: number | null
      ind_pac_protegido: string | null
      criado_em: Date | null
      ind_pac_agfa: string | null
      sexo_biologico: string | null
      version: number | null
      etn_id: bigint | null
      id_sistema_legado: bigint | null
      nome_social: string | null
      cnh: Prisma.Decimal | null
      data_validade_cnh: Date | null
      email: string | null
      rel_codigo: number | null
      dt_exp_germe_multirresistente: Date | null
      germe_multirresistente: string | null
      pac_codigo_valido: number | null
    }, ExtArgs["result"]["aip_pacientes"]>
    composites: {}
  }

  type aip_pacientesGetPayload<S extends boolean | null | undefined | aip_pacientesDefaultArgs> = $Result.GetResult<Prisma.$aip_pacientesPayload, S>

  type aip_pacientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<aip_pacientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Aip_pacientesCountAggregateInputType | true
    }

  export interface aip_pacientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['aip_pacientes'], meta: { name: 'aip_pacientes' } }
    /**
     * Find zero or one Aip_pacientes that matches the filter.
     * @param {aip_pacientesFindUniqueArgs} args - Arguments to find a Aip_pacientes
     * @example
     * // Get one Aip_pacientes
     * const aip_pacientes = await prisma.aip_pacientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends aip_pacientesFindUniqueArgs>(args: SelectSubset<T, aip_pacientesFindUniqueArgs<ExtArgs>>): Prisma__aip_pacientesClient<$Result.GetResult<Prisma.$aip_pacientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aip_pacientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {aip_pacientesFindUniqueOrThrowArgs} args - Arguments to find a Aip_pacientes
     * @example
     * // Get one Aip_pacientes
     * const aip_pacientes = await prisma.aip_pacientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends aip_pacientesFindUniqueOrThrowArgs>(args: SelectSubset<T, aip_pacientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__aip_pacientesClient<$Result.GetResult<Prisma.$aip_pacientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aip_pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aip_pacientesFindFirstArgs} args - Arguments to find a Aip_pacientes
     * @example
     * // Get one Aip_pacientes
     * const aip_pacientes = await prisma.aip_pacientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends aip_pacientesFindFirstArgs>(args?: SelectSubset<T, aip_pacientesFindFirstArgs<ExtArgs>>): Prisma__aip_pacientesClient<$Result.GetResult<Prisma.$aip_pacientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aip_pacientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aip_pacientesFindFirstOrThrowArgs} args - Arguments to find a Aip_pacientes
     * @example
     * // Get one Aip_pacientes
     * const aip_pacientes = await prisma.aip_pacientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends aip_pacientesFindFirstOrThrowArgs>(args?: SelectSubset<T, aip_pacientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__aip_pacientesClient<$Result.GetResult<Prisma.$aip_pacientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aip_pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aip_pacientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aip_pacientes
     * const aip_pacientes = await prisma.aip_pacientes.findMany()
     * 
     * // Get first 10 Aip_pacientes
     * const aip_pacientes = await prisma.aip_pacientes.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const aip_pacientesWithCodigoOnly = await prisma.aip_pacientes.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends aip_pacientesFindManyArgs>(args?: SelectSubset<T, aip_pacientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aip_pacientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aip_pacientes.
     * @param {aip_pacientesCreateArgs} args - Arguments to create a Aip_pacientes.
     * @example
     * // Create one Aip_pacientes
     * const Aip_pacientes = await prisma.aip_pacientes.create({
     *   data: {
     *     // ... data to create a Aip_pacientes
     *   }
     * })
     * 
     */
    create<T extends aip_pacientesCreateArgs>(args: SelectSubset<T, aip_pacientesCreateArgs<ExtArgs>>): Prisma__aip_pacientesClient<$Result.GetResult<Prisma.$aip_pacientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aip_pacientes.
     * @param {aip_pacientesCreateManyArgs} args - Arguments to create many Aip_pacientes.
     * @example
     * // Create many Aip_pacientes
     * const aip_pacientes = await prisma.aip_pacientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends aip_pacientesCreateManyArgs>(args?: SelectSubset<T, aip_pacientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aip_pacientes and returns the data saved in the database.
     * @param {aip_pacientesCreateManyAndReturnArgs} args - Arguments to create many Aip_pacientes.
     * @example
     * // Create many Aip_pacientes
     * const aip_pacientes = await prisma.aip_pacientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aip_pacientes and only return the `codigo`
     * const aip_pacientesWithCodigoOnly = await prisma.aip_pacientes.createManyAndReturn({
     *   select: { codigo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends aip_pacientesCreateManyAndReturnArgs>(args?: SelectSubset<T, aip_pacientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aip_pacientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aip_pacientes.
     * @param {aip_pacientesDeleteArgs} args - Arguments to delete one Aip_pacientes.
     * @example
     * // Delete one Aip_pacientes
     * const Aip_pacientes = await prisma.aip_pacientes.delete({
     *   where: {
     *     // ... filter to delete one Aip_pacientes
     *   }
     * })
     * 
     */
    delete<T extends aip_pacientesDeleteArgs>(args: SelectSubset<T, aip_pacientesDeleteArgs<ExtArgs>>): Prisma__aip_pacientesClient<$Result.GetResult<Prisma.$aip_pacientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aip_pacientes.
     * @param {aip_pacientesUpdateArgs} args - Arguments to update one Aip_pacientes.
     * @example
     * // Update one Aip_pacientes
     * const aip_pacientes = await prisma.aip_pacientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends aip_pacientesUpdateArgs>(args: SelectSubset<T, aip_pacientesUpdateArgs<ExtArgs>>): Prisma__aip_pacientesClient<$Result.GetResult<Prisma.$aip_pacientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aip_pacientes.
     * @param {aip_pacientesDeleteManyArgs} args - Arguments to filter Aip_pacientes to delete.
     * @example
     * // Delete a few Aip_pacientes
     * const { count } = await prisma.aip_pacientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends aip_pacientesDeleteManyArgs>(args?: SelectSubset<T, aip_pacientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aip_pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aip_pacientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aip_pacientes
     * const aip_pacientes = await prisma.aip_pacientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends aip_pacientesUpdateManyArgs>(args: SelectSubset<T, aip_pacientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aip_pacientes and returns the data updated in the database.
     * @param {aip_pacientesUpdateManyAndReturnArgs} args - Arguments to update many Aip_pacientes.
     * @example
     * // Update many Aip_pacientes
     * const aip_pacientes = await prisma.aip_pacientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Aip_pacientes and only return the `codigo`
     * const aip_pacientesWithCodigoOnly = await prisma.aip_pacientes.updateManyAndReturn({
     *   select: { codigo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends aip_pacientesUpdateManyAndReturnArgs>(args: SelectSubset<T, aip_pacientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aip_pacientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aip_pacientes.
     * @param {aip_pacientesUpsertArgs} args - Arguments to update or create a Aip_pacientes.
     * @example
     * // Update or create a Aip_pacientes
     * const aip_pacientes = await prisma.aip_pacientes.upsert({
     *   create: {
     *     // ... data to create a Aip_pacientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aip_pacientes we want to update
     *   }
     * })
     */
    upsert<T extends aip_pacientesUpsertArgs>(args: SelectSubset<T, aip_pacientesUpsertArgs<ExtArgs>>): Prisma__aip_pacientesClient<$Result.GetResult<Prisma.$aip_pacientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aip_pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aip_pacientesCountArgs} args - Arguments to filter Aip_pacientes to count.
     * @example
     * // Count the number of Aip_pacientes
     * const count = await prisma.aip_pacientes.count({
     *   where: {
     *     // ... the filter for the Aip_pacientes we want to count
     *   }
     * })
    **/
    count<T extends aip_pacientesCountArgs>(
      args?: Subset<T, aip_pacientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Aip_pacientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aip_pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Aip_pacientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Aip_pacientesAggregateArgs>(args: Subset<T, Aip_pacientesAggregateArgs>): Prisma.PrismaPromise<GetAip_pacientesAggregateType<T>>

    /**
     * Group by Aip_pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aip_pacientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends aip_pacientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aip_pacientesGroupByArgs['orderBy'] }
        : { orderBy?: aip_pacientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, aip_pacientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAip_pacientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the aip_pacientes model
   */
  readonly fields: aip_pacientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for aip_pacientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aip_pacientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the aip_pacientes model
   */
  interface aip_pacientesFieldRefs {
    readonly codigo: FieldRef<"aip_pacientes", 'Int'>
    readonly cct_codigo_cadastro: FieldRef<"aip_pacientes", 'Int'>
    readonly ser_matricula_cadastro: FieldRef<"aip_pacientes", 'Int'>
    readonly ser_vin_codigo_cadastro: FieldRef<"aip_pacientes", 'Int'>
    readonly nome: FieldRef<"aip_pacientes", 'String'>
    readonly nome_mae: FieldRef<"aip_pacientes", 'String'>
    readonly dt_nascimento: FieldRef<"aip_pacientes", 'DateTime'>
    readonly dt_identificacao: FieldRef<"aip_pacientes", 'DateTime'>
    readonly cct_codigo_recadastro: FieldRef<"aip_pacientes", 'Int'>
    readonly cdd_codigo: FieldRef<"aip_pacientes", 'Int'>
    readonly nac_codigo: FieldRef<"aip_pacientes", 'Int'>
    readonly ocp_codigo: FieldRef<"aip_pacientes", 'Int'>
    readonly uf_sigla: FieldRef<"aip_pacientes", 'String'>
    readonly ser_matricula_recadastro: FieldRef<"aip_pacientes", 'Int'>
    readonly ser_vin_codigo_recadastro: FieldRef<"aip_pacientes", 'Int'>
    readonly cor: FieldRef<"aip_pacientes", 'String'>
    readonly sexo: FieldRef<"aip_pacientes", 'String'>
    readonly grau_instrucao: FieldRef<"aip_pacientes", 'Int'>
    readonly nome_pai: FieldRef<"aip_pacientes", 'String'>
    readonly naturalidade: FieldRef<"aip_pacientes", 'String'>
    readonly ddd_fone_residencial: FieldRef<"aip_pacientes", 'Int'>
    readonly fone_residencial: FieldRef<"aip_pacientes", 'BigInt'>
    readonly ddd_fone_recado: FieldRef<"aip_pacientes", 'Int'>
    readonly fone_recado: FieldRef<"aip_pacientes", 'String'>
    readonly estado_civil: FieldRef<"aip_pacientes", 'String'>
    readonly cpf: FieldRef<"aip_pacientes", 'BigInt'>
    readonly prontuario: FieldRef<"aip_pacientes", 'Int'>
    readonly dt_obito: FieldRef<"aip_pacientes", 'DateTime'>
    readonly rg: FieldRef<"aip_pacientes", 'String'>
    readonly orgao_emis_rg: FieldRef<"aip_pacientes", 'String'>
    readonly observacao: FieldRef<"aip_pacientes", 'String'>
    readonly prnt_ativo: FieldRef<"aip_pacientes", 'String'>
    readonly cad_confirmado: FieldRef<"aip_pacientes", 'String'>
    readonly ind_gera_prontuario: FieldRef<"aip_pacientes", 'String'>
    readonly dt_ult_internacao: FieldRef<"aip_pacientes", 'DateTime'>
    readonly dt_ult_alta: FieldRef<"aip_pacientes", 'DateTime'>
    readonly dt_ult_consulta: FieldRef<"aip_pacientes", 'DateTime'>
    readonly dt_ult_procedimento: FieldRef<"aip_pacientes", 'DateTime'>
    readonly dt_ult_atend_hosp_dia: FieldRef<"aip_pacientes", 'DateTime'>
    readonly dt_ult_alta_hosp_dia: FieldRef<"aip_pacientes", 'DateTime'>
    readonly qrt_numero: FieldRef<"aip_pacientes", 'Int'>
    readonly unf_seq: FieldRef<"aip_pacientes", 'Int'>
    readonly lto_lto_id: FieldRef<"aip_pacientes", 'String'>
    readonly reg_nascimento: FieldRef<"aip_pacientes", 'String'>
    readonly nro_cartao_saude: FieldRef<"aip_pacientes", 'BigInt'>
    readonly dt_recadastro: FieldRef<"aip_pacientes", 'DateTime'>
    readonly ind_paciente_vip: FieldRef<"aip_pacientes", 'String'>
    readonly pac_codigo_mae: FieldRef<"aip_pacientes", 'Int'>
    readonly tipo_data_obito: FieldRef<"aip_pacientes", 'String'>
    readonly dt_obito_externo: FieldRef<"aip_pacientes", 'DateTime'>
    readonly rna_gso_pac_codigo: FieldRef<"aip_pacientes", 'Int'>
    readonly rna_gso_seqp: FieldRef<"aip_pacientes", 'Int'>
    readonly rna_seqp: FieldRef<"aip_pacientes", 'Int'>
    readonly numero_pis: FieldRef<"aip_pacientes", 'BigInt'>
    readonly volumes: FieldRef<"aip_pacientes", 'Int'>
    readonly ind_pac_protegido: FieldRef<"aip_pacientes", 'String'>
    readonly criado_em: FieldRef<"aip_pacientes", 'DateTime'>
    readonly ind_pac_agfa: FieldRef<"aip_pacientes", 'String'>
    readonly sexo_biologico: FieldRef<"aip_pacientes", 'String'>
    readonly version: FieldRef<"aip_pacientes", 'Int'>
    readonly etn_id: FieldRef<"aip_pacientes", 'BigInt'>
    readonly id_sistema_legado: FieldRef<"aip_pacientes", 'BigInt'>
    readonly nome_social: FieldRef<"aip_pacientes", 'String'>
    readonly cnh: FieldRef<"aip_pacientes", 'Decimal'>
    readonly data_validade_cnh: FieldRef<"aip_pacientes", 'DateTime'>
    readonly email: FieldRef<"aip_pacientes", 'String'>
    readonly rel_codigo: FieldRef<"aip_pacientes", 'Int'>
    readonly dt_exp_germe_multirresistente: FieldRef<"aip_pacientes", 'DateTime'>
    readonly germe_multirresistente: FieldRef<"aip_pacientes", 'String'>
    readonly pac_codigo_valido: FieldRef<"aip_pacientes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * aip_pacientes findUnique
   */
  export type aip_pacientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aip_pacientes
     */
    select?: aip_pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aip_pacientes
     */
    omit?: aip_pacientesOmit<ExtArgs> | null
    /**
     * Filter, which aip_pacientes to fetch.
     */
    where: aip_pacientesWhereUniqueInput
  }

  /**
   * aip_pacientes findUniqueOrThrow
   */
  export type aip_pacientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aip_pacientes
     */
    select?: aip_pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aip_pacientes
     */
    omit?: aip_pacientesOmit<ExtArgs> | null
    /**
     * Filter, which aip_pacientes to fetch.
     */
    where: aip_pacientesWhereUniqueInput
  }

  /**
   * aip_pacientes findFirst
   */
  export type aip_pacientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aip_pacientes
     */
    select?: aip_pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aip_pacientes
     */
    omit?: aip_pacientesOmit<ExtArgs> | null
    /**
     * Filter, which aip_pacientes to fetch.
     */
    where?: aip_pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aip_pacientes to fetch.
     */
    orderBy?: aip_pacientesOrderByWithRelationInput | aip_pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aip_pacientes.
     */
    cursor?: aip_pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aip_pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aip_pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aip_pacientes.
     */
    distinct?: Aip_pacientesScalarFieldEnum | Aip_pacientesScalarFieldEnum[]
  }

  /**
   * aip_pacientes findFirstOrThrow
   */
  export type aip_pacientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aip_pacientes
     */
    select?: aip_pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aip_pacientes
     */
    omit?: aip_pacientesOmit<ExtArgs> | null
    /**
     * Filter, which aip_pacientes to fetch.
     */
    where?: aip_pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aip_pacientes to fetch.
     */
    orderBy?: aip_pacientesOrderByWithRelationInput | aip_pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for aip_pacientes.
     */
    cursor?: aip_pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aip_pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aip_pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of aip_pacientes.
     */
    distinct?: Aip_pacientesScalarFieldEnum | Aip_pacientesScalarFieldEnum[]
  }

  /**
   * aip_pacientes findMany
   */
  export type aip_pacientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aip_pacientes
     */
    select?: aip_pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aip_pacientes
     */
    omit?: aip_pacientesOmit<ExtArgs> | null
    /**
     * Filter, which aip_pacientes to fetch.
     */
    where?: aip_pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of aip_pacientes to fetch.
     */
    orderBy?: aip_pacientesOrderByWithRelationInput | aip_pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing aip_pacientes.
     */
    cursor?: aip_pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` aip_pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` aip_pacientes.
     */
    skip?: number
    distinct?: Aip_pacientesScalarFieldEnum | Aip_pacientesScalarFieldEnum[]
  }

  /**
   * aip_pacientes create
   */
  export type aip_pacientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aip_pacientes
     */
    select?: aip_pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aip_pacientes
     */
    omit?: aip_pacientesOmit<ExtArgs> | null
    /**
     * The data needed to create a aip_pacientes.
     */
    data: XOR<aip_pacientesCreateInput, aip_pacientesUncheckedCreateInput>
  }

  /**
   * aip_pacientes createMany
   */
  export type aip_pacientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many aip_pacientes.
     */
    data: aip_pacientesCreateManyInput | aip_pacientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aip_pacientes createManyAndReturn
   */
  export type aip_pacientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aip_pacientes
     */
    select?: aip_pacientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the aip_pacientes
     */
    omit?: aip_pacientesOmit<ExtArgs> | null
    /**
     * The data used to create many aip_pacientes.
     */
    data: aip_pacientesCreateManyInput | aip_pacientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * aip_pacientes update
   */
  export type aip_pacientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aip_pacientes
     */
    select?: aip_pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aip_pacientes
     */
    omit?: aip_pacientesOmit<ExtArgs> | null
    /**
     * The data needed to update a aip_pacientes.
     */
    data: XOR<aip_pacientesUpdateInput, aip_pacientesUncheckedUpdateInput>
    /**
     * Choose, which aip_pacientes to update.
     */
    where: aip_pacientesWhereUniqueInput
  }

  /**
   * aip_pacientes updateMany
   */
  export type aip_pacientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update aip_pacientes.
     */
    data: XOR<aip_pacientesUpdateManyMutationInput, aip_pacientesUncheckedUpdateManyInput>
    /**
     * Filter which aip_pacientes to update
     */
    where?: aip_pacientesWhereInput
    /**
     * Limit how many aip_pacientes to update.
     */
    limit?: number
  }

  /**
   * aip_pacientes updateManyAndReturn
   */
  export type aip_pacientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aip_pacientes
     */
    select?: aip_pacientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the aip_pacientes
     */
    omit?: aip_pacientesOmit<ExtArgs> | null
    /**
     * The data used to update aip_pacientes.
     */
    data: XOR<aip_pacientesUpdateManyMutationInput, aip_pacientesUncheckedUpdateManyInput>
    /**
     * Filter which aip_pacientes to update
     */
    where?: aip_pacientesWhereInput
    /**
     * Limit how many aip_pacientes to update.
     */
    limit?: number
  }

  /**
   * aip_pacientes upsert
   */
  export type aip_pacientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aip_pacientes
     */
    select?: aip_pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aip_pacientes
     */
    omit?: aip_pacientesOmit<ExtArgs> | null
    /**
     * The filter to search for the aip_pacientes to update in case it exists.
     */
    where: aip_pacientesWhereUniqueInput
    /**
     * In case the aip_pacientes found by the `where` argument doesn't exist, create a new aip_pacientes with this data.
     */
    create: XOR<aip_pacientesCreateInput, aip_pacientesUncheckedCreateInput>
    /**
     * In case the aip_pacientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aip_pacientesUpdateInput, aip_pacientesUncheckedUpdateInput>
  }

  /**
   * aip_pacientes delete
   */
  export type aip_pacientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aip_pacientes
     */
    select?: aip_pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aip_pacientes
     */
    omit?: aip_pacientesOmit<ExtArgs> | null
    /**
     * Filter which aip_pacientes to delete.
     */
    where: aip_pacientesWhereUniqueInput
  }

  /**
   * aip_pacientes deleteMany
   */
  export type aip_pacientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which aip_pacientes to delete
     */
    where?: aip_pacientesWhereInput
    /**
     * Limit how many aip_pacientes to delete.
     */
    limit?: number
  }

  /**
   * aip_pacientes without action
   */
  export type aip_pacientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aip_pacientes
     */
    select?: aip_pacientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the aip_pacientes
     */
    omit?: aip_pacientesOmit<ExtArgs> | null
  }


  /**
   * Model rap_pessoas_fisicas
   */

  export type AggregateRap_pessoas_fisicas = {
    _count: Rap_pessoas_fisicasCountAggregateOutputType | null
    _avg: Rap_pessoas_fisicasAvgAggregateOutputType | null
    _sum: Rap_pessoas_fisicasSumAggregateOutputType | null
    _min: Rap_pessoas_fisicasMinAggregateOutputType | null
    _max: Rap_pessoas_fisicasMaxAggregateOutputType | null
  }

  export type Rap_pessoas_fisicasAvgAggregateOutputType = {
    codigo: number | null
    cpf: number | null
    pac_prontuario: number | null
    grau_instrucao: number | null
    bcl_clo_lgr_codigo: number | null
    bcl_clo_cep: number | null
    bcl_bai_codigo: number | null
    cdd_codigo: number | null
    nac_codigo: number | null
    nro_logradouro: number | null
    cep: number | null
    nro_cart_profissional: number | null
    pis_pasep: number | null
    nro_tit_eleitor: number | null
    zona_tit_eleitor: number | null
    secao_tit_eleitor: number | null
    ddd_fone_residencial: number | null
    fone_residencial: number | null
    ramal_fone_residencial: number | null
    ddd_fone_celular: number | null
    fone_celular: number | null
    ddd_fone_pager_bip: number | null
    fone_pager_bip: number | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    pac_codigo: number | null
    version: number | null
    cdd_codigo_municipio: number | null
    orgao_emissor_rg: number | null
  }

  export type Rap_pessoas_fisicasSumAggregateOutputType = {
    codigo: number | null
    cpf: bigint | null
    pac_prontuario: number | null
    grau_instrucao: number | null
    bcl_clo_lgr_codigo: number | null
    bcl_clo_cep: number | null
    bcl_bai_codigo: number | null
    cdd_codigo: number | null
    nac_codigo: number | null
    nro_logradouro: number | null
    cep: number | null
    nro_cart_profissional: number | null
    pis_pasep: bigint | null
    nro_tit_eleitor: bigint | null
    zona_tit_eleitor: number | null
    secao_tit_eleitor: number | null
    ddd_fone_residencial: number | null
    fone_residencial: bigint | null
    ramal_fone_residencial: number | null
    ddd_fone_celular: number | null
    fone_celular: bigint | null
    ddd_fone_pager_bip: number | null
    fone_pager_bip: number | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    pac_codigo: number | null
    version: number | null
    cdd_codigo_municipio: number | null
    orgao_emissor_rg: number | null
  }

  export type Rap_pessoas_fisicasMinAggregateOutputType = {
    codigo: number | null
    cpf: bigint | null
    nome: string | null
    nome_mae: string | null
    pac_prontuario: number | null
    nome_pai: string | null
    dt_nascimento: Date | null
    sexo: string | null
    nome_usual: string | null
    grau_instrucao: number | null
    estado_civil: string | null
    bcl_clo_lgr_codigo: number | null
    bcl_clo_cep: number | null
    bcl_bai_codigo: number | null
    cdd_codigo: number | null
    nac_codigo: number | null
    logradouro: string | null
    compl_logradouro: string | null
    nro_logradouro: number | null
    cep: number | null
    bairro: string | null
    cidade_nascimento: string | null
    uf_sigla: string | null
    nro_identidade: string | null
    nro_cart_profissional: number | null
    serie_cart_profissional: string | null
    pis_pasep: bigint | null
    nro_tit_eleitor: bigint | null
    zona_tit_eleitor: number | null
    secao_tit_eleitor: number | null
    ddd_fone_residencial: number | null
    fone_residencial: bigint | null
    ramal_fone_residencial: number | null
    ddd_fone_celular: number | null
    fone_celular: bigint | null
    ddd_fone_pager_bip: number | null
    fone_pager_bip: number | null
    nro_pager_bip: string | null
    email_particular: string | null
    criado_em: Date | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    pac_codigo: number | null
    version: number | null
    cdd_codigo_municipio: number | null
    uf_orgao: string | null
    dt_emissao_documento: Date | null
    orgao_emissor_rg: number | null
  }

  export type Rap_pessoas_fisicasMaxAggregateOutputType = {
    codigo: number | null
    cpf: bigint | null
    nome: string | null
    nome_mae: string | null
    pac_prontuario: number | null
    nome_pai: string | null
    dt_nascimento: Date | null
    sexo: string | null
    nome_usual: string | null
    grau_instrucao: number | null
    estado_civil: string | null
    bcl_clo_lgr_codigo: number | null
    bcl_clo_cep: number | null
    bcl_bai_codigo: number | null
    cdd_codigo: number | null
    nac_codigo: number | null
    logradouro: string | null
    compl_logradouro: string | null
    nro_logradouro: number | null
    cep: number | null
    bairro: string | null
    cidade_nascimento: string | null
    uf_sigla: string | null
    nro_identidade: string | null
    nro_cart_profissional: number | null
    serie_cart_profissional: string | null
    pis_pasep: bigint | null
    nro_tit_eleitor: bigint | null
    zona_tit_eleitor: number | null
    secao_tit_eleitor: number | null
    ddd_fone_residencial: number | null
    fone_residencial: bigint | null
    ramal_fone_residencial: number | null
    ddd_fone_celular: number | null
    fone_celular: bigint | null
    ddd_fone_pager_bip: number | null
    fone_pager_bip: number | null
    nro_pager_bip: string | null
    email_particular: string | null
    criado_em: Date | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    pac_codigo: number | null
    version: number | null
    cdd_codigo_municipio: number | null
    uf_orgao: string | null
    dt_emissao_documento: Date | null
    orgao_emissor_rg: number | null
  }

  export type Rap_pessoas_fisicasCountAggregateOutputType = {
    codigo: number
    cpf: number
    nome: number
    nome_mae: number
    pac_prontuario: number
    nome_pai: number
    dt_nascimento: number
    sexo: number
    nome_usual: number
    grau_instrucao: number
    estado_civil: number
    bcl_clo_lgr_codigo: number
    bcl_clo_cep: number
    bcl_bai_codigo: number
    cdd_codigo: number
    nac_codigo: number
    logradouro: number
    compl_logradouro: number
    nro_logradouro: number
    cep: number
    bairro: number
    cidade_nascimento: number
    uf_sigla: number
    nro_identidade: number
    nro_cart_profissional: number
    serie_cart_profissional: number
    pis_pasep: number
    nro_tit_eleitor: number
    zona_tit_eleitor: number
    secao_tit_eleitor: number
    ddd_fone_residencial: number
    fone_residencial: number
    ramal_fone_residencial: number
    ddd_fone_celular: number
    fone_celular: number
    ddd_fone_pager_bip: number
    fone_pager_bip: number
    nro_pager_bip: number
    email_particular: number
    criado_em: number
    ser_matricula: number
    ser_vin_codigo: number
    pac_codigo: number
    version: number
    cdd_codigo_municipio: number
    uf_orgao: number
    dt_emissao_documento: number
    orgao_emissor_rg: number
    _all: number
  }


  export type Rap_pessoas_fisicasAvgAggregateInputType = {
    codigo?: true
    cpf?: true
    pac_prontuario?: true
    grau_instrucao?: true
    bcl_clo_lgr_codigo?: true
    bcl_clo_cep?: true
    bcl_bai_codigo?: true
    cdd_codigo?: true
    nac_codigo?: true
    nro_logradouro?: true
    cep?: true
    nro_cart_profissional?: true
    pis_pasep?: true
    nro_tit_eleitor?: true
    zona_tit_eleitor?: true
    secao_tit_eleitor?: true
    ddd_fone_residencial?: true
    fone_residencial?: true
    ramal_fone_residencial?: true
    ddd_fone_celular?: true
    fone_celular?: true
    ddd_fone_pager_bip?: true
    fone_pager_bip?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    pac_codigo?: true
    version?: true
    cdd_codigo_municipio?: true
    orgao_emissor_rg?: true
  }

  export type Rap_pessoas_fisicasSumAggregateInputType = {
    codigo?: true
    cpf?: true
    pac_prontuario?: true
    grau_instrucao?: true
    bcl_clo_lgr_codigo?: true
    bcl_clo_cep?: true
    bcl_bai_codigo?: true
    cdd_codigo?: true
    nac_codigo?: true
    nro_logradouro?: true
    cep?: true
    nro_cart_profissional?: true
    pis_pasep?: true
    nro_tit_eleitor?: true
    zona_tit_eleitor?: true
    secao_tit_eleitor?: true
    ddd_fone_residencial?: true
    fone_residencial?: true
    ramal_fone_residencial?: true
    ddd_fone_celular?: true
    fone_celular?: true
    ddd_fone_pager_bip?: true
    fone_pager_bip?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    pac_codigo?: true
    version?: true
    cdd_codigo_municipio?: true
    orgao_emissor_rg?: true
  }

  export type Rap_pessoas_fisicasMinAggregateInputType = {
    codigo?: true
    cpf?: true
    nome?: true
    nome_mae?: true
    pac_prontuario?: true
    nome_pai?: true
    dt_nascimento?: true
    sexo?: true
    nome_usual?: true
    grau_instrucao?: true
    estado_civil?: true
    bcl_clo_lgr_codigo?: true
    bcl_clo_cep?: true
    bcl_bai_codigo?: true
    cdd_codigo?: true
    nac_codigo?: true
    logradouro?: true
    compl_logradouro?: true
    nro_logradouro?: true
    cep?: true
    bairro?: true
    cidade_nascimento?: true
    uf_sigla?: true
    nro_identidade?: true
    nro_cart_profissional?: true
    serie_cart_profissional?: true
    pis_pasep?: true
    nro_tit_eleitor?: true
    zona_tit_eleitor?: true
    secao_tit_eleitor?: true
    ddd_fone_residencial?: true
    fone_residencial?: true
    ramal_fone_residencial?: true
    ddd_fone_celular?: true
    fone_celular?: true
    ddd_fone_pager_bip?: true
    fone_pager_bip?: true
    nro_pager_bip?: true
    email_particular?: true
    criado_em?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    pac_codigo?: true
    version?: true
    cdd_codigo_municipio?: true
    uf_orgao?: true
    dt_emissao_documento?: true
    orgao_emissor_rg?: true
  }

  export type Rap_pessoas_fisicasMaxAggregateInputType = {
    codigo?: true
    cpf?: true
    nome?: true
    nome_mae?: true
    pac_prontuario?: true
    nome_pai?: true
    dt_nascimento?: true
    sexo?: true
    nome_usual?: true
    grau_instrucao?: true
    estado_civil?: true
    bcl_clo_lgr_codigo?: true
    bcl_clo_cep?: true
    bcl_bai_codigo?: true
    cdd_codigo?: true
    nac_codigo?: true
    logradouro?: true
    compl_logradouro?: true
    nro_logradouro?: true
    cep?: true
    bairro?: true
    cidade_nascimento?: true
    uf_sigla?: true
    nro_identidade?: true
    nro_cart_profissional?: true
    serie_cart_profissional?: true
    pis_pasep?: true
    nro_tit_eleitor?: true
    zona_tit_eleitor?: true
    secao_tit_eleitor?: true
    ddd_fone_residencial?: true
    fone_residencial?: true
    ramal_fone_residencial?: true
    ddd_fone_celular?: true
    fone_celular?: true
    ddd_fone_pager_bip?: true
    fone_pager_bip?: true
    nro_pager_bip?: true
    email_particular?: true
    criado_em?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    pac_codigo?: true
    version?: true
    cdd_codigo_municipio?: true
    uf_orgao?: true
    dt_emissao_documento?: true
    orgao_emissor_rg?: true
  }

  export type Rap_pessoas_fisicasCountAggregateInputType = {
    codigo?: true
    cpf?: true
    nome?: true
    nome_mae?: true
    pac_prontuario?: true
    nome_pai?: true
    dt_nascimento?: true
    sexo?: true
    nome_usual?: true
    grau_instrucao?: true
    estado_civil?: true
    bcl_clo_lgr_codigo?: true
    bcl_clo_cep?: true
    bcl_bai_codigo?: true
    cdd_codigo?: true
    nac_codigo?: true
    logradouro?: true
    compl_logradouro?: true
    nro_logradouro?: true
    cep?: true
    bairro?: true
    cidade_nascimento?: true
    uf_sigla?: true
    nro_identidade?: true
    nro_cart_profissional?: true
    serie_cart_profissional?: true
    pis_pasep?: true
    nro_tit_eleitor?: true
    zona_tit_eleitor?: true
    secao_tit_eleitor?: true
    ddd_fone_residencial?: true
    fone_residencial?: true
    ramal_fone_residencial?: true
    ddd_fone_celular?: true
    fone_celular?: true
    ddd_fone_pager_bip?: true
    fone_pager_bip?: true
    nro_pager_bip?: true
    email_particular?: true
    criado_em?: true
    ser_matricula?: true
    ser_vin_codigo?: true
    pac_codigo?: true
    version?: true
    cdd_codigo_municipio?: true
    uf_orgao?: true
    dt_emissao_documento?: true
    orgao_emissor_rg?: true
    _all?: true
  }

  export type Rap_pessoas_fisicasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rap_pessoas_fisicas to aggregate.
     */
    where?: rap_pessoas_fisicasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rap_pessoas_fisicas to fetch.
     */
    orderBy?: rap_pessoas_fisicasOrderByWithRelationInput | rap_pessoas_fisicasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rap_pessoas_fisicasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rap_pessoas_fisicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rap_pessoas_fisicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rap_pessoas_fisicas
    **/
    _count?: true | Rap_pessoas_fisicasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rap_pessoas_fisicasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rap_pessoas_fisicasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rap_pessoas_fisicasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rap_pessoas_fisicasMaxAggregateInputType
  }

  export type GetRap_pessoas_fisicasAggregateType<T extends Rap_pessoas_fisicasAggregateArgs> = {
        [P in keyof T & keyof AggregateRap_pessoas_fisicas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRap_pessoas_fisicas[P]>
      : GetScalarType<T[P], AggregateRap_pessoas_fisicas[P]>
  }




  export type rap_pessoas_fisicasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rap_pessoas_fisicasWhereInput
    orderBy?: rap_pessoas_fisicasOrderByWithAggregationInput | rap_pessoas_fisicasOrderByWithAggregationInput[]
    by: Rap_pessoas_fisicasScalarFieldEnum[] | Rap_pessoas_fisicasScalarFieldEnum
    having?: rap_pessoas_fisicasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rap_pessoas_fisicasCountAggregateInputType | true
    _avg?: Rap_pessoas_fisicasAvgAggregateInputType
    _sum?: Rap_pessoas_fisicasSumAggregateInputType
    _min?: Rap_pessoas_fisicasMinAggregateInputType
    _max?: Rap_pessoas_fisicasMaxAggregateInputType
  }

  export type Rap_pessoas_fisicasGroupByOutputType = {
    codigo: number
    cpf: bigint | null
    nome: string
    nome_mae: string
    pac_prontuario: number | null
    nome_pai: string | null
    dt_nascimento: Date
    sexo: string
    nome_usual: string | null
    grau_instrucao: number | null
    estado_civil: string | null
    bcl_clo_lgr_codigo: number | null
    bcl_clo_cep: number | null
    bcl_bai_codigo: number | null
    cdd_codigo: number | null
    nac_codigo: number
    logradouro: string | null
    compl_logradouro: string | null
    nro_logradouro: number | null
    cep: number | null
    bairro: string | null
    cidade_nascimento: string | null
    uf_sigla: string | null
    nro_identidade: string | null
    nro_cart_profissional: number | null
    serie_cart_profissional: string | null
    pis_pasep: bigint | null
    nro_tit_eleitor: bigint | null
    zona_tit_eleitor: number | null
    secao_tit_eleitor: number | null
    ddd_fone_residencial: number | null
    fone_residencial: bigint | null
    ramal_fone_residencial: number | null
    ddd_fone_celular: number | null
    fone_celular: bigint | null
    ddd_fone_pager_bip: number | null
    fone_pager_bip: number | null
    nro_pager_bip: string | null
    email_particular: string | null
    criado_em: Date | null
    ser_matricula: number | null
    ser_vin_codigo: number | null
    pac_codigo: number | null
    version: number
    cdd_codigo_municipio: number | null
    uf_orgao: string | null
    dt_emissao_documento: Date | null
    orgao_emissor_rg: number | null
    _count: Rap_pessoas_fisicasCountAggregateOutputType | null
    _avg: Rap_pessoas_fisicasAvgAggregateOutputType | null
    _sum: Rap_pessoas_fisicasSumAggregateOutputType | null
    _min: Rap_pessoas_fisicasMinAggregateOutputType | null
    _max: Rap_pessoas_fisicasMaxAggregateOutputType | null
  }

  type GetRap_pessoas_fisicasGroupByPayload<T extends rap_pessoas_fisicasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rap_pessoas_fisicasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rap_pessoas_fisicasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rap_pessoas_fisicasGroupByOutputType[P]>
            : GetScalarType<T[P], Rap_pessoas_fisicasGroupByOutputType[P]>
        }
      >
    >


  export type rap_pessoas_fisicasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    cpf?: boolean
    nome?: boolean
    nome_mae?: boolean
    pac_prontuario?: boolean
    nome_pai?: boolean
    dt_nascimento?: boolean
    sexo?: boolean
    nome_usual?: boolean
    grau_instrucao?: boolean
    estado_civil?: boolean
    bcl_clo_lgr_codigo?: boolean
    bcl_clo_cep?: boolean
    bcl_bai_codigo?: boolean
    cdd_codigo?: boolean
    nac_codigo?: boolean
    logradouro?: boolean
    compl_logradouro?: boolean
    nro_logradouro?: boolean
    cep?: boolean
    bairro?: boolean
    cidade_nascimento?: boolean
    uf_sigla?: boolean
    nro_identidade?: boolean
    nro_cart_profissional?: boolean
    serie_cart_profissional?: boolean
    pis_pasep?: boolean
    nro_tit_eleitor?: boolean
    zona_tit_eleitor?: boolean
    secao_tit_eleitor?: boolean
    ddd_fone_residencial?: boolean
    fone_residencial?: boolean
    ramal_fone_residencial?: boolean
    ddd_fone_celular?: boolean
    fone_celular?: boolean
    ddd_fone_pager_bip?: boolean
    fone_pager_bip?: boolean
    nro_pager_bip?: boolean
    email_particular?: boolean
    criado_em?: boolean
    ser_matricula?: boolean
    ser_vin_codigo?: boolean
    pac_codigo?: boolean
    version?: boolean
    cdd_codigo_municipio?: boolean
    uf_orgao?: boolean
    dt_emissao_documento?: boolean
    orgao_emissor_rg?: boolean
  }, ExtArgs["result"]["rap_pessoas_fisicas"]>

  export type rap_pessoas_fisicasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    cpf?: boolean
    nome?: boolean
    nome_mae?: boolean
    pac_prontuario?: boolean
    nome_pai?: boolean
    dt_nascimento?: boolean
    sexo?: boolean
    nome_usual?: boolean
    grau_instrucao?: boolean
    estado_civil?: boolean
    bcl_clo_lgr_codigo?: boolean
    bcl_clo_cep?: boolean
    bcl_bai_codigo?: boolean
    cdd_codigo?: boolean
    nac_codigo?: boolean
    logradouro?: boolean
    compl_logradouro?: boolean
    nro_logradouro?: boolean
    cep?: boolean
    bairro?: boolean
    cidade_nascimento?: boolean
    uf_sigla?: boolean
    nro_identidade?: boolean
    nro_cart_profissional?: boolean
    serie_cart_profissional?: boolean
    pis_pasep?: boolean
    nro_tit_eleitor?: boolean
    zona_tit_eleitor?: boolean
    secao_tit_eleitor?: boolean
    ddd_fone_residencial?: boolean
    fone_residencial?: boolean
    ramal_fone_residencial?: boolean
    ddd_fone_celular?: boolean
    fone_celular?: boolean
    ddd_fone_pager_bip?: boolean
    fone_pager_bip?: boolean
    nro_pager_bip?: boolean
    email_particular?: boolean
    criado_em?: boolean
    ser_matricula?: boolean
    ser_vin_codigo?: boolean
    pac_codigo?: boolean
    version?: boolean
    cdd_codigo_municipio?: boolean
    uf_orgao?: boolean
    dt_emissao_documento?: boolean
    orgao_emissor_rg?: boolean
  }, ExtArgs["result"]["rap_pessoas_fisicas"]>

  export type rap_pessoas_fisicasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codigo?: boolean
    cpf?: boolean
    nome?: boolean
    nome_mae?: boolean
    pac_prontuario?: boolean
    nome_pai?: boolean
    dt_nascimento?: boolean
    sexo?: boolean
    nome_usual?: boolean
    grau_instrucao?: boolean
    estado_civil?: boolean
    bcl_clo_lgr_codigo?: boolean
    bcl_clo_cep?: boolean
    bcl_bai_codigo?: boolean
    cdd_codigo?: boolean
    nac_codigo?: boolean
    logradouro?: boolean
    compl_logradouro?: boolean
    nro_logradouro?: boolean
    cep?: boolean
    bairro?: boolean
    cidade_nascimento?: boolean
    uf_sigla?: boolean
    nro_identidade?: boolean
    nro_cart_profissional?: boolean
    serie_cart_profissional?: boolean
    pis_pasep?: boolean
    nro_tit_eleitor?: boolean
    zona_tit_eleitor?: boolean
    secao_tit_eleitor?: boolean
    ddd_fone_residencial?: boolean
    fone_residencial?: boolean
    ramal_fone_residencial?: boolean
    ddd_fone_celular?: boolean
    fone_celular?: boolean
    ddd_fone_pager_bip?: boolean
    fone_pager_bip?: boolean
    nro_pager_bip?: boolean
    email_particular?: boolean
    criado_em?: boolean
    ser_matricula?: boolean
    ser_vin_codigo?: boolean
    pac_codigo?: boolean
    version?: boolean
    cdd_codigo_municipio?: boolean
    uf_orgao?: boolean
    dt_emissao_documento?: boolean
    orgao_emissor_rg?: boolean
  }, ExtArgs["result"]["rap_pessoas_fisicas"]>

  export type rap_pessoas_fisicasSelectScalar = {
    codigo?: boolean
    cpf?: boolean
    nome?: boolean
    nome_mae?: boolean
    pac_prontuario?: boolean
    nome_pai?: boolean
    dt_nascimento?: boolean
    sexo?: boolean
    nome_usual?: boolean
    grau_instrucao?: boolean
    estado_civil?: boolean
    bcl_clo_lgr_codigo?: boolean
    bcl_clo_cep?: boolean
    bcl_bai_codigo?: boolean
    cdd_codigo?: boolean
    nac_codigo?: boolean
    logradouro?: boolean
    compl_logradouro?: boolean
    nro_logradouro?: boolean
    cep?: boolean
    bairro?: boolean
    cidade_nascimento?: boolean
    uf_sigla?: boolean
    nro_identidade?: boolean
    nro_cart_profissional?: boolean
    serie_cart_profissional?: boolean
    pis_pasep?: boolean
    nro_tit_eleitor?: boolean
    zona_tit_eleitor?: boolean
    secao_tit_eleitor?: boolean
    ddd_fone_residencial?: boolean
    fone_residencial?: boolean
    ramal_fone_residencial?: boolean
    ddd_fone_celular?: boolean
    fone_celular?: boolean
    ddd_fone_pager_bip?: boolean
    fone_pager_bip?: boolean
    nro_pager_bip?: boolean
    email_particular?: boolean
    criado_em?: boolean
    ser_matricula?: boolean
    ser_vin_codigo?: boolean
    pac_codigo?: boolean
    version?: boolean
    cdd_codigo_municipio?: boolean
    uf_orgao?: boolean
    dt_emissao_documento?: boolean
    orgao_emissor_rg?: boolean
  }

  export type rap_pessoas_fisicasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codigo" | "cpf" | "nome" | "nome_mae" | "pac_prontuario" | "nome_pai" | "dt_nascimento" | "sexo" | "nome_usual" | "grau_instrucao" | "estado_civil" | "bcl_clo_lgr_codigo" | "bcl_clo_cep" | "bcl_bai_codigo" | "cdd_codigo" | "nac_codigo" | "logradouro" | "compl_logradouro" | "nro_logradouro" | "cep" | "bairro" | "cidade_nascimento" | "uf_sigla" | "nro_identidade" | "nro_cart_profissional" | "serie_cart_profissional" | "pis_pasep" | "nro_tit_eleitor" | "zona_tit_eleitor" | "secao_tit_eleitor" | "ddd_fone_residencial" | "fone_residencial" | "ramal_fone_residencial" | "ddd_fone_celular" | "fone_celular" | "ddd_fone_pager_bip" | "fone_pager_bip" | "nro_pager_bip" | "email_particular" | "criado_em" | "ser_matricula" | "ser_vin_codigo" | "pac_codigo" | "version" | "cdd_codigo_municipio" | "uf_orgao" | "dt_emissao_documento" | "orgao_emissor_rg", ExtArgs["result"]["rap_pessoas_fisicas"]>

  export type $rap_pessoas_fisicasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rap_pessoas_fisicas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      codigo: number
      cpf: bigint | null
      nome: string
      nome_mae: string
      pac_prontuario: number | null
      nome_pai: string | null
      dt_nascimento: Date
      sexo: string
      nome_usual: string | null
      grau_instrucao: number | null
      estado_civil: string | null
      bcl_clo_lgr_codigo: number | null
      bcl_clo_cep: number | null
      bcl_bai_codigo: number | null
      cdd_codigo: number | null
      nac_codigo: number
      logradouro: string | null
      compl_logradouro: string | null
      nro_logradouro: number | null
      cep: number | null
      bairro: string | null
      cidade_nascimento: string | null
      uf_sigla: string | null
      nro_identidade: string | null
      nro_cart_profissional: number | null
      serie_cart_profissional: string | null
      pis_pasep: bigint | null
      nro_tit_eleitor: bigint | null
      zona_tit_eleitor: number | null
      secao_tit_eleitor: number | null
      ddd_fone_residencial: number | null
      fone_residencial: bigint | null
      ramal_fone_residencial: number | null
      ddd_fone_celular: number | null
      fone_celular: bigint | null
      ddd_fone_pager_bip: number | null
      fone_pager_bip: number | null
      nro_pager_bip: string | null
      email_particular: string | null
      criado_em: Date | null
      ser_matricula: number | null
      ser_vin_codigo: number | null
      pac_codigo: number | null
      version: number
      cdd_codigo_municipio: number | null
      uf_orgao: string | null
      dt_emissao_documento: Date | null
      orgao_emissor_rg: number | null
    }, ExtArgs["result"]["rap_pessoas_fisicas"]>
    composites: {}
  }

  type rap_pessoas_fisicasGetPayload<S extends boolean | null | undefined | rap_pessoas_fisicasDefaultArgs> = $Result.GetResult<Prisma.$rap_pessoas_fisicasPayload, S>

  type rap_pessoas_fisicasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rap_pessoas_fisicasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rap_pessoas_fisicasCountAggregateInputType | true
    }

  export interface rap_pessoas_fisicasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rap_pessoas_fisicas'], meta: { name: 'rap_pessoas_fisicas' } }
    /**
     * Find zero or one Rap_pessoas_fisicas that matches the filter.
     * @param {rap_pessoas_fisicasFindUniqueArgs} args - Arguments to find a Rap_pessoas_fisicas
     * @example
     * // Get one Rap_pessoas_fisicas
     * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rap_pessoas_fisicasFindUniqueArgs>(args: SelectSubset<T, rap_pessoas_fisicasFindUniqueArgs<ExtArgs>>): Prisma__rap_pessoas_fisicasClient<$Result.GetResult<Prisma.$rap_pessoas_fisicasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rap_pessoas_fisicas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rap_pessoas_fisicasFindUniqueOrThrowArgs} args - Arguments to find a Rap_pessoas_fisicas
     * @example
     * // Get one Rap_pessoas_fisicas
     * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rap_pessoas_fisicasFindUniqueOrThrowArgs>(args: SelectSubset<T, rap_pessoas_fisicasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rap_pessoas_fisicasClient<$Result.GetResult<Prisma.$rap_pessoas_fisicasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rap_pessoas_fisicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_pessoas_fisicasFindFirstArgs} args - Arguments to find a Rap_pessoas_fisicas
     * @example
     * // Get one Rap_pessoas_fisicas
     * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rap_pessoas_fisicasFindFirstArgs>(args?: SelectSubset<T, rap_pessoas_fisicasFindFirstArgs<ExtArgs>>): Prisma__rap_pessoas_fisicasClient<$Result.GetResult<Prisma.$rap_pessoas_fisicasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rap_pessoas_fisicas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_pessoas_fisicasFindFirstOrThrowArgs} args - Arguments to find a Rap_pessoas_fisicas
     * @example
     * // Get one Rap_pessoas_fisicas
     * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rap_pessoas_fisicasFindFirstOrThrowArgs>(args?: SelectSubset<T, rap_pessoas_fisicasFindFirstOrThrowArgs<ExtArgs>>): Prisma__rap_pessoas_fisicasClient<$Result.GetResult<Prisma.$rap_pessoas_fisicasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rap_pessoas_fisicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_pessoas_fisicasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rap_pessoas_fisicas
     * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.findMany()
     * 
     * // Get first 10 Rap_pessoas_fisicas
     * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.findMany({ take: 10 })
     * 
     * // Only select the `codigo`
     * const rap_pessoas_fisicasWithCodigoOnly = await prisma.rap_pessoas_fisicas.findMany({ select: { codigo: true } })
     * 
     */
    findMany<T extends rap_pessoas_fisicasFindManyArgs>(args?: SelectSubset<T, rap_pessoas_fisicasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rap_pessoas_fisicasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rap_pessoas_fisicas.
     * @param {rap_pessoas_fisicasCreateArgs} args - Arguments to create a Rap_pessoas_fisicas.
     * @example
     * // Create one Rap_pessoas_fisicas
     * const Rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.create({
     *   data: {
     *     // ... data to create a Rap_pessoas_fisicas
     *   }
     * })
     * 
     */
    create<T extends rap_pessoas_fisicasCreateArgs>(args: SelectSubset<T, rap_pessoas_fisicasCreateArgs<ExtArgs>>): Prisma__rap_pessoas_fisicasClient<$Result.GetResult<Prisma.$rap_pessoas_fisicasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rap_pessoas_fisicas.
     * @param {rap_pessoas_fisicasCreateManyArgs} args - Arguments to create many Rap_pessoas_fisicas.
     * @example
     * // Create many Rap_pessoas_fisicas
     * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rap_pessoas_fisicasCreateManyArgs>(args?: SelectSubset<T, rap_pessoas_fisicasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rap_pessoas_fisicas and returns the data saved in the database.
     * @param {rap_pessoas_fisicasCreateManyAndReturnArgs} args - Arguments to create many Rap_pessoas_fisicas.
     * @example
     * // Create many Rap_pessoas_fisicas
     * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rap_pessoas_fisicas and only return the `codigo`
     * const rap_pessoas_fisicasWithCodigoOnly = await prisma.rap_pessoas_fisicas.createManyAndReturn({
     *   select: { codigo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rap_pessoas_fisicasCreateManyAndReturnArgs>(args?: SelectSubset<T, rap_pessoas_fisicasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rap_pessoas_fisicasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rap_pessoas_fisicas.
     * @param {rap_pessoas_fisicasDeleteArgs} args - Arguments to delete one Rap_pessoas_fisicas.
     * @example
     * // Delete one Rap_pessoas_fisicas
     * const Rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.delete({
     *   where: {
     *     // ... filter to delete one Rap_pessoas_fisicas
     *   }
     * })
     * 
     */
    delete<T extends rap_pessoas_fisicasDeleteArgs>(args: SelectSubset<T, rap_pessoas_fisicasDeleteArgs<ExtArgs>>): Prisma__rap_pessoas_fisicasClient<$Result.GetResult<Prisma.$rap_pessoas_fisicasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rap_pessoas_fisicas.
     * @param {rap_pessoas_fisicasUpdateArgs} args - Arguments to update one Rap_pessoas_fisicas.
     * @example
     * // Update one Rap_pessoas_fisicas
     * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rap_pessoas_fisicasUpdateArgs>(args: SelectSubset<T, rap_pessoas_fisicasUpdateArgs<ExtArgs>>): Prisma__rap_pessoas_fisicasClient<$Result.GetResult<Prisma.$rap_pessoas_fisicasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rap_pessoas_fisicas.
     * @param {rap_pessoas_fisicasDeleteManyArgs} args - Arguments to filter Rap_pessoas_fisicas to delete.
     * @example
     * // Delete a few Rap_pessoas_fisicas
     * const { count } = await prisma.rap_pessoas_fisicas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rap_pessoas_fisicasDeleteManyArgs>(args?: SelectSubset<T, rap_pessoas_fisicasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rap_pessoas_fisicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_pessoas_fisicasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rap_pessoas_fisicas
     * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rap_pessoas_fisicasUpdateManyArgs>(args: SelectSubset<T, rap_pessoas_fisicasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rap_pessoas_fisicas and returns the data updated in the database.
     * @param {rap_pessoas_fisicasUpdateManyAndReturnArgs} args - Arguments to update many Rap_pessoas_fisicas.
     * @example
     * // Update many Rap_pessoas_fisicas
     * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rap_pessoas_fisicas and only return the `codigo`
     * const rap_pessoas_fisicasWithCodigoOnly = await prisma.rap_pessoas_fisicas.updateManyAndReturn({
     *   select: { codigo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rap_pessoas_fisicasUpdateManyAndReturnArgs>(args: SelectSubset<T, rap_pessoas_fisicasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rap_pessoas_fisicasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rap_pessoas_fisicas.
     * @param {rap_pessoas_fisicasUpsertArgs} args - Arguments to update or create a Rap_pessoas_fisicas.
     * @example
     * // Update or create a Rap_pessoas_fisicas
     * const rap_pessoas_fisicas = await prisma.rap_pessoas_fisicas.upsert({
     *   create: {
     *     // ... data to create a Rap_pessoas_fisicas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rap_pessoas_fisicas we want to update
     *   }
     * })
     */
    upsert<T extends rap_pessoas_fisicasUpsertArgs>(args: SelectSubset<T, rap_pessoas_fisicasUpsertArgs<ExtArgs>>): Prisma__rap_pessoas_fisicasClient<$Result.GetResult<Prisma.$rap_pessoas_fisicasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rap_pessoas_fisicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_pessoas_fisicasCountArgs} args - Arguments to filter Rap_pessoas_fisicas to count.
     * @example
     * // Count the number of Rap_pessoas_fisicas
     * const count = await prisma.rap_pessoas_fisicas.count({
     *   where: {
     *     // ... the filter for the Rap_pessoas_fisicas we want to count
     *   }
     * })
    **/
    count<T extends rap_pessoas_fisicasCountArgs>(
      args?: Subset<T, rap_pessoas_fisicasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rap_pessoas_fisicasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rap_pessoas_fisicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rap_pessoas_fisicasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rap_pessoas_fisicasAggregateArgs>(args: Subset<T, Rap_pessoas_fisicasAggregateArgs>): Prisma.PrismaPromise<GetRap_pessoas_fisicasAggregateType<T>>

    /**
     * Group by Rap_pessoas_fisicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rap_pessoas_fisicasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rap_pessoas_fisicasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rap_pessoas_fisicasGroupByArgs['orderBy'] }
        : { orderBy?: rap_pessoas_fisicasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rap_pessoas_fisicasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRap_pessoas_fisicasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rap_pessoas_fisicas model
   */
  readonly fields: rap_pessoas_fisicasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rap_pessoas_fisicas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rap_pessoas_fisicasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rap_pessoas_fisicas model
   */
  interface rap_pessoas_fisicasFieldRefs {
    readonly codigo: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly cpf: FieldRef<"rap_pessoas_fisicas", 'BigInt'>
    readonly nome: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly nome_mae: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly pac_prontuario: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly nome_pai: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly dt_nascimento: FieldRef<"rap_pessoas_fisicas", 'DateTime'>
    readonly sexo: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly nome_usual: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly grau_instrucao: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly estado_civil: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly bcl_clo_lgr_codigo: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly bcl_clo_cep: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly bcl_bai_codigo: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly cdd_codigo: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly nac_codigo: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly logradouro: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly compl_logradouro: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly nro_logradouro: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly cep: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly bairro: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly cidade_nascimento: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly uf_sigla: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly nro_identidade: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly nro_cart_profissional: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly serie_cart_profissional: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly pis_pasep: FieldRef<"rap_pessoas_fisicas", 'BigInt'>
    readonly nro_tit_eleitor: FieldRef<"rap_pessoas_fisicas", 'BigInt'>
    readonly zona_tit_eleitor: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly secao_tit_eleitor: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly ddd_fone_residencial: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly fone_residencial: FieldRef<"rap_pessoas_fisicas", 'BigInt'>
    readonly ramal_fone_residencial: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly ddd_fone_celular: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly fone_celular: FieldRef<"rap_pessoas_fisicas", 'BigInt'>
    readonly ddd_fone_pager_bip: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly fone_pager_bip: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly nro_pager_bip: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly email_particular: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly criado_em: FieldRef<"rap_pessoas_fisicas", 'DateTime'>
    readonly ser_matricula: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly ser_vin_codigo: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly pac_codigo: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly version: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly cdd_codigo_municipio: FieldRef<"rap_pessoas_fisicas", 'Int'>
    readonly uf_orgao: FieldRef<"rap_pessoas_fisicas", 'String'>
    readonly dt_emissao_documento: FieldRef<"rap_pessoas_fisicas", 'DateTime'>
    readonly orgao_emissor_rg: FieldRef<"rap_pessoas_fisicas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * rap_pessoas_fisicas findUnique
   */
  export type rap_pessoas_fisicasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_pessoas_fisicas
     */
    select?: rap_pessoas_fisicasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_pessoas_fisicas
     */
    omit?: rap_pessoas_fisicasOmit<ExtArgs> | null
    /**
     * Filter, which rap_pessoas_fisicas to fetch.
     */
    where: rap_pessoas_fisicasWhereUniqueInput
  }

  /**
   * rap_pessoas_fisicas findUniqueOrThrow
   */
  export type rap_pessoas_fisicasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_pessoas_fisicas
     */
    select?: rap_pessoas_fisicasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_pessoas_fisicas
     */
    omit?: rap_pessoas_fisicasOmit<ExtArgs> | null
    /**
     * Filter, which rap_pessoas_fisicas to fetch.
     */
    where: rap_pessoas_fisicasWhereUniqueInput
  }

  /**
   * rap_pessoas_fisicas findFirst
   */
  export type rap_pessoas_fisicasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_pessoas_fisicas
     */
    select?: rap_pessoas_fisicasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_pessoas_fisicas
     */
    omit?: rap_pessoas_fisicasOmit<ExtArgs> | null
    /**
     * Filter, which rap_pessoas_fisicas to fetch.
     */
    where?: rap_pessoas_fisicasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rap_pessoas_fisicas to fetch.
     */
    orderBy?: rap_pessoas_fisicasOrderByWithRelationInput | rap_pessoas_fisicasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rap_pessoas_fisicas.
     */
    cursor?: rap_pessoas_fisicasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rap_pessoas_fisicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rap_pessoas_fisicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rap_pessoas_fisicas.
     */
    distinct?: Rap_pessoas_fisicasScalarFieldEnum | Rap_pessoas_fisicasScalarFieldEnum[]
  }

  /**
   * rap_pessoas_fisicas findFirstOrThrow
   */
  export type rap_pessoas_fisicasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_pessoas_fisicas
     */
    select?: rap_pessoas_fisicasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_pessoas_fisicas
     */
    omit?: rap_pessoas_fisicasOmit<ExtArgs> | null
    /**
     * Filter, which rap_pessoas_fisicas to fetch.
     */
    where?: rap_pessoas_fisicasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rap_pessoas_fisicas to fetch.
     */
    orderBy?: rap_pessoas_fisicasOrderByWithRelationInput | rap_pessoas_fisicasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rap_pessoas_fisicas.
     */
    cursor?: rap_pessoas_fisicasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rap_pessoas_fisicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rap_pessoas_fisicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rap_pessoas_fisicas.
     */
    distinct?: Rap_pessoas_fisicasScalarFieldEnum | Rap_pessoas_fisicasScalarFieldEnum[]
  }

  /**
   * rap_pessoas_fisicas findMany
   */
  export type rap_pessoas_fisicasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_pessoas_fisicas
     */
    select?: rap_pessoas_fisicasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_pessoas_fisicas
     */
    omit?: rap_pessoas_fisicasOmit<ExtArgs> | null
    /**
     * Filter, which rap_pessoas_fisicas to fetch.
     */
    where?: rap_pessoas_fisicasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rap_pessoas_fisicas to fetch.
     */
    orderBy?: rap_pessoas_fisicasOrderByWithRelationInput | rap_pessoas_fisicasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rap_pessoas_fisicas.
     */
    cursor?: rap_pessoas_fisicasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rap_pessoas_fisicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rap_pessoas_fisicas.
     */
    skip?: number
    distinct?: Rap_pessoas_fisicasScalarFieldEnum | Rap_pessoas_fisicasScalarFieldEnum[]
  }

  /**
   * rap_pessoas_fisicas create
   */
  export type rap_pessoas_fisicasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_pessoas_fisicas
     */
    select?: rap_pessoas_fisicasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_pessoas_fisicas
     */
    omit?: rap_pessoas_fisicasOmit<ExtArgs> | null
    /**
     * The data needed to create a rap_pessoas_fisicas.
     */
    data: XOR<rap_pessoas_fisicasCreateInput, rap_pessoas_fisicasUncheckedCreateInput>
  }

  /**
   * rap_pessoas_fisicas createMany
   */
  export type rap_pessoas_fisicasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rap_pessoas_fisicas.
     */
    data: rap_pessoas_fisicasCreateManyInput | rap_pessoas_fisicasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rap_pessoas_fisicas createManyAndReturn
   */
  export type rap_pessoas_fisicasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_pessoas_fisicas
     */
    select?: rap_pessoas_fisicasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rap_pessoas_fisicas
     */
    omit?: rap_pessoas_fisicasOmit<ExtArgs> | null
    /**
     * The data used to create many rap_pessoas_fisicas.
     */
    data: rap_pessoas_fisicasCreateManyInput | rap_pessoas_fisicasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rap_pessoas_fisicas update
   */
  export type rap_pessoas_fisicasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_pessoas_fisicas
     */
    select?: rap_pessoas_fisicasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_pessoas_fisicas
     */
    omit?: rap_pessoas_fisicasOmit<ExtArgs> | null
    /**
     * The data needed to update a rap_pessoas_fisicas.
     */
    data: XOR<rap_pessoas_fisicasUpdateInput, rap_pessoas_fisicasUncheckedUpdateInput>
    /**
     * Choose, which rap_pessoas_fisicas to update.
     */
    where: rap_pessoas_fisicasWhereUniqueInput
  }

  /**
   * rap_pessoas_fisicas updateMany
   */
  export type rap_pessoas_fisicasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rap_pessoas_fisicas.
     */
    data: XOR<rap_pessoas_fisicasUpdateManyMutationInput, rap_pessoas_fisicasUncheckedUpdateManyInput>
    /**
     * Filter which rap_pessoas_fisicas to update
     */
    where?: rap_pessoas_fisicasWhereInput
    /**
     * Limit how many rap_pessoas_fisicas to update.
     */
    limit?: number
  }

  /**
   * rap_pessoas_fisicas updateManyAndReturn
   */
  export type rap_pessoas_fisicasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_pessoas_fisicas
     */
    select?: rap_pessoas_fisicasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rap_pessoas_fisicas
     */
    omit?: rap_pessoas_fisicasOmit<ExtArgs> | null
    /**
     * The data used to update rap_pessoas_fisicas.
     */
    data: XOR<rap_pessoas_fisicasUpdateManyMutationInput, rap_pessoas_fisicasUncheckedUpdateManyInput>
    /**
     * Filter which rap_pessoas_fisicas to update
     */
    where?: rap_pessoas_fisicasWhereInput
    /**
     * Limit how many rap_pessoas_fisicas to update.
     */
    limit?: number
  }

  /**
   * rap_pessoas_fisicas upsert
   */
  export type rap_pessoas_fisicasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_pessoas_fisicas
     */
    select?: rap_pessoas_fisicasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_pessoas_fisicas
     */
    omit?: rap_pessoas_fisicasOmit<ExtArgs> | null
    /**
     * The filter to search for the rap_pessoas_fisicas to update in case it exists.
     */
    where: rap_pessoas_fisicasWhereUniqueInput
    /**
     * In case the rap_pessoas_fisicas found by the `where` argument doesn't exist, create a new rap_pessoas_fisicas with this data.
     */
    create: XOR<rap_pessoas_fisicasCreateInput, rap_pessoas_fisicasUncheckedCreateInput>
    /**
     * In case the rap_pessoas_fisicas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rap_pessoas_fisicasUpdateInput, rap_pessoas_fisicasUncheckedUpdateInput>
  }

  /**
   * rap_pessoas_fisicas delete
   */
  export type rap_pessoas_fisicasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_pessoas_fisicas
     */
    select?: rap_pessoas_fisicasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_pessoas_fisicas
     */
    omit?: rap_pessoas_fisicasOmit<ExtArgs> | null
    /**
     * Filter which rap_pessoas_fisicas to delete.
     */
    where: rap_pessoas_fisicasWhereUniqueInput
  }

  /**
   * rap_pessoas_fisicas deleteMany
   */
  export type rap_pessoas_fisicasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rap_pessoas_fisicas to delete
     */
    where?: rap_pessoas_fisicasWhereInput
    /**
     * Limit how many rap_pessoas_fisicas to delete.
     */
    limit?: number
  }

  /**
   * rap_pessoas_fisicas without action
   */
  export type rap_pessoas_fisicasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rap_pessoas_fisicas
     */
    select?: rap_pessoas_fisicasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rap_pessoas_fisicas
     */
    omit?: rap_pessoas_fisicasOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Rap_servidoresScalarFieldEnum: {
    matricula: 'matricula',
    vin_codigo: 'vin_codigo',
    cct_codigo: 'cct_codigo',
    oca_car_codigo: 'oca_car_codigo',
    oca_codigo: 'oca_codigo',
    pes_codigo: 'pes_codigo',
    dt_inicio_vinculo: 'dt_inicio_vinculo',
    htr_codigo: 'htr_codigo',
    cct_codigo_atua: 'cct_codigo_atua',
    dt_fim_vinculo: 'dt_fim_vinculo',
    usuario: 'usuario',
    email: 'email',
    grf_codigo: 'grf_codigo',
    ind_situacao: 'ind_situacao',
    alterado_em: 'alterado_em',
    ser_matricula: 'ser_matricula',
    ser_vin_codigo: 'ser_vin_codigo',
    ram_nro_ramal: 'ram_nro_ramal',
    tipo_remuneracao: 'tipo_remuneracao',
    carga_horaria: 'carga_horaria',
    horario_padrao: 'horario_padrao',
    cod_starh: 'cod_starh',
    cct_codigo_desempenho: 'cct_codigo_desempenho',
    version: 'version',
    ind_situacao_servidor: 'ind_situacao_servidor',
    unf_seq_lotacao: 'unf_seq_lotacao'
  };

  export type Rap_servidoresScalarFieldEnum = (typeof Rap_servidoresScalarFieldEnum)[keyof typeof Rap_servidoresScalarFieldEnum]


  export const Ain_internacoesScalarFieldEnum: {
    seq: 'seq',
    pac_codigo: 'pac_codigo',
    esp_seq: 'esp_seq',
    ser_matricula_digita: 'ser_matricula_digita',
    ser_vin_codigo_digita: 'ser_vin_codigo_digita',
    ser_matricula_professor: 'ser_matricula_professor',
    ser_vin_codigo_professor: 'ser_vin_codigo_professor',
    dthr_internacao: 'dthr_internacao',
    env_pront_unid_int: 'env_pront_unid_int',
    tci_seq: 'tci_seq',
    csp_cnv_codigo: 'csp_cnv_codigo',
    csp_seq: 'csp_seq',
    oev_seq: 'oev_seq',
    ind_saida_pac: 'ind_saida_pac',
    ind_dif_classe: 'ind_dif_classe',
    ind_paciente_internado: 'ind_paciente_internado',
    ind_local_paciente: 'ind_local_paciente',
    lto_lto_id: 'lto_lto_id',
    qrt_numero: 'qrt_numero',
    unf_seq: 'unf_seq',
    tam_codigo: 'tam_codigo',
    atu_seq: 'atu_seq',
    dt_prev_alta: 'dt_prev_alta',
    dthr_alta_medica: 'dthr_alta_medica',
    dt_saida_paciente: 'dt_saida_paciente',
    iho_seq_origem: 'iho_seq_origem',
    iho_seq_transferencia: 'iho_seq_transferencia',
    justificativa_alt_del: 'justificativa_alt_del',
    dthr_primeiro_evento: 'dthr_primeiro_evento',
    dthr_ultimo_evento: 'dthr_ultimo_evento',
    iph_seq: 'iph_seq',
    iph_pho_seq: 'iph_pho_seq',
    ind_alta_manual: 'ind_alta_manual',
    prontuario_legal: 'prontuario_legal',
    doc_obito: 'doc_obito',
    pjq_seq: 'pjq_seq',
    ind_cons_marcada: 'ind_cons_marcada',
    apo_seq: 'apo_seq',
    dthr_aviso_samis: 'dthr_aviso_samis',
    dthr_prontuario_buscado: 'dthr_prontuario_buscado',
    version: 'version',
    seq_medico_externo: 'seq_medico_externo',
    proc_internacao_paciente: 'proc_internacao_paciente',
    local_atendimento_paciente: 'local_atendimento_paciente',
    mod_assistencial: 'mod_assistencial'
  };

  export type Ain_internacoesScalarFieldEnum = (typeof Ain_internacoesScalarFieldEnum)[keyof typeof Ain_internacoesScalarFieldEnum]


  export const Ain_leitosScalarFieldEnum: {
    lto_id: 'lto_id',
    qrt_numero: 'qrt_numero',
    leito: 'leito',
    ind_cons_clin_unidade: 'ind_cons_clin_unidade',
    ind_bloq_leito_limpeza: 'ind_bloq_leito_limpeza',
    tml_codigo: 'tml_codigo',
    unf_seq: 'unf_seq',
    ind_situacao: 'ind_situacao',
    esp_seq: 'esp_seq',
    int_seq: 'int_seq',
    ind_pertence_refl: 'ind_pertence_refl',
    ind_cons_esp: 'ind_cons_esp',
    ser_matricula: 'ser_matricula',
    ser_vin_codigo: 'ser_vin_codigo',
    ind_acompanhamento_ccih: 'ind_acompanhamento_ccih',
    version: 'version',
    tpclsfcclto_seq: 'tpclsfcclto_seq',
    ind_leito_extra: 'ind_leito_extra'
  };

  export type Ain_leitosScalarFieldEnum = (typeof Ain_leitosScalarFieldEnum)[keyof typeof Ain_leitosScalarFieldEnum]


  export const Aip_pacientesScalarFieldEnum: {
    codigo: 'codigo',
    cct_codigo_cadastro: 'cct_codigo_cadastro',
    ser_matricula_cadastro: 'ser_matricula_cadastro',
    ser_vin_codigo_cadastro: 'ser_vin_codigo_cadastro',
    nome: 'nome',
    nome_mae: 'nome_mae',
    dt_nascimento: 'dt_nascimento',
    dt_identificacao: 'dt_identificacao',
    cct_codigo_recadastro: 'cct_codigo_recadastro',
    cdd_codigo: 'cdd_codigo',
    nac_codigo: 'nac_codigo',
    ocp_codigo: 'ocp_codigo',
    uf_sigla: 'uf_sigla',
    ser_matricula_recadastro: 'ser_matricula_recadastro',
    ser_vin_codigo_recadastro: 'ser_vin_codigo_recadastro',
    cor: 'cor',
    sexo: 'sexo',
    grau_instrucao: 'grau_instrucao',
    nome_pai: 'nome_pai',
    naturalidade: 'naturalidade',
    ddd_fone_residencial: 'ddd_fone_residencial',
    fone_residencial: 'fone_residencial',
    ddd_fone_recado: 'ddd_fone_recado',
    fone_recado: 'fone_recado',
    estado_civil: 'estado_civil',
    cpf: 'cpf',
    prontuario: 'prontuario',
    dt_obito: 'dt_obito',
    rg: 'rg',
    orgao_emis_rg: 'orgao_emis_rg',
    observacao: 'observacao',
    prnt_ativo: 'prnt_ativo',
    cad_confirmado: 'cad_confirmado',
    ind_gera_prontuario: 'ind_gera_prontuario',
    dt_ult_internacao: 'dt_ult_internacao',
    dt_ult_alta: 'dt_ult_alta',
    dt_ult_consulta: 'dt_ult_consulta',
    dt_ult_procedimento: 'dt_ult_procedimento',
    dt_ult_atend_hosp_dia: 'dt_ult_atend_hosp_dia',
    dt_ult_alta_hosp_dia: 'dt_ult_alta_hosp_dia',
    qrt_numero: 'qrt_numero',
    unf_seq: 'unf_seq',
    lto_lto_id: 'lto_lto_id',
    reg_nascimento: 'reg_nascimento',
    nro_cartao_saude: 'nro_cartao_saude',
    dt_recadastro: 'dt_recadastro',
    ind_paciente_vip: 'ind_paciente_vip',
    pac_codigo_mae: 'pac_codigo_mae',
    tipo_data_obito: 'tipo_data_obito',
    dt_obito_externo: 'dt_obito_externo',
    rna_gso_pac_codigo: 'rna_gso_pac_codigo',
    rna_gso_seqp: 'rna_gso_seqp',
    rna_seqp: 'rna_seqp',
    numero_pis: 'numero_pis',
    volumes: 'volumes',
    ind_pac_protegido: 'ind_pac_protegido',
    criado_em: 'criado_em',
    ind_pac_agfa: 'ind_pac_agfa',
    sexo_biologico: 'sexo_biologico',
    version: 'version',
    etn_id: 'etn_id',
    id_sistema_legado: 'id_sistema_legado',
    nome_social: 'nome_social',
    cnh: 'cnh',
    data_validade_cnh: 'data_validade_cnh',
    email: 'email',
    rel_codigo: 'rel_codigo',
    dt_exp_germe_multirresistente: 'dt_exp_germe_multirresistente',
    germe_multirresistente: 'germe_multirresistente',
    pac_codigo_valido: 'pac_codigo_valido'
  };

  export type Aip_pacientesScalarFieldEnum = (typeof Aip_pacientesScalarFieldEnum)[keyof typeof Aip_pacientesScalarFieldEnum]


  export const Rap_pessoas_fisicasScalarFieldEnum: {
    codigo: 'codigo',
    cpf: 'cpf',
    nome: 'nome',
    nome_mae: 'nome_mae',
    pac_prontuario: 'pac_prontuario',
    nome_pai: 'nome_pai',
    dt_nascimento: 'dt_nascimento',
    sexo: 'sexo',
    nome_usual: 'nome_usual',
    grau_instrucao: 'grau_instrucao',
    estado_civil: 'estado_civil',
    bcl_clo_lgr_codigo: 'bcl_clo_lgr_codigo',
    bcl_clo_cep: 'bcl_clo_cep',
    bcl_bai_codigo: 'bcl_bai_codigo',
    cdd_codigo: 'cdd_codigo',
    nac_codigo: 'nac_codigo',
    logradouro: 'logradouro',
    compl_logradouro: 'compl_logradouro',
    nro_logradouro: 'nro_logradouro',
    cep: 'cep',
    bairro: 'bairro',
    cidade_nascimento: 'cidade_nascimento',
    uf_sigla: 'uf_sigla',
    nro_identidade: 'nro_identidade',
    nro_cart_profissional: 'nro_cart_profissional',
    serie_cart_profissional: 'serie_cart_profissional',
    pis_pasep: 'pis_pasep',
    nro_tit_eleitor: 'nro_tit_eleitor',
    zona_tit_eleitor: 'zona_tit_eleitor',
    secao_tit_eleitor: 'secao_tit_eleitor',
    ddd_fone_residencial: 'ddd_fone_residencial',
    fone_residencial: 'fone_residencial',
    ramal_fone_residencial: 'ramal_fone_residencial',
    ddd_fone_celular: 'ddd_fone_celular',
    fone_celular: 'fone_celular',
    ddd_fone_pager_bip: 'ddd_fone_pager_bip',
    fone_pager_bip: 'fone_pager_bip',
    nro_pager_bip: 'nro_pager_bip',
    email_particular: 'email_particular',
    criado_em: 'criado_em',
    ser_matricula: 'ser_matricula',
    ser_vin_codigo: 'ser_vin_codigo',
    pac_codigo: 'pac_codigo',
    version: 'version',
    cdd_codigo_municipio: 'cdd_codigo_municipio',
    uf_orgao: 'uf_orgao',
    dt_emissao_documento: 'dt_emissao_documento',
    orgao_emissor_rg: 'orgao_emissor_rg'
  };

  export type Rap_pessoas_fisicasScalarFieldEnum = (typeof Rap_pessoas_fisicasScalarFieldEnum)[keyof typeof Rap_pessoas_fisicasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type rap_servidoresWhereInput = {
    AND?: rap_servidoresWhereInput | rap_servidoresWhereInput[]
    OR?: rap_servidoresWhereInput[]
    NOT?: rap_servidoresWhereInput | rap_servidoresWhereInput[]
    matricula?: IntFilter<"rap_servidores"> | number
    vin_codigo?: IntFilter<"rap_servidores"> | number
    cct_codigo?: IntNullableFilter<"rap_servidores"> | number | null
    oca_car_codigo?: StringNullableFilter<"rap_servidores"> | string | null
    oca_codigo?: IntNullableFilter<"rap_servidores"> | number | null
    pes_codigo?: IntFilter<"rap_servidores"> | number
    dt_inicio_vinculo?: DateTimeFilter<"rap_servidores"> | Date | string
    htr_codigo?: IntNullableFilter<"rap_servidores"> | number | null
    cct_codigo_atua?: IntNullableFilter<"rap_servidores"> | number | null
    dt_fim_vinculo?: DateTimeNullableFilter<"rap_servidores"> | Date | string | null
    usuario?: StringNullableFilter<"rap_servidores"> | string | null
    email?: StringNullableFilter<"rap_servidores"> | string | null
    grf_codigo?: IntNullableFilter<"rap_servidores"> | number | null
    ind_situacao?: StringNullableFilter<"rap_servidores"> | string | null
    alterado_em?: DateTimeNullableFilter<"rap_servidores"> | Date | string | null
    ser_matricula?: IntNullableFilter<"rap_servidores"> | number | null
    ser_vin_codigo?: IntNullableFilter<"rap_servidores"> | number | null
    ram_nro_ramal?: IntNullableFilter<"rap_servidores"> | number | null
    tipo_remuneracao?: StringNullableFilter<"rap_servidores"> | string | null
    carga_horaria?: IntNullableFilter<"rap_servidores"> | number | null
    horario_padrao?: StringNullableFilter<"rap_servidores"> | string | null
    cod_starh?: IntNullableFilter<"rap_servidores"> | number | null
    cct_codigo_desempenho?: IntNullableFilter<"rap_servidores"> | number | null
    version?: IntNullableFilter<"rap_servidores"> | number | null
    ind_situacao_servidor?: StringNullableFilter<"rap_servidores"> | string | null
    unf_seq_lotacao?: IntNullableFilter<"rap_servidores"> | number | null
  }

  export type rap_servidoresOrderByWithRelationInput = {
    matricula?: SortOrder
    vin_codigo?: SortOrder
    cct_codigo?: SortOrderInput | SortOrder
    oca_car_codigo?: SortOrderInput | SortOrder
    oca_codigo?: SortOrderInput | SortOrder
    pes_codigo?: SortOrder
    dt_inicio_vinculo?: SortOrder
    htr_codigo?: SortOrderInput | SortOrder
    cct_codigo_atua?: SortOrderInput | SortOrder
    dt_fim_vinculo?: SortOrderInput | SortOrder
    usuario?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    grf_codigo?: SortOrderInput | SortOrder
    ind_situacao?: SortOrderInput | SortOrder
    alterado_em?: SortOrderInput | SortOrder
    ser_matricula?: SortOrderInput | SortOrder
    ser_vin_codigo?: SortOrderInput | SortOrder
    ram_nro_ramal?: SortOrderInput | SortOrder
    tipo_remuneracao?: SortOrderInput | SortOrder
    carga_horaria?: SortOrderInput | SortOrder
    horario_padrao?: SortOrderInput | SortOrder
    cod_starh?: SortOrderInput | SortOrder
    cct_codigo_desempenho?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    ind_situacao_servidor?: SortOrderInput | SortOrder
    unf_seq_lotacao?: SortOrderInput | SortOrder
  }

  export type rap_servidoresWhereUniqueInput = Prisma.AtLeast<{
    cod_starh?: number
    matricula_vin_codigo?: rap_servidoresMatriculaVin_codigoCompoundUniqueInput
    AND?: rap_servidoresWhereInput | rap_servidoresWhereInput[]
    OR?: rap_servidoresWhereInput[]
    NOT?: rap_servidoresWhereInput | rap_servidoresWhereInput[]
    matricula?: IntFilter<"rap_servidores"> | number
    vin_codigo?: IntFilter<"rap_servidores"> | number
    cct_codigo?: IntNullableFilter<"rap_servidores"> | number | null
    oca_car_codigo?: StringNullableFilter<"rap_servidores"> | string | null
    oca_codigo?: IntNullableFilter<"rap_servidores"> | number | null
    pes_codigo?: IntFilter<"rap_servidores"> | number
    dt_inicio_vinculo?: DateTimeFilter<"rap_servidores"> | Date | string
    htr_codigo?: IntNullableFilter<"rap_servidores"> | number | null
    cct_codigo_atua?: IntNullableFilter<"rap_servidores"> | number | null
    dt_fim_vinculo?: DateTimeNullableFilter<"rap_servidores"> | Date | string | null
    usuario?: StringNullableFilter<"rap_servidores"> | string | null
    email?: StringNullableFilter<"rap_servidores"> | string | null
    grf_codigo?: IntNullableFilter<"rap_servidores"> | number | null
    ind_situacao?: StringNullableFilter<"rap_servidores"> | string | null
    alterado_em?: DateTimeNullableFilter<"rap_servidores"> | Date | string | null
    ser_matricula?: IntNullableFilter<"rap_servidores"> | number | null
    ser_vin_codigo?: IntNullableFilter<"rap_servidores"> | number | null
    ram_nro_ramal?: IntNullableFilter<"rap_servidores"> | number | null
    tipo_remuneracao?: StringNullableFilter<"rap_servidores"> | string | null
    carga_horaria?: IntNullableFilter<"rap_servidores"> | number | null
    horario_padrao?: StringNullableFilter<"rap_servidores"> | string | null
    cct_codigo_desempenho?: IntNullableFilter<"rap_servidores"> | number | null
    version?: IntNullableFilter<"rap_servidores"> | number | null
    ind_situacao_servidor?: StringNullableFilter<"rap_servidores"> | string | null
    unf_seq_lotacao?: IntNullableFilter<"rap_servidores"> | number | null
  }, "matricula_vin_codigo" | "cod_starh">

  export type rap_servidoresOrderByWithAggregationInput = {
    matricula?: SortOrder
    vin_codigo?: SortOrder
    cct_codigo?: SortOrderInput | SortOrder
    oca_car_codigo?: SortOrderInput | SortOrder
    oca_codigo?: SortOrderInput | SortOrder
    pes_codigo?: SortOrder
    dt_inicio_vinculo?: SortOrder
    htr_codigo?: SortOrderInput | SortOrder
    cct_codigo_atua?: SortOrderInput | SortOrder
    dt_fim_vinculo?: SortOrderInput | SortOrder
    usuario?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    grf_codigo?: SortOrderInput | SortOrder
    ind_situacao?: SortOrderInput | SortOrder
    alterado_em?: SortOrderInput | SortOrder
    ser_matricula?: SortOrderInput | SortOrder
    ser_vin_codigo?: SortOrderInput | SortOrder
    ram_nro_ramal?: SortOrderInput | SortOrder
    tipo_remuneracao?: SortOrderInput | SortOrder
    carga_horaria?: SortOrderInput | SortOrder
    horario_padrao?: SortOrderInput | SortOrder
    cod_starh?: SortOrderInput | SortOrder
    cct_codigo_desempenho?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    ind_situacao_servidor?: SortOrderInput | SortOrder
    unf_seq_lotacao?: SortOrderInput | SortOrder
    _count?: rap_servidoresCountOrderByAggregateInput
    _avg?: rap_servidoresAvgOrderByAggregateInput
    _max?: rap_servidoresMaxOrderByAggregateInput
    _min?: rap_servidoresMinOrderByAggregateInput
    _sum?: rap_servidoresSumOrderByAggregateInput
  }

  export type rap_servidoresScalarWhereWithAggregatesInput = {
    AND?: rap_servidoresScalarWhereWithAggregatesInput | rap_servidoresScalarWhereWithAggregatesInput[]
    OR?: rap_servidoresScalarWhereWithAggregatesInput[]
    NOT?: rap_servidoresScalarWhereWithAggregatesInput | rap_servidoresScalarWhereWithAggregatesInput[]
    matricula?: IntWithAggregatesFilter<"rap_servidores"> | number
    vin_codigo?: IntWithAggregatesFilter<"rap_servidores"> | number
    cct_codigo?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
    oca_car_codigo?: StringNullableWithAggregatesFilter<"rap_servidores"> | string | null
    oca_codigo?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
    pes_codigo?: IntWithAggregatesFilter<"rap_servidores"> | number
    dt_inicio_vinculo?: DateTimeWithAggregatesFilter<"rap_servidores"> | Date | string
    htr_codigo?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
    cct_codigo_atua?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
    dt_fim_vinculo?: DateTimeNullableWithAggregatesFilter<"rap_servidores"> | Date | string | null
    usuario?: StringNullableWithAggregatesFilter<"rap_servidores"> | string | null
    email?: StringNullableWithAggregatesFilter<"rap_servidores"> | string | null
    grf_codigo?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
    ind_situacao?: StringNullableWithAggregatesFilter<"rap_servidores"> | string | null
    alterado_em?: DateTimeNullableWithAggregatesFilter<"rap_servidores"> | Date | string | null
    ser_matricula?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
    ser_vin_codigo?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
    ram_nro_ramal?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
    tipo_remuneracao?: StringNullableWithAggregatesFilter<"rap_servidores"> | string | null
    carga_horaria?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
    horario_padrao?: StringNullableWithAggregatesFilter<"rap_servidores"> | string | null
    cod_starh?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
    cct_codigo_desempenho?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
    version?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
    ind_situacao_servidor?: StringNullableWithAggregatesFilter<"rap_servidores"> | string | null
    unf_seq_lotacao?: IntNullableWithAggregatesFilter<"rap_servidores"> | number | null
  }

  export type ain_internacoesWhereInput = {
    AND?: ain_internacoesWhereInput | ain_internacoesWhereInput[]
    OR?: ain_internacoesWhereInput[]
    NOT?: ain_internacoesWhereInput | ain_internacoesWhereInput[]
    seq?: IntFilter<"ain_internacoes"> | number
    pac_codigo?: IntFilter<"ain_internacoes"> | number
    esp_seq?: IntFilter<"ain_internacoes"> | number
    ser_matricula_digita?: IntFilter<"ain_internacoes"> | number
    ser_vin_codigo_digita?: IntFilter<"ain_internacoes"> | number
    ser_matricula_professor?: IntFilter<"ain_internacoes"> | number
    ser_vin_codigo_professor?: IntFilter<"ain_internacoes"> | number
    dthr_internacao?: DateTimeFilter<"ain_internacoes"> | Date | string
    env_pront_unid_int?: StringNullableFilter<"ain_internacoes"> | string | null
    tci_seq?: IntFilter<"ain_internacoes"> | number
    csp_cnv_codigo?: IntFilter<"ain_internacoes"> | number
    csp_seq?: IntFilter<"ain_internacoes"> | number
    oev_seq?: IntFilter<"ain_internacoes"> | number
    ind_saida_pac?: StringNullableFilter<"ain_internacoes"> | string | null
    ind_dif_classe?: StringNullableFilter<"ain_internacoes"> | string | null
    ind_paciente_internado?: StringNullableFilter<"ain_internacoes"> | string | null
    ind_local_paciente?: StringFilter<"ain_internacoes"> | string
    lto_lto_id?: StringNullableFilter<"ain_internacoes"> | string | null
    qrt_numero?: IntNullableFilter<"ain_internacoes"> | number | null
    unf_seq?: IntNullableFilter<"ain_internacoes"> | number | null
    tam_codigo?: StringNullableFilter<"ain_internacoes"> | string | null
    atu_seq?: IntNullableFilter<"ain_internacoes"> | number | null
    dt_prev_alta?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    dthr_alta_medica?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    dt_saida_paciente?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    iho_seq_origem?: IntNullableFilter<"ain_internacoes"> | number | null
    iho_seq_transferencia?: IntNullableFilter<"ain_internacoes"> | number | null
    justificativa_alt_del?: StringNullableFilter<"ain_internacoes"> | string | null
    dthr_primeiro_evento?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    dthr_ultimo_evento?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    iph_seq?: IntNullableFilter<"ain_internacoes"> | number | null
    iph_pho_seq?: IntNullableFilter<"ain_internacoes"> | number | null
    ind_alta_manual?: StringNullableFilter<"ain_internacoes"> | string | null
    prontuario_legal?: StringNullableFilter<"ain_internacoes"> | string | null
    doc_obito?: BigIntNullableFilter<"ain_internacoes"> | bigint | number | null
    pjq_seq?: IntNullableFilter<"ain_internacoes"> | number | null
    ind_cons_marcada?: StringNullableFilter<"ain_internacoes"> | string | null
    apo_seq?: IntNullableFilter<"ain_internacoes"> | number | null
    dthr_aviso_samis?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    dthr_prontuario_buscado?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    version?: IntFilter<"ain_internacoes"> | number
    seq_medico_externo?: IntNullableFilter<"ain_internacoes"> | number | null
    proc_internacao_paciente?: StringNullableFilter<"ain_internacoes"> | string | null
    local_atendimento_paciente?: StringNullableFilter<"ain_internacoes"> | string | null
    mod_assistencial?: StringNullableFilter<"ain_internacoes"> | string | null
  }

  export type ain_internacoesOrderByWithRelationInput = {
    seq?: SortOrder
    pac_codigo?: SortOrder
    esp_seq?: SortOrder
    ser_matricula_digita?: SortOrder
    ser_vin_codigo_digita?: SortOrder
    ser_matricula_professor?: SortOrder
    ser_vin_codigo_professor?: SortOrder
    dthr_internacao?: SortOrder
    env_pront_unid_int?: SortOrderInput | SortOrder
    tci_seq?: SortOrder
    csp_cnv_codigo?: SortOrder
    csp_seq?: SortOrder
    oev_seq?: SortOrder
    ind_saida_pac?: SortOrderInput | SortOrder
    ind_dif_classe?: SortOrderInput | SortOrder
    ind_paciente_internado?: SortOrderInput | SortOrder
    ind_local_paciente?: SortOrder
    lto_lto_id?: SortOrderInput | SortOrder
    qrt_numero?: SortOrderInput | SortOrder
    unf_seq?: SortOrderInput | SortOrder
    tam_codigo?: SortOrderInput | SortOrder
    atu_seq?: SortOrderInput | SortOrder
    dt_prev_alta?: SortOrderInput | SortOrder
    dthr_alta_medica?: SortOrderInput | SortOrder
    dt_saida_paciente?: SortOrderInput | SortOrder
    iho_seq_origem?: SortOrderInput | SortOrder
    iho_seq_transferencia?: SortOrderInput | SortOrder
    justificativa_alt_del?: SortOrderInput | SortOrder
    dthr_primeiro_evento?: SortOrderInput | SortOrder
    dthr_ultimo_evento?: SortOrderInput | SortOrder
    iph_seq?: SortOrderInput | SortOrder
    iph_pho_seq?: SortOrderInput | SortOrder
    ind_alta_manual?: SortOrderInput | SortOrder
    prontuario_legal?: SortOrderInput | SortOrder
    doc_obito?: SortOrderInput | SortOrder
    pjq_seq?: SortOrderInput | SortOrder
    ind_cons_marcada?: SortOrderInput | SortOrder
    apo_seq?: SortOrderInput | SortOrder
    dthr_aviso_samis?: SortOrderInput | SortOrder
    dthr_prontuario_buscado?: SortOrderInput | SortOrder
    version?: SortOrder
    seq_medico_externo?: SortOrderInput | SortOrder
    proc_internacao_paciente?: SortOrderInput | SortOrder
    local_atendimento_paciente?: SortOrderInput | SortOrder
    mod_assistencial?: SortOrderInput | SortOrder
  }

  export type ain_internacoesWhereUniqueInput = Prisma.AtLeast<{
    seq?: number
    AND?: ain_internacoesWhereInput | ain_internacoesWhereInput[]
    OR?: ain_internacoesWhereInput[]
    NOT?: ain_internacoesWhereInput | ain_internacoesWhereInput[]
    pac_codigo?: IntFilter<"ain_internacoes"> | number
    esp_seq?: IntFilter<"ain_internacoes"> | number
    ser_matricula_digita?: IntFilter<"ain_internacoes"> | number
    ser_vin_codigo_digita?: IntFilter<"ain_internacoes"> | number
    ser_matricula_professor?: IntFilter<"ain_internacoes"> | number
    ser_vin_codigo_professor?: IntFilter<"ain_internacoes"> | number
    dthr_internacao?: DateTimeFilter<"ain_internacoes"> | Date | string
    env_pront_unid_int?: StringNullableFilter<"ain_internacoes"> | string | null
    tci_seq?: IntFilter<"ain_internacoes"> | number
    csp_cnv_codigo?: IntFilter<"ain_internacoes"> | number
    csp_seq?: IntFilter<"ain_internacoes"> | number
    oev_seq?: IntFilter<"ain_internacoes"> | number
    ind_saida_pac?: StringNullableFilter<"ain_internacoes"> | string | null
    ind_dif_classe?: StringNullableFilter<"ain_internacoes"> | string | null
    ind_paciente_internado?: StringNullableFilter<"ain_internacoes"> | string | null
    ind_local_paciente?: StringFilter<"ain_internacoes"> | string
    lto_lto_id?: StringNullableFilter<"ain_internacoes"> | string | null
    qrt_numero?: IntNullableFilter<"ain_internacoes"> | number | null
    unf_seq?: IntNullableFilter<"ain_internacoes"> | number | null
    tam_codigo?: StringNullableFilter<"ain_internacoes"> | string | null
    atu_seq?: IntNullableFilter<"ain_internacoes"> | number | null
    dt_prev_alta?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    dthr_alta_medica?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    dt_saida_paciente?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    iho_seq_origem?: IntNullableFilter<"ain_internacoes"> | number | null
    iho_seq_transferencia?: IntNullableFilter<"ain_internacoes"> | number | null
    justificativa_alt_del?: StringNullableFilter<"ain_internacoes"> | string | null
    dthr_primeiro_evento?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    dthr_ultimo_evento?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    iph_seq?: IntNullableFilter<"ain_internacoes"> | number | null
    iph_pho_seq?: IntNullableFilter<"ain_internacoes"> | number | null
    ind_alta_manual?: StringNullableFilter<"ain_internacoes"> | string | null
    prontuario_legal?: StringNullableFilter<"ain_internacoes"> | string | null
    doc_obito?: BigIntNullableFilter<"ain_internacoes"> | bigint | number | null
    pjq_seq?: IntNullableFilter<"ain_internacoes"> | number | null
    ind_cons_marcada?: StringNullableFilter<"ain_internacoes"> | string | null
    apo_seq?: IntNullableFilter<"ain_internacoes"> | number | null
    dthr_aviso_samis?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    dthr_prontuario_buscado?: DateTimeNullableFilter<"ain_internacoes"> | Date | string | null
    version?: IntFilter<"ain_internacoes"> | number
    seq_medico_externo?: IntNullableFilter<"ain_internacoes"> | number | null
    proc_internacao_paciente?: StringNullableFilter<"ain_internacoes"> | string | null
    local_atendimento_paciente?: StringNullableFilter<"ain_internacoes"> | string | null
    mod_assistencial?: StringNullableFilter<"ain_internacoes"> | string | null
  }, "seq">

  export type ain_internacoesOrderByWithAggregationInput = {
    seq?: SortOrder
    pac_codigo?: SortOrder
    esp_seq?: SortOrder
    ser_matricula_digita?: SortOrder
    ser_vin_codigo_digita?: SortOrder
    ser_matricula_professor?: SortOrder
    ser_vin_codigo_professor?: SortOrder
    dthr_internacao?: SortOrder
    env_pront_unid_int?: SortOrderInput | SortOrder
    tci_seq?: SortOrder
    csp_cnv_codigo?: SortOrder
    csp_seq?: SortOrder
    oev_seq?: SortOrder
    ind_saida_pac?: SortOrderInput | SortOrder
    ind_dif_classe?: SortOrderInput | SortOrder
    ind_paciente_internado?: SortOrderInput | SortOrder
    ind_local_paciente?: SortOrder
    lto_lto_id?: SortOrderInput | SortOrder
    qrt_numero?: SortOrderInput | SortOrder
    unf_seq?: SortOrderInput | SortOrder
    tam_codigo?: SortOrderInput | SortOrder
    atu_seq?: SortOrderInput | SortOrder
    dt_prev_alta?: SortOrderInput | SortOrder
    dthr_alta_medica?: SortOrderInput | SortOrder
    dt_saida_paciente?: SortOrderInput | SortOrder
    iho_seq_origem?: SortOrderInput | SortOrder
    iho_seq_transferencia?: SortOrderInput | SortOrder
    justificativa_alt_del?: SortOrderInput | SortOrder
    dthr_primeiro_evento?: SortOrderInput | SortOrder
    dthr_ultimo_evento?: SortOrderInput | SortOrder
    iph_seq?: SortOrderInput | SortOrder
    iph_pho_seq?: SortOrderInput | SortOrder
    ind_alta_manual?: SortOrderInput | SortOrder
    prontuario_legal?: SortOrderInput | SortOrder
    doc_obito?: SortOrderInput | SortOrder
    pjq_seq?: SortOrderInput | SortOrder
    ind_cons_marcada?: SortOrderInput | SortOrder
    apo_seq?: SortOrderInput | SortOrder
    dthr_aviso_samis?: SortOrderInput | SortOrder
    dthr_prontuario_buscado?: SortOrderInput | SortOrder
    version?: SortOrder
    seq_medico_externo?: SortOrderInput | SortOrder
    proc_internacao_paciente?: SortOrderInput | SortOrder
    local_atendimento_paciente?: SortOrderInput | SortOrder
    mod_assistencial?: SortOrderInput | SortOrder
    _count?: ain_internacoesCountOrderByAggregateInput
    _avg?: ain_internacoesAvgOrderByAggregateInput
    _max?: ain_internacoesMaxOrderByAggregateInput
    _min?: ain_internacoesMinOrderByAggregateInput
    _sum?: ain_internacoesSumOrderByAggregateInput
  }

  export type ain_internacoesScalarWhereWithAggregatesInput = {
    AND?: ain_internacoesScalarWhereWithAggregatesInput | ain_internacoesScalarWhereWithAggregatesInput[]
    OR?: ain_internacoesScalarWhereWithAggregatesInput[]
    NOT?: ain_internacoesScalarWhereWithAggregatesInput | ain_internacoesScalarWhereWithAggregatesInput[]
    seq?: IntWithAggregatesFilter<"ain_internacoes"> | number
    pac_codigo?: IntWithAggregatesFilter<"ain_internacoes"> | number
    esp_seq?: IntWithAggregatesFilter<"ain_internacoes"> | number
    ser_matricula_digita?: IntWithAggregatesFilter<"ain_internacoes"> | number
    ser_vin_codigo_digita?: IntWithAggregatesFilter<"ain_internacoes"> | number
    ser_matricula_professor?: IntWithAggregatesFilter<"ain_internacoes"> | number
    ser_vin_codigo_professor?: IntWithAggregatesFilter<"ain_internacoes"> | number
    dthr_internacao?: DateTimeWithAggregatesFilter<"ain_internacoes"> | Date | string
    env_pront_unid_int?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
    tci_seq?: IntWithAggregatesFilter<"ain_internacoes"> | number
    csp_cnv_codigo?: IntWithAggregatesFilter<"ain_internacoes"> | number
    csp_seq?: IntWithAggregatesFilter<"ain_internacoes"> | number
    oev_seq?: IntWithAggregatesFilter<"ain_internacoes"> | number
    ind_saida_pac?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
    ind_dif_classe?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
    ind_paciente_internado?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
    ind_local_paciente?: StringWithAggregatesFilter<"ain_internacoes"> | string
    lto_lto_id?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
    qrt_numero?: IntNullableWithAggregatesFilter<"ain_internacoes"> | number | null
    unf_seq?: IntNullableWithAggregatesFilter<"ain_internacoes"> | number | null
    tam_codigo?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
    atu_seq?: IntNullableWithAggregatesFilter<"ain_internacoes"> | number | null
    dt_prev_alta?: DateTimeNullableWithAggregatesFilter<"ain_internacoes"> | Date | string | null
    dthr_alta_medica?: DateTimeNullableWithAggregatesFilter<"ain_internacoes"> | Date | string | null
    dt_saida_paciente?: DateTimeNullableWithAggregatesFilter<"ain_internacoes"> | Date | string | null
    iho_seq_origem?: IntNullableWithAggregatesFilter<"ain_internacoes"> | number | null
    iho_seq_transferencia?: IntNullableWithAggregatesFilter<"ain_internacoes"> | number | null
    justificativa_alt_del?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
    dthr_primeiro_evento?: DateTimeNullableWithAggregatesFilter<"ain_internacoes"> | Date | string | null
    dthr_ultimo_evento?: DateTimeNullableWithAggregatesFilter<"ain_internacoes"> | Date | string | null
    iph_seq?: IntNullableWithAggregatesFilter<"ain_internacoes"> | number | null
    iph_pho_seq?: IntNullableWithAggregatesFilter<"ain_internacoes"> | number | null
    ind_alta_manual?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
    prontuario_legal?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
    doc_obito?: BigIntNullableWithAggregatesFilter<"ain_internacoes"> | bigint | number | null
    pjq_seq?: IntNullableWithAggregatesFilter<"ain_internacoes"> | number | null
    ind_cons_marcada?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
    apo_seq?: IntNullableWithAggregatesFilter<"ain_internacoes"> | number | null
    dthr_aviso_samis?: DateTimeNullableWithAggregatesFilter<"ain_internacoes"> | Date | string | null
    dthr_prontuario_buscado?: DateTimeNullableWithAggregatesFilter<"ain_internacoes"> | Date | string | null
    version?: IntWithAggregatesFilter<"ain_internacoes"> | number
    seq_medico_externo?: IntNullableWithAggregatesFilter<"ain_internacoes"> | number | null
    proc_internacao_paciente?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
    local_atendimento_paciente?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
    mod_assistencial?: StringNullableWithAggregatesFilter<"ain_internacoes"> | string | null
  }

  export type ain_leitosWhereInput = {
    AND?: ain_leitosWhereInput | ain_leitosWhereInput[]
    OR?: ain_leitosWhereInput[]
    NOT?: ain_leitosWhereInput | ain_leitosWhereInput[]
    lto_id?: StringFilter<"ain_leitos"> | string
    qrt_numero?: IntFilter<"ain_leitos"> | number
    leito?: StringFilter<"ain_leitos"> | string
    ind_cons_clin_unidade?: StringFilter<"ain_leitos"> | string
    ind_bloq_leito_limpeza?: StringFilter<"ain_leitos"> | string
    tml_codigo?: IntFilter<"ain_leitos"> | number
    unf_seq?: IntFilter<"ain_leitos"> | number
    ind_situacao?: StringNullableFilter<"ain_leitos"> | string | null
    esp_seq?: IntNullableFilter<"ain_leitos"> | number | null
    int_seq?: IntNullableFilter<"ain_leitos"> | number | null
    ind_pertence_refl?: StringNullableFilter<"ain_leitos"> | string | null
    ind_cons_esp?: StringFilter<"ain_leitos"> | string
    ser_matricula?: IntNullableFilter<"ain_leitos"> | number | null
    ser_vin_codigo?: IntNullableFilter<"ain_leitos"> | number | null
    ind_acompanhamento_ccih?: StringNullableFilter<"ain_leitos"> | string | null
    version?: IntNullableFilter<"ain_leitos"> | number | null
    tpclsfcclto_seq?: IntNullableFilter<"ain_leitos"> | number | null
    ind_leito_extra?: StringFilter<"ain_leitos"> | string
  }

  export type ain_leitosOrderByWithRelationInput = {
    lto_id?: SortOrder
    qrt_numero?: SortOrder
    leito?: SortOrder
    ind_cons_clin_unidade?: SortOrder
    ind_bloq_leito_limpeza?: SortOrder
    tml_codigo?: SortOrder
    unf_seq?: SortOrder
    ind_situacao?: SortOrderInput | SortOrder
    esp_seq?: SortOrderInput | SortOrder
    int_seq?: SortOrderInput | SortOrder
    ind_pertence_refl?: SortOrderInput | SortOrder
    ind_cons_esp?: SortOrder
    ser_matricula?: SortOrderInput | SortOrder
    ser_vin_codigo?: SortOrderInput | SortOrder
    ind_acompanhamento_ccih?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    tpclsfcclto_seq?: SortOrderInput | SortOrder
    ind_leito_extra?: SortOrder
  }

  export type ain_leitosWhereUniqueInput = Prisma.AtLeast<{
    lto_id?: string
    qrt_numero_leito?: ain_leitosQrt_numeroLeitoCompoundUniqueInput
    AND?: ain_leitosWhereInput | ain_leitosWhereInput[]
    OR?: ain_leitosWhereInput[]
    NOT?: ain_leitosWhereInput | ain_leitosWhereInput[]
    qrt_numero?: IntFilter<"ain_leitos"> | number
    leito?: StringFilter<"ain_leitos"> | string
    ind_cons_clin_unidade?: StringFilter<"ain_leitos"> | string
    ind_bloq_leito_limpeza?: StringFilter<"ain_leitos"> | string
    tml_codigo?: IntFilter<"ain_leitos"> | number
    unf_seq?: IntFilter<"ain_leitos"> | number
    ind_situacao?: StringNullableFilter<"ain_leitos"> | string | null
    esp_seq?: IntNullableFilter<"ain_leitos"> | number | null
    int_seq?: IntNullableFilter<"ain_leitos"> | number | null
    ind_pertence_refl?: StringNullableFilter<"ain_leitos"> | string | null
    ind_cons_esp?: StringFilter<"ain_leitos"> | string
    ser_matricula?: IntNullableFilter<"ain_leitos"> | number | null
    ser_vin_codigo?: IntNullableFilter<"ain_leitos"> | number | null
    ind_acompanhamento_ccih?: StringNullableFilter<"ain_leitos"> | string | null
    version?: IntNullableFilter<"ain_leitos"> | number | null
    tpclsfcclto_seq?: IntNullableFilter<"ain_leitos"> | number | null
    ind_leito_extra?: StringFilter<"ain_leitos"> | string
  }, "lto_id" | "qrt_numero_leito">

  export type ain_leitosOrderByWithAggregationInput = {
    lto_id?: SortOrder
    qrt_numero?: SortOrder
    leito?: SortOrder
    ind_cons_clin_unidade?: SortOrder
    ind_bloq_leito_limpeza?: SortOrder
    tml_codigo?: SortOrder
    unf_seq?: SortOrder
    ind_situacao?: SortOrderInput | SortOrder
    esp_seq?: SortOrderInput | SortOrder
    int_seq?: SortOrderInput | SortOrder
    ind_pertence_refl?: SortOrderInput | SortOrder
    ind_cons_esp?: SortOrder
    ser_matricula?: SortOrderInput | SortOrder
    ser_vin_codigo?: SortOrderInput | SortOrder
    ind_acompanhamento_ccih?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    tpclsfcclto_seq?: SortOrderInput | SortOrder
    ind_leito_extra?: SortOrder
    _count?: ain_leitosCountOrderByAggregateInput
    _avg?: ain_leitosAvgOrderByAggregateInput
    _max?: ain_leitosMaxOrderByAggregateInput
    _min?: ain_leitosMinOrderByAggregateInput
    _sum?: ain_leitosSumOrderByAggregateInput
  }

  export type ain_leitosScalarWhereWithAggregatesInput = {
    AND?: ain_leitosScalarWhereWithAggregatesInput | ain_leitosScalarWhereWithAggregatesInput[]
    OR?: ain_leitosScalarWhereWithAggregatesInput[]
    NOT?: ain_leitosScalarWhereWithAggregatesInput | ain_leitosScalarWhereWithAggregatesInput[]
    lto_id?: StringWithAggregatesFilter<"ain_leitos"> | string
    qrt_numero?: IntWithAggregatesFilter<"ain_leitos"> | number
    leito?: StringWithAggregatesFilter<"ain_leitos"> | string
    ind_cons_clin_unidade?: StringWithAggregatesFilter<"ain_leitos"> | string
    ind_bloq_leito_limpeza?: StringWithAggregatesFilter<"ain_leitos"> | string
    tml_codigo?: IntWithAggregatesFilter<"ain_leitos"> | number
    unf_seq?: IntWithAggregatesFilter<"ain_leitos"> | number
    ind_situacao?: StringNullableWithAggregatesFilter<"ain_leitos"> | string | null
    esp_seq?: IntNullableWithAggregatesFilter<"ain_leitos"> | number | null
    int_seq?: IntNullableWithAggregatesFilter<"ain_leitos"> | number | null
    ind_pertence_refl?: StringNullableWithAggregatesFilter<"ain_leitos"> | string | null
    ind_cons_esp?: StringWithAggregatesFilter<"ain_leitos"> | string
    ser_matricula?: IntNullableWithAggregatesFilter<"ain_leitos"> | number | null
    ser_vin_codigo?: IntNullableWithAggregatesFilter<"ain_leitos"> | number | null
    ind_acompanhamento_ccih?: StringNullableWithAggregatesFilter<"ain_leitos"> | string | null
    version?: IntNullableWithAggregatesFilter<"ain_leitos"> | number | null
    tpclsfcclto_seq?: IntNullableWithAggregatesFilter<"ain_leitos"> | number | null
    ind_leito_extra?: StringWithAggregatesFilter<"ain_leitos"> | string
  }

  export type aip_pacientesWhereInput = {
    AND?: aip_pacientesWhereInput | aip_pacientesWhereInput[]
    OR?: aip_pacientesWhereInput[]
    NOT?: aip_pacientesWhereInput | aip_pacientesWhereInput[]
    codigo?: IntFilter<"aip_pacientes"> | number
    cct_codigo_cadastro?: IntFilter<"aip_pacientes"> | number
    ser_matricula_cadastro?: IntFilter<"aip_pacientes"> | number
    ser_vin_codigo_cadastro?: IntFilter<"aip_pacientes"> | number
    nome?: StringFilter<"aip_pacientes"> | string
    nome_mae?: StringFilter<"aip_pacientes"> | string
    dt_nascimento?: DateTimeFilter<"aip_pacientes"> | Date | string
    dt_identificacao?: DateTimeFilter<"aip_pacientes"> | Date | string
    cct_codigo_recadastro?: IntNullableFilter<"aip_pacientes"> | number | null
    cdd_codigo?: IntNullableFilter<"aip_pacientes"> | number | null
    nac_codigo?: IntNullableFilter<"aip_pacientes"> | number | null
    ocp_codigo?: IntNullableFilter<"aip_pacientes"> | number | null
    uf_sigla?: StringNullableFilter<"aip_pacientes"> | string | null
    ser_matricula_recadastro?: IntNullableFilter<"aip_pacientes"> | number | null
    ser_vin_codigo_recadastro?: IntNullableFilter<"aip_pacientes"> | number | null
    cor?: StringNullableFilter<"aip_pacientes"> | string | null
    sexo?: StringNullableFilter<"aip_pacientes"> | string | null
    grau_instrucao?: IntNullableFilter<"aip_pacientes"> | number | null
    nome_pai?: StringNullableFilter<"aip_pacientes"> | string | null
    naturalidade?: StringNullableFilter<"aip_pacientes"> | string | null
    ddd_fone_residencial?: IntNullableFilter<"aip_pacientes"> | number | null
    fone_residencial?: BigIntNullableFilter<"aip_pacientes"> | bigint | number | null
    ddd_fone_recado?: IntNullableFilter<"aip_pacientes"> | number | null
    fone_recado?: StringNullableFilter<"aip_pacientes"> | string | null
    estado_civil?: StringNullableFilter<"aip_pacientes"> | string | null
    cpf?: BigIntNullableFilter<"aip_pacientes"> | bigint | number | null
    prontuario?: IntNullableFilter<"aip_pacientes"> | number | null
    dt_obito?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    rg?: StringNullableFilter<"aip_pacientes"> | string | null
    orgao_emis_rg?: StringNullableFilter<"aip_pacientes"> | string | null
    observacao?: StringNullableFilter<"aip_pacientes"> | string | null
    prnt_ativo?: StringNullableFilter<"aip_pacientes"> | string | null
    cad_confirmado?: StringNullableFilter<"aip_pacientes"> | string | null
    ind_gera_prontuario?: StringNullableFilter<"aip_pacientes"> | string | null
    dt_ult_internacao?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    dt_ult_alta?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    dt_ult_consulta?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    dt_ult_procedimento?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    dt_ult_atend_hosp_dia?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    dt_ult_alta_hosp_dia?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    qrt_numero?: IntNullableFilter<"aip_pacientes"> | number | null
    unf_seq?: IntNullableFilter<"aip_pacientes"> | number | null
    lto_lto_id?: StringNullableFilter<"aip_pacientes"> | string | null
    reg_nascimento?: StringNullableFilter<"aip_pacientes"> | string | null
    nro_cartao_saude?: BigIntNullableFilter<"aip_pacientes"> | bigint | number | null
    dt_recadastro?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    ind_paciente_vip?: StringFilter<"aip_pacientes"> | string
    pac_codigo_mae?: IntNullableFilter<"aip_pacientes"> | number | null
    tipo_data_obito?: StringNullableFilter<"aip_pacientes"> | string | null
    dt_obito_externo?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    rna_gso_pac_codigo?: IntNullableFilter<"aip_pacientes"> | number | null
    rna_gso_seqp?: IntNullableFilter<"aip_pacientes"> | number | null
    rna_seqp?: IntNullableFilter<"aip_pacientes"> | number | null
    numero_pis?: BigIntNullableFilter<"aip_pacientes"> | bigint | number | null
    volumes?: IntNullableFilter<"aip_pacientes"> | number | null
    ind_pac_protegido?: StringNullableFilter<"aip_pacientes"> | string | null
    criado_em?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    ind_pac_agfa?: StringNullableFilter<"aip_pacientes"> | string | null
    sexo_biologico?: StringNullableFilter<"aip_pacientes"> | string | null
    version?: IntNullableFilter<"aip_pacientes"> | number | null
    etn_id?: BigIntNullableFilter<"aip_pacientes"> | bigint | number | null
    id_sistema_legado?: BigIntNullableFilter<"aip_pacientes"> | bigint | number | null
    nome_social?: StringNullableFilter<"aip_pacientes"> | string | null
    cnh?: DecimalNullableFilter<"aip_pacientes"> | Decimal | DecimalJsLike | number | string | null
    data_validade_cnh?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    email?: StringNullableFilter<"aip_pacientes"> | string | null
    rel_codigo?: IntNullableFilter<"aip_pacientes"> | number | null
    dt_exp_germe_multirresistente?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    germe_multirresistente?: StringNullableFilter<"aip_pacientes"> | string | null
    pac_codigo_valido?: IntNullableFilter<"aip_pacientes"> | number | null
  }

  export type aip_pacientesOrderByWithRelationInput = {
    codigo?: SortOrder
    cct_codigo_cadastro?: SortOrder
    ser_matricula_cadastro?: SortOrder
    ser_vin_codigo_cadastro?: SortOrder
    nome?: SortOrder
    nome_mae?: SortOrder
    dt_nascimento?: SortOrder
    dt_identificacao?: SortOrder
    cct_codigo_recadastro?: SortOrderInput | SortOrder
    cdd_codigo?: SortOrderInput | SortOrder
    nac_codigo?: SortOrderInput | SortOrder
    ocp_codigo?: SortOrderInput | SortOrder
    uf_sigla?: SortOrderInput | SortOrder
    ser_matricula_recadastro?: SortOrderInput | SortOrder
    ser_vin_codigo_recadastro?: SortOrderInput | SortOrder
    cor?: SortOrderInput | SortOrder
    sexo?: SortOrderInput | SortOrder
    grau_instrucao?: SortOrderInput | SortOrder
    nome_pai?: SortOrderInput | SortOrder
    naturalidade?: SortOrderInput | SortOrder
    ddd_fone_residencial?: SortOrderInput | SortOrder
    fone_residencial?: SortOrderInput | SortOrder
    ddd_fone_recado?: SortOrderInput | SortOrder
    fone_recado?: SortOrderInput | SortOrder
    estado_civil?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    prontuario?: SortOrderInput | SortOrder
    dt_obito?: SortOrderInput | SortOrder
    rg?: SortOrderInput | SortOrder
    orgao_emis_rg?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    prnt_ativo?: SortOrderInput | SortOrder
    cad_confirmado?: SortOrderInput | SortOrder
    ind_gera_prontuario?: SortOrderInput | SortOrder
    dt_ult_internacao?: SortOrderInput | SortOrder
    dt_ult_alta?: SortOrderInput | SortOrder
    dt_ult_consulta?: SortOrderInput | SortOrder
    dt_ult_procedimento?: SortOrderInput | SortOrder
    dt_ult_atend_hosp_dia?: SortOrderInput | SortOrder
    dt_ult_alta_hosp_dia?: SortOrderInput | SortOrder
    qrt_numero?: SortOrderInput | SortOrder
    unf_seq?: SortOrderInput | SortOrder
    lto_lto_id?: SortOrderInput | SortOrder
    reg_nascimento?: SortOrderInput | SortOrder
    nro_cartao_saude?: SortOrderInput | SortOrder
    dt_recadastro?: SortOrderInput | SortOrder
    ind_paciente_vip?: SortOrder
    pac_codigo_mae?: SortOrderInput | SortOrder
    tipo_data_obito?: SortOrderInput | SortOrder
    dt_obito_externo?: SortOrderInput | SortOrder
    rna_gso_pac_codigo?: SortOrderInput | SortOrder
    rna_gso_seqp?: SortOrderInput | SortOrder
    rna_seqp?: SortOrderInput | SortOrder
    numero_pis?: SortOrderInput | SortOrder
    volumes?: SortOrderInput | SortOrder
    ind_pac_protegido?: SortOrderInput | SortOrder
    criado_em?: SortOrderInput | SortOrder
    ind_pac_agfa?: SortOrderInput | SortOrder
    sexo_biologico?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    etn_id?: SortOrderInput | SortOrder
    id_sistema_legado?: SortOrderInput | SortOrder
    nome_social?: SortOrderInput | SortOrder
    cnh?: SortOrderInput | SortOrder
    data_validade_cnh?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    rel_codigo?: SortOrderInput | SortOrder
    dt_exp_germe_multirresistente?: SortOrderInput | SortOrder
    germe_multirresistente?: SortOrderInput | SortOrder
    pac_codigo_valido?: SortOrderInput | SortOrder
  }

  export type aip_pacientesWhereUniqueInput = Prisma.AtLeast<{
    codigo?: number
    prontuario?: number
    AND?: aip_pacientesWhereInput | aip_pacientesWhereInput[]
    OR?: aip_pacientesWhereInput[]
    NOT?: aip_pacientesWhereInput | aip_pacientesWhereInput[]
    cct_codigo_cadastro?: IntFilter<"aip_pacientes"> | number
    ser_matricula_cadastro?: IntFilter<"aip_pacientes"> | number
    ser_vin_codigo_cadastro?: IntFilter<"aip_pacientes"> | number
    nome?: StringFilter<"aip_pacientes"> | string
    nome_mae?: StringFilter<"aip_pacientes"> | string
    dt_nascimento?: DateTimeFilter<"aip_pacientes"> | Date | string
    dt_identificacao?: DateTimeFilter<"aip_pacientes"> | Date | string
    cct_codigo_recadastro?: IntNullableFilter<"aip_pacientes"> | number | null
    cdd_codigo?: IntNullableFilter<"aip_pacientes"> | number | null
    nac_codigo?: IntNullableFilter<"aip_pacientes"> | number | null
    ocp_codigo?: IntNullableFilter<"aip_pacientes"> | number | null
    uf_sigla?: StringNullableFilter<"aip_pacientes"> | string | null
    ser_matricula_recadastro?: IntNullableFilter<"aip_pacientes"> | number | null
    ser_vin_codigo_recadastro?: IntNullableFilter<"aip_pacientes"> | number | null
    cor?: StringNullableFilter<"aip_pacientes"> | string | null
    sexo?: StringNullableFilter<"aip_pacientes"> | string | null
    grau_instrucao?: IntNullableFilter<"aip_pacientes"> | number | null
    nome_pai?: StringNullableFilter<"aip_pacientes"> | string | null
    naturalidade?: StringNullableFilter<"aip_pacientes"> | string | null
    ddd_fone_residencial?: IntNullableFilter<"aip_pacientes"> | number | null
    fone_residencial?: BigIntNullableFilter<"aip_pacientes"> | bigint | number | null
    ddd_fone_recado?: IntNullableFilter<"aip_pacientes"> | number | null
    fone_recado?: StringNullableFilter<"aip_pacientes"> | string | null
    estado_civil?: StringNullableFilter<"aip_pacientes"> | string | null
    cpf?: BigIntNullableFilter<"aip_pacientes"> | bigint | number | null
    dt_obito?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    rg?: StringNullableFilter<"aip_pacientes"> | string | null
    orgao_emis_rg?: StringNullableFilter<"aip_pacientes"> | string | null
    observacao?: StringNullableFilter<"aip_pacientes"> | string | null
    prnt_ativo?: StringNullableFilter<"aip_pacientes"> | string | null
    cad_confirmado?: StringNullableFilter<"aip_pacientes"> | string | null
    ind_gera_prontuario?: StringNullableFilter<"aip_pacientes"> | string | null
    dt_ult_internacao?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    dt_ult_alta?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    dt_ult_consulta?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    dt_ult_procedimento?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    dt_ult_atend_hosp_dia?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    dt_ult_alta_hosp_dia?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    qrt_numero?: IntNullableFilter<"aip_pacientes"> | number | null
    unf_seq?: IntNullableFilter<"aip_pacientes"> | number | null
    lto_lto_id?: StringNullableFilter<"aip_pacientes"> | string | null
    reg_nascimento?: StringNullableFilter<"aip_pacientes"> | string | null
    nro_cartao_saude?: BigIntNullableFilter<"aip_pacientes"> | bigint | number | null
    dt_recadastro?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    ind_paciente_vip?: StringFilter<"aip_pacientes"> | string
    pac_codigo_mae?: IntNullableFilter<"aip_pacientes"> | number | null
    tipo_data_obito?: StringNullableFilter<"aip_pacientes"> | string | null
    dt_obito_externo?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    rna_gso_pac_codigo?: IntNullableFilter<"aip_pacientes"> | number | null
    rna_gso_seqp?: IntNullableFilter<"aip_pacientes"> | number | null
    rna_seqp?: IntNullableFilter<"aip_pacientes"> | number | null
    numero_pis?: BigIntNullableFilter<"aip_pacientes"> | bigint | number | null
    volumes?: IntNullableFilter<"aip_pacientes"> | number | null
    ind_pac_protegido?: StringNullableFilter<"aip_pacientes"> | string | null
    criado_em?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    ind_pac_agfa?: StringNullableFilter<"aip_pacientes"> | string | null
    sexo_biologico?: StringNullableFilter<"aip_pacientes"> | string | null
    version?: IntNullableFilter<"aip_pacientes"> | number | null
    etn_id?: BigIntNullableFilter<"aip_pacientes"> | bigint | number | null
    id_sistema_legado?: BigIntNullableFilter<"aip_pacientes"> | bigint | number | null
    nome_social?: StringNullableFilter<"aip_pacientes"> | string | null
    cnh?: DecimalNullableFilter<"aip_pacientes"> | Decimal | DecimalJsLike | number | string | null
    data_validade_cnh?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    email?: StringNullableFilter<"aip_pacientes"> | string | null
    rel_codigo?: IntNullableFilter<"aip_pacientes"> | number | null
    dt_exp_germe_multirresistente?: DateTimeNullableFilter<"aip_pacientes"> | Date | string | null
    germe_multirresistente?: StringNullableFilter<"aip_pacientes"> | string | null
    pac_codigo_valido?: IntNullableFilter<"aip_pacientes"> | number | null
  }, "codigo" | "prontuario">

  export type aip_pacientesOrderByWithAggregationInput = {
    codigo?: SortOrder
    cct_codigo_cadastro?: SortOrder
    ser_matricula_cadastro?: SortOrder
    ser_vin_codigo_cadastro?: SortOrder
    nome?: SortOrder
    nome_mae?: SortOrder
    dt_nascimento?: SortOrder
    dt_identificacao?: SortOrder
    cct_codigo_recadastro?: SortOrderInput | SortOrder
    cdd_codigo?: SortOrderInput | SortOrder
    nac_codigo?: SortOrderInput | SortOrder
    ocp_codigo?: SortOrderInput | SortOrder
    uf_sigla?: SortOrderInput | SortOrder
    ser_matricula_recadastro?: SortOrderInput | SortOrder
    ser_vin_codigo_recadastro?: SortOrderInput | SortOrder
    cor?: SortOrderInput | SortOrder
    sexo?: SortOrderInput | SortOrder
    grau_instrucao?: SortOrderInput | SortOrder
    nome_pai?: SortOrderInput | SortOrder
    naturalidade?: SortOrderInput | SortOrder
    ddd_fone_residencial?: SortOrderInput | SortOrder
    fone_residencial?: SortOrderInput | SortOrder
    ddd_fone_recado?: SortOrderInput | SortOrder
    fone_recado?: SortOrderInput | SortOrder
    estado_civil?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    prontuario?: SortOrderInput | SortOrder
    dt_obito?: SortOrderInput | SortOrder
    rg?: SortOrderInput | SortOrder
    orgao_emis_rg?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    prnt_ativo?: SortOrderInput | SortOrder
    cad_confirmado?: SortOrderInput | SortOrder
    ind_gera_prontuario?: SortOrderInput | SortOrder
    dt_ult_internacao?: SortOrderInput | SortOrder
    dt_ult_alta?: SortOrderInput | SortOrder
    dt_ult_consulta?: SortOrderInput | SortOrder
    dt_ult_procedimento?: SortOrderInput | SortOrder
    dt_ult_atend_hosp_dia?: SortOrderInput | SortOrder
    dt_ult_alta_hosp_dia?: SortOrderInput | SortOrder
    qrt_numero?: SortOrderInput | SortOrder
    unf_seq?: SortOrderInput | SortOrder
    lto_lto_id?: SortOrderInput | SortOrder
    reg_nascimento?: SortOrderInput | SortOrder
    nro_cartao_saude?: SortOrderInput | SortOrder
    dt_recadastro?: SortOrderInput | SortOrder
    ind_paciente_vip?: SortOrder
    pac_codigo_mae?: SortOrderInput | SortOrder
    tipo_data_obito?: SortOrderInput | SortOrder
    dt_obito_externo?: SortOrderInput | SortOrder
    rna_gso_pac_codigo?: SortOrderInput | SortOrder
    rna_gso_seqp?: SortOrderInput | SortOrder
    rna_seqp?: SortOrderInput | SortOrder
    numero_pis?: SortOrderInput | SortOrder
    volumes?: SortOrderInput | SortOrder
    ind_pac_protegido?: SortOrderInput | SortOrder
    criado_em?: SortOrderInput | SortOrder
    ind_pac_agfa?: SortOrderInput | SortOrder
    sexo_biologico?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    etn_id?: SortOrderInput | SortOrder
    id_sistema_legado?: SortOrderInput | SortOrder
    nome_social?: SortOrderInput | SortOrder
    cnh?: SortOrderInput | SortOrder
    data_validade_cnh?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    rel_codigo?: SortOrderInput | SortOrder
    dt_exp_germe_multirresistente?: SortOrderInput | SortOrder
    germe_multirresistente?: SortOrderInput | SortOrder
    pac_codigo_valido?: SortOrderInput | SortOrder
    _count?: aip_pacientesCountOrderByAggregateInput
    _avg?: aip_pacientesAvgOrderByAggregateInput
    _max?: aip_pacientesMaxOrderByAggregateInput
    _min?: aip_pacientesMinOrderByAggregateInput
    _sum?: aip_pacientesSumOrderByAggregateInput
  }

  export type aip_pacientesScalarWhereWithAggregatesInput = {
    AND?: aip_pacientesScalarWhereWithAggregatesInput | aip_pacientesScalarWhereWithAggregatesInput[]
    OR?: aip_pacientesScalarWhereWithAggregatesInput[]
    NOT?: aip_pacientesScalarWhereWithAggregatesInput | aip_pacientesScalarWhereWithAggregatesInput[]
    codigo?: IntWithAggregatesFilter<"aip_pacientes"> | number
    cct_codigo_cadastro?: IntWithAggregatesFilter<"aip_pacientes"> | number
    ser_matricula_cadastro?: IntWithAggregatesFilter<"aip_pacientes"> | number
    ser_vin_codigo_cadastro?: IntWithAggregatesFilter<"aip_pacientes"> | number
    nome?: StringWithAggregatesFilter<"aip_pacientes"> | string
    nome_mae?: StringWithAggregatesFilter<"aip_pacientes"> | string
    dt_nascimento?: DateTimeWithAggregatesFilter<"aip_pacientes"> | Date | string
    dt_identificacao?: DateTimeWithAggregatesFilter<"aip_pacientes"> | Date | string
    cct_codigo_recadastro?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    cdd_codigo?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    nac_codigo?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    ocp_codigo?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    uf_sigla?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    ser_matricula_recadastro?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    ser_vin_codigo_recadastro?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    cor?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    sexo?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    grau_instrucao?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    nome_pai?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    naturalidade?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    ddd_fone_residencial?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    fone_residencial?: BigIntNullableWithAggregatesFilter<"aip_pacientes"> | bigint | number | null
    ddd_fone_recado?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    fone_recado?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    estado_civil?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    cpf?: BigIntNullableWithAggregatesFilter<"aip_pacientes"> | bigint | number | null
    prontuario?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    dt_obito?: DateTimeNullableWithAggregatesFilter<"aip_pacientes"> | Date | string | null
    rg?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    orgao_emis_rg?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    observacao?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    prnt_ativo?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    cad_confirmado?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    ind_gera_prontuario?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    dt_ult_internacao?: DateTimeNullableWithAggregatesFilter<"aip_pacientes"> | Date | string | null
    dt_ult_alta?: DateTimeNullableWithAggregatesFilter<"aip_pacientes"> | Date | string | null
    dt_ult_consulta?: DateTimeNullableWithAggregatesFilter<"aip_pacientes"> | Date | string | null
    dt_ult_procedimento?: DateTimeNullableWithAggregatesFilter<"aip_pacientes"> | Date | string | null
    dt_ult_atend_hosp_dia?: DateTimeNullableWithAggregatesFilter<"aip_pacientes"> | Date | string | null
    dt_ult_alta_hosp_dia?: DateTimeNullableWithAggregatesFilter<"aip_pacientes"> | Date | string | null
    qrt_numero?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    unf_seq?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    lto_lto_id?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    reg_nascimento?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    nro_cartao_saude?: BigIntNullableWithAggregatesFilter<"aip_pacientes"> | bigint | number | null
    dt_recadastro?: DateTimeNullableWithAggregatesFilter<"aip_pacientes"> | Date | string | null
    ind_paciente_vip?: StringWithAggregatesFilter<"aip_pacientes"> | string
    pac_codigo_mae?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    tipo_data_obito?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    dt_obito_externo?: DateTimeNullableWithAggregatesFilter<"aip_pacientes"> | Date | string | null
    rna_gso_pac_codigo?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    rna_gso_seqp?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    rna_seqp?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    numero_pis?: BigIntNullableWithAggregatesFilter<"aip_pacientes"> | bigint | number | null
    volumes?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    ind_pac_protegido?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    criado_em?: DateTimeNullableWithAggregatesFilter<"aip_pacientes"> | Date | string | null
    ind_pac_agfa?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    sexo_biologico?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    version?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    etn_id?: BigIntNullableWithAggregatesFilter<"aip_pacientes"> | bigint | number | null
    id_sistema_legado?: BigIntNullableWithAggregatesFilter<"aip_pacientes"> | bigint | number | null
    nome_social?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    cnh?: DecimalNullableWithAggregatesFilter<"aip_pacientes"> | Decimal | DecimalJsLike | number | string | null
    data_validade_cnh?: DateTimeNullableWithAggregatesFilter<"aip_pacientes"> | Date | string | null
    email?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    rel_codigo?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
    dt_exp_germe_multirresistente?: DateTimeNullableWithAggregatesFilter<"aip_pacientes"> | Date | string | null
    germe_multirresistente?: StringNullableWithAggregatesFilter<"aip_pacientes"> | string | null
    pac_codigo_valido?: IntNullableWithAggregatesFilter<"aip_pacientes"> | number | null
  }

  export type rap_pessoas_fisicasWhereInput = {
    AND?: rap_pessoas_fisicasWhereInput | rap_pessoas_fisicasWhereInput[]
    OR?: rap_pessoas_fisicasWhereInput[]
    NOT?: rap_pessoas_fisicasWhereInput | rap_pessoas_fisicasWhereInput[]
    codigo?: IntFilter<"rap_pessoas_fisicas"> | number
    cpf?: BigIntNullableFilter<"rap_pessoas_fisicas"> | bigint | number | null
    nome?: StringFilter<"rap_pessoas_fisicas"> | string
    nome_mae?: StringFilter<"rap_pessoas_fisicas"> | string
    pac_prontuario?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    nome_pai?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    dt_nascimento?: DateTimeFilter<"rap_pessoas_fisicas"> | Date | string
    sexo?: StringFilter<"rap_pessoas_fisicas"> | string
    nome_usual?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    grau_instrucao?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    estado_civil?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    bcl_clo_lgr_codigo?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    bcl_clo_cep?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    bcl_bai_codigo?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    cdd_codigo?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    nac_codigo?: IntFilter<"rap_pessoas_fisicas"> | number
    logradouro?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    compl_logradouro?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    nro_logradouro?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    cep?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    bairro?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    cidade_nascimento?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    uf_sigla?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    nro_identidade?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    nro_cart_profissional?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    serie_cart_profissional?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    pis_pasep?: BigIntNullableFilter<"rap_pessoas_fisicas"> | bigint | number | null
    nro_tit_eleitor?: BigIntNullableFilter<"rap_pessoas_fisicas"> | bigint | number | null
    zona_tit_eleitor?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    secao_tit_eleitor?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    ddd_fone_residencial?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    fone_residencial?: BigIntNullableFilter<"rap_pessoas_fisicas"> | bigint | number | null
    ramal_fone_residencial?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    ddd_fone_celular?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    fone_celular?: BigIntNullableFilter<"rap_pessoas_fisicas"> | bigint | number | null
    ddd_fone_pager_bip?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    fone_pager_bip?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    nro_pager_bip?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    email_particular?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    criado_em?: DateTimeNullableFilter<"rap_pessoas_fisicas"> | Date | string | null
    ser_matricula?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    ser_vin_codigo?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    pac_codigo?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    version?: IntFilter<"rap_pessoas_fisicas"> | number
    cdd_codigo_municipio?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    uf_orgao?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    dt_emissao_documento?: DateTimeNullableFilter<"rap_pessoas_fisicas"> | Date | string | null
    orgao_emissor_rg?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
  }

  export type rap_pessoas_fisicasOrderByWithRelationInput = {
    codigo?: SortOrder
    cpf?: SortOrderInput | SortOrder
    nome?: SortOrder
    nome_mae?: SortOrder
    pac_prontuario?: SortOrderInput | SortOrder
    nome_pai?: SortOrderInput | SortOrder
    dt_nascimento?: SortOrder
    sexo?: SortOrder
    nome_usual?: SortOrderInput | SortOrder
    grau_instrucao?: SortOrderInput | SortOrder
    estado_civil?: SortOrderInput | SortOrder
    bcl_clo_lgr_codigo?: SortOrderInput | SortOrder
    bcl_clo_cep?: SortOrderInput | SortOrder
    bcl_bai_codigo?: SortOrderInput | SortOrder
    cdd_codigo?: SortOrderInput | SortOrder
    nac_codigo?: SortOrder
    logradouro?: SortOrderInput | SortOrder
    compl_logradouro?: SortOrderInput | SortOrder
    nro_logradouro?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    cidade_nascimento?: SortOrderInput | SortOrder
    uf_sigla?: SortOrderInput | SortOrder
    nro_identidade?: SortOrderInput | SortOrder
    nro_cart_profissional?: SortOrderInput | SortOrder
    serie_cart_profissional?: SortOrderInput | SortOrder
    pis_pasep?: SortOrderInput | SortOrder
    nro_tit_eleitor?: SortOrderInput | SortOrder
    zona_tit_eleitor?: SortOrderInput | SortOrder
    secao_tit_eleitor?: SortOrderInput | SortOrder
    ddd_fone_residencial?: SortOrderInput | SortOrder
    fone_residencial?: SortOrderInput | SortOrder
    ramal_fone_residencial?: SortOrderInput | SortOrder
    ddd_fone_celular?: SortOrderInput | SortOrder
    fone_celular?: SortOrderInput | SortOrder
    ddd_fone_pager_bip?: SortOrderInput | SortOrder
    fone_pager_bip?: SortOrderInput | SortOrder
    nro_pager_bip?: SortOrderInput | SortOrder
    email_particular?: SortOrderInput | SortOrder
    criado_em?: SortOrderInput | SortOrder
    ser_matricula?: SortOrderInput | SortOrder
    ser_vin_codigo?: SortOrderInput | SortOrder
    pac_codigo?: SortOrderInput | SortOrder
    version?: SortOrder
    cdd_codigo_municipio?: SortOrderInput | SortOrder
    uf_orgao?: SortOrderInput | SortOrder
    dt_emissao_documento?: SortOrderInput | SortOrder
    orgao_emissor_rg?: SortOrderInput | SortOrder
  }

  export type rap_pessoas_fisicasWhereUniqueInput = Prisma.AtLeast<{
    codigo?: number
    cpf?: bigint | number
    pac_codigo?: number
    AND?: rap_pessoas_fisicasWhereInput | rap_pessoas_fisicasWhereInput[]
    OR?: rap_pessoas_fisicasWhereInput[]
    NOT?: rap_pessoas_fisicasWhereInput | rap_pessoas_fisicasWhereInput[]
    nome?: StringFilter<"rap_pessoas_fisicas"> | string
    nome_mae?: StringFilter<"rap_pessoas_fisicas"> | string
    pac_prontuario?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    nome_pai?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    dt_nascimento?: DateTimeFilter<"rap_pessoas_fisicas"> | Date | string
    sexo?: StringFilter<"rap_pessoas_fisicas"> | string
    nome_usual?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    grau_instrucao?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    estado_civil?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    bcl_clo_lgr_codigo?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    bcl_clo_cep?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    bcl_bai_codigo?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    cdd_codigo?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    nac_codigo?: IntFilter<"rap_pessoas_fisicas"> | number
    logradouro?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    compl_logradouro?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    nro_logradouro?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    cep?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    bairro?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    cidade_nascimento?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    uf_sigla?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    nro_identidade?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    nro_cart_profissional?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    serie_cart_profissional?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    pis_pasep?: BigIntNullableFilter<"rap_pessoas_fisicas"> | bigint | number | null
    nro_tit_eleitor?: BigIntNullableFilter<"rap_pessoas_fisicas"> | bigint | number | null
    zona_tit_eleitor?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    secao_tit_eleitor?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    ddd_fone_residencial?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    fone_residencial?: BigIntNullableFilter<"rap_pessoas_fisicas"> | bigint | number | null
    ramal_fone_residencial?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    ddd_fone_celular?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    fone_celular?: BigIntNullableFilter<"rap_pessoas_fisicas"> | bigint | number | null
    ddd_fone_pager_bip?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    fone_pager_bip?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    nro_pager_bip?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    email_particular?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    criado_em?: DateTimeNullableFilter<"rap_pessoas_fisicas"> | Date | string | null
    ser_matricula?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    ser_vin_codigo?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    version?: IntFilter<"rap_pessoas_fisicas"> | number
    cdd_codigo_municipio?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
    uf_orgao?: StringNullableFilter<"rap_pessoas_fisicas"> | string | null
    dt_emissao_documento?: DateTimeNullableFilter<"rap_pessoas_fisicas"> | Date | string | null
    orgao_emissor_rg?: IntNullableFilter<"rap_pessoas_fisicas"> | number | null
  }, "codigo" | "cpf" | "pac_codigo">

  export type rap_pessoas_fisicasOrderByWithAggregationInput = {
    codigo?: SortOrder
    cpf?: SortOrderInput | SortOrder
    nome?: SortOrder
    nome_mae?: SortOrder
    pac_prontuario?: SortOrderInput | SortOrder
    nome_pai?: SortOrderInput | SortOrder
    dt_nascimento?: SortOrder
    sexo?: SortOrder
    nome_usual?: SortOrderInput | SortOrder
    grau_instrucao?: SortOrderInput | SortOrder
    estado_civil?: SortOrderInput | SortOrder
    bcl_clo_lgr_codigo?: SortOrderInput | SortOrder
    bcl_clo_cep?: SortOrderInput | SortOrder
    bcl_bai_codigo?: SortOrderInput | SortOrder
    cdd_codigo?: SortOrderInput | SortOrder
    nac_codigo?: SortOrder
    logradouro?: SortOrderInput | SortOrder
    compl_logradouro?: SortOrderInput | SortOrder
    nro_logradouro?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    cidade_nascimento?: SortOrderInput | SortOrder
    uf_sigla?: SortOrderInput | SortOrder
    nro_identidade?: SortOrderInput | SortOrder
    nro_cart_profissional?: SortOrderInput | SortOrder
    serie_cart_profissional?: SortOrderInput | SortOrder
    pis_pasep?: SortOrderInput | SortOrder
    nro_tit_eleitor?: SortOrderInput | SortOrder
    zona_tit_eleitor?: SortOrderInput | SortOrder
    secao_tit_eleitor?: SortOrderInput | SortOrder
    ddd_fone_residencial?: SortOrderInput | SortOrder
    fone_residencial?: SortOrderInput | SortOrder
    ramal_fone_residencial?: SortOrderInput | SortOrder
    ddd_fone_celular?: SortOrderInput | SortOrder
    fone_celular?: SortOrderInput | SortOrder
    ddd_fone_pager_bip?: SortOrderInput | SortOrder
    fone_pager_bip?: SortOrderInput | SortOrder
    nro_pager_bip?: SortOrderInput | SortOrder
    email_particular?: SortOrderInput | SortOrder
    criado_em?: SortOrderInput | SortOrder
    ser_matricula?: SortOrderInput | SortOrder
    ser_vin_codigo?: SortOrderInput | SortOrder
    pac_codigo?: SortOrderInput | SortOrder
    version?: SortOrder
    cdd_codigo_municipio?: SortOrderInput | SortOrder
    uf_orgao?: SortOrderInput | SortOrder
    dt_emissao_documento?: SortOrderInput | SortOrder
    orgao_emissor_rg?: SortOrderInput | SortOrder
    _count?: rap_pessoas_fisicasCountOrderByAggregateInput
    _avg?: rap_pessoas_fisicasAvgOrderByAggregateInput
    _max?: rap_pessoas_fisicasMaxOrderByAggregateInput
    _min?: rap_pessoas_fisicasMinOrderByAggregateInput
    _sum?: rap_pessoas_fisicasSumOrderByAggregateInput
  }

  export type rap_pessoas_fisicasScalarWhereWithAggregatesInput = {
    AND?: rap_pessoas_fisicasScalarWhereWithAggregatesInput | rap_pessoas_fisicasScalarWhereWithAggregatesInput[]
    OR?: rap_pessoas_fisicasScalarWhereWithAggregatesInput[]
    NOT?: rap_pessoas_fisicasScalarWhereWithAggregatesInput | rap_pessoas_fisicasScalarWhereWithAggregatesInput[]
    codigo?: IntWithAggregatesFilter<"rap_pessoas_fisicas"> | number
    cpf?: BigIntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | bigint | number | null
    nome?: StringWithAggregatesFilter<"rap_pessoas_fisicas"> | string
    nome_mae?: StringWithAggregatesFilter<"rap_pessoas_fisicas"> | string
    pac_prontuario?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    nome_pai?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    dt_nascimento?: DateTimeWithAggregatesFilter<"rap_pessoas_fisicas"> | Date | string
    sexo?: StringWithAggregatesFilter<"rap_pessoas_fisicas"> | string
    nome_usual?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    grau_instrucao?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    estado_civil?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    bcl_clo_lgr_codigo?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    bcl_clo_cep?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    bcl_bai_codigo?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    cdd_codigo?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    nac_codigo?: IntWithAggregatesFilter<"rap_pessoas_fisicas"> | number
    logradouro?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    compl_logradouro?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    nro_logradouro?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    cep?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    bairro?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    cidade_nascimento?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    uf_sigla?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    nro_identidade?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    nro_cart_profissional?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    serie_cart_profissional?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    pis_pasep?: BigIntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | bigint | number | null
    nro_tit_eleitor?: BigIntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | bigint | number | null
    zona_tit_eleitor?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    secao_tit_eleitor?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    ddd_fone_residencial?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    fone_residencial?: BigIntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | bigint | number | null
    ramal_fone_residencial?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    ddd_fone_celular?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    fone_celular?: BigIntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | bigint | number | null
    ddd_fone_pager_bip?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    fone_pager_bip?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    nro_pager_bip?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    email_particular?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    criado_em?: DateTimeNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | Date | string | null
    ser_matricula?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    ser_vin_codigo?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    pac_codigo?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    version?: IntWithAggregatesFilter<"rap_pessoas_fisicas"> | number
    cdd_codigo_municipio?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
    uf_orgao?: StringNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | string | null
    dt_emissao_documento?: DateTimeNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | Date | string | null
    orgao_emissor_rg?: IntNullableWithAggregatesFilter<"rap_pessoas_fisicas"> | number | null
  }

  export type rap_servidoresCreateInput = {
    matricula: number
    vin_codigo: number
    cct_codigo?: number | null
    oca_car_codigo?: string | null
    oca_codigo?: number | null
    pes_codigo: number
    dt_inicio_vinculo: Date | string
    htr_codigo?: number | null
    cct_codigo_atua?: number | null
    dt_fim_vinculo?: Date | string | null
    usuario?: string | null
    email?: string | null
    grf_codigo?: number | null
    ind_situacao?: string | null
    alterado_em?: Date | string | null
    ser_matricula?: number | null
    ser_vin_codigo?: number | null
    ram_nro_ramal?: number | null
    tipo_remuneracao?: string | null
    carga_horaria?: number | null
    horario_padrao?: string | null
    cod_starh?: number | null
    cct_codigo_desempenho?: number | null
    version?: number | null
    ind_situacao_servidor?: string | null
    unf_seq_lotacao?: number | null
  }

  export type rap_servidoresUncheckedCreateInput = {
    matricula: number
    vin_codigo: number
    cct_codigo?: number | null
    oca_car_codigo?: string | null
    oca_codigo?: number | null
    pes_codigo: number
    dt_inicio_vinculo: Date | string
    htr_codigo?: number | null
    cct_codigo_atua?: number | null
    dt_fim_vinculo?: Date | string | null
    usuario?: string | null
    email?: string | null
    grf_codigo?: number | null
    ind_situacao?: string | null
    alterado_em?: Date | string | null
    ser_matricula?: number | null
    ser_vin_codigo?: number | null
    ram_nro_ramal?: number | null
    tipo_remuneracao?: string | null
    carga_horaria?: number | null
    horario_padrao?: string | null
    cod_starh?: number | null
    cct_codigo_desempenho?: number | null
    version?: number | null
    ind_situacao_servidor?: string | null
    unf_seq_lotacao?: number | null
  }

  export type rap_servidoresUpdateInput = {
    matricula?: IntFieldUpdateOperationsInput | number
    vin_codigo?: IntFieldUpdateOperationsInput | number
    cct_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    oca_car_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    oca_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    pes_codigo?: IntFieldUpdateOperationsInput | number
    dt_inicio_vinculo?: DateTimeFieldUpdateOperationsInput | Date | string
    htr_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    cct_codigo_atua?: NullableIntFieldUpdateOperationsInput | number | null
    dt_fim_vinculo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    grf_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ind_situacao?: NullableStringFieldUpdateOperationsInput | string | null
    alterado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ser_matricula?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ram_nro_ramal?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_remuneracao?: NullableStringFieldUpdateOperationsInput | string | null
    carga_horaria?: NullableIntFieldUpdateOperationsInput | number | null
    horario_padrao?: NullableStringFieldUpdateOperationsInput | string | null
    cod_starh?: NullableIntFieldUpdateOperationsInput | number | null
    cct_codigo_desempenho?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    ind_situacao_servidor?: NullableStringFieldUpdateOperationsInput | string | null
    unf_seq_lotacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type rap_servidoresUncheckedUpdateInput = {
    matricula?: IntFieldUpdateOperationsInput | number
    vin_codigo?: IntFieldUpdateOperationsInput | number
    cct_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    oca_car_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    oca_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    pes_codigo?: IntFieldUpdateOperationsInput | number
    dt_inicio_vinculo?: DateTimeFieldUpdateOperationsInput | Date | string
    htr_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    cct_codigo_atua?: NullableIntFieldUpdateOperationsInput | number | null
    dt_fim_vinculo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    grf_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ind_situacao?: NullableStringFieldUpdateOperationsInput | string | null
    alterado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ser_matricula?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ram_nro_ramal?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_remuneracao?: NullableStringFieldUpdateOperationsInput | string | null
    carga_horaria?: NullableIntFieldUpdateOperationsInput | number | null
    horario_padrao?: NullableStringFieldUpdateOperationsInput | string | null
    cod_starh?: NullableIntFieldUpdateOperationsInput | number | null
    cct_codigo_desempenho?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    ind_situacao_servidor?: NullableStringFieldUpdateOperationsInput | string | null
    unf_seq_lotacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type rap_servidoresCreateManyInput = {
    matricula: number
    vin_codigo: number
    cct_codigo?: number | null
    oca_car_codigo?: string | null
    oca_codigo?: number | null
    pes_codigo: number
    dt_inicio_vinculo: Date | string
    htr_codigo?: number | null
    cct_codigo_atua?: number | null
    dt_fim_vinculo?: Date | string | null
    usuario?: string | null
    email?: string | null
    grf_codigo?: number | null
    ind_situacao?: string | null
    alterado_em?: Date | string | null
    ser_matricula?: number | null
    ser_vin_codigo?: number | null
    ram_nro_ramal?: number | null
    tipo_remuneracao?: string | null
    carga_horaria?: number | null
    horario_padrao?: string | null
    cod_starh?: number | null
    cct_codigo_desempenho?: number | null
    version?: number | null
    ind_situacao_servidor?: string | null
    unf_seq_lotacao?: number | null
  }

  export type rap_servidoresUpdateManyMutationInput = {
    matricula?: IntFieldUpdateOperationsInput | number
    vin_codigo?: IntFieldUpdateOperationsInput | number
    cct_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    oca_car_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    oca_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    pes_codigo?: IntFieldUpdateOperationsInput | number
    dt_inicio_vinculo?: DateTimeFieldUpdateOperationsInput | Date | string
    htr_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    cct_codigo_atua?: NullableIntFieldUpdateOperationsInput | number | null
    dt_fim_vinculo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    grf_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ind_situacao?: NullableStringFieldUpdateOperationsInput | string | null
    alterado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ser_matricula?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ram_nro_ramal?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_remuneracao?: NullableStringFieldUpdateOperationsInput | string | null
    carga_horaria?: NullableIntFieldUpdateOperationsInput | number | null
    horario_padrao?: NullableStringFieldUpdateOperationsInput | string | null
    cod_starh?: NullableIntFieldUpdateOperationsInput | number | null
    cct_codigo_desempenho?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    ind_situacao_servidor?: NullableStringFieldUpdateOperationsInput | string | null
    unf_seq_lotacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type rap_servidoresUncheckedUpdateManyInput = {
    matricula?: IntFieldUpdateOperationsInput | number
    vin_codigo?: IntFieldUpdateOperationsInput | number
    cct_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    oca_car_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    oca_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    pes_codigo?: IntFieldUpdateOperationsInput | number
    dt_inicio_vinculo?: DateTimeFieldUpdateOperationsInput | Date | string
    htr_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    cct_codigo_atua?: NullableIntFieldUpdateOperationsInput | number | null
    dt_fim_vinculo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    grf_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ind_situacao?: NullableStringFieldUpdateOperationsInput | string | null
    alterado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ser_matricula?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ram_nro_ramal?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_remuneracao?: NullableStringFieldUpdateOperationsInput | string | null
    carga_horaria?: NullableIntFieldUpdateOperationsInput | number | null
    horario_padrao?: NullableStringFieldUpdateOperationsInput | string | null
    cod_starh?: NullableIntFieldUpdateOperationsInput | number | null
    cct_codigo_desempenho?: NullableIntFieldUpdateOperationsInput | number | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    ind_situacao_servidor?: NullableStringFieldUpdateOperationsInput | string | null
    unf_seq_lotacao?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ain_internacoesCreateInput = {
    seq: number
    pac_codigo: number
    esp_seq: number
    ser_matricula_digita: number
    ser_vin_codigo_digita: number
    ser_matricula_professor: number
    ser_vin_codigo_professor: number
    dthr_internacao: Date | string
    env_pront_unid_int?: string | null
    tci_seq: number
    csp_cnv_codigo: number
    csp_seq: number
    oev_seq: number
    ind_saida_pac?: string | null
    ind_dif_classe?: string | null
    ind_paciente_internado?: string | null
    ind_local_paciente: string
    lto_lto_id?: string | null
    qrt_numero?: number | null
    unf_seq?: number | null
    tam_codigo?: string | null
    atu_seq?: number | null
    dt_prev_alta?: Date | string | null
    dthr_alta_medica?: Date | string | null
    dt_saida_paciente?: Date | string | null
    iho_seq_origem?: number | null
    iho_seq_transferencia?: number | null
    justificativa_alt_del?: string | null
    dthr_primeiro_evento?: Date | string | null
    dthr_ultimo_evento?: Date | string | null
    iph_seq?: number | null
    iph_pho_seq?: number | null
    ind_alta_manual?: string | null
    prontuario_legal?: string | null
    doc_obito?: bigint | number | null
    pjq_seq?: number | null
    ind_cons_marcada?: string | null
    apo_seq?: number | null
    dthr_aviso_samis?: Date | string | null
    dthr_prontuario_buscado?: Date | string | null
    version?: number
    seq_medico_externo?: number | null
    proc_internacao_paciente?: string | null
    local_atendimento_paciente?: string | null
    mod_assistencial?: string | null
  }

  export type ain_internacoesUncheckedCreateInput = {
    seq: number
    pac_codigo: number
    esp_seq: number
    ser_matricula_digita: number
    ser_vin_codigo_digita: number
    ser_matricula_professor: number
    ser_vin_codigo_professor: number
    dthr_internacao: Date | string
    env_pront_unid_int?: string | null
    tci_seq: number
    csp_cnv_codigo: number
    csp_seq: number
    oev_seq: number
    ind_saida_pac?: string | null
    ind_dif_classe?: string | null
    ind_paciente_internado?: string | null
    ind_local_paciente: string
    lto_lto_id?: string | null
    qrt_numero?: number | null
    unf_seq?: number | null
    tam_codigo?: string | null
    atu_seq?: number | null
    dt_prev_alta?: Date | string | null
    dthr_alta_medica?: Date | string | null
    dt_saida_paciente?: Date | string | null
    iho_seq_origem?: number | null
    iho_seq_transferencia?: number | null
    justificativa_alt_del?: string | null
    dthr_primeiro_evento?: Date | string | null
    dthr_ultimo_evento?: Date | string | null
    iph_seq?: number | null
    iph_pho_seq?: number | null
    ind_alta_manual?: string | null
    prontuario_legal?: string | null
    doc_obito?: bigint | number | null
    pjq_seq?: number | null
    ind_cons_marcada?: string | null
    apo_seq?: number | null
    dthr_aviso_samis?: Date | string | null
    dthr_prontuario_buscado?: Date | string | null
    version?: number
    seq_medico_externo?: number | null
    proc_internacao_paciente?: string | null
    local_atendimento_paciente?: string | null
    mod_assistencial?: string | null
  }

  export type ain_internacoesUpdateInput = {
    seq?: IntFieldUpdateOperationsInput | number
    pac_codigo?: IntFieldUpdateOperationsInput | number
    esp_seq?: IntFieldUpdateOperationsInput | number
    ser_matricula_digita?: IntFieldUpdateOperationsInput | number
    ser_vin_codigo_digita?: IntFieldUpdateOperationsInput | number
    ser_matricula_professor?: IntFieldUpdateOperationsInput | number
    ser_vin_codigo_professor?: IntFieldUpdateOperationsInput | number
    dthr_internacao?: DateTimeFieldUpdateOperationsInput | Date | string
    env_pront_unid_int?: NullableStringFieldUpdateOperationsInput | string | null
    tci_seq?: IntFieldUpdateOperationsInput | number
    csp_cnv_codigo?: IntFieldUpdateOperationsInput | number
    csp_seq?: IntFieldUpdateOperationsInput | number
    oev_seq?: IntFieldUpdateOperationsInput | number
    ind_saida_pac?: NullableStringFieldUpdateOperationsInput | string | null
    ind_dif_classe?: NullableStringFieldUpdateOperationsInput | string | null
    ind_paciente_internado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_local_paciente?: StringFieldUpdateOperationsInput | string
    lto_lto_id?: NullableStringFieldUpdateOperationsInput | string | null
    qrt_numero?: NullableIntFieldUpdateOperationsInput | number | null
    unf_seq?: NullableIntFieldUpdateOperationsInput | number | null
    tam_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    atu_seq?: NullableIntFieldUpdateOperationsInput | number | null
    dt_prev_alta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dthr_alta_medica?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_saida_paciente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iho_seq_origem?: NullableIntFieldUpdateOperationsInput | number | null
    iho_seq_transferencia?: NullableIntFieldUpdateOperationsInput | number | null
    justificativa_alt_del?: NullableStringFieldUpdateOperationsInput | string | null
    dthr_primeiro_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dthr_ultimo_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iph_seq?: NullableIntFieldUpdateOperationsInput | number | null
    iph_pho_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_alta_manual?: NullableStringFieldUpdateOperationsInput | string | null
    prontuario_legal?: NullableStringFieldUpdateOperationsInput | string | null
    doc_obito?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    pjq_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_cons_marcada?: NullableStringFieldUpdateOperationsInput | string | null
    apo_seq?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_aviso_samis?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dthr_prontuario_buscado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    seq_medico_externo?: NullableIntFieldUpdateOperationsInput | number | null
    proc_internacao_paciente?: NullableStringFieldUpdateOperationsInput | string | null
    local_atendimento_paciente?: NullableStringFieldUpdateOperationsInput | string | null
    mod_assistencial?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ain_internacoesUncheckedUpdateInput = {
    seq?: IntFieldUpdateOperationsInput | number
    pac_codigo?: IntFieldUpdateOperationsInput | number
    esp_seq?: IntFieldUpdateOperationsInput | number
    ser_matricula_digita?: IntFieldUpdateOperationsInput | number
    ser_vin_codigo_digita?: IntFieldUpdateOperationsInput | number
    ser_matricula_professor?: IntFieldUpdateOperationsInput | number
    ser_vin_codigo_professor?: IntFieldUpdateOperationsInput | number
    dthr_internacao?: DateTimeFieldUpdateOperationsInput | Date | string
    env_pront_unid_int?: NullableStringFieldUpdateOperationsInput | string | null
    tci_seq?: IntFieldUpdateOperationsInput | number
    csp_cnv_codigo?: IntFieldUpdateOperationsInput | number
    csp_seq?: IntFieldUpdateOperationsInput | number
    oev_seq?: IntFieldUpdateOperationsInput | number
    ind_saida_pac?: NullableStringFieldUpdateOperationsInput | string | null
    ind_dif_classe?: NullableStringFieldUpdateOperationsInput | string | null
    ind_paciente_internado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_local_paciente?: StringFieldUpdateOperationsInput | string
    lto_lto_id?: NullableStringFieldUpdateOperationsInput | string | null
    qrt_numero?: NullableIntFieldUpdateOperationsInput | number | null
    unf_seq?: NullableIntFieldUpdateOperationsInput | number | null
    tam_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    atu_seq?: NullableIntFieldUpdateOperationsInput | number | null
    dt_prev_alta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dthr_alta_medica?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_saida_paciente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iho_seq_origem?: NullableIntFieldUpdateOperationsInput | number | null
    iho_seq_transferencia?: NullableIntFieldUpdateOperationsInput | number | null
    justificativa_alt_del?: NullableStringFieldUpdateOperationsInput | string | null
    dthr_primeiro_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dthr_ultimo_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iph_seq?: NullableIntFieldUpdateOperationsInput | number | null
    iph_pho_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_alta_manual?: NullableStringFieldUpdateOperationsInput | string | null
    prontuario_legal?: NullableStringFieldUpdateOperationsInput | string | null
    doc_obito?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    pjq_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_cons_marcada?: NullableStringFieldUpdateOperationsInput | string | null
    apo_seq?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_aviso_samis?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dthr_prontuario_buscado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    seq_medico_externo?: NullableIntFieldUpdateOperationsInput | number | null
    proc_internacao_paciente?: NullableStringFieldUpdateOperationsInput | string | null
    local_atendimento_paciente?: NullableStringFieldUpdateOperationsInput | string | null
    mod_assistencial?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ain_internacoesCreateManyInput = {
    seq: number
    pac_codigo: number
    esp_seq: number
    ser_matricula_digita: number
    ser_vin_codigo_digita: number
    ser_matricula_professor: number
    ser_vin_codigo_professor: number
    dthr_internacao: Date | string
    env_pront_unid_int?: string | null
    tci_seq: number
    csp_cnv_codigo: number
    csp_seq: number
    oev_seq: number
    ind_saida_pac?: string | null
    ind_dif_classe?: string | null
    ind_paciente_internado?: string | null
    ind_local_paciente: string
    lto_lto_id?: string | null
    qrt_numero?: number | null
    unf_seq?: number | null
    tam_codigo?: string | null
    atu_seq?: number | null
    dt_prev_alta?: Date | string | null
    dthr_alta_medica?: Date | string | null
    dt_saida_paciente?: Date | string | null
    iho_seq_origem?: number | null
    iho_seq_transferencia?: number | null
    justificativa_alt_del?: string | null
    dthr_primeiro_evento?: Date | string | null
    dthr_ultimo_evento?: Date | string | null
    iph_seq?: number | null
    iph_pho_seq?: number | null
    ind_alta_manual?: string | null
    prontuario_legal?: string | null
    doc_obito?: bigint | number | null
    pjq_seq?: number | null
    ind_cons_marcada?: string | null
    apo_seq?: number | null
    dthr_aviso_samis?: Date | string | null
    dthr_prontuario_buscado?: Date | string | null
    version?: number
    seq_medico_externo?: number | null
    proc_internacao_paciente?: string | null
    local_atendimento_paciente?: string | null
    mod_assistencial?: string | null
  }

  export type ain_internacoesUpdateManyMutationInput = {
    seq?: IntFieldUpdateOperationsInput | number
    pac_codigo?: IntFieldUpdateOperationsInput | number
    esp_seq?: IntFieldUpdateOperationsInput | number
    ser_matricula_digita?: IntFieldUpdateOperationsInput | number
    ser_vin_codigo_digita?: IntFieldUpdateOperationsInput | number
    ser_matricula_professor?: IntFieldUpdateOperationsInput | number
    ser_vin_codigo_professor?: IntFieldUpdateOperationsInput | number
    dthr_internacao?: DateTimeFieldUpdateOperationsInput | Date | string
    env_pront_unid_int?: NullableStringFieldUpdateOperationsInput | string | null
    tci_seq?: IntFieldUpdateOperationsInput | number
    csp_cnv_codigo?: IntFieldUpdateOperationsInput | number
    csp_seq?: IntFieldUpdateOperationsInput | number
    oev_seq?: IntFieldUpdateOperationsInput | number
    ind_saida_pac?: NullableStringFieldUpdateOperationsInput | string | null
    ind_dif_classe?: NullableStringFieldUpdateOperationsInput | string | null
    ind_paciente_internado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_local_paciente?: StringFieldUpdateOperationsInput | string
    lto_lto_id?: NullableStringFieldUpdateOperationsInput | string | null
    qrt_numero?: NullableIntFieldUpdateOperationsInput | number | null
    unf_seq?: NullableIntFieldUpdateOperationsInput | number | null
    tam_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    atu_seq?: NullableIntFieldUpdateOperationsInput | number | null
    dt_prev_alta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dthr_alta_medica?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_saida_paciente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iho_seq_origem?: NullableIntFieldUpdateOperationsInput | number | null
    iho_seq_transferencia?: NullableIntFieldUpdateOperationsInput | number | null
    justificativa_alt_del?: NullableStringFieldUpdateOperationsInput | string | null
    dthr_primeiro_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dthr_ultimo_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iph_seq?: NullableIntFieldUpdateOperationsInput | number | null
    iph_pho_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_alta_manual?: NullableStringFieldUpdateOperationsInput | string | null
    prontuario_legal?: NullableStringFieldUpdateOperationsInput | string | null
    doc_obito?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    pjq_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_cons_marcada?: NullableStringFieldUpdateOperationsInput | string | null
    apo_seq?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_aviso_samis?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dthr_prontuario_buscado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    seq_medico_externo?: NullableIntFieldUpdateOperationsInput | number | null
    proc_internacao_paciente?: NullableStringFieldUpdateOperationsInput | string | null
    local_atendimento_paciente?: NullableStringFieldUpdateOperationsInput | string | null
    mod_assistencial?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ain_internacoesUncheckedUpdateManyInput = {
    seq?: IntFieldUpdateOperationsInput | number
    pac_codigo?: IntFieldUpdateOperationsInput | number
    esp_seq?: IntFieldUpdateOperationsInput | number
    ser_matricula_digita?: IntFieldUpdateOperationsInput | number
    ser_vin_codigo_digita?: IntFieldUpdateOperationsInput | number
    ser_matricula_professor?: IntFieldUpdateOperationsInput | number
    ser_vin_codigo_professor?: IntFieldUpdateOperationsInput | number
    dthr_internacao?: DateTimeFieldUpdateOperationsInput | Date | string
    env_pront_unid_int?: NullableStringFieldUpdateOperationsInput | string | null
    tci_seq?: IntFieldUpdateOperationsInput | number
    csp_cnv_codigo?: IntFieldUpdateOperationsInput | number
    csp_seq?: IntFieldUpdateOperationsInput | number
    oev_seq?: IntFieldUpdateOperationsInput | number
    ind_saida_pac?: NullableStringFieldUpdateOperationsInput | string | null
    ind_dif_classe?: NullableStringFieldUpdateOperationsInput | string | null
    ind_paciente_internado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_local_paciente?: StringFieldUpdateOperationsInput | string
    lto_lto_id?: NullableStringFieldUpdateOperationsInput | string | null
    qrt_numero?: NullableIntFieldUpdateOperationsInput | number | null
    unf_seq?: NullableIntFieldUpdateOperationsInput | number | null
    tam_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    atu_seq?: NullableIntFieldUpdateOperationsInput | number | null
    dt_prev_alta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dthr_alta_medica?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_saida_paciente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iho_seq_origem?: NullableIntFieldUpdateOperationsInput | number | null
    iho_seq_transferencia?: NullableIntFieldUpdateOperationsInput | number | null
    justificativa_alt_del?: NullableStringFieldUpdateOperationsInput | string | null
    dthr_primeiro_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dthr_ultimo_evento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iph_seq?: NullableIntFieldUpdateOperationsInput | number | null
    iph_pho_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_alta_manual?: NullableStringFieldUpdateOperationsInput | string | null
    prontuario_legal?: NullableStringFieldUpdateOperationsInput | string | null
    doc_obito?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    pjq_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_cons_marcada?: NullableStringFieldUpdateOperationsInput | string | null
    apo_seq?: NullableIntFieldUpdateOperationsInput | number | null
    dthr_aviso_samis?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dthr_prontuario_buscado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    version?: IntFieldUpdateOperationsInput | number
    seq_medico_externo?: NullableIntFieldUpdateOperationsInput | number | null
    proc_internacao_paciente?: NullableStringFieldUpdateOperationsInput | string | null
    local_atendimento_paciente?: NullableStringFieldUpdateOperationsInput | string | null
    mod_assistencial?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ain_leitosCreateInput = {
    lto_id: string
    qrt_numero: number
    leito: string
    ind_cons_clin_unidade: string
    ind_bloq_leito_limpeza: string
    tml_codigo: number
    unf_seq: number
    ind_situacao?: string | null
    esp_seq?: number | null
    int_seq?: number | null
    ind_pertence_refl?: string | null
    ind_cons_esp: string
    ser_matricula?: number | null
    ser_vin_codigo?: number | null
    ind_acompanhamento_ccih?: string | null
    version?: number | null
    tpclsfcclto_seq?: number | null
    ind_leito_extra?: string
  }

  export type ain_leitosUncheckedCreateInput = {
    lto_id: string
    qrt_numero: number
    leito: string
    ind_cons_clin_unidade: string
    ind_bloq_leito_limpeza: string
    tml_codigo: number
    unf_seq: number
    ind_situacao?: string | null
    esp_seq?: number | null
    int_seq?: number | null
    ind_pertence_refl?: string | null
    ind_cons_esp: string
    ser_matricula?: number | null
    ser_vin_codigo?: number | null
    ind_acompanhamento_ccih?: string | null
    version?: number | null
    tpclsfcclto_seq?: number | null
    ind_leito_extra?: string
  }

  export type ain_leitosUpdateInput = {
    lto_id?: StringFieldUpdateOperationsInput | string
    qrt_numero?: IntFieldUpdateOperationsInput | number
    leito?: StringFieldUpdateOperationsInput | string
    ind_cons_clin_unidade?: StringFieldUpdateOperationsInput | string
    ind_bloq_leito_limpeza?: StringFieldUpdateOperationsInput | string
    tml_codigo?: IntFieldUpdateOperationsInput | number
    unf_seq?: IntFieldUpdateOperationsInput | number
    ind_situacao?: NullableStringFieldUpdateOperationsInput | string | null
    esp_seq?: NullableIntFieldUpdateOperationsInput | number | null
    int_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_pertence_refl?: NullableStringFieldUpdateOperationsInput | string | null
    ind_cons_esp?: StringFieldUpdateOperationsInput | string
    ser_matricula?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ind_acompanhamento_ccih?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    tpclsfcclto_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_leito_extra?: StringFieldUpdateOperationsInput | string
  }

  export type ain_leitosUncheckedUpdateInput = {
    lto_id?: StringFieldUpdateOperationsInput | string
    qrt_numero?: IntFieldUpdateOperationsInput | number
    leito?: StringFieldUpdateOperationsInput | string
    ind_cons_clin_unidade?: StringFieldUpdateOperationsInput | string
    ind_bloq_leito_limpeza?: StringFieldUpdateOperationsInput | string
    tml_codigo?: IntFieldUpdateOperationsInput | number
    unf_seq?: IntFieldUpdateOperationsInput | number
    ind_situacao?: NullableStringFieldUpdateOperationsInput | string | null
    esp_seq?: NullableIntFieldUpdateOperationsInput | number | null
    int_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_pertence_refl?: NullableStringFieldUpdateOperationsInput | string | null
    ind_cons_esp?: StringFieldUpdateOperationsInput | string
    ser_matricula?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ind_acompanhamento_ccih?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    tpclsfcclto_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_leito_extra?: StringFieldUpdateOperationsInput | string
  }

  export type ain_leitosCreateManyInput = {
    lto_id: string
    qrt_numero: number
    leito: string
    ind_cons_clin_unidade: string
    ind_bloq_leito_limpeza: string
    tml_codigo: number
    unf_seq: number
    ind_situacao?: string | null
    esp_seq?: number | null
    int_seq?: number | null
    ind_pertence_refl?: string | null
    ind_cons_esp: string
    ser_matricula?: number | null
    ser_vin_codigo?: number | null
    ind_acompanhamento_ccih?: string | null
    version?: number | null
    tpclsfcclto_seq?: number | null
    ind_leito_extra?: string
  }

  export type ain_leitosUpdateManyMutationInput = {
    lto_id?: StringFieldUpdateOperationsInput | string
    qrt_numero?: IntFieldUpdateOperationsInput | number
    leito?: StringFieldUpdateOperationsInput | string
    ind_cons_clin_unidade?: StringFieldUpdateOperationsInput | string
    ind_bloq_leito_limpeza?: StringFieldUpdateOperationsInput | string
    tml_codigo?: IntFieldUpdateOperationsInput | number
    unf_seq?: IntFieldUpdateOperationsInput | number
    ind_situacao?: NullableStringFieldUpdateOperationsInput | string | null
    esp_seq?: NullableIntFieldUpdateOperationsInput | number | null
    int_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_pertence_refl?: NullableStringFieldUpdateOperationsInput | string | null
    ind_cons_esp?: StringFieldUpdateOperationsInput | string
    ser_matricula?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ind_acompanhamento_ccih?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    tpclsfcclto_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_leito_extra?: StringFieldUpdateOperationsInput | string
  }

  export type ain_leitosUncheckedUpdateManyInput = {
    lto_id?: StringFieldUpdateOperationsInput | string
    qrt_numero?: IntFieldUpdateOperationsInput | number
    leito?: StringFieldUpdateOperationsInput | string
    ind_cons_clin_unidade?: StringFieldUpdateOperationsInput | string
    ind_bloq_leito_limpeza?: StringFieldUpdateOperationsInput | string
    tml_codigo?: IntFieldUpdateOperationsInput | number
    unf_seq?: IntFieldUpdateOperationsInput | number
    ind_situacao?: NullableStringFieldUpdateOperationsInput | string | null
    esp_seq?: NullableIntFieldUpdateOperationsInput | number | null
    int_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_pertence_refl?: NullableStringFieldUpdateOperationsInput | string | null
    ind_cons_esp?: StringFieldUpdateOperationsInput | string
    ser_matricula?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ind_acompanhamento_ccih?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    tpclsfcclto_seq?: NullableIntFieldUpdateOperationsInput | number | null
    ind_leito_extra?: StringFieldUpdateOperationsInput | string
  }

  export type aip_pacientesCreateInput = {
    codigo: number
    cct_codigo_cadastro: number
    ser_matricula_cadastro: number
    ser_vin_codigo_cadastro: number
    nome: string
    nome_mae: string
    dt_nascimento: Date | string
    dt_identificacao: Date | string
    cct_codigo_recadastro?: number | null
    cdd_codigo?: number | null
    nac_codigo?: number | null
    ocp_codigo?: number | null
    uf_sigla?: string | null
    ser_matricula_recadastro?: number | null
    ser_vin_codigo_recadastro?: number | null
    cor?: string | null
    sexo?: string | null
    grau_instrucao?: number | null
    nome_pai?: string | null
    naturalidade?: string | null
    ddd_fone_residencial?: number | null
    fone_residencial?: bigint | number | null
    ddd_fone_recado?: number | null
    fone_recado?: string | null
    estado_civil?: string | null
    cpf?: bigint | number | null
    prontuario?: number | null
    dt_obito?: Date | string | null
    rg?: string | null
    orgao_emis_rg?: string | null
    observacao?: string | null
    prnt_ativo?: string | null
    cad_confirmado?: string | null
    ind_gera_prontuario?: string | null
    dt_ult_internacao?: Date | string | null
    dt_ult_alta?: Date | string | null
    dt_ult_consulta?: Date | string | null
    dt_ult_procedimento?: Date | string | null
    dt_ult_atend_hosp_dia?: Date | string | null
    dt_ult_alta_hosp_dia?: Date | string | null
    qrt_numero?: number | null
    unf_seq?: number | null
    lto_lto_id?: string | null
    reg_nascimento?: string | null
    nro_cartao_saude?: bigint | number | null
    dt_recadastro?: Date | string | null
    ind_paciente_vip: string
    pac_codigo_mae?: number | null
    tipo_data_obito?: string | null
    dt_obito_externo?: Date | string | null
    rna_gso_pac_codigo?: number | null
    rna_gso_seqp?: number | null
    rna_seqp?: number | null
    numero_pis?: bigint | number | null
    volumes?: number | null
    ind_pac_protegido?: string | null
    criado_em?: Date | string | null
    ind_pac_agfa?: string | null
    sexo_biologico?: string | null
    version?: number | null
    etn_id?: bigint | number | null
    id_sistema_legado?: bigint | number | null
    nome_social?: string | null
    cnh?: Decimal | DecimalJsLike | number | string | null
    data_validade_cnh?: Date | string | null
    email?: string | null
    rel_codigo?: number | null
    dt_exp_germe_multirresistente?: Date | string | null
    germe_multirresistente?: string | null
    pac_codigo_valido?: number | null
  }

  export type aip_pacientesUncheckedCreateInput = {
    codigo: number
    cct_codigo_cadastro: number
    ser_matricula_cadastro: number
    ser_vin_codigo_cadastro: number
    nome: string
    nome_mae: string
    dt_nascimento: Date | string
    dt_identificacao: Date | string
    cct_codigo_recadastro?: number | null
    cdd_codigo?: number | null
    nac_codigo?: number | null
    ocp_codigo?: number | null
    uf_sigla?: string | null
    ser_matricula_recadastro?: number | null
    ser_vin_codigo_recadastro?: number | null
    cor?: string | null
    sexo?: string | null
    grau_instrucao?: number | null
    nome_pai?: string | null
    naturalidade?: string | null
    ddd_fone_residencial?: number | null
    fone_residencial?: bigint | number | null
    ddd_fone_recado?: number | null
    fone_recado?: string | null
    estado_civil?: string | null
    cpf?: bigint | number | null
    prontuario?: number | null
    dt_obito?: Date | string | null
    rg?: string | null
    orgao_emis_rg?: string | null
    observacao?: string | null
    prnt_ativo?: string | null
    cad_confirmado?: string | null
    ind_gera_prontuario?: string | null
    dt_ult_internacao?: Date | string | null
    dt_ult_alta?: Date | string | null
    dt_ult_consulta?: Date | string | null
    dt_ult_procedimento?: Date | string | null
    dt_ult_atend_hosp_dia?: Date | string | null
    dt_ult_alta_hosp_dia?: Date | string | null
    qrt_numero?: number | null
    unf_seq?: number | null
    lto_lto_id?: string | null
    reg_nascimento?: string | null
    nro_cartao_saude?: bigint | number | null
    dt_recadastro?: Date | string | null
    ind_paciente_vip: string
    pac_codigo_mae?: number | null
    tipo_data_obito?: string | null
    dt_obito_externo?: Date | string | null
    rna_gso_pac_codigo?: number | null
    rna_gso_seqp?: number | null
    rna_seqp?: number | null
    numero_pis?: bigint | number | null
    volumes?: number | null
    ind_pac_protegido?: string | null
    criado_em?: Date | string | null
    ind_pac_agfa?: string | null
    sexo_biologico?: string | null
    version?: number | null
    etn_id?: bigint | number | null
    id_sistema_legado?: bigint | number | null
    nome_social?: string | null
    cnh?: Decimal | DecimalJsLike | number | string | null
    data_validade_cnh?: Date | string | null
    email?: string | null
    rel_codigo?: number | null
    dt_exp_germe_multirresistente?: Date | string | null
    germe_multirresistente?: string | null
    pac_codigo_valido?: number | null
  }

  export type aip_pacientesUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    cct_codigo_cadastro?: IntFieldUpdateOperationsInput | number
    ser_matricula_cadastro?: IntFieldUpdateOperationsInput | number
    ser_vin_codigo_cadastro?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_mae?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_identificacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cct_codigo_recadastro?: NullableIntFieldUpdateOperationsInput | number | null
    cdd_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    nac_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ocp_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    uf_sigla?: NullableStringFieldUpdateOperationsInput | string | null
    ser_matricula_recadastro?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo_recadastro?: NullableIntFieldUpdateOperationsInput | number | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    grau_instrucao?: NullableIntFieldUpdateOperationsInput | number | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    ddd_fone_residencial?: NullableIntFieldUpdateOperationsInput | number | null
    fone_residencial?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ddd_fone_recado?: NullableIntFieldUpdateOperationsInput | number | null
    fone_recado?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prontuario?: NullableIntFieldUpdateOperationsInput | number | null
    dt_obito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    orgao_emis_rg?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    prnt_ativo?: NullableStringFieldUpdateOperationsInput | string | null
    cad_confirmado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_gera_prontuario?: NullableStringFieldUpdateOperationsInput | string | null
    dt_ult_internacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_alta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_procedimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_atend_hosp_dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_alta_hosp_dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrt_numero?: NullableIntFieldUpdateOperationsInput | number | null
    unf_seq?: NullableIntFieldUpdateOperationsInput | number | null
    lto_lto_id?: NullableStringFieldUpdateOperationsInput | string | null
    reg_nascimento?: NullableStringFieldUpdateOperationsInput | string | null
    nro_cartao_saude?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    dt_recadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ind_paciente_vip?: StringFieldUpdateOperationsInput | string
    pac_codigo_mae?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_data_obito?: NullableStringFieldUpdateOperationsInput | string | null
    dt_obito_externo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rna_gso_pac_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    rna_gso_seqp?: NullableIntFieldUpdateOperationsInput | number | null
    rna_seqp?: NullableIntFieldUpdateOperationsInput | number | null
    numero_pis?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    volumes?: NullableIntFieldUpdateOperationsInput | number | null
    ind_pac_protegido?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ind_pac_agfa?: NullableStringFieldUpdateOperationsInput | string | null
    sexo_biologico?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    etn_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_sistema_legado?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nome_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    rel_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    dt_exp_germe_multirresistente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    germe_multirresistente?: NullableStringFieldUpdateOperationsInput | string | null
    pac_codigo_valido?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type aip_pacientesUncheckedUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    cct_codigo_cadastro?: IntFieldUpdateOperationsInput | number
    ser_matricula_cadastro?: IntFieldUpdateOperationsInput | number
    ser_vin_codigo_cadastro?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_mae?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_identificacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cct_codigo_recadastro?: NullableIntFieldUpdateOperationsInput | number | null
    cdd_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    nac_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ocp_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    uf_sigla?: NullableStringFieldUpdateOperationsInput | string | null
    ser_matricula_recadastro?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo_recadastro?: NullableIntFieldUpdateOperationsInput | number | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    grau_instrucao?: NullableIntFieldUpdateOperationsInput | number | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    ddd_fone_residencial?: NullableIntFieldUpdateOperationsInput | number | null
    fone_residencial?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ddd_fone_recado?: NullableIntFieldUpdateOperationsInput | number | null
    fone_recado?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prontuario?: NullableIntFieldUpdateOperationsInput | number | null
    dt_obito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    orgao_emis_rg?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    prnt_ativo?: NullableStringFieldUpdateOperationsInput | string | null
    cad_confirmado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_gera_prontuario?: NullableStringFieldUpdateOperationsInput | string | null
    dt_ult_internacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_alta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_procedimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_atend_hosp_dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_alta_hosp_dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrt_numero?: NullableIntFieldUpdateOperationsInput | number | null
    unf_seq?: NullableIntFieldUpdateOperationsInput | number | null
    lto_lto_id?: NullableStringFieldUpdateOperationsInput | string | null
    reg_nascimento?: NullableStringFieldUpdateOperationsInput | string | null
    nro_cartao_saude?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    dt_recadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ind_paciente_vip?: StringFieldUpdateOperationsInput | string
    pac_codigo_mae?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_data_obito?: NullableStringFieldUpdateOperationsInput | string | null
    dt_obito_externo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rna_gso_pac_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    rna_gso_seqp?: NullableIntFieldUpdateOperationsInput | number | null
    rna_seqp?: NullableIntFieldUpdateOperationsInput | number | null
    numero_pis?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    volumes?: NullableIntFieldUpdateOperationsInput | number | null
    ind_pac_protegido?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ind_pac_agfa?: NullableStringFieldUpdateOperationsInput | string | null
    sexo_biologico?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    etn_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_sistema_legado?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nome_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    rel_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    dt_exp_germe_multirresistente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    germe_multirresistente?: NullableStringFieldUpdateOperationsInput | string | null
    pac_codigo_valido?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type aip_pacientesCreateManyInput = {
    codigo: number
    cct_codigo_cadastro: number
    ser_matricula_cadastro: number
    ser_vin_codigo_cadastro: number
    nome: string
    nome_mae: string
    dt_nascimento: Date | string
    dt_identificacao: Date | string
    cct_codigo_recadastro?: number | null
    cdd_codigo?: number | null
    nac_codigo?: number | null
    ocp_codigo?: number | null
    uf_sigla?: string | null
    ser_matricula_recadastro?: number | null
    ser_vin_codigo_recadastro?: number | null
    cor?: string | null
    sexo?: string | null
    grau_instrucao?: number | null
    nome_pai?: string | null
    naturalidade?: string | null
    ddd_fone_residencial?: number | null
    fone_residencial?: bigint | number | null
    ddd_fone_recado?: number | null
    fone_recado?: string | null
    estado_civil?: string | null
    cpf?: bigint | number | null
    prontuario?: number | null
    dt_obito?: Date | string | null
    rg?: string | null
    orgao_emis_rg?: string | null
    observacao?: string | null
    prnt_ativo?: string | null
    cad_confirmado?: string | null
    ind_gera_prontuario?: string | null
    dt_ult_internacao?: Date | string | null
    dt_ult_alta?: Date | string | null
    dt_ult_consulta?: Date | string | null
    dt_ult_procedimento?: Date | string | null
    dt_ult_atend_hosp_dia?: Date | string | null
    dt_ult_alta_hosp_dia?: Date | string | null
    qrt_numero?: number | null
    unf_seq?: number | null
    lto_lto_id?: string | null
    reg_nascimento?: string | null
    nro_cartao_saude?: bigint | number | null
    dt_recadastro?: Date | string | null
    ind_paciente_vip: string
    pac_codigo_mae?: number | null
    tipo_data_obito?: string | null
    dt_obito_externo?: Date | string | null
    rna_gso_pac_codigo?: number | null
    rna_gso_seqp?: number | null
    rna_seqp?: number | null
    numero_pis?: bigint | number | null
    volumes?: number | null
    ind_pac_protegido?: string | null
    criado_em?: Date | string | null
    ind_pac_agfa?: string | null
    sexo_biologico?: string | null
    version?: number | null
    etn_id?: bigint | number | null
    id_sistema_legado?: bigint | number | null
    nome_social?: string | null
    cnh?: Decimal | DecimalJsLike | number | string | null
    data_validade_cnh?: Date | string | null
    email?: string | null
    rel_codigo?: number | null
    dt_exp_germe_multirresistente?: Date | string | null
    germe_multirresistente?: string | null
    pac_codigo_valido?: number | null
  }

  export type aip_pacientesUpdateManyMutationInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    cct_codigo_cadastro?: IntFieldUpdateOperationsInput | number
    ser_matricula_cadastro?: IntFieldUpdateOperationsInput | number
    ser_vin_codigo_cadastro?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_mae?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_identificacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cct_codigo_recadastro?: NullableIntFieldUpdateOperationsInput | number | null
    cdd_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    nac_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ocp_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    uf_sigla?: NullableStringFieldUpdateOperationsInput | string | null
    ser_matricula_recadastro?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo_recadastro?: NullableIntFieldUpdateOperationsInput | number | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    grau_instrucao?: NullableIntFieldUpdateOperationsInput | number | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    ddd_fone_residencial?: NullableIntFieldUpdateOperationsInput | number | null
    fone_residencial?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ddd_fone_recado?: NullableIntFieldUpdateOperationsInput | number | null
    fone_recado?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prontuario?: NullableIntFieldUpdateOperationsInput | number | null
    dt_obito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    orgao_emis_rg?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    prnt_ativo?: NullableStringFieldUpdateOperationsInput | string | null
    cad_confirmado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_gera_prontuario?: NullableStringFieldUpdateOperationsInput | string | null
    dt_ult_internacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_alta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_procedimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_atend_hosp_dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_alta_hosp_dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrt_numero?: NullableIntFieldUpdateOperationsInput | number | null
    unf_seq?: NullableIntFieldUpdateOperationsInput | number | null
    lto_lto_id?: NullableStringFieldUpdateOperationsInput | string | null
    reg_nascimento?: NullableStringFieldUpdateOperationsInput | string | null
    nro_cartao_saude?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    dt_recadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ind_paciente_vip?: StringFieldUpdateOperationsInput | string
    pac_codigo_mae?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_data_obito?: NullableStringFieldUpdateOperationsInput | string | null
    dt_obito_externo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rna_gso_pac_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    rna_gso_seqp?: NullableIntFieldUpdateOperationsInput | number | null
    rna_seqp?: NullableIntFieldUpdateOperationsInput | number | null
    numero_pis?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    volumes?: NullableIntFieldUpdateOperationsInput | number | null
    ind_pac_protegido?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ind_pac_agfa?: NullableStringFieldUpdateOperationsInput | string | null
    sexo_biologico?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    etn_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_sistema_legado?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nome_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    rel_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    dt_exp_germe_multirresistente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    germe_multirresistente?: NullableStringFieldUpdateOperationsInput | string | null
    pac_codigo_valido?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type aip_pacientesUncheckedUpdateManyInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    cct_codigo_cadastro?: IntFieldUpdateOperationsInput | number
    ser_matricula_cadastro?: IntFieldUpdateOperationsInput | number
    ser_vin_codigo_cadastro?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_mae?: StringFieldUpdateOperationsInput | string
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dt_identificacao?: DateTimeFieldUpdateOperationsInput | Date | string
    cct_codigo_recadastro?: NullableIntFieldUpdateOperationsInput | number | null
    cdd_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    nac_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    ocp_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    uf_sigla?: NullableStringFieldUpdateOperationsInput | string | null
    ser_matricula_recadastro?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo_recadastro?: NullableIntFieldUpdateOperationsInput | number | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    grau_instrucao?: NullableIntFieldUpdateOperationsInput | number | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    naturalidade?: NullableStringFieldUpdateOperationsInput | string | null
    ddd_fone_residencial?: NullableIntFieldUpdateOperationsInput | number | null
    fone_residencial?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ddd_fone_recado?: NullableIntFieldUpdateOperationsInput | number | null
    fone_recado?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    prontuario?: NullableIntFieldUpdateOperationsInput | number | null
    dt_obito?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    orgao_emis_rg?: NullableStringFieldUpdateOperationsInput | string | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    prnt_ativo?: NullableStringFieldUpdateOperationsInput | string | null
    cad_confirmado?: NullableStringFieldUpdateOperationsInput | string | null
    ind_gera_prontuario?: NullableStringFieldUpdateOperationsInput | string | null
    dt_ult_internacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_alta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_procedimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_atend_hosp_dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dt_ult_alta_hosp_dia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qrt_numero?: NullableIntFieldUpdateOperationsInput | number | null
    unf_seq?: NullableIntFieldUpdateOperationsInput | number | null
    lto_lto_id?: NullableStringFieldUpdateOperationsInput | string | null
    reg_nascimento?: NullableStringFieldUpdateOperationsInput | string | null
    nro_cartao_saude?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    dt_recadastro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ind_paciente_vip?: StringFieldUpdateOperationsInput | string
    pac_codigo_mae?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_data_obito?: NullableStringFieldUpdateOperationsInput | string | null
    dt_obito_externo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rna_gso_pac_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    rna_gso_seqp?: NullableIntFieldUpdateOperationsInput | number | null
    rna_seqp?: NullableIntFieldUpdateOperationsInput | number | null
    numero_pis?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    volumes?: NullableIntFieldUpdateOperationsInput | number | null
    ind_pac_protegido?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ind_pac_agfa?: NullableStringFieldUpdateOperationsInput | string | null
    sexo_biologico?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    etn_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    id_sistema_legado?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nome_social?: NullableStringFieldUpdateOperationsInput | string | null
    cnh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    data_validade_cnh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    rel_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    dt_exp_germe_multirresistente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    germe_multirresistente?: NullableStringFieldUpdateOperationsInput | string | null
    pac_codigo_valido?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type rap_pessoas_fisicasCreateInput = {
    codigo: number
    cpf?: bigint | number | null
    nome: string
    nome_mae: string
    pac_prontuario?: number | null
    nome_pai?: string | null
    dt_nascimento: Date | string
    sexo: string
    nome_usual?: string | null
    grau_instrucao?: number | null
    estado_civil?: string | null
    bcl_clo_lgr_codigo?: number | null
    bcl_clo_cep?: number | null
    bcl_bai_codigo?: number | null
    cdd_codigo?: number | null
    nac_codigo: number
    logradouro?: string | null
    compl_logradouro?: string | null
    nro_logradouro?: number | null
    cep?: number | null
    bairro?: string | null
    cidade_nascimento?: string | null
    uf_sigla?: string | null
    nro_identidade?: string | null
    nro_cart_profissional?: number | null
    serie_cart_profissional?: string | null
    pis_pasep?: bigint | number | null
    nro_tit_eleitor?: bigint | number | null
    zona_tit_eleitor?: number | null
    secao_tit_eleitor?: number | null
    ddd_fone_residencial?: number | null
    fone_residencial?: bigint | number | null
    ramal_fone_residencial?: number | null
    ddd_fone_celular?: number | null
    fone_celular?: bigint | number | null
    ddd_fone_pager_bip?: number | null
    fone_pager_bip?: number | null
    nro_pager_bip?: string | null
    email_particular?: string | null
    criado_em?: Date | string | null
    ser_matricula?: number | null
    ser_vin_codigo?: number | null
    pac_codigo?: number | null
    version?: number
    cdd_codigo_municipio?: number | null
    uf_orgao?: string | null
    dt_emissao_documento?: Date | string | null
    orgao_emissor_rg?: number | null
  }

  export type rap_pessoas_fisicasUncheckedCreateInput = {
    codigo: number
    cpf?: bigint | number | null
    nome: string
    nome_mae: string
    pac_prontuario?: number | null
    nome_pai?: string | null
    dt_nascimento: Date | string
    sexo: string
    nome_usual?: string | null
    grau_instrucao?: number | null
    estado_civil?: string | null
    bcl_clo_lgr_codigo?: number | null
    bcl_clo_cep?: number | null
    bcl_bai_codigo?: number | null
    cdd_codigo?: number | null
    nac_codigo: number
    logradouro?: string | null
    compl_logradouro?: string | null
    nro_logradouro?: number | null
    cep?: number | null
    bairro?: string | null
    cidade_nascimento?: string | null
    uf_sigla?: string | null
    nro_identidade?: string | null
    nro_cart_profissional?: number | null
    serie_cart_profissional?: string | null
    pis_pasep?: bigint | number | null
    nro_tit_eleitor?: bigint | number | null
    zona_tit_eleitor?: number | null
    secao_tit_eleitor?: number | null
    ddd_fone_residencial?: number | null
    fone_residencial?: bigint | number | null
    ramal_fone_residencial?: number | null
    ddd_fone_celular?: number | null
    fone_celular?: bigint | number | null
    ddd_fone_pager_bip?: number | null
    fone_pager_bip?: number | null
    nro_pager_bip?: string | null
    email_particular?: string | null
    criado_em?: Date | string | null
    ser_matricula?: number | null
    ser_vin_codigo?: number | null
    pac_codigo?: number | null
    version?: number
    cdd_codigo_municipio?: number | null
    uf_orgao?: string | null
    dt_emissao_documento?: Date | string | null
    orgao_emissor_rg?: number | null
  }

  export type rap_pessoas_fisicasUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    cpf?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nome?: StringFieldUpdateOperationsInput | string
    nome_mae?: StringFieldUpdateOperationsInput | string
    pac_prontuario?: NullableIntFieldUpdateOperationsInput | number | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    nome_usual?: NullableStringFieldUpdateOperationsInput | string | null
    grau_instrucao?: NullableIntFieldUpdateOperationsInput | number | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    bcl_clo_lgr_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    bcl_clo_cep?: NullableIntFieldUpdateOperationsInput | number | null
    bcl_bai_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    cdd_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    nac_codigo?: IntFieldUpdateOperationsInput | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    compl_logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    nro_logradouro?: NullableIntFieldUpdateOperationsInput | number | null
    cep?: NullableIntFieldUpdateOperationsInput | number | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade_nascimento?: NullableStringFieldUpdateOperationsInput | string | null
    uf_sigla?: NullableStringFieldUpdateOperationsInput | string | null
    nro_identidade?: NullableStringFieldUpdateOperationsInput | string | null
    nro_cart_profissional?: NullableIntFieldUpdateOperationsInput | number | null
    serie_cart_profissional?: NullableStringFieldUpdateOperationsInput | string | null
    pis_pasep?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nro_tit_eleitor?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zona_tit_eleitor?: NullableIntFieldUpdateOperationsInput | number | null
    secao_tit_eleitor?: NullableIntFieldUpdateOperationsInput | number | null
    ddd_fone_residencial?: NullableIntFieldUpdateOperationsInput | number | null
    fone_residencial?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ramal_fone_residencial?: NullableIntFieldUpdateOperationsInput | number | null
    ddd_fone_celular?: NullableIntFieldUpdateOperationsInput | number | null
    fone_celular?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ddd_fone_pager_bip?: NullableIntFieldUpdateOperationsInput | number | null
    fone_pager_bip?: NullableIntFieldUpdateOperationsInput | number | null
    nro_pager_bip?: NullableStringFieldUpdateOperationsInput | string | null
    email_particular?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ser_matricula?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    pac_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    cdd_codigo_municipio?: NullableIntFieldUpdateOperationsInput | number | null
    uf_orgao?: NullableStringFieldUpdateOperationsInput | string | null
    dt_emissao_documento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgao_emissor_rg?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type rap_pessoas_fisicasUncheckedUpdateInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    cpf?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nome?: StringFieldUpdateOperationsInput | string
    nome_mae?: StringFieldUpdateOperationsInput | string
    pac_prontuario?: NullableIntFieldUpdateOperationsInput | number | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    nome_usual?: NullableStringFieldUpdateOperationsInput | string | null
    grau_instrucao?: NullableIntFieldUpdateOperationsInput | number | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    bcl_clo_lgr_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    bcl_clo_cep?: NullableIntFieldUpdateOperationsInput | number | null
    bcl_bai_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    cdd_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    nac_codigo?: IntFieldUpdateOperationsInput | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    compl_logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    nro_logradouro?: NullableIntFieldUpdateOperationsInput | number | null
    cep?: NullableIntFieldUpdateOperationsInput | number | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade_nascimento?: NullableStringFieldUpdateOperationsInput | string | null
    uf_sigla?: NullableStringFieldUpdateOperationsInput | string | null
    nro_identidade?: NullableStringFieldUpdateOperationsInput | string | null
    nro_cart_profissional?: NullableIntFieldUpdateOperationsInput | number | null
    serie_cart_profissional?: NullableStringFieldUpdateOperationsInput | string | null
    pis_pasep?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nro_tit_eleitor?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zona_tit_eleitor?: NullableIntFieldUpdateOperationsInput | number | null
    secao_tit_eleitor?: NullableIntFieldUpdateOperationsInput | number | null
    ddd_fone_residencial?: NullableIntFieldUpdateOperationsInput | number | null
    fone_residencial?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ramal_fone_residencial?: NullableIntFieldUpdateOperationsInput | number | null
    ddd_fone_celular?: NullableIntFieldUpdateOperationsInput | number | null
    fone_celular?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ddd_fone_pager_bip?: NullableIntFieldUpdateOperationsInput | number | null
    fone_pager_bip?: NullableIntFieldUpdateOperationsInput | number | null
    nro_pager_bip?: NullableStringFieldUpdateOperationsInput | string | null
    email_particular?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ser_matricula?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    pac_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    cdd_codigo_municipio?: NullableIntFieldUpdateOperationsInput | number | null
    uf_orgao?: NullableStringFieldUpdateOperationsInput | string | null
    dt_emissao_documento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgao_emissor_rg?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type rap_pessoas_fisicasCreateManyInput = {
    codigo: number
    cpf?: bigint | number | null
    nome: string
    nome_mae: string
    pac_prontuario?: number | null
    nome_pai?: string | null
    dt_nascimento: Date | string
    sexo: string
    nome_usual?: string | null
    grau_instrucao?: number | null
    estado_civil?: string | null
    bcl_clo_lgr_codigo?: number | null
    bcl_clo_cep?: number | null
    bcl_bai_codigo?: number | null
    cdd_codigo?: number | null
    nac_codigo: number
    logradouro?: string | null
    compl_logradouro?: string | null
    nro_logradouro?: number | null
    cep?: number | null
    bairro?: string | null
    cidade_nascimento?: string | null
    uf_sigla?: string | null
    nro_identidade?: string | null
    nro_cart_profissional?: number | null
    serie_cart_profissional?: string | null
    pis_pasep?: bigint | number | null
    nro_tit_eleitor?: bigint | number | null
    zona_tit_eleitor?: number | null
    secao_tit_eleitor?: number | null
    ddd_fone_residencial?: number | null
    fone_residencial?: bigint | number | null
    ramal_fone_residencial?: number | null
    ddd_fone_celular?: number | null
    fone_celular?: bigint | number | null
    ddd_fone_pager_bip?: number | null
    fone_pager_bip?: number | null
    nro_pager_bip?: string | null
    email_particular?: string | null
    criado_em?: Date | string | null
    ser_matricula?: number | null
    ser_vin_codigo?: number | null
    pac_codigo?: number | null
    version?: number
    cdd_codigo_municipio?: number | null
    uf_orgao?: string | null
    dt_emissao_documento?: Date | string | null
    orgao_emissor_rg?: number | null
  }

  export type rap_pessoas_fisicasUpdateManyMutationInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    cpf?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nome?: StringFieldUpdateOperationsInput | string
    nome_mae?: StringFieldUpdateOperationsInput | string
    pac_prontuario?: NullableIntFieldUpdateOperationsInput | number | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    nome_usual?: NullableStringFieldUpdateOperationsInput | string | null
    grau_instrucao?: NullableIntFieldUpdateOperationsInput | number | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    bcl_clo_lgr_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    bcl_clo_cep?: NullableIntFieldUpdateOperationsInput | number | null
    bcl_bai_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    cdd_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    nac_codigo?: IntFieldUpdateOperationsInput | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    compl_logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    nro_logradouro?: NullableIntFieldUpdateOperationsInput | number | null
    cep?: NullableIntFieldUpdateOperationsInput | number | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade_nascimento?: NullableStringFieldUpdateOperationsInput | string | null
    uf_sigla?: NullableStringFieldUpdateOperationsInput | string | null
    nro_identidade?: NullableStringFieldUpdateOperationsInput | string | null
    nro_cart_profissional?: NullableIntFieldUpdateOperationsInput | number | null
    serie_cart_profissional?: NullableStringFieldUpdateOperationsInput | string | null
    pis_pasep?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nro_tit_eleitor?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zona_tit_eleitor?: NullableIntFieldUpdateOperationsInput | number | null
    secao_tit_eleitor?: NullableIntFieldUpdateOperationsInput | number | null
    ddd_fone_residencial?: NullableIntFieldUpdateOperationsInput | number | null
    fone_residencial?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ramal_fone_residencial?: NullableIntFieldUpdateOperationsInput | number | null
    ddd_fone_celular?: NullableIntFieldUpdateOperationsInput | number | null
    fone_celular?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ddd_fone_pager_bip?: NullableIntFieldUpdateOperationsInput | number | null
    fone_pager_bip?: NullableIntFieldUpdateOperationsInput | number | null
    nro_pager_bip?: NullableStringFieldUpdateOperationsInput | string | null
    email_particular?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ser_matricula?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    pac_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    cdd_codigo_municipio?: NullableIntFieldUpdateOperationsInput | number | null
    uf_orgao?: NullableStringFieldUpdateOperationsInput | string | null
    dt_emissao_documento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgao_emissor_rg?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type rap_pessoas_fisicasUncheckedUpdateManyInput = {
    codigo?: IntFieldUpdateOperationsInput | number
    cpf?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nome?: StringFieldUpdateOperationsInput | string
    nome_mae?: StringFieldUpdateOperationsInput | string
    pac_prontuario?: NullableIntFieldUpdateOperationsInput | number | null
    nome_pai?: NullableStringFieldUpdateOperationsInput | string | null
    dt_nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    nome_usual?: NullableStringFieldUpdateOperationsInput | string | null
    grau_instrucao?: NullableIntFieldUpdateOperationsInput | number | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    bcl_clo_lgr_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    bcl_clo_cep?: NullableIntFieldUpdateOperationsInput | number | null
    bcl_bai_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    cdd_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    nac_codigo?: IntFieldUpdateOperationsInput | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    compl_logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    nro_logradouro?: NullableIntFieldUpdateOperationsInput | number | null
    cep?: NullableIntFieldUpdateOperationsInput | number | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade_nascimento?: NullableStringFieldUpdateOperationsInput | string | null
    uf_sigla?: NullableStringFieldUpdateOperationsInput | string | null
    nro_identidade?: NullableStringFieldUpdateOperationsInput | string | null
    nro_cart_profissional?: NullableIntFieldUpdateOperationsInput | number | null
    serie_cart_profissional?: NullableStringFieldUpdateOperationsInput | string | null
    pis_pasep?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    nro_tit_eleitor?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    zona_tit_eleitor?: NullableIntFieldUpdateOperationsInput | number | null
    secao_tit_eleitor?: NullableIntFieldUpdateOperationsInput | number | null
    ddd_fone_residencial?: NullableIntFieldUpdateOperationsInput | number | null
    fone_residencial?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ramal_fone_residencial?: NullableIntFieldUpdateOperationsInput | number | null
    ddd_fone_celular?: NullableIntFieldUpdateOperationsInput | number | null
    fone_celular?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ddd_fone_pager_bip?: NullableIntFieldUpdateOperationsInput | number | null
    fone_pager_bip?: NullableIntFieldUpdateOperationsInput | number | null
    nro_pager_bip?: NullableStringFieldUpdateOperationsInput | string | null
    email_particular?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ser_matricula?: NullableIntFieldUpdateOperationsInput | number | null
    ser_vin_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    pac_codigo?: NullableIntFieldUpdateOperationsInput | number | null
    version?: IntFieldUpdateOperationsInput | number
    cdd_codigo_municipio?: NullableIntFieldUpdateOperationsInput | number | null
    uf_orgao?: NullableStringFieldUpdateOperationsInput | string | null
    dt_emissao_documento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orgao_emissor_rg?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type rap_servidoresMatriculaVin_codigoCompoundUniqueInput = {
    matricula: number
    vin_codigo: number
  }

  export type rap_servidoresCountOrderByAggregateInput = {
    matricula?: SortOrder
    vin_codigo?: SortOrder
    cct_codigo?: SortOrder
    oca_car_codigo?: SortOrder
    oca_codigo?: SortOrder
    pes_codigo?: SortOrder
    dt_inicio_vinculo?: SortOrder
    htr_codigo?: SortOrder
    cct_codigo_atua?: SortOrder
    dt_fim_vinculo?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    grf_codigo?: SortOrder
    ind_situacao?: SortOrder
    alterado_em?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    ram_nro_ramal?: SortOrder
    tipo_remuneracao?: SortOrder
    carga_horaria?: SortOrder
    horario_padrao?: SortOrder
    cod_starh?: SortOrder
    cct_codigo_desempenho?: SortOrder
    version?: SortOrder
    ind_situacao_servidor?: SortOrder
    unf_seq_lotacao?: SortOrder
  }

  export type rap_servidoresAvgOrderByAggregateInput = {
    matricula?: SortOrder
    vin_codigo?: SortOrder
    cct_codigo?: SortOrder
    oca_codigo?: SortOrder
    pes_codigo?: SortOrder
    htr_codigo?: SortOrder
    cct_codigo_atua?: SortOrder
    grf_codigo?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    ram_nro_ramal?: SortOrder
    carga_horaria?: SortOrder
    cod_starh?: SortOrder
    cct_codigo_desempenho?: SortOrder
    version?: SortOrder
    unf_seq_lotacao?: SortOrder
  }

  export type rap_servidoresMaxOrderByAggregateInput = {
    matricula?: SortOrder
    vin_codigo?: SortOrder
    cct_codigo?: SortOrder
    oca_car_codigo?: SortOrder
    oca_codigo?: SortOrder
    pes_codigo?: SortOrder
    dt_inicio_vinculo?: SortOrder
    htr_codigo?: SortOrder
    cct_codigo_atua?: SortOrder
    dt_fim_vinculo?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    grf_codigo?: SortOrder
    ind_situacao?: SortOrder
    alterado_em?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    ram_nro_ramal?: SortOrder
    tipo_remuneracao?: SortOrder
    carga_horaria?: SortOrder
    horario_padrao?: SortOrder
    cod_starh?: SortOrder
    cct_codigo_desempenho?: SortOrder
    version?: SortOrder
    ind_situacao_servidor?: SortOrder
    unf_seq_lotacao?: SortOrder
  }

  export type rap_servidoresMinOrderByAggregateInput = {
    matricula?: SortOrder
    vin_codigo?: SortOrder
    cct_codigo?: SortOrder
    oca_car_codigo?: SortOrder
    oca_codigo?: SortOrder
    pes_codigo?: SortOrder
    dt_inicio_vinculo?: SortOrder
    htr_codigo?: SortOrder
    cct_codigo_atua?: SortOrder
    dt_fim_vinculo?: SortOrder
    usuario?: SortOrder
    email?: SortOrder
    grf_codigo?: SortOrder
    ind_situacao?: SortOrder
    alterado_em?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    ram_nro_ramal?: SortOrder
    tipo_remuneracao?: SortOrder
    carga_horaria?: SortOrder
    horario_padrao?: SortOrder
    cod_starh?: SortOrder
    cct_codigo_desempenho?: SortOrder
    version?: SortOrder
    ind_situacao_servidor?: SortOrder
    unf_seq_lotacao?: SortOrder
  }

  export type rap_servidoresSumOrderByAggregateInput = {
    matricula?: SortOrder
    vin_codigo?: SortOrder
    cct_codigo?: SortOrder
    oca_codigo?: SortOrder
    pes_codigo?: SortOrder
    htr_codigo?: SortOrder
    cct_codigo_atua?: SortOrder
    grf_codigo?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    ram_nro_ramal?: SortOrder
    carga_horaria?: SortOrder
    cod_starh?: SortOrder
    cct_codigo_desempenho?: SortOrder
    version?: SortOrder
    unf_seq_lotacao?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type ain_internacoesCountOrderByAggregateInput = {
    seq?: SortOrder
    pac_codigo?: SortOrder
    esp_seq?: SortOrder
    ser_matricula_digita?: SortOrder
    ser_vin_codigo_digita?: SortOrder
    ser_matricula_professor?: SortOrder
    ser_vin_codigo_professor?: SortOrder
    dthr_internacao?: SortOrder
    env_pront_unid_int?: SortOrder
    tci_seq?: SortOrder
    csp_cnv_codigo?: SortOrder
    csp_seq?: SortOrder
    oev_seq?: SortOrder
    ind_saida_pac?: SortOrder
    ind_dif_classe?: SortOrder
    ind_paciente_internado?: SortOrder
    ind_local_paciente?: SortOrder
    lto_lto_id?: SortOrder
    qrt_numero?: SortOrder
    unf_seq?: SortOrder
    tam_codigo?: SortOrder
    atu_seq?: SortOrder
    dt_prev_alta?: SortOrder
    dthr_alta_medica?: SortOrder
    dt_saida_paciente?: SortOrder
    iho_seq_origem?: SortOrder
    iho_seq_transferencia?: SortOrder
    justificativa_alt_del?: SortOrder
    dthr_primeiro_evento?: SortOrder
    dthr_ultimo_evento?: SortOrder
    iph_seq?: SortOrder
    iph_pho_seq?: SortOrder
    ind_alta_manual?: SortOrder
    prontuario_legal?: SortOrder
    doc_obito?: SortOrder
    pjq_seq?: SortOrder
    ind_cons_marcada?: SortOrder
    apo_seq?: SortOrder
    dthr_aviso_samis?: SortOrder
    dthr_prontuario_buscado?: SortOrder
    version?: SortOrder
    seq_medico_externo?: SortOrder
    proc_internacao_paciente?: SortOrder
    local_atendimento_paciente?: SortOrder
    mod_assistencial?: SortOrder
  }

  export type ain_internacoesAvgOrderByAggregateInput = {
    seq?: SortOrder
    pac_codigo?: SortOrder
    esp_seq?: SortOrder
    ser_matricula_digita?: SortOrder
    ser_vin_codigo_digita?: SortOrder
    ser_matricula_professor?: SortOrder
    ser_vin_codigo_professor?: SortOrder
    tci_seq?: SortOrder
    csp_cnv_codigo?: SortOrder
    csp_seq?: SortOrder
    oev_seq?: SortOrder
    qrt_numero?: SortOrder
    unf_seq?: SortOrder
    atu_seq?: SortOrder
    iho_seq_origem?: SortOrder
    iho_seq_transferencia?: SortOrder
    iph_seq?: SortOrder
    iph_pho_seq?: SortOrder
    doc_obito?: SortOrder
    pjq_seq?: SortOrder
    apo_seq?: SortOrder
    version?: SortOrder
    seq_medico_externo?: SortOrder
  }

  export type ain_internacoesMaxOrderByAggregateInput = {
    seq?: SortOrder
    pac_codigo?: SortOrder
    esp_seq?: SortOrder
    ser_matricula_digita?: SortOrder
    ser_vin_codigo_digita?: SortOrder
    ser_matricula_professor?: SortOrder
    ser_vin_codigo_professor?: SortOrder
    dthr_internacao?: SortOrder
    env_pront_unid_int?: SortOrder
    tci_seq?: SortOrder
    csp_cnv_codigo?: SortOrder
    csp_seq?: SortOrder
    oev_seq?: SortOrder
    ind_saida_pac?: SortOrder
    ind_dif_classe?: SortOrder
    ind_paciente_internado?: SortOrder
    ind_local_paciente?: SortOrder
    lto_lto_id?: SortOrder
    qrt_numero?: SortOrder
    unf_seq?: SortOrder
    tam_codigo?: SortOrder
    atu_seq?: SortOrder
    dt_prev_alta?: SortOrder
    dthr_alta_medica?: SortOrder
    dt_saida_paciente?: SortOrder
    iho_seq_origem?: SortOrder
    iho_seq_transferencia?: SortOrder
    justificativa_alt_del?: SortOrder
    dthr_primeiro_evento?: SortOrder
    dthr_ultimo_evento?: SortOrder
    iph_seq?: SortOrder
    iph_pho_seq?: SortOrder
    ind_alta_manual?: SortOrder
    prontuario_legal?: SortOrder
    doc_obito?: SortOrder
    pjq_seq?: SortOrder
    ind_cons_marcada?: SortOrder
    apo_seq?: SortOrder
    dthr_aviso_samis?: SortOrder
    dthr_prontuario_buscado?: SortOrder
    version?: SortOrder
    seq_medico_externo?: SortOrder
    proc_internacao_paciente?: SortOrder
    local_atendimento_paciente?: SortOrder
    mod_assistencial?: SortOrder
  }

  export type ain_internacoesMinOrderByAggregateInput = {
    seq?: SortOrder
    pac_codigo?: SortOrder
    esp_seq?: SortOrder
    ser_matricula_digita?: SortOrder
    ser_vin_codigo_digita?: SortOrder
    ser_matricula_professor?: SortOrder
    ser_vin_codigo_professor?: SortOrder
    dthr_internacao?: SortOrder
    env_pront_unid_int?: SortOrder
    tci_seq?: SortOrder
    csp_cnv_codigo?: SortOrder
    csp_seq?: SortOrder
    oev_seq?: SortOrder
    ind_saida_pac?: SortOrder
    ind_dif_classe?: SortOrder
    ind_paciente_internado?: SortOrder
    ind_local_paciente?: SortOrder
    lto_lto_id?: SortOrder
    qrt_numero?: SortOrder
    unf_seq?: SortOrder
    tam_codigo?: SortOrder
    atu_seq?: SortOrder
    dt_prev_alta?: SortOrder
    dthr_alta_medica?: SortOrder
    dt_saida_paciente?: SortOrder
    iho_seq_origem?: SortOrder
    iho_seq_transferencia?: SortOrder
    justificativa_alt_del?: SortOrder
    dthr_primeiro_evento?: SortOrder
    dthr_ultimo_evento?: SortOrder
    iph_seq?: SortOrder
    iph_pho_seq?: SortOrder
    ind_alta_manual?: SortOrder
    prontuario_legal?: SortOrder
    doc_obito?: SortOrder
    pjq_seq?: SortOrder
    ind_cons_marcada?: SortOrder
    apo_seq?: SortOrder
    dthr_aviso_samis?: SortOrder
    dthr_prontuario_buscado?: SortOrder
    version?: SortOrder
    seq_medico_externo?: SortOrder
    proc_internacao_paciente?: SortOrder
    local_atendimento_paciente?: SortOrder
    mod_assistencial?: SortOrder
  }

  export type ain_internacoesSumOrderByAggregateInput = {
    seq?: SortOrder
    pac_codigo?: SortOrder
    esp_seq?: SortOrder
    ser_matricula_digita?: SortOrder
    ser_vin_codigo_digita?: SortOrder
    ser_matricula_professor?: SortOrder
    ser_vin_codigo_professor?: SortOrder
    tci_seq?: SortOrder
    csp_cnv_codigo?: SortOrder
    csp_seq?: SortOrder
    oev_seq?: SortOrder
    qrt_numero?: SortOrder
    unf_seq?: SortOrder
    atu_seq?: SortOrder
    iho_seq_origem?: SortOrder
    iho_seq_transferencia?: SortOrder
    iph_seq?: SortOrder
    iph_pho_seq?: SortOrder
    doc_obito?: SortOrder
    pjq_seq?: SortOrder
    apo_seq?: SortOrder
    version?: SortOrder
    seq_medico_externo?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ain_leitosQrt_numeroLeitoCompoundUniqueInput = {
    qrt_numero: number
    leito: string
  }

  export type ain_leitosCountOrderByAggregateInput = {
    lto_id?: SortOrder
    qrt_numero?: SortOrder
    leito?: SortOrder
    ind_cons_clin_unidade?: SortOrder
    ind_bloq_leito_limpeza?: SortOrder
    tml_codigo?: SortOrder
    unf_seq?: SortOrder
    ind_situacao?: SortOrder
    esp_seq?: SortOrder
    int_seq?: SortOrder
    ind_pertence_refl?: SortOrder
    ind_cons_esp?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    ind_acompanhamento_ccih?: SortOrder
    version?: SortOrder
    tpclsfcclto_seq?: SortOrder
    ind_leito_extra?: SortOrder
  }

  export type ain_leitosAvgOrderByAggregateInput = {
    qrt_numero?: SortOrder
    tml_codigo?: SortOrder
    unf_seq?: SortOrder
    esp_seq?: SortOrder
    int_seq?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    version?: SortOrder
    tpclsfcclto_seq?: SortOrder
  }

  export type ain_leitosMaxOrderByAggregateInput = {
    lto_id?: SortOrder
    qrt_numero?: SortOrder
    leito?: SortOrder
    ind_cons_clin_unidade?: SortOrder
    ind_bloq_leito_limpeza?: SortOrder
    tml_codigo?: SortOrder
    unf_seq?: SortOrder
    ind_situacao?: SortOrder
    esp_seq?: SortOrder
    int_seq?: SortOrder
    ind_pertence_refl?: SortOrder
    ind_cons_esp?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    ind_acompanhamento_ccih?: SortOrder
    version?: SortOrder
    tpclsfcclto_seq?: SortOrder
    ind_leito_extra?: SortOrder
  }

  export type ain_leitosMinOrderByAggregateInput = {
    lto_id?: SortOrder
    qrt_numero?: SortOrder
    leito?: SortOrder
    ind_cons_clin_unidade?: SortOrder
    ind_bloq_leito_limpeza?: SortOrder
    tml_codigo?: SortOrder
    unf_seq?: SortOrder
    ind_situacao?: SortOrder
    esp_seq?: SortOrder
    int_seq?: SortOrder
    ind_pertence_refl?: SortOrder
    ind_cons_esp?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    ind_acompanhamento_ccih?: SortOrder
    version?: SortOrder
    tpclsfcclto_seq?: SortOrder
    ind_leito_extra?: SortOrder
  }

  export type ain_leitosSumOrderByAggregateInput = {
    qrt_numero?: SortOrder
    tml_codigo?: SortOrder
    unf_seq?: SortOrder
    esp_seq?: SortOrder
    int_seq?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    version?: SortOrder
    tpclsfcclto_seq?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type aip_pacientesCountOrderByAggregateInput = {
    codigo?: SortOrder
    cct_codigo_cadastro?: SortOrder
    ser_matricula_cadastro?: SortOrder
    ser_vin_codigo_cadastro?: SortOrder
    nome?: SortOrder
    nome_mae?: SortOrder
    dt_nascimento?: SortOrder
    dt_identificacao?: SortOrder
    cct_codigo_recadastro?: SortOrder
    cdd_codigo?: SortOrder
    nac_codigo?: SortOrder
    ocp_codigo?: SortOrder
    uf_sigla?: SortOrder
    ser_matricula_recadastro?: SortOrder
    ser_vin_codigo_recadastro?: SortOrder
    cor?: SortOrder
    sexo?: SortOrder
    grau_instrucao?: SortOrder
    nome_pai?: SortOrder
    naturalidade?: SortOrder
    ddd_fone_residencial?: SortOrder
    fone_residencial?: SortOrder
    ddd_fone_recado?: SortOrder
    fone_recado?: SortOrder
    estado_civil?: SortOrder
    cpf?: SortOrder
    prontuario?: SortOrder
    dt_obito?: SortOrder
    rg?: SortOrder
    orgao_emis_rg?: SortOrder
    observacao?: SortOrder
    prnt_ativo?: SortOrder
    cad_confirmado?: SortOrder
    ind_gera_prontuario?: SortOrder
    dt_ult_internacao?: SortOrder
    dt_ult_alta?: SortOrder
    dt_ult_consulta?: SortOrder
    dt_ult_procedimento?: SortOrder
    dt_ult_atend_hosp_dia?: SortOrder
    dt_ult_alta_hosp_dia?: SortOrder
    qrt_numero?: SortOrder
    unf_seq?: SortOrder
    lto_lto_id?: SortOrder
    reg_nascimento?: SortOrder
    nro_cartao_saude?: SortOrder
    dt_recadastro?: SortOrder
    ind_paciente_vip?: SortOrder
    pac_codigo_mae?: SortOrder
    tipo_data_obito?: SortOrder
    dt_obito_externo?: SortOrder
    rna_gso_pac_codigo?: SortOrder
    rna_gso_seqp?: SortOrder
    rna_seqp?: SortOrder
    numero_pis?: SortOrder
    volumes?: SortOrder
    ind_pac_protegido?: SortOrder
    criado_em?: SortOrder
    ind_pac_agfa?: SortOrder
    sexo_biologico?: SortOrder
    version?: SortOrder
    etn_id?: SortOrder
    id_sistema_legado?: SortOrder
    nome_social?: SortOrder
    cnh?: SortOrder
    data_validade_cnh?: SortOrder
    email?: SortOrder
    rel_codigo?: SortOrder
    dt_exp_germe_multirresistente?: SortOrder
    germe_multirresistente?: SortOrder
    pac_codigo_valido?: SortOrder
  }

  export type aip_pacientesAvgOrderByAggregateInput = {
    codigo?: SortOrder
    cct_codigo_cadastro?: SortOrder
    ser_matricula_cadastro?: SortOrder
    ser_vin_codigo_cadastro?: SortOrder
    cct_codigo_recadastro?: SortOrder
    cdd_codigo?: SortOrder
    nac_codigo?: SortOrder
    ocp_codigo?: SortOrder
    ser_matricula_recadastro?: SortOrder
    ser_vin_codigo_recadastro?: SortOrder
    grau_instrucao?: SortOrder
    ddd_fone_residencial?: SortOrder
    fone_residencial?: SortOrder
    ddd_fone_recado?: SortOrder
    cpf?: SortOrder
    prontuario?: SortOrder
    qrt_numero?: SortOrder
    unf_seq?: SortOrder
    nro_cartao_saude?: SortOrder
    pac_codigo_mae?: SortOrder
    rna_gso_pac_codigo?: SortOrder
    rna_gso_seqp?: SortOrder
    rna_seqp?: SortOrder
    numero_pis?: SortOrder
    volumes?: SortOrder
    version?: SortOrder
    etn_id?: SortOrder
    id_sistema_legado?: SortOrder
    cnh?: SortOrder
    rel_codigo?: SortOrder
    pac_codigo_valido?: SortOrder
  }

  export type aip_pacientesMaxOrderByAggregateInput = {
    codigo?: SortOrder
    cct_codigo_cadastro?: SortOrder
    ser_matricula_cadastro?: SortOrder
    ser_vin_codigo_cadastro?: SortOrder
    nome?: SortOrder
    nome_mae?: SortOrder
    dt_nascimento?: SortOrder
    dt_identificacao?: SortOrder
    cct_codigo_recadastro?: SortOrder
    cdd_codigo?: SortOrder
    nac_codigo?: SortOrder
    ocp_codigo?: SortOrder
    uf_sigla?: SortOrder
    ser_matricula_recadastro?: SortOrder
    ser_vin_codigo_recadastro?: SortOrder
    cor?: SortOrder
    sexo?: SortOrder
    grau_instrucao?: SortOrder
    nome_pai?: SortOrder
    naturalidade?: SortOrder
    ddd_fone_residencial?: SortOrder
    fone_residencial?: SortOrder
    ddd_fone_recado?: SortOrder
    fone_recado?: SortOrder
    estado_civil?: SortOrder
    cpf?: SortOrder
    prontuario?: SortOrder
    dt_obito?: SortOrder
    rg?: SortOrder
    orgao_emis_rg?: SortOrder
    observacao?: SortOrder
    prnt_ativo?: SortOrder
    cad_confirmado?: SortOrder
    ind_gera_prontuario?: SortOrder
    dt_ult_internacao?: SortOrder
    dt_ult_alta?: SortOrder
    dt_ult_consulta?: SortOrder
    dt_ult_procedimento?: SortOrder
    dt_ult_atend_hosp_dia?: SortOrder
    dt_ult_alta_hosp_dia?: SortOrder
    qrt_numero?: SortOrder
    unf_seq?: SortOrder
    lto_lto_id?: SortOrder
    reg_nascimento?: SortOrder
    nro_cartao_saude?: SortOrder
    dt_recadastro?: SortOrder
    ind_paciente_vip?: SortOrder
    pac_codigo_mae?: SortOrder
    tipo_data_obito?: SortOrder
    dt_obito_externo?: SortOrder
    rna_gso_pac_codigo?: SortOrder
    rna_gso_seqp?: SortOrder
    rna_seqp?: SortOrder
    numero_pis?: SortOrder
    volumes?: SortOrder
    ind_pac_protegido?: SortOrder
    criado_em?: SortOrder
    ind_pac_agfa?: SortOrder
    sexo_biologico?: SortOrder
    version?: SortOrder
    etn_id?: SortOrder
    id_sistema_legado?: SortOrder
    nome_social?: SortOrder
    cnh?: SortOrder
    data_validade_cnh?: SortOrder
    email?: SortOrder
    rel_codigo?: SortOrder
    dt_exp_germe_multirresistente?: SortOrder
    germe_multirresistente?: SortOrder
    pac_codigo_valido?: SortOrder
  }

  export type aip_pacientesMinOrderByAggregateInput = {
    codigo?: SortOrder
    cct_codigo_cadastro?: SortOrder
    ser_matricula_cadastro?: SortOrder
    ser_vin_codigo_cadastro?: SortOrder
    nome?: SortOrder
    nome_mae?: SortOrder
    dt_nascimento?: SortOrder
    dt_identificacao?: SortOrder
    cct_codigo_recadastro?: SortOrder
    cdd_codigo?: SortOrder
    nac_codigo?: SortOrder
    ocp_codigo?: SortOrder
    uf_sigla?: SortOrder
    ser_matricula_recadastro?: SortOrder
    ser_vin_codigo_recadastro?: SortOrder
    cor?: SortOrder
    sexo?: SortOrder
    grau_instrucao?: SortOrder
    nome_pai?: SortOrder
    naturalidade?: SortOrder
    ddd_fone_residencial?: SortOrder
    fone_residencial?: SortOrder
    ddd_fone_recado?: SortOrder
    fone_recado?: SortOrder
    estado_civil?: SortOrder
    cpf?: SortOrder
    prontuario?: SortOrder
    dt_obito?: SortOrder
    rg?: SortOrder
    orgao_emis_rg?: SortOrder
    observacao?: SortOrder
    prnt_ativo?: SortOrder
    cad_confirmado?: SortOrder
    ind_gera_prontuario?: SortOrder
    dt_ult_internacao?: SortOrder
    dt_ult_alta?: SortOrder
    dt_ult_consulta?: SortOrder
    dt_ult_procedimento?: SortOrder
    dt_ult_atend_hosp_dia?: SortOrder
    dt_ult_alta_hosp_dia?: SortOrder
    qrt_numero?: SortOrder
    unf_seq?: SortOrder
    lto_lto_id?: SortOrder
    reg_nascimento?: SortOrder
    nro_cartao_saude?: SortOrder
    dt_recadastro?: SortOrder
    ind_paciente_vip?: SortOrder
    pac_codigo_mae?: SortOrder
    tipo_data_obito?: SortOrder
    dt_obito_externo?: SortOrder
    rna_gso_pac_codigo?: SortOrder
    rna_gso_seqp?: SortOrder
    rna_seqp?: SortOrder
    numero_pis?: SortOrder
    volumes?: SortOrder
    ind_pac_protegido?: SortOrder
    criado_em?: SortOrder
    ind_pac_agfa?: SortOrder
    sexo_biologico?: SortOrder
    version?: SortOrder
    etn_id?: SortOrder
    id_sistema_legado?: SortOrder
    nome_social?: SortOrder
    cnh?: SortOrder
    data_validade_cnh?: SortOrder
    email?: SortOrder
    rel_codigo?: SortOrder
    dt_exp_germe_multirresistente?: SortOrder
    germe_multirresistente?: SortOrder
    pac_codigo_valido?: SortOrder
  }

  export type aip_pacientesSumOrderByAggregateInput = {
    codigo?: SortOrder
    cct_codigo_cadastro?: SortOrder
    ser_matricula_cadastro?: SortOrder
    ser_vin_codigo_cadastro?: SortOrder
    cct_codigo_recadastro?: SortOrder
    cdd_codigo?: SortOrder
    nac_codigo?: SortOrder
    ocp_codigo?: SortOrder
    ser_matricula_recadastro?: SortOrder
    ser_vin_codigo_recadastro?: SortOrder
    grau_instrucao?: SortOrder
    ddd_fone_residencial?: SortOrder
    fone_residencial?: SortOrder
    ddd_fone_recado?: SortOrder
    cpf?: SortOrder
    prontuario?: SortOrder
    qrt_numero?: SortOrder
    unf_seq?: SortOrder
    nro_cartao_saude?: SortOrder
    pac_codigo_mae?: SortOrder
    rna_gso_pac_codigo?: SortOrder
    rna_gso_seqp?: SortOrder
    rna_seqp?: SortOrder
    numero_pis?: SortOrder
    volumes?: SortOrder
    version?: SortOrder
    etn_id?: SortOrder
    id_sistema_legado?: SortOrder
    cnh?: SortOrder
    rel_codigo?: SortOrder
    pac_codigo_valido?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type rap_pessoas_fisicasCountOrderByAggregateInput = {
    codigo?: SortOrder
    cpf?: SortOrder
    nome?: SortOrder
    nome_mae?: SortOrder
    pac_prontuario?: SortOrder
    nome_pai?: SortOrder
    dt_nascimento?: SortOrder
    sexo?: SortOrder
    nome_usual?: SortOrder
    grau_instrucao?: SortOrder
    estado_civil?: SortOrder
    bcl_clo_lgr_codigo?: SortOrder
    bcl_clo_cep?: SortOrder
    bcl_bai_codigo?: SortOrder
    cdd_codigo?: SortOrder
    nac_codigo?: SortOrder
    logradouro?: SortOrder
    compl_logradouro?: SortOrder
    nro_logradouro?: SortOrder
    cep?: SortOrder
    bairro?: SortOrder
    cidade_nascimento?: SortOrder
    uf_sigla?: SortOrder
    nro_identidade?: SortOrder
    nro_cart_profissional?: SortOrder
    serie_cart_profissional?: SortOrder
    pis_pasep?: SortOrder
    nro_tit_eleitor?: SortOrder
    zona_tit_eleitor?: SortOrder
    secao_tit_eleitor?: SortOrder
    ddd_fone_residencial?: SortOrder
    fone_residencial?: SortOrder
    ramal_fone_residencial?: SortOrder
    ddd_fone_celular?: SortOrder
    fone_celular?: SortOrder
    ddd_fone_pager_bip?: SortOrder
    fone_pager_bip?: SortOrder
    nro_pager_bip?: SortOrder
    email_particular?: SortOrder
    criado_em?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    pac_codigo?: SortOrder
    version?: SortOrder
    cdd_codigo_municipio?: SortOrder
    uf_orgao?: SortOrder
    dt_emissao_documento?: SortOrder
    orgao_emissor_rg?: SortOrder
  }

  export type rap_pessoas_fisicasAvgOrderByAggregateInput = {
    codigo?: SortOrder
    cpf?: SortOrder
    pac_prontuario?: SortOrder
    grau_instrucao?: SortOrder
    bcl_clo_lgr_codigo?: SortOrder
    bcl_clo_cep?: SortOrder
    bcl_bai_codigo?: SortOrder
    cdd_codigo?: SortOrder
    nac_codigo?: SortOrder
    nro_logradouro?: SortOrder
    cep?: SortOrder
    nro_cart_profissional?: SortOrder
    pis_pasep?: SortOrder
    nro_tit_eleitor?: SortOrder
    zona_tit_eleitor?: SortOrder
    secao_tit_eleitor?: SortOrder
    ddd_fone_residencial?: SortOrder
    fone_residencial?: SortOrder
    ramal_fone_residencial?: SortOrder
    ddd_fone_celular?: SortOrder
    fone_celular?: SortOrder
    ddd_fone_pager_bip?: SortOrder
    fone_pager_bip?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    pac_codigo?: SortOrder
    version?: SortOrder
    cdd_codigo_municipio?: SortOrder
    orgao_emissor_rg?: SortOrder
  }

  export type rap_pessoas_fisicasMaxOrderByAggregateInput = {
    codigo?: SortOrder
    cpf?: SortOrder
    nome?: SortOrder
    nome_mae?: SortOrder
    pac_prontuario?: SortOrder
    nome_pai?: SortOrder
    dt_nascimento?: SortOrder
    sexo?: SortOrder
    nome_usual?: SortOrder
    grau_instrucao?: SortOrder
    estado_civil?: SortOrder
    bcl_clo_lgr_codigo?: SortOrder
    bcl_clo_cep?: SortOrder
    bcl_bai_codigo?: SortOrder
    cdd_codigo?: SortOrder
    nac_codigo?: SortOrder
    logradouro?: SortOrder
    compl_logradouro?: SortOrder
    nro_logradouro?: SortOrder
    cep?: SortOrder
    bairro?: SortOrder
    cidade_nascimento?: SortOrder
    uf_sigla?: SortOrder
    nro_identidade?: SortOrder
    nro_cart_profissional?: SortOrder
    serie_cart_profissional?: SortOrder
    pis_pasep?: SortOrder
    nro_tit_eleitor?: SortOrder
    zona_tit_eleitor?: SortOrder
    secao_tit_eleitor?: SortOrder
    ddd_fone_residencial?: SortOrder
    fone_residencial?: SortOrder
    ramal_fone_residencial?: SortOrder
    ddd_fone_celular?: SortOrder
    fone_celular?: SortOrder
    ddd_fone_pager_bip?: SortOrder
    fone_pager_bip?: SortOrder
    nro_pager_bip?: SortOrder
    email_particular?: SortOrder
    criado_em?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    pac_codigo?: SortOrder
    version?: SortOrder
    cdd_codigo_municipio?: SortOrder
    uf_orgao?: SortOrder
    dt_emissao_documento?: SortOrder
    orgao_emissor_rg?: SortOrder
  }

  export type rap_pessoas_fisicasMinOrderByAggregateInput = {
    codigo?: SortOrder
    cpf?: SortOrder
    nome?: SortOrder
    nome_mae?: SortOrder
    pac_prontuario?: SortOrder
    nome_pai?: SortOrder
    dt_nascimento?: SortOrder
    sexo?: SortOrder
    nome_usual?: SortOrder
    grau_instrucao?: SortOrder
    estado_civil?: SortOrder
    bcl_clo_lgr_codigo?: SortOrder
    bcl_clo_cep?: SortOrder
    bcl_bai_codigo?: SortOrder
    cdd_codigo?: SortOrder
    nac_codigo?: SortOrder
    logradouro?: SortOrder
    compl_logradouro?: SortOrder
    nro_logradouro?: SortOrder
    cep?: SortOrder
    bairro?: SortOrder
    cidade_nascimento?: SortOrder
    uf_sigla?: SortOrder
    nro_identidade?: SortOrder
    nro_cart_profissional?: SortOrder
    serie_cart_profissional?: SortOrder
    pis_pasep?: SortOrder
    nro_tit_eleitor?: SortOrder
    zona_tit_eleitor?: SortOrder
    secao_tit_eleitor?: SortOrder
    ddd_fone_residencial?: SortOrder
    fone_residencial?: SortOrder
    ramal_fone_residencial?: SortOrder
    ddd_fone_celular?: SortOrder
    fone_celular?: SortOrder
    ddd_fone_pager_bip?: SortOrder
    fone_pager_bip?: SortOrder
    nro_pager_bip?: SortOrder
    email_particular?: SortOrder
    criado_em?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    pac_codigo?: SortOrder
    version?: SortOrder
    cdd_codigo_municipio?: SortOrder
    uf_orgao?: SortOrder
    dt_emissao_documento?: SortOrder
    orgao_emissor_rg?: SortOrder
  }

  export type rap_pessoas_fisicasSumOrderByAggregateInput = {
    codigo?: SortOrder
    cpf?: SortOrder
    pac_prontuario?: SortOrder
    grau_instrucao?: SortOrder
    bcl_clo_lgr_codigo?: SortOrder
    bcl_clo_cep?: SortOrder
    bcl_bai_codigo?: SortOrder
    cdd_codigo?: SortOrder
    nac_codigo?: SortOrder
    nro_logradouro?: SortOrder
    cep?: SortOrder
    nro_cart_profissional?: SortOrder
    pis_pasep?: SortOrder
    nro_tit_eleitor?: SortOrder
    zona_tit_eleitor?: SortOrder
    secao_tit_eleitor?: SortOrder
    ddd_fone_residencial?: SortOrder
    fone_residencial?: SortOrder
    ramal_fone_residencial?: SortOrder
    ddd_fone_celular?: SortOrder
    fone_celular?: SortOrder
    ddd_fone_pager_bip?: SortOrder
    fone_pager_bip?: SortOrder
    ser_matricula?: SortOrder
    ser_vin_codigo?: SortOrder
    pac_codigo?: SortOrder
    version?: SortOrder
    cdd_codigo_municipio?: SortOrder
    orgao_emissor_rg?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}