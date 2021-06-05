import { getRepository } from 'typeorm';
import { Post } from '../models/Post';
import { User } from '../models/user';

export const userRepository = () => getRepository<User>(User);
export const deviceRepository = () => getRepository<Post>(Post);
