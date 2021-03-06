import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "recipies",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./recipies/recipies.module").then(
            (m) => m.RecipiesPageModule
          ),
      },

      {
        path: ':id',
        loadChildren: () => import('./recipies/recipie-detail/recipie-detail.module').then( m => m.RecipieDetailPageModule)
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
