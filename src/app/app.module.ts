import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,MatDialogModule, 
} from '@angular/material';

/*Components import */
import { AppComponent } from './app.component';
import * as components from './components/';

@NgModule({
  declarations: [
    AppComponent,components.MenuComponent, components.DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,MatDialogModule
  ],
  entryComponents: [components.DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
