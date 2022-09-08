import { Router } from 'express';
import getclient from 'client/elasticsearch';
import { ElasticsearchService } from 'service/Elasticsearch.Service';

const elasticsearchRoutes = Router();

const elasticsearchService = new ElasticsearchService();

elasticsearchRoutes.get('/acidentes', elasticsearchService.search);

export { elasticsearchRoutes };
