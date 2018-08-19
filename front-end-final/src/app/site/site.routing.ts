import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
import { SiteComponent } from './site.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
    {
        path: '', 
        component: SiteComponent,
        children:[
            { path: '', component: HomeComponent},
       ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SiteRouting {

}
