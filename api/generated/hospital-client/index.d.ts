
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
    rap_servidores: 'rap_servidores'
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
      modelProps: "rap_servidores"
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