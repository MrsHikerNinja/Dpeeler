import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BioComponent } from "./bio/bio.component";
import { ContactComponent } from "./contact/contact.component";
import { HomebodyComponent } from "./homebody/homebody.component";
import { Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  { path: "homebody", component: HomebodyComponent },
  { path: "contact", component: ContactComponent },
  { path: "bio", component: BioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BioComponent,
    ContactComponent,
    HomebodyComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [NavbarComponent, AppComponent]
})
export class AppModule {}
