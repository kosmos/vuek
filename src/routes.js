import WelcomeComponent from 'components/Welcome/Welcome';
import HelloComponent from 'components/Hello/Hello';

export default [
    {
        path: '/',
        component: WelcomeComponent
    },
    {
        path: '/hello/:name',
        component: HelloComponent
    }
];
