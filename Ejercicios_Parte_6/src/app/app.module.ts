import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { TransformDatePipe } from './transform-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    TransformDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
