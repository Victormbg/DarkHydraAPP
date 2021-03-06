import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tela-login",
    pathMatch: "full"
  },

  {
    path: "biblioteca",
    loadChildren: () =>
      import("./pages/biblioteca/home.module").then(m => m.HomePageModule)
  },
  {
    path: "conta",
    loadChildren: () =>
      import("./pages/conta/list.module").then(m => m.ListPageModule)
  },
  {
    path: "pagina-inicial",
    loadChildren:
      "./pages/pagina-inicial/pagina-inicial.module#PaginaInicialPageModule"
  },
  { path: "sobre", loadChildren: "./pages/sobre/sobre.module#SobrePageModule" },
  {
    path: "tela-login",
    loadChildren: "./pages/tela-login/tela-login.module#TelaLoginPageModule"
  },
  {
    path: "configuracoes",
    loadChildren:
      "./pages/configuracoes/configuracoes.module#ConfiguracoesPageModule"
  },
  {
    path: "politica",
    loadChildren: "./pages/politica/politica.module#PoliticaPageModule"
  },
  { path: "tabs", loadChildren: "./pages/tabs/tabs.module#TabsPageModule" },
  {
    path: "destaque",
    loadChildren: "./pages/destaque/destaque.module#DestaquePageModule"
  },
  {
    path: "pagina-jogo",
    loadChildren: "./pages/pagina-jogo/pagina-jogo.module#PaginaJogoPageModule"
  },
  {
    path: "pagina-jogo/:$key",
    loadChildren: "./pages/pagina-jogo/pagina-jogo.module#PaginaJogoPageModule"
  },
  {
    path: "perfil",
    loadChildren: "./pages/perfil/perfil.module#PerfilPageModule"
  },
  {
    path: "amigos",
    loadChildren: "./pages/amigos/amigos.module#AmigosPageModule"
  },
  {
    path: "pagina-amigos",
    loadChildren:
      "./pages/pagina-amigos/pagina-amigos.module#PaginaAmigosPageModule"
  },
  {
    path: "pagina-amigos/:idSeguido",
    loadChildren:
      "./pages/pagina-amigos/pagina-amigos.module#PaginaAmigosPageModule"
  },
  {
    path: "pagina-amigos/:idSeguidor",
    loadChildren:
      "./pages/pagina-amigos/pagina-amigos.module#PaginaAmigosPageModule"
  },
  {
    path: "faleconosco",
    loadChildren: "./pages/faleconosco/faleconosco.module#FaleconoscoPageModule"
  },
  {
    path: "comunidade",
    loadChildren: "./pages/comunidade/comunidade.module#ComunidadePageModule"
  },
  {
    path: "regras",
    loadChildren: "./pages/regras/regras.module#RegrasPageModule"
  },
  {
    path: "seguindo",
    loadChildren: "./pages/seguindo/seguindo.module#SeguindoPageModule"
  },
  {
    path: 'seguidores',
    loadChildren: './pages/seguidores/seguidores.module#SeguidoresPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
