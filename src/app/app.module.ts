import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data/data.service';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ErrorStateMatcher,
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatNativeDateModule, MatSelectModule,
  MatSnackBarModule, ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { PopoverComponent } from './components/popover/popover.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CustomValidatorService } from './services/custom-validator/custom-validator.service';
import { IMaskModule } from 'angular-imask';
import { UserComponent } from './components/user/user.component';
import {StorageService} from "./services/storage/storage.service";




const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopoverComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    IMaskModule
  ],
  entryComponents: [ PopoverComponent],
  providers: [DataService, StorageService, MatNativeDateModule , CustomValidatorService, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
