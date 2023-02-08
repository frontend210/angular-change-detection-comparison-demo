import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DemoCdDefaultComponent } from "./demo-cd-default.component";
import { DemoCdOnPushComponent } from "./demo-cd-on-push.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoCdDefaultComponent,
    DemoCdOnPushComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
