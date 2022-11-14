import { Router } from 'express';
import getclient from 'client/elasticsearch';
import { ElasticsearchService } from 'service/Elasticsearch.Service';

const elasticsearchRoutes = Router();

const elasticsearchService = new ElasticsearchService();
console.log(elasticsearchService.search);
elasticsearchRoutes.get('/accidents', elasticsearchService.search);
elasticsearchRoutes.get('/accidents/districts', elasticsearchService.aggregateDistricts);
elasticsearchRoutes.get('/accidents/months', elasticsearchService.aggregateAccidentsByMonth);
elasticsearchRoutes.get('/accidents/refresh', elasticsearchService.aggregateMaxDate);
export { elasticsearchRoutes };
