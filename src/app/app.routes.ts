import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './modal/product-detail/product-detail.component';
import { CoreLayoutsComponent } from './core-layouts/core-layouts.component';
import { StackComponent } from './core-layouts/stack/stack.component';
import { DockComponent } from './core-layouts/dock/dock.component';
import { WrapComponent } from './core-layouts/wrap/wrap.component';
import { FlexComponent } from './core-layouts/flex/flex.component';
import { GridComponent } from './core-layouts/grid/grid.component';
import { AbsoluteComponent } from './core-layouts/absolute/absolute.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'layout',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: "modal-view", component: ProductDetailComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'layout',
        component: CoreLayoutsComponent,
    },
    {
        path: 'stack',
        component: StackComponent
    },
    {
        path: 'absolute',
        component: AbsoluteComponent
    },
    {
        path: 'grid',
        component: GridComponent
    },
    {
        path: 'flex',
        component: FlexComponent
    },
    {
        path: 'wrap',
        component: WrapComponent
    },
    {
        path: 'dock',
        component: DockComponent
    },
];
