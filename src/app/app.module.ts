import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { AgGridModule } from '@ag-grid-community/angular';
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';


console.log("AgGridModule", AgGridModule);
ModuleRegistry.registerModules([ ClientSideRowModelModule ]);

@NgModule({
  imports: [BrowserModule, FormsModule, AgGridModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
