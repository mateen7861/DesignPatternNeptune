import GremlinApiQuery from "./GremlinApiQuery"
import GremlinUserQuery from "./GremlinUserQuery"

export default class GremlinQuery {

public user:GremlinUserQuery;
public api:GremlinApiQuery;


constructor (endpoint:string){
this.user = new GremlinUserQuery(endpoint)
this.api = new GremlinApiQuery(endpoint)
  }

}
