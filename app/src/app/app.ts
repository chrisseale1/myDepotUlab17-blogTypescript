import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import ContactViewControl from '../viewcontrols/contact/contact.vc';
import AboutViewControl from '../viewcontrols/about/about.vc';
import SinglePostViewControl from '../viewcontrols/singlepost/singlepost.vc';
import NewPostViewControl from '../viewcontrols/newpost/newpost.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: 'contact', view: ContactViewControl },
            { pattern: 'about', view: AboutViewControl },
            { pattern: 'singlepost/:id', view: SinglePostViewControl },
            { pattern: 'newpost', view: NewPostViewControl }

        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
