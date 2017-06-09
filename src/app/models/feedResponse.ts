import { StatusPost } from '../models/statusPost';
import { Paging } from '../models/paging';

export interface FeedResponse {
  data: StatusPost[];
  paging: Paging
}
