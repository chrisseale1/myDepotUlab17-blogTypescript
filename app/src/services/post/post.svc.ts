import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostService extends BaseService {

    getAllPosts(): async.IAjaxThenable<models.IBlogPost[]> {
        return this.http.json<models.IBlogPost[]>({
            method: 'GET',
            url: this.host + '/posts'
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.error(err);
        });
    }

    getSinglePost(id: string): async.IAjaxThenable<models.IBlogPost>{
        return this.http.json<any>({
            method: 'GET',
            url: this.host + '/posts/' + id
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.error(err);
            throw err;
        });
    }

    savePost(title: string, author: string, content: string): async.IAjaxThenable<string> {
        let post: models.IBlogPost = {
            title: title,
            author: author,
            content: content 
        }
        return this.http.json<{ id: string; }>({
            method: 'POST',
            url: `${this.host}/posts`,
            data: post
        }).then((success) => {
            return success.response.id;
        });
    }
}

register.injectable('post-svc', PostService);
