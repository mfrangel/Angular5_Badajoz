import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';

// cada ruta se identifica por su path y su componente
// en este ejemplo inicio, catalogo, autores, enlaces about

const routes: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule'  },
    { path: 'about', loadChildren: './about/about.module#AboutModule'  },
    { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule'  },
    { path: 'libros', loadChildren: './libros/libros.module#LibrosModule'  },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
 ];

export const appRouting = RouterModule.forRoot(routes);
