import { Router } from 'express';

import { ElasticsearchService } from '../service/Elasticsearch.Service';

const elasticsearchRoutes = Router();

const elasticsearchService = new ElasticsearchService();

elasticsearchRoutes.get('/accidents', elasticsearchService.search);
elasticsearchRoutes.get('/export', elasticsearchService.exportAccidents);
elasticsearchRoutes.get('/accidents/districts', elasticsearchService.aggregateDistricts);
elasticsearchRoutes.get('/accidents/months', elasticsearchService.aggregateAccidentsByMonth);
elasticsearchRoutes.get('/accidents/refresh', elasticsearchService.aggregateMaxDate);
export { elasticsearchRoutes };
