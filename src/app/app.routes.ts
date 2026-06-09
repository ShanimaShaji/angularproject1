import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Product } from './product/product';

export const routes: Routes = [
    {
        path: '',
        component:Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'product',
        component: Product
    },

];
