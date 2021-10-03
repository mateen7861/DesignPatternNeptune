import IGraphApiQuery from "../abstractQueries/IGraphApiQuery";
import axios from 'axios'

export default class CypherApiQuery implements IGraphApiQuery {

private endpoint:string

constructor (endpoint:string){
this.endpoint = endpoint
  }

   createAPI() {
 console.log('createAPi')
  }

   getAPI(id:string) {

  console.log('getApi')
  }

}
