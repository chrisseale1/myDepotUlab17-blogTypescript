import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import PostRepository from '../../repositories/post/post.repo';
import NewPostViewControl from '../../viewcontrols/newpost/newpost.vc';
import ContactViewControl from '../../viewcontrols/contact/contact.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';

export default class SinglePostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context: any = {
        blogpost: <models.IBlogPost>{}
    };

    constructor(private postRepo: PostRepository) {
        super();
    }
    navigatedTo(params: any, query: any) {
        let id = String(params.id);
        this.postRepo.getSinglePost(id).then((success) => {
            this.context.post = success;
        })
    }
}

    

register.viewControl('singlepost-vc', SinglePostViewControl, [PostRepository]);
