import Db, { DbTweet, DbUser } from './db';
import { Resolvers } from './resolvers-types.generated';
import Query from './resolvers/Query';
import User from './resolvers/User';
import Tweet from './resolvers/Tweet';
import Mutation from './resolvers/Mutation';
import Trend from './resolvers/Trend';

export interface TwitterResolverContext {
  db: Db;
  dbTweetCache: Record<string, DbTweet>;
  dbUserCache: Record<string, DbUser>;
  dbTweetToFavoriteCountMap: Record<string, number>;
}

export const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
  User,
  Mutation,
  Trend,
  Tweet,
};
