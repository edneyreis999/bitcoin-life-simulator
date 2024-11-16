import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';

export const routes: Routes = [
  { path: '', component: MainMenuComponent }, // Rota inicial
  { path: 'main-screen', component: MainScreenComponent }, // Tela principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
