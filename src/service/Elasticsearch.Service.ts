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

      const {body: response } = await this.clientElasticsearch.search({
        index: '',
        query: {
          match: {
            quote: ''
          }
        }
      });

  console.log(response.hits.hits)
}

        //return this.clientElasticsearch.search();    
}