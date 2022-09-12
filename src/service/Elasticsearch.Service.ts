import elasticsearch from '@elastic/elasticsearch';
import { Request, Response } from 'express';

export class ElasticsearchService {

    private static clientElasticsearch: any;

    constructor() {
      ElasticsearchService.clientElasticsearch = new elasticsearch.Client({
            node: 'https://vps35731.publiccloud.com.br:9200',
            auth: {
              username: 'elastic',
              password: '5PfKm0POuZ5h'
            },
            tls: {
              rejectUnauthorized: false
            }
        });;
        console.log("constructor")
    } 

    public search(request: Request, response: Response) {
      console.log(ElasticsearchService.clientElasticsearch)
      const data = ElasticsearchService.clientElasticsearch.search({
        index: 'waze_accidents',
        _source:['location'],
        query: {
          match_all: {
            
          }
        }
      }).then(( result:any )=>{return response.status(200).json(result.hits.hits)});

  console.log(data)
  //return response.status(200).json(data.hits);
  return data;
}

        //return this.clientElasticsearch.search();    
}