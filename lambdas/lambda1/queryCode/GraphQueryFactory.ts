import CypherQuery from "./cypherQueries/CypherAllQueries";
import GremlinQuery from "./gremlinQueries/GremlinAllQueries";

enum Language {
   Gremlin = "Gremlin",
   Cypher = "Cypher"
  }

export default class GraphQueryFactory{

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
