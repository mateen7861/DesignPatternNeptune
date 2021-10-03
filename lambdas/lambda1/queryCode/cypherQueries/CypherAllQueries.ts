import CypherApiQuery from "./CypherApiQuery"
import CypherUserQuery from "./CypherUserQuery"

export default class CypherQuery {

public user:CypherUserQuery;
public api:CypherApiQuery;


constructor (endpoint:string){
this.user = new CypherUserQuery(endpoint)
this.api = new CypherApiQuery(endpoint)
  }

}
