declare module 'apollo-datasource-mongodb' {
    import { DataSource, DataSourceConfig } from 'apollo-datasource'
    import { Collection } from 'mongodb';
  
    export interface CacheOptions {
      ttl: Number
    }
  
    export class MongoDataSource<TContext, TModel> extends DataSource {
      readonly context: TContext;
      readonly collectionName: string;
  
      constructor(collection: {[key: string]: Collection<TModel>});
  
      initialize(config: DataSourceConfig<TContext>): void;
      collection(): Collection<TModel>
      findOneById(id: string, options?: CacheOptions): Promise<TModel>
      findManyByIds(ids: string[], options?: CacheOptions): Promise<TModel[]>
      deleteFromCacheById(id: string): void;
    }
  }