import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
// import ContactViewControl from '../contact/contact.vc';

export default class AboutViewControl extends BaseViewControl {
    templateString: string = require('./about.vc.html');

    context: any = {};
}

register.viewControl('about-vc', AboutViewControl);
