import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/post/post.repo';
import NewPostViewControl from '../../viewcontrols/newpost/newpost.vc';
import ContactViewControl from '../../viewcontrols/contact/contact.vc';
import AboutViewControl from '../../viewcontrols/about/about.vc';
import SinglePostViewControl from '../../viewcontrols/singlepost/singlepost.vc';


export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context = {
        blogPosts: <models.IBlogPost[]>[],
        singleVC: SinglePostViewControl
    };

    constructor(private postRepo: PostRepository) {
        super();
    }

    navigatedTo() {
        this.postRepo.getAllPosts().then((blogPosts) => {
                //here, blogPosts is an array of blog posts
                this.context.blogPosts = blogPosts;
        });
    }
    goToNewPost(): void {
        this.navigator.navigate(NewPostViewControl);
    }
    
    getSinglePost(): void {
        this.navigator.navigate(SinglePostViewControl);
    }
}

register.viewControl('home-vc', HomeViewControl, [PostRepository]);
