import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { BASE_PATH } from './common/variables';
import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app.routing';
import { LoginGuard } from './login/login.guard';
import { MessagePopupService } from 'systelab-components/widgets/modal/message-popup/message-popup.service';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';
import { SystelabLoginModule } from 'systelab-login';
import { LoginComponent } from './login/login.component';
import { EmptyBodyInterceptor } from './common/api/empty-body.interceptor';
import { GridContextMenuComponent } from 'systelab-components/widgets/grid/contextmenu/grid-context-menu.component';
import { GridHeaderContextMenuComponent } from 'systelab-components/widgets/grid/contextmenu/grid-header-context-menu.component';
import { AgGridModule } from 'ag-grid-angular';
import { DndModule } from 'ng2-dnd';

@NgModule({

	imports:         [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		SystelabTranslateModule.forRoot(),
		SystelabPreferencesModule.forRoot(),
		SystelabComponentsModule.forRoot(),
		DndModule.forRoot(),
		AgGridModule.withComponents([
			GridContextMenuComponent,
			GridHeaderContextMenuComponent
		]),
		SystelabLoginModule.forRoot(),
		AppRoutingModule
	],
	declarations:    [
		AppComponent,
		MainComponent,
		PageNotFoundComponent,
		LoginComponent
	],
	providers:       [
		{provide: BASE_PATH, useValue: environment.API_BASE_PATH},
		{provide: HTTP_INTERCEPTORS, useClass: EmptyBodyInterceptor, multi: true},
		LoginGuard,
		MessagePopupService,
		DialogService
	],
	entryComponents: [
	],
	bootstrap:       [AppComponent]
})
export class AppModule {
}
