import elasticsearch from '@elastic/elasticsearch';

export class ElasticsearchService {

    private clientElasticsearch: any;

    constructor() {
        this.clientElasticsearch = new elasticsearch.Client({
            node: 'https://vps35731.publiccloud.com.br:9200',
            auth: {
              username: 'elastic',
              password: '5PfKm0POuZ5h'
            },
            tls: {
              rejectUnauthorized: false
            }
        });;
        console.log(this.clientElasticsearch)
    }

    async search() {

      const { Client } = require('@elastic/elasticsearch')
      const client = new Client({
        cloud: { id: '<cloud-id>' },
        auth: { apiKey: 'base64EncodedKey' }
      })
      const result = await client.search({
        index: '',
        query: {
          match: {
            quote: ''
          }
        }
      })

  console.log(result.hits.hits)
}

run().catch(console.log)
        //return this.clientElasticsearch.search();    
}