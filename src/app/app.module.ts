import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from '@angular/cdk/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponentDialog } from './add-user/add-user.component';
import { ListComponent } from './list/list.component';
import { SearchPipePipe } from './common/search-pipe.pipe';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabsComponent } from './common/tabs/tabs.component';
import { TabComponent } from './common/tab/tab.component';
import { HomeComponent } from './home/home.component';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { addUserReducer } from './common/store/store.reducer';
import { storageMetaReducer } from './common/store/store.metaReducer';


const metaReducers: Array<MetaReducer<any, any>> = [storageMetaReducer];

@NgModule({
  declarations: [
    AppComponent,
    AppComponentDialog,
    ListComponent,
    SearchPipePipe,
    TabContainerComponent,
    TabsComponent,
    TabComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ user: addUserReducer }, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
