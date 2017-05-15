import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PostService from '../../services/post/post.svc';

export default class PostRepository extends BaseRepository {
    constructor(private postSvc: PostService) {
        super();
    }

    getAllPosts(): async.IThenable<models.IBlogPost[]>{
        return this.postSvc.getAllPosts();
    }

    getSinglePost(id: string): async.IThenable<models.IBlogPost>{
        return this.postSvc.getSinglePost(id);
    }

    savePost(title: string, author: string, content: string): async.IThenable<string> {
        return this.postSvc.savePost(title, author, content);
    }
}

register.injectable('post-repo', PostRepository, [PostService]);
