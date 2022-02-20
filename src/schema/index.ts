import { buildSchemaSync, Resolver, Query } from "type-graphql";
import { ImageResolver } from "./image";
import { authChecker } from "./auth";
import { HouseResolver } from "./house";

@Resolver()
class DummyResolver {
  @Query((_returns) => String)
  hello() {
    return "Nive to meet you";
  }
}

export const schema = buildSchemaSync({
  resolvers: [DummyResolver, ImageResolver, HouseResolver],
  emitSchemaFile: process.env.NODE_ENV === "development",
  authChecker,
});
