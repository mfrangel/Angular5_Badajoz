import { LibrosComponent } from './libros/libros.component';
import { CursosComponent } from './cursos/cursos.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

// cada ruta se identifica por su path y su componente
// en este ejemplo inicio, catalogo, autores, enlaces about

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'libros', component: LibrosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
 ];

export const appRouting = RouterModule.forRoot(routes);
