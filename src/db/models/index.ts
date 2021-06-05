import { Post } from './Post';
import { User } from './user';
export const entities = [User, Post];
export interface ModelsInterface {
  User: typeof User;
  Post: typeof Post;
}
export default {
  User,
  Post,
};
