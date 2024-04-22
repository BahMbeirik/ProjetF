import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

const Routing: Routes = [

    {
      path:'',
      component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
      },

    {
        path: '**',
        redirectTo: 'error/404',
    },

]

export { Routing };