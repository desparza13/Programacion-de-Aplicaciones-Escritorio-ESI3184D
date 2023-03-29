import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { EducationComponent } from './components/education/education.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    BannerComponent,
    PersonalInfoComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillsComponent,
    ProjectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
