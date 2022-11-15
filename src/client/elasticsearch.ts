import elasticsearch from '@elastic/elasticsearch';
import * as dotenv from 'dotenv';

dotenv.config({
  path: './.env.dev',
});

function getclient() {
    const client = new elasticsearch.Client({
            node: process.env.ELASTIC_HOST,
            auth: {
              username: process.env.ELASTIC_USER,
              password: process.env.ELASTIC_PASSWORD
            },
            tls: {
              rejectUnauthorized: false
            }
        });
    return client;
}

export default getclient;