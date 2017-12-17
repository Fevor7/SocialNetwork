import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { GuestPageComponent } from './guest-page/guest-page.component';
import { RouterModule } from '@angular/router';
import { MessagePageComponent } from './message-page/message-page.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { FriendPageComponent } from './friend-page/friend-page.component';

const routes = [
  {path: '', component: InfoPageComponent},
  {path: 'message', component: MessagePageComponent},
  {path: 'group', component: GroupPageComponent},
  {path: 'guest', component: GuestPageComponent},
  {path: 'friend', component: FriendPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InfoPageComponent,
    UserPageComponent,
    GuestPageComponent,
    MessagePageComponent,
    GroupPageComponent,
    FriendPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
