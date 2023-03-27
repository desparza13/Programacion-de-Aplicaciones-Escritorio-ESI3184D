import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import components
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

const routes: Routes = [
  { path: '', component: BannerComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'education', component: EducationComponent },
  { path: 'personal-information', component: PersonalInfoComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'work-experience', component: WorkExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
