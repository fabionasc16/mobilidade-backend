import elasticsearch from '@elastic/elasticsearch';

function getclient() {
    const client = new elasticsearch.Client({
            node: 'https://vps35731.publiccloud.com.br:9200',
            auth: {
              username: 'elastic',
              password: '5PfKm0POuZ5h'
            },
            tls: {
              rejectUnauthorized: false
            }
        });
    return client;
}

export default getclient;