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
    });

  }

  public search(request: Request, response: Response) {

    const data = ElasticsearchService.clientElasticsearch.search({
      index: 'waze_accidents',
      size: 10000,
      _source: ['location'],
      query: {
        "bool": {
          "must": [
            {
              "match": {
                "type": "ACCIDENT"
              }
            }
          ]
        }
      }

    });

    return data.then((result: any) => {
      const accidents = [];
      result.hits.hits.forEach(element => {
        if (element._source && element._source.location) {
          accidents.push(element._source.location);
        }

      });
      return response.status(200).json(accidents);
    });
  }
  public aggregateDistricts(request: Request, response: Response) {
    let city:string = ''
    if(request.query.city){
        city = request.query.city;
    }
  
    const data = ElasticsearchService.clientElasticsearch.search({
      index: 'waze_accidents',
      size: 0,
      _source: ['location'],      
      query: {
        "bool": {
          "must": [
            {
              "match": {
                "type": "ACCIDENT"
              }
            }, {
              "match": {
                "city": `${city}`
              }
            }
          ]
        }
      },
      "aggs": {
        "bairros": {
          "terms": {
            "field": "bairro.keyword",
            "size": 10000
          }
        }
      }

    });

    return data.then((result: any) => {
      const accidents = [];
      result.aggregations.bairros.buckets.forEach(element => {
        if (element) {
          accidents.push({'district': element.key, 'accidents': element.doc_count});
        }

      });
      return response.status(200).json(accidents);
    });
  }


}