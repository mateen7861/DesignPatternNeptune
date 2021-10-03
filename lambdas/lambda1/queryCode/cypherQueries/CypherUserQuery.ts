import IGraphUserQuery from "../abstractQueries/IGraphUserQuery";
import axios from 'axios'

export default class CypherUserQuery implements IGraphUserQuery {

private endpoint:string

constructor (endpoint:string){
this.endpoint = endpoint
  }

   createUser() {
 console.log('createUser')
  }

   getUser(id:string) {

  console.log('getUser')
  }

}
