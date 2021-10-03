import CypherQuery from "./cypherQueries/CypherAllQueries";
import GremlinQuery from "./gremlinQueries/GremlinAllQueries";

enum Language {
   Gremlin = "Gremlin",
   Cypher = "Cypher"
  }

export default class GraphQueryFactory{
private static instance: GraphQueryFactory;

public constructor (){
    if (!GraphQueryFactory.instance){
        GraphQueryFactory.instance = new GraphQueryFactory()
        return GraphQueryFactory.instance
    }

    return GraphQueryFactory.instance
}



public instantiate (language: Language, endpoint:string){
    if(language === Language.Gremlin){
        return new GremlinQuery(endpoint);
    }
    else if(language === Language.Cypher){
        return new CypherQuery(endpoint);
    }
    else{
        throw new Error('Language not set')
    }
}

}