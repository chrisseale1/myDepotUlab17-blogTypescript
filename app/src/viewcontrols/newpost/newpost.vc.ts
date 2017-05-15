import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import PostRepository from '../../repositories/post/post.repo';

export default class NewPostViewControl extends BaseViewControl {
    templateString: string = require('./newpost.vc.html');

    context: any = {
        blogpost: {
            title: '',
            author: '',
            content: ''
        },
        error: '',
     
    };

   constructor(private postRepo: PostRepository) {
        super();
    }


    savePost(){ 
        this.postRepo.savePost(this.context.blogpost.title, this.context.blogpost.author, this.context.blogpost.content)
            .then((success) => {
            this.navigator.navigate(HomeViewControl);
        }).catch((error) => {
            this.context.error = error;
        })
    }
}

register.viewControl('newpost-vc', NewPostViewControl, [PostRepository]);
