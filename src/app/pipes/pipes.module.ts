import { NgModule } from "@angular/core";
import { FiltroPipe } from "./filtro.pipe";
import { FiltroPerfilPipe } from "./filtro-perfil.pipe";

@NgModule({
  declarations: [FiltroPipe, FiltroPerfilPipe],
  exports: [FiltroPipe, FiltroPerfilPipe]
})
export class PipesModule {}
