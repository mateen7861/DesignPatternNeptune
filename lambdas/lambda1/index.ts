import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import GraphQueryFactory from "./queryCode/GraphQueryFactory";

enum Language {
  Gremlin = "Gremlin",
  Cypher = "Cypher",
}

export async function handler(event: APIGatewayProxyEvent, context: Context) {
  const instance = new GraphQueryFactory().instantiate(
    Language.Cypher,
    process.env.NEPTUNE_ENDPOINT!
  );
  const query = instance.api.createAPI();
}

