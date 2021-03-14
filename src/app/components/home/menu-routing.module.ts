import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {PostComponent} from '../post/post.component';
import { MapComponent } from '../map/map.component';

const routes: Routes = [
    { path: 'feed', component: PostComponent},
    { path: 'map', component: MapComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule { }