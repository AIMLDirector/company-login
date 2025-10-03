
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
 * Model companies
 * 
 */
export type companies = $Result.DefaultSelection<Prisma.$companiesPayload>
/**
 * Model user_company_roles
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type user_company_roles = $Result.DefaultSelection<Prisma.$user_company_rolesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.companies.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Companies
   * const companies = await prisma.companies.findMany()
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
   * `prisma.companies`: Exposes CRUD operations for the **companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.companiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_company_roles`: Exposes CRUD operations for the **user_company_roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_company_roles
    * const user_company_roles = await prisma.user_company_roles.findMany()
    * ```
    */
  get user_company_roles(): Prisma.user_company_rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    companies: 'companies',
    user_company_roles: 'user_company_roles',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "companies" | "user_company_roles" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      companies: {
        payload: Prisma.$companiesPayload<ExtArgs>
        fields: Prisma.companiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findFirst: {
            args: Prisma.companiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findMany: {
            args: Prisma.companiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          create: {
            args: Prisma.companiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          createMany: {
            args: Prisma.companiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          delete: {
            args: Prisma.companiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          update: {
            args: Prisma.companiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          deleteMany: {
            args: Prisma.companiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          upsert: {
            args: Prisma.companiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.companiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.companiesCountArgs<ExtArgs>
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      user_company_roles: {
        payload: Prisma.$user_company_rolesPayload<ExtArgs>
        fields: Prisma.user_company_rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_company_rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_company_rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_company_rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_company_rolesPayload>
          }
          findFirst: {
            args: Prisma.user_company_rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_company_rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_company_rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_company_rolesPayload>
          }
          findMany: {
            args: Prisma.user_company_rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_company_rolesPayload>[]
          }
          create: {
            args: Prisma.user_company_rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_company_rolesPayload>
          }
          createMany: {
            args: Prisma.user_company_rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_company_rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_company_rolesPayload>[]
          }
          delete: {
            args: Prisma.user_company_rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_company_rolesPayload>
          }
          update: {
            args: Prisma.user_company_rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_company_rolesPayload>
          }
          deleteMany: {
            args: Prisma.user_company_rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_company_rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_company_rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_company_rolesPayload>[]
          }
          upsert: {
            args: Prisma.user_company_rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_company_rolesPayload>
          }
          aggregate: {
            args: Prisma.User_company_rolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_company_roles>
          }
          groupBy: {
            args: Prisma.user_company_rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_company_rolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_company_rolesCountArgs<ExtArgs>
            result: $Utils.Optional<User_company_rolesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    companies?: companiesOmit
    user_company_roles?: user_company_rolesOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CompaniesCountOutputType
   */

  export type CompaniesCountOutputType = {
    user_company_roles: number
  }

  export type CompaniesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_company_roles?: boolean | CompaniesCountOutputTypeCountUser_company_rolesArgs
  }

  // Custom InputTypes
  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesCountOutputType
     */
    select?: CompaniesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountUser_company_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_company_rolesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    user_company_roles: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_company_roles?: boolean | UsersCountOutputTypeCountUser_company_rolesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_company_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_company_rolesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: string | null
    company_name: string | null
    address: string | null
    industry: string | null
    created_at: Date | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: string | null
    company_name: string | null
    address: string | null
    industry: string | null
    created_at: Date | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    company_name: number
    address: number
    industry: number
    created_at: number
    _all: number
  }


  export type CompaniesMinAggregateInputType = {
    id?: true
    company_name?: true
    address?: true
    industry?: true
    created_at?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    company_name?: true
    address?: true
    industry?: true
    created_at?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    company_name?: true
    address?: true
    industry?: true
    created_at?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to aggregate.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type companiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companiesWhereInput
    orderBy?: companiesOrderByWithAggregationInput | companiesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: companiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    id: string
    company_name: string
    address: string | null
    industry: string | null
    created_at: Date | null
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends companiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type companiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    address?: boolean
    industry?: boolean
    created_at?: boolean
    user_company_roles?: boolean | companies$user_company_rolesArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    address?: boolean
    industry?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    address?: boolean
    industry?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectScalar = {
    id?: boolean
    company_name?: boolean
    address?: boolean
    industry?: boolean
    created_at?: boolean
  }

  export type companiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_name" | "address" | "industry" | "created_at", ExtArgs["result"]["companies"]>
  export type companiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_company_roles?: boolean | companies$user_company_rolesArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type companiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $companiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "companies"
    objects: {
      user_company_roles: Prisma.$user_company_rolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_name: string
      address: string | null
      industry: string | null
      created_at: Date | null
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }

  type companiesGetPayload<S extends boolean | null | undefined | companiesDefaultArgs> = $Result.GetResult<Prisma.$companiesPayload, S>

  type companiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface companiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['companies'], meta: { name: 'companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {companiesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companiesFindUniqueArgs>(args: SelectSubset<T, companiesFindUniqueArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companiesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companiesFindUniqueOrThrowArgs>(args: SelectSubset<T, companiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companiesFindFirstArgs>(args?: SelectSubset<T, companiesFindFirstArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companiesFindFirstOrThrowArgs>(args?: SelectSubset<T, companiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companiesFindManyArgs>(args?: SelectSubset<T, companiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companies.
     * @param {companiesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
     */
    create<T extends companiesCreateArgs>(args: SelectSubset<T, companiesCreateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companiesCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companiesCreateManyArgs>(args?: SelectSubset<T, companiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companiesCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companiesCreateManyAndReturnArgs>(args?: SelectSubset<T, companiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Companies.
     * @param {companiesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
     */
    delete<T extends companiesDeleteArgs>(args: SelectSubset<T, companiesDeleteArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companies.
     * @param {companiesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companiesUpdateArgs>(args: SelectSubset<T, companiesUpdateArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companiesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companiesDeleteManyArgs>(args?: SelectSubset<T, companiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companiesUpdateManyArgs>(args: SelectSubset<T, companiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companiesUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends companiesUpdateManyAndReturnArgs>(args: SelectSubset<T, companiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Companies.
     * @param {companiesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
     */
    upsert<T extends companiesUpsertArgs>(args: SelectSubset<T, companiesUpsertArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companiesCountArgs>(
      args?: Subset<T, companiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesGroupByArgs} args - Group by arguments.
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
      T extends companiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companiesGroupByArgs['orderBy'] }
        : { orderBy?: companiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, companiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the companies model
   */
  readonly fields: companiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_company_roles<T extends companies$user_company_rolesArgs<ExtArgs> = {}>(args?: Subset<T, companies$user_company_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the companies model
   */
  interface companiesFieldRefs {
    readonly id: FieldRef<"companies", 'String'>
    readonly company_name: FieldRef<"companies", 'String'>
    readonly address: FieldRef<"companies", 'String'>
    readonly industry: FieldRef<"companies", 'String'>
    readonly created_at: FieldRef<"companies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * companies findUnique
   */
  export type companiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findUniqueOrThrow
   */
  export type companiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findFirst
   */
  export type companiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findFirstOrThrow
   */
  export type companiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findMany
   */
  export type companiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies create
   */
  export type companiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to create a companies.
     */
    data: XOR<companiesCreateInput, companiesUncheckedCreateInput>
  }

  /**
   * companies createMany
   */
  export type companiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companiesCreateManyInput | companiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companies createManyAndReturn
   */
  export type companiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companiesCreateManyInput | companiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companies update
   */
  export type companiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The data needed to update a companies.
     */
    data: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
    /**
     * Choose, which companies to update.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies updateMany
   */
  export type companiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * companies updateManyAndReturn
   */
  export type companiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * companies upsert
   */
  export type companiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * The filter to search for the companies to update in case it exists.
     */
    where: companiesWhereUniqueInput
    /**
     * In case the companies found by the `where` argument doesn't exist, create a new companies with this data.
     */
    create: XOR<companiesCreateInput, companiesUncheckedCreateInput>
    /**
     * In case the companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
  }

  /**
   * companies delete
   */
  export type companiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
    /**
     * Filter which companies to delete.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies deleteMany
   */
  export type companiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companiesWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * companies.user_company_roles
   */
  export type companies$user_company_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesInclude<ExtArgs> | null
    where?: user_company_rolesWhereInput
    orderBy?: user_company_rolesOrderByWithRelationInput | user_company_rolesOrderByWithRelationInput[]
    cursor?: user_company_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_company_rolesScalarFieldEnum | User_company_rolesScalarFieldEnum[]
  }

  /**
   * companies without action
   */
  export type companiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the companies
     */
    omit?: companiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companiesInclude<ExtArgs> | null
  }


  /**
   * Model user_company_roles
   */

  export type AggregateUser_company_roles = {
    _count: User_company_rolesCountAggregateOutputType | null
    _min: User_company_rolesMinAggregateOutputType | null
    _max: User_company_rolesMaxAggregateOutputType | null
  }

  export type User_company_rolesMinAggregateOutputType = {
    user_id: string | null
    company_id: string | null
    company_role: string | null
  }

  export type User_company_rolesMaxAggregateOutputType = {
    user_id: string | null
    company_id: string | null
    company_role: string | null
  }

  export type User_company_rolesCountAggregateOutputType = {
    user_id: number
    company_id: number
    company_role: number
    _all: number
  }


  export type User_company_rolesMinAggregateInputType = {
    user_id?: true
    company_id?: true
    company_role?: true
  }

  export type User_company_rolesMaxAggregateInputType = {
    user_id?: true
    company_id?: true
    company_role?: true
  }

  export type User_company_rolesCountAggregateInputType = {
    user_id?: true
    company_id?: true
    company_role?: true
    _all?: true
  }

  export type User_company_rolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_company_roles to aggregate.
     */
    where?: user_company_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_company_roles to fetch.
     */
    orderBy?: user_company_rolesOrderByWithRelationInput | user_company_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_company_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_company_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_company_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_company_roles
    **/
    _count?: true | User_company_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_company_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_company_rolesMaxAggregateInputType
  }

  export type GetUser_company_rolesAggregateType<T extends User_company_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_company_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_company_roles[P]>
      : GetScalarType<T[P], AggregateUser_company_roles[P]>
  }




  export type user_company_rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_company_rolesWhereInput
    orderBy?: user_company_rolesOrderByWithAggregationInput | user_company_rolesOrderByWithAggregationInput[]
    by: User_company_rolesScalarFieldEnum[] | User_company_rolesScalarFieldEnum
    having?: user_company_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_company_rolesCountAggregateInputType | true
    _min?: User_company_rolesMinAggregateInputType
    _max?: User_company_rolesMaxAggregateInputType
  }

  export type User_company_rolesGroupByOutputType = {
    user_id: string
    company_id: string
    company_role: string
    _count: User_company_rolesCountAggregateOutputType | null
    _min: User_company_rolesMinAggregateOutputType | null
    _max: User_company_rolesMaxAggregateOutputType | null
  }

  type GetUser_company_rolesGroupByPayload<T extends user_company_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_company_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_company_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_company_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], User_company_rolesGroupByOutputType[P]>
        }
      >
    >


  export type user_company_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    company_id?: boolean
    company_role?: boolean
    companies?: boolean | companiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_company_roles"]>

  export type user_company_rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    company_id?: boolean
    company_role?: boolean
    companies?: boolean | companiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_company_roles"]>

  export type user_company_rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    company_id?: boolean
    company_role?: boolean
    companies?: boolean | companiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_company_roles"]>

  export type user_company_rolesSelectScalar = {
    user_id?: boolean
    company_id?: boolean
    company_role?: boolean
  }

  export type user_company_rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "company_id" | "company_role", ExtArgs["result"]["user_company_roles"]>
  export type user_company_rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | companiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_company_rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | companiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_company_rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | companiesDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_company_rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_company_roles"
    objects: {
      companies: Prisma.$companiesPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      company_id: string
      company_role: string
    }, ExtArgs["result"]["user_company_roles"]>
    composites: {}
  }

  type user_company_rolesGetPayload<S extends boolean | null | undefined | user_company_rolesDefaultArgs> = $Result.GetResult<Prisma.$user_company_rolesPayload, S>

  type user_company_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_company_rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_company_rolesCountAggregateInputType | true
    }

  export interface user_company_rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_company_roles'], meta: { name: 'user_company_roles' } }
    /**
     * Find zero or one User_company_roles that matches the filter.
     * @param {user_company_rolesFindUniqueArgs} args - Arguments to find a User_company_roles
     * @example
     * // Get one User_company_roles
     * const user_company_roles = await prisma.user_company_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_company_rolesFindUniqueArgs>(args: SelectSubset<T, user_company_rolesFindUniqueArgs<ExtArgs>>): Prisma__user_company_rolesClient<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_company_roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_company_rolesFindUniqueOrThrowArgs} args - Arguments to find a User_company_roles
     * @example
     * // Get one User_company_roles
     * const user_company_roles = await prisma.user_company_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_company_rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, user_company_rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_company_rolesClient<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_company_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_company_rolesFindFirstArgs} args - Arguments to find a User_company_roles
     * @example
     * // Get one User_company_roles
     * const user_company_roles = await prisma.user_company_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_company_rolesFindFirstArgs>(args?: SelectSubset<T, user_company_rolesFindFirstArgs<ExtArgs>>): Prisma__user_company_rolesClient<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_company_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_company_rolesFindFirstOrThrowArgs} args - Arguments to find a User_company_roles
     * @example
     * // Get one User_company_roles
     * const user_company_roles = await prisma.user_company_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_company_rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, user_company_rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_company_rolesClient<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_company_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_company_rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_company_roles
     * const user_company_roles = await prisma.user_company_roles.findMany()
     * 
     * // Get first 10 User_company_roles
     * const user_company_roles = await prisma.user_company_roles.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_company_rolesWithUser_idOnly = await prisma.user_company_roles.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_company_rolesFindManyArgs>(args?: SelectSubset<T, user_company_rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_company_roles.
     * @param {user_company_rolesCreateArgs} args - Arguments to create a User_company_roles.
     * @example
     * // Create one User_company_roles
     * const User_company_roles = await prisma.user_company_roles.create({
     *   data: {
     *     // ... data to create a User_company_roles
     *   }
     * })
     * 
     */
    create<T extends user_company_rolesCreateArgs>(args: SelectSubset<T, user_company_rolesCreateArgs<ExtArgs>>): Prisma__user_company_rolesClient<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_company_roles.
     * @param {user_company_rolesCreateManyArgs} args - Arguments to create many User_company_roles.
     * @example
     * // Create many User_company_roles
     * const user_company_roles = await prisma.user_company_roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_company_rolesCreateManyArgs>(args?: SelectSubset<T, user_company_rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_company_roles and returns the data saved in the database.
     * @param {user_company_rolesCreateManyAndReturnArgs} args - Arguments to create many User_company_roles.
     * @example
     * // Create many User_company_roles
     * const user_company_roles = await prisma.user_company_roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_company_roles and only return the `user_id`
     * const user_company_rolesWithUser_idOnly = await prisma.user_company_roles.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_company_rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, user_company_rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_company_roles.
     * @param {user_company_rolesDeleteArgs} args - Arguments to delete one User_company_roles.
     * @example
     * // Delete one User_company_roles
     * const User_company_roles = await prisma.user_company_roles.delete({
     *   where: {
     *     // ... filter to delete one User_company_roles
     *   }
     * })
     * 
     */
    delete<T extends user_company_rolesDeleteArgs>(args: SelectSubset<T, user_company_rolesDeleteArgs<ExtArgs>>): Prisma__user_company_rolesClient<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_company_roles.
     * @param {user_company_rolesUpdateArgs} args - Arguments to update one User_company_roles.
     * @example
     * // Update one User_company_roles
     * const user_company_roles = await prisma.user_company_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_company_rolesUpdateArgs>(args: SelectSubset<T, user_company_rolesUpdateArgs<ExtArgs>>): Prisma__user_company_rolesClient<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_company_roles.
     * @param {user_company_rolesDeleteManyArgs} args - Arguments to filter User_company_roles to delete.
     * @example
     * // Delete a few User_company_roles
     * const { count } = await prisma.user_company_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_company_rolesDeleteManyArgs>(args?: SelectSubset<T, user_company_rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_company_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_company_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_company_roles
     * const user_company_roles = await prisma.user_company_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_company_rolesUpdateManyArgs>(args: SelectSubset<T, user_company_rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_company_roles and returns the data updated in the database.
     * @param {user_company_rolesUpdateManyAndReturnArgs} args - Arguments to update many User_company_roles.
     * @example
     * // Update many User_company_roles
     * const user_company_roles = await prisma.user_company_roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_company_roles and only return the `user_id`
     * const user_company_rolesWithUser_idOnly = await prisma.user_company_roles.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends user_company_rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, user_company_rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_company_roles.
     * @param {user_company_rolesUpsertArgs} args - Arguments to update or create a User_company_roles.
     * @example
     * // Update or create a User_company_roles
     * const user_company_roles = await prisma.user_company_roles.upsert({
     *   create: {
     *     // ... data to create a User_company_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_company_roles we want to update
     *   }
     * })
     */
    upsert<T extends user_company_rolesUpsertArgs>(args: SelectSubset<T, user_company_rolesUpsertArgs<ExtArgs>>): Prisma__user_company_rolesClient<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_company_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_company_rolesCountArgs} args - Arguments to filter User_company_roles to count.
     * @example
     * // Count the number of User_company_roles
     * const count = await prisma.user_company_roles.count({
     *   where: {
     *     // ... the filter for the User_company_roles we want to count
     *   }
     * })
    **/
    count<T extends user_company_rolesCountArgs>(
      args?: Subset<T, user_company_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_company_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_company_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_company_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_company_rolesAggregateArgs>(args: Subset<T, User_company_rolesAggregateArgs>): Prisma.PrismaPromise<GetUser_company_rolesAggregateType<T>>

    /**
     * Group by User_company_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_company_rolesGroupByArgs} args - Group by arguments.
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
      T extends user_company_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_company_rolesGroupByArgs['orderBy'] }
        : { orderBy?: user_company_rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_company_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_company_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_company_roles model
   */
  readonly fields: user_company_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_company_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_company_rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companies<T extends companiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companiesDefaultArgs<ExtArgs>>): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_company_roles model
   */
  interface user_company_rolesFieldRefs {
    readonly user_id: FieldRef<"user_company_roles", 'String'>
    readonly company_id: FieldRef<"user_company_roles", 'String'>
    readonly company_role: FieldRef<"user_company_roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_company_roles findUnique
   */
  export type user_company_rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_company_roles to fetch.
     */
    where: user_company_rolesWhereUniqueInput
  }

  /**
   * user_company_roles findUniqueOrThrow
   */
  export type user_company_rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_company_roles to fetch.
     */
    where: user_company_rolesWhereUniqueInput
  }

  /**
   * user_company_roles findFirst
   */
  export type user_company_rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_company_roles to fetch.
     */
    where?: user_company_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_company_roles to fetch.
     */
    orderBy?: user_company_rolesOrderByWithRelationInput | user_company_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_company_roles.
     */
    cursor?: user_company_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_company_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_company_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_company_roles.
     */
    distinct?: User_company_rolesScalarFieldEnum | User_company_rolesScalarFieldEnum[]
  }

  /**
   * user_company_roles findFirstOrThrow
   */
  export type user_company_rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_company_roles to fetch.
     */
    where?: user_company_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_company_roles to fetch.
     */
    orderBy?: user_company_rolesOrderByWithRelationInput | user_company_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_company_roles.
     */
    cursor?: user_company_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_company_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_company_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_company_roles.
     */
    distinct?: User_company_rolesScalarFieldEnum | User_company_rolesScalarFieldEnum[]
  }

  /**
   * user_company_roles findMany
   */
  export type user_company_rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesInclude<ExtArgs> | null
    /**
     * Filter, which user_company_roles to fetch.
     */
    where?: user_company_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_company_roles to fetch.
     */
    orderBy?: user_company_rolesOrderByWithRelationInput | user_company_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_company_roles.
     */
    cursor?: user_company_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_company_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_company_roles.
     */
    skip?: number
    distinct?: User_company_rolesScalarFieldEnum | User_company_rolesScalarFieldEnum[]
  }

  /**
   * user_company_roles create
   */
  export type user_company_rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a user_company_roles.
     */
    data: XOR<user_company_rolesCreateInput, user_company_rolesUncheckedCreateInput>
  }

  /**
   * user_company_roles createMany
   */
  export type user_company_rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_company_roles.
     */
    data: user_company_rolesCreateManyInput | user_company_rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_company_roles createManyAndReturn
   */
  export type user_company_rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * The data used to create many user_company_roles.
     */
    data: user_company_rolesCreateManyInput | user_company_rolesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_company_roles update
   */
  export type user_company_rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a user_company_roles.
     */
    data: XOR<user_company_rolesUpdateInput, user_company_rolesUncheckedUpdateInput>
    /**
     * Choose, which user_company_roles to update.
     */
    where: user_company_rolesWhereUniqueInput
  }

  /**
   * user_company_roles updateMany
   */
  export type user_company_rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_company_roles.
     */
    data: XOR<user_company_rolesUpdateManyMutationInput, user_company_rolesUncheckedUpdateManyInput>
    /**
     * Filter which user_company_roles to update
     */
    where?: user_company_rolesWhereInput
    /**
     * Limit how many user_company_roles to update.
     */
    limit?: number
  }

  /**
   * user_company_roles updateManyAndReturn
   */
  export type user_company_rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * The data used to update user_company_roles.
     */
    data: XOR<user_company_rolesUpdateManyMutationInput, user_company_rolesUncheckedUpdateManyInput>
    /**
     * Filter which user_company_roles to update
     */
    where?: user_company_rolesWhereInput
    /**
     * Limit how many user_company_roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_company_roles upsert
   */
  export type user_company_rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the user_company_roles to update in case it exists.
     */
    where: user_company_rolesWhereUniqueInput
    /**
     * In case the user_company_roles found by the `where` argument doesn't exist, create a new user_company_roles with this data.
     */
    create: XOR<user_company_rolesCreateInput, user_company_rolesUncheckedCreateInput>
    /**
     * In case the user_company_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_company_rolesUpdateInput, user_company_rolesUncheckedUpdateInput>
  }

  /**
   * user_company_roles delete
   */
  export type user_company_rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesInclude<ExtArgs> | null
    /**
     * Filter which user_company_roles to delete.
     */
    where: user_company_rolesWhereUniqueInput
  }

  /**
   * user_company_roles deleteMany
   */
  export type user_company_rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_company_roles to delete
     */
    where?: user_company_rolesWhereInput
    /**
     * Limit how many user_company_roles to delete.
     */
    limit?: number
  }

  /**
   * user_company_roles without action
   */
  export type user_company_rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    name: string | null
    global_role: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    name: string | null
    global_role: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    name: number
    global_role: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    global_role?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    global_role?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    name?: true
    global_role?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password_hash: string
    name: string
    global_role: string | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    global_role?: boolean
    created_at?: boolean
    user_company_roles?: boolean | users$user_company_rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    global_role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    global_role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    name?: boolean
    global_role?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "name" | "global_role" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_company_roles?: boolean | users$user_company_rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      user_company_roles: Prisma.$user_company_rolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string
      name: string
      global_role: string | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_company_roles<T extends users$user_company_rolesArgs<ExtArgs> = {}>(args?: Subset<T, users$user_company_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_company_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly global_role: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.user_company_roles
   */
  export type users$user_company_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_company_roles
     */
    select?: user_company_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_company_roles
     */
    omit?: user_company_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_company_rolesInclude<ExtArgs> | null
    where?: user_company_rolesWhereInput
    orderBy?: user_company_rolesOrderByWithRelationInput | user_company_rolesOrderByWithRelationInput[]
    cursor?: user_company_rolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_company_rolesScalarFieldEnum | User_company_rolesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    company_name: 'company_name',
    address: 'address',
    industry: 'industry',
    created_at: 'created_at'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const User_company_rolesScalarFieldEnum: {
    user_id: 'user_id',
    company_id: 'company_id',
    company_role: 'company_role'
  };

  export type User_company_rolesScalarFieldEnum = (typeof User_company_rolesScalarFieldEnum)[keyof typeof User_company_rolesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    name: 'name',
    global_role: 'global_role',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type companiesWhereInput = {
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    id?: UuidFilter<"companies"> | string
    company_name?: StringFilter<"companies"> | string
    address?: StringNullableFilter<"companies"> | string | null
    industry?: StringNullableFilter<"companies"> | string | null
    created_at?: DateTimeNullableFilter<"companies"> | Date | string | null
    user_company_roles?: User_company_rolesListRelationFilter
  }

  export type companiesOrderByWithRelationInput = {
    id?: SortOrder
    company_name?: SortOrder
    address?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user_company_roles?: user_company_rolesOrderByRelationAggregateInput
  }

  export type companiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    company_name?: string
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    address?: StringNullableFilter<"companies"> | string | null
    industry?: StringNullableFilter<"companies"> | string | null
    created_at?: DateTimeNullableFilter<"companies"> | Date | string | null
    user_company_roles?: User_company_rolesListRelationFilter
  }, "id" | "company_name">

  export type companiesOrderByWithAggregationInput = {
    id?: SortOrder
    company_name?: SortOrder
    address?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: companiesCountOrderByAggregateInput
    _max?: companiesMaxOrderByAggregateInput
    _min?: companiesMinOrderByAggregateInput
  }

  export type companiesScalarWhereWithAggregatesInput = {
    AND?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    OR?: companiesScalarWhereWithAggregatesInput[]
    NOT?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"companies"> | string
    company_name?: StringWithAggregatesFilter<"companies"> | string
    address?: StringNullableWithAggregatesFilter<"companies"> | string | null
    industry?: StringNullableWithAggregatesFilter<"companies"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"companies"> | Date | string | null
  }

  export type user_company_rolesWhereInput = {
    AND?: user_company_rolesWhereInput | user_company_rolesWhereInput[]
    OR?: user_company_rolesWhereInput[]
    NOT?: user_company_rolesWhereInput | user_company_rolesWhereInput[]
    user_id?: UuidFilter<"user_company_roles"> | string
    company_id?: UuidFilter<"user_company_roles"> | string
    company_role?: StringFilter<"user_company_roles"> | string
    companies?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_company_rolesOrderByWithRelationInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    company_role?: SortOrder
    companies?: companiesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_company_rolesWhereUniqueInput = Prisma.AtLeast<{
    user_id_company_id?: user_company_rolesUser_idCompany_idCompoundUniqueInput
    AND?: user_company_rolesWhereInput | user_company_rolesWhereInput[]
    OR?: user_company_rolesWhereInput[]
    NOT?: user_company_rolesWhereInput | user_company_rolesWhereInput[]
    user_id?: UuidFilter<"user_company_roles"> | string
    company_id?: UuidFilter<"user_company_roles"> | string
    company_role?: StringFilter<"user_company_roles"> | string
    companies?: XOR<CompaniesScalarRelationFilter, companiesWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "user_id_company_id">

  export type user_company_rolesOrderByWithAggregationInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    company_role?: SortOrder
    _count?: user_company_rolesCountOrderByAggregateInput
    _max?: user_company_rolesMaxOrderByAggregateInput
    _min?: user_company_rolesMinOrderByAggregateInput
  }

  export type user_company_rolesScalarWhereWithAggregatesInput = {
    AND?: user_company_rolesScalarWhereWithAggregatesInput | user_company_rolesScalarWhereWithAggregatesInput[]
    OR?: user_company_rolesScalarWhereWithAggregatesInput[]
    NOT?: user_company_rolesScalarWhereWithAggregatesInput | user_company_rolesScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"user_company_roles"> | string
    company_id?: UuidWithAggregatesFilter<"user_company_roles"> | string
    company_role?: StringWithAggregatesFilter<"user_company_roles"> | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    global_role?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    user_company_roles?: User_company_rolesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    global_role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user_company_roles?: user_company_rolesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    global_role?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    user_company_roles?: User_company_rolesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    global_role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    global_role?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type companiesCreateInput = {
    id?: string
    company_name: string
    address?: string | null
    industry?: string | null
    created_at?: Date | string | null
    user_company_roles?: user_company_rolesCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUncheckedCreateInput = {
    id?: string
    company_name: string
    address?: string | null
    industry?: string | null
    created_at?: Date | string | null
    user_company_roles?: user_company_rolesUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_company_roles?: user_company_rolesUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_company_roles?: user_company_rolesUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesCreateManyInput = {
    id?: string
    company_name: string
    address?: string | null
    industry?: string | null
    created_at?: Date | string | null
  }

  export type companiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_company_rolesCreateInput = {
    company_role: string
    companies: companiesCreateNestedOneWithoutUser_company_rolesInput
    users: usersCreateNestedOneWithoutUser_company_rolesInput
  }

  export type user_company_rolesUncheckedCreateInput = {
    user_id: string
    company_id: string
    company_role: string
  }

  export type user_company_rolesUpdateInput = {
    company_role?: StringFieldUpdateOperationsInput | string
    companies?: companiesUpdateOneRequiredWithoutUser_company_rolesNestedInput
    users?: usersUpdateOneRequiredWithoutUser_company_rolesNestedInput
  }

  export type user_company_rolesUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    company_role?: StringFieldUpdateOperationsInput | string
  }

  export type user_company_rolesCreateManyInput = {
    user_id: string
    company_id: string
    company_role: string
  }

  export type user_company_rolesUpdateManyMutationInput = {
    company_role?: StringFieldUpdateOperationsInput | string
  }

  export type user_company_rolesUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    company_role?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    global_role?: string | null
    created_at?: Date | string | null
    user_company_roles?: user_company_rolesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    global_role?: string | null
    created_at?: Date | string | null
    user_company_roles?: user_company_rolesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    global_role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_company_roles?: user_company_rolesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    global_role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_company_roles?: user_company_rolesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    global_role?: string | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    global_role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    global_role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type User_company_rolesListRelationFilter = {
    every?: user_company_rolesWhereInput
    some?: user_company_rolesWhereInput
    none?: user_company_rolesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_company_rolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companiesCountOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    address?: SortOrder
    industry?: SortOrder
    created_at?: SortOrder
  }

  export type companiesMaxOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    address?: SortOrder
    industry?: SortOrder
    created_at?: SortOrder
  }

  export type companiesMinOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    address?: SortOrder
    industry?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type CompaniesScalarRelationFilter = {
    is?: companiesWhereInput
    isNot?: companiesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type user_company_rolesUser_idCompany_idCompoundUniqueInput = {
    user_id: string
    company_id: string
  }

  export type user_company_rolesCountOrderByAggregateInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    company_role?: SortOrder
  }

  export type user_company_rolesMaxOrderByAggregateInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    company_role?: SortOrder
  }

  export type user_company_rolesMinOrderByAggregateInput = {
    user_id?: SortOrder
    company_id?: SortOrder
    company_role?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    global_role?: SortOrder
    created_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    global_role?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    name?: SortOrder
    global_role?: SortOrder
    created_at?: SortOrder
  }

  export type user_company_rolesCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<user_company_rolesCreateWithoutCompaniesInput, user_company_rolesUncheckedCreateWithoutCompaniesInput> | user_company_rolesCreateWithoutCompaniesInput[] | user_company_rolesUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: user_company_rolesCreateOrConnectWithoutCompaniesInput | user_company_rolesCreateOrConnectWithoutCompaniesInput[]
    createMany?: user_company_rolesCreateManyCompaniesInputEnvelope
    connect?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
  }

  export type user_company_rolesUncheckedCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<user_company_rolesCreateWithoutCompaniesInput, user_company_rolesUncheckedCreateWithoutCompaniesInput> | user_company_rolesCreateWithoutCompaniesInput[] | user_company_rolesUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: user_company_rolesCreateOrConnectWithoutCompaniesInput | user_company_rolesCreateOrConnectWithoutCompaniesInput[]
    createMany?: user_company_rolesCreateManyCompaniesInputEnvelope
    connect?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type user_company_rolesUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<user_company_rolesCreateWithoutCompaniesInput, user_company_rolesUncheckedCreateWithoutCompaniesInput> | user_company_rolesCreateWithoutCompaniesInput[] | user_company_rolesUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: user_company_rolesCreateOrConnectWithoutCompaniesInput | user_company_rolesCreateOrConnectWithoutCompaniesInput[]
    upsert?: user_company_rolesUpsertWithWhereUniqueWithoutCompaniesInput | user_company_rolesUpsertWithWhereUniqueWithoutCompaniesInput[]
    createMany?: user_company_rolesCreateManyCompaniesInputEnvelope
    set?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    disconnect?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    delete?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    connect?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    update?: user_company_rolesUpdateWithWhereUniqueWithoutCompaniesInput | user_company_rolesUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: user_company_rolesUpdateManyWithWhereWithoutCompaniesInput | user_company_rolesUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: user_company_rolesScalarWhereInput | user_company_rolesScalarWhereInput[]
  }

  export type user_company_rolesUncheckedUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<user_company_rolesCreateWithoutCompaniesInput, user_company_rolesUncheckedCreateWithoutCompaniesInput> | user_company_rolesCreateWithoutCompaniesInput[] | user_company_rolesUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: user_company_rolesCreateOrConnectWithoutCompaniesInput | user_company_rolesCreateOrConnectWithoutCompaniesInput[]
    upsert?: user_company_rolesUpsertWithWhereUniqueWithoutCompaniesInput | user_company_rolesUpsertWithWhereUniqueWithoutCompaniesInput[]
    createMany?: user_company_rolesCreateManyCompaniesInputEnvelope
    set?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    disconnect?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    delete?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    connect?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    update?: user_company_rolesUpdateWithWhereUniqueWithoutCompaniesInput | user_company_rolesUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: user_company_rolesUpdateManyWithWhereWithoutCompaniesInput | user_company_rolesUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: user_company_rolesScalarWhereInput | user_company_rolesScalarWhereInput[]
  }

  export type companiesCreateNestedOneWithoutUser_company_rolesInput = {
    create?: XOR<companiesCreateWithoutUser_company_rolesInput, companiesUncheckedCreateWithoutUser_company_rolesInput>
    connectOrCreate?: companiesCreateOrConnectWithoutUser_company_rolesInput
    connect?: companiesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_company_rolesInput = {
    create?: XOR<usersCreateWithoutUser_company_rolesInput, usersUncheckedCreateWithoutUser_company_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_company_rolesInput
    connect?: usersWhereUniqueInput
  }

  export type companiesUpdateOneRequiredWithoutUser_company_rolesNestedInput = {
    create?: XOR<companiesCreateWithoutUser_company_rolesInput, companiesUncheckedCreateWithoutUser_company_rolesInput>
    connectOrCreate?: companiesCreateOrConnectWithoutUser_company_rolesInput
    upsert?: companiesUpsertWithoutUser_company_rolesInput
    connect?: companiesWhereUniqueInput
    update?: XOR<XOR<companiesUpdateToOneWithWhereWithoutUser_company_rolesInput, companiesUpdateWithoutUser_company_rolesInput>, companiesUncheckedUpdateWithoutUser_company_rolesInput>
  }

  export type usersUpdateOneRequiredWithoutUser_company_rolesNestedInput = {
    create?: XOR<usersCreateWithoutUser_company_rolesInput, usersUncheckedCreateWithoutUser_company_rolesInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_company_rolesInput
    upsert?: usersUpsertWithoutUser_company_rolesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_company_rolesInput, usersUpdateWithoutUser_company_rolesInput>, usersUncheckedUpdateWithoutUser_company_rolesInput>
  }

  export type user_company_rolesCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_company_rolesCreateWithoutUsersInput, user_company_rolesUncheckedCreateWithoutUsersInput> | user_company_rolesCreateWithoutUsersInput[] | user_company_rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_company_rolesCreateOrConnectWithoutUsersInput | user_company_rolesCreateOrConnectWithoutUsersInput[]
    createMany?: user_company_rolesCreateManyUsersInputEnvelope
    connect?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
  }

  export type user_company_rolesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_company_rolesCreateWithoutUsersInput, user_company_rolesUncheckedCreateWithoutUsersInput> | user_company_rolesCreateWithoutUsersInput[] | user_company_rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_company_rolesCreateOrConnectWithoutUsersInput | user_company_rolesCreateOrConnectWithoutUsersInput[]
    createMany?: user_company_rolesCreateManyUsersInputEnvelope
    connect?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
  }

  export type user_company_rolesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_company_rolesCreateWithoutUsersInput, user_company_rolesUncheckedCreateWithoutUsersInput> | user_company_rolesCreateWithoutUsersInput[] | user_company_rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_company_rolesCreateOrConnectWithoutUsersInput | user_company_rolesCreateOrConnectWithoutUsersInput[]
    upsert?: user_company_rolesUpsertWithWhereUniqueWithoutUsersInput | user_company_rolesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_company_rolesCreateManyUsersInputEnvelope
    set?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    disconnect?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    delete?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    connect?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    update?: user_company_rolesUpdateWithWhereUniqueWithoutUsersInput | user_company_rolesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_company_rolesUpdateManyWithWhereWithoutUsersInput | user_company_rolesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_company_rolesScalarWhereInput | user_company_rolesScalarWhereInput[]
  }

  export type user_company_rolesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_company_rolesCreateWithoutUsersInput, user_company_rolesUncheckedCreateWithoutUsersInput> | user_company_rolesCreateWithoutUsersInput[] | user_company_rolesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_company_rolesCreateOrConnectWithoutUsersInput | user_company_rolesCreateOrConnectWithoutUsersInput[]
    upsert?: user_company_rolesUpsertWithWhereUniqueWithoutUsersInput | user_company_rolesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_company_rolesCreateManyUsersInputEnvelope
    set?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    disconnect?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    delete?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    connect?: user_company_rolesWhereUniqueInput | user_company_rolesWhereUniqueInput[]
    update?: user_company_rolesUpdateWithWhereUniqueWithoutUsersInput | user_company_rolesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_company_rolesUpdateManyWithWhereWithoutUsersInput | user_company_rolesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_company_rolesScalarWhereInput | user_company_rolesScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type user_company_rolesCreateWithoutCompaniesInput = {
    company_role: string
    users: usersCreateNestedOneWithoutUser_company_rolesInput
  }

  export type user_company_rolesUncheckedCreateWithoutCompaniesInput = {
    user_id: string
    company_role: string
  }

  export type user_company_rolesCreateOrConnectWithoutCompaniesInput = {
    where: user_company_rolesWhereUniqueInput
    create: XOR<user_company_rolesCreateWithoutCompaniesInput, user_company_rolesUncheckedCreateWithoutCompaniesInput>
  }

  export type user_company_rolesCreateManyCompaniesInputEnvelope = {
    data: user_company_rolesCreateManyCompaniesInput | user_company_rolesCreateManyCompaniesInput[]
    skipDuplicates?: boolean
  }

  export type user_company_rolesUpsertWithWhereUniqueWithoutCompaniesInput = {
    where: user_company_rolesWhereUniqueInput
    update: XOR<user_company_rolesUpdateWithoutCompaniesInput, user_company_rolesUncheckedUpdateWithoutCompaniesInput>
    create: XOR<user_company_rolesCreateWithoutCompaniesInput, user_company_rolesUncheckedCreateWithoutCompaniesInput>
  }

  export type user_company_rolesUpdateWithWhereUniqueWithoutCompaniesInput = {
    where: user_company_rolesWhereUniqueInput
    data: XOR<user_company_rolesUpdateWithoutCompaniesInput, user_company_rolesUncheckedUpdateWithoutCompaniesInput>
  }

  export type user_company_rolesUpdateManyWithWhereWithoutCompaniesInput = {
    where: user_company_rolesScalarWhereInput
    data: XOR<user_company_rolesUpdateManyMutationInput, user_company_rolesUncheckedUpdateManyWithoutCompaniesInput>
  }

  export type user_company_rolesScalarWhereInput = {
    AND?: user_company_rolesScalarWhereInput | user_company_rolesScalarWhereInput[]
    OR?: user_company_rolesScalarWhereInput[]
    NOT?: user_company_rolesScalarWhereInput | user_company_rolesScalarWhereInput[]
    user_id?: UuidFilter<"user_company_roles"> | string
    company_id?: UuidFilter<"user_company_roles"> | string
    company_role?: StringFilter<"user_company_roles"> | string
  }

  export type companiesCreateWithoutUser_company_rolesInput = {
    id?: string
    company_name: string
    address?: string | null
    industry?: string | null
    created_at?: Date | string | null
  }

  export type companiesUncheckedCreateWithoutUser_company_rolesInput = {
    id?: string
    company_name: string
    address?: string | null
    industry?: string | null
    created_at?: Date | string | null
  }

  export type companiesCreateOrConnectWithoutUser_company_rolesInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutUser_company_rolesInput, companiesUncheckedCreateWithoutUser_company_rolesInput>
  }

  export type usersCreateWithoutUser_company_rolesInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    global_role?: string | null
    created_at?: Date | string | null
  }

  export type usersUncheckedCreateWithoutUser_company_rolesInput = {
    id?: string
    email: string
    password_hash: string
    name: string
    global_role?: string | null
    created_at?: Date | string | null
  }

  export type usersCreateOrConnectWithoutUser_company_rolesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_company_rolesInput, usersUncheckedCreateWithoutUser_company_rolesInput>
  }

  export type companiesUpsertWithoutUser_company_rolesInput = {
    update: XOR<companiesUpdateWithoutUser_company_rolesInput, companiesUncheckedUpdateWithoutUser_company_rolesInput>
    create: XOR<companiesCreateWithoutUser_company_rolesInput, companiesUncheckedCreateWithoutUser_company_rolesInput>
    where?: companiesWhereInput
  }

  export type companiesUpdateToOneWithWhereWithoutUser_company_rolesInput = {
    where?: companiesWhereInput
    data: XOR<companiesUpdateWithoutUser_company_rolesInput, companiesUncheckedUpdateWithoutUser_company_rolesInput>
  }

  export type companiesUpdateWithoutUser_company_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type companiesUncheckedUpdateWithoutUser_company_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutUser_company_rolesInput = {
    update: XOR<usersUpdateWithoutUser_company_rolesInput, usersUncheckedUpdateWithoutUser_company_rolesInput>
    create: XOR<usersCreateWithoutUser_company_rolesInput, usersUncheckedCreateWithoutUser_company_rolesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_company_rolesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_company_rolesInput, usersUncheckedUpdateWithoutUser_company_rolesInput>
  }

  export type usersUpdateWithoutUser_company_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    global_role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateWithoutUser_company_rolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    global_role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_company_rolesCreateWithoutUsersInput = {
    company_role: string
    companies: companiesCreateNestedOneWithoutUser_company_rolesInput
  }

  export type user_company_rolesUncheckedCreateWithoutUsersInput = {
    company_id: string
    company_role: string
  }

  export type user_company_rolesCreateOrConnectWithoutUsersInput = {
    where: user_company_rolesWhereUniqueInput
    create: XOR<user_company_rolesCreateWithoutUsersInput, user_company_rolesUncheckedCreateWithoutUsersInput>
  }

  export type user_company_rolesCreateManyUsersInputEnvelope = {
    data: user_company_rolesCreateManyUsersInput | user_company_rolesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_company_rolesUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_company_rolesWhereUniqueInput
    update: XOR<user_company_rolesUpdateWithoutUsersInput, user_company_rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<user_company_rolesCreateWithoutUsersInput, user_company_rolesUncheckedCreateWithoutUsersInput>
  }

  export type user_company_rolesUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_company_rolesWhereUniqueInput
    data: XOR<user_company_rolesUpdateWithoutUsersInput, user_company_rolesUncheckedUpdateWithoutUsersInput>
  }

  export type user_company_rolesUpdateManyWithWhereWithoutUsersInput = {
    where: user_company_rolesScalarWhereInput
    data: XOR<user_company_rolesUpdateManyMutationInput, user_company_rolesUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_company_rolesCreateManyCompaniesInput = {
    user_id: string
    company_role: string
  }

  export type user_company_rolesUpdateWithoutCompaniesInput = {
    company_role?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutUser_company_rolesNestedInput
  }

  export type user_company_rolesUncheckedUpdateWithoutCompaniesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    company_role?: StringFieldUpdateOperationsInput | string
  }

  export type user_company_rolesUncheckedUpdateManyWithoutCompaniesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    company_role?: StringFieldUpdateOperationsInput | string
  }

  export type user_company_rolesCreateManyUsersInput = {
    company_id: string
    company_role: string
  }

  export type user_company_rolesUpdateWithoutUsersInput = {
    company_role?: StringFieldUpdateOperationsInput | string
    companies?: companiesUpdateOneRequiredWithoutUser_company_rolesNestedInput
  }

  export type user_company_rolesUncheckedUpdateWithoutUsersInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    company_role?: StringFieldUpdateOperationsInput | string
  }

  export type user_company_rolesUncheckedUpdateManyWithoutUsersInput = {
    company_id?: StringFieldUpdateOperationsInput | string
    company_role?: StringFieldUpdateOperationsInput | string
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