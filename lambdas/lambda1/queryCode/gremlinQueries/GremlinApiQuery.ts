import IGraphApiQuery from "../abstractQueries/IGraphApiQuery";
import { initializeGremlinClient } from "./gremlin_init";
import { driver, process as gprocess, structure } from "gremlin";


export default class GremlinApiQuery implements IGraphApiQuery {


  private conn: driver.DriverRemoteConnection;
  private g: gprocess.GraphTraversalSource;

  constructor (endpoint:string){
    const {g,conn} =initializeGremlinClient(endpoint)

    this.conn = conn;
    this.g = g;
  }

   createAPI() {
   
  console.log('createApi')
  }


  getAPI(id:string){
    console.log('getApi')
  }
 
  
}
