import IGraphUserQuery from "../abstractQueries/IGraphUserQuery";
import { initializeGremlinClient } from "./gremlin_init";
import { driver, process as gprocess, structure } from "gremlin";


export default class GremlinUserQuery implements IGraphUserQuery {


  private conn: driver.DriverRemoteConnection;
  private g: gprocess.GraphTraversalSource;

  constructor (endpoint:string){
    const {g,conn} =initializeGremlinClient(endpoint)

    this.conn = conn;
    this.g = g;
  }

   createUser() {
   
  console.log('createUser')
  }


  getUser(id:string){
    console.log('getUser')
  }
 
  
}
