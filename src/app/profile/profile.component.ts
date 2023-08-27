import { Component, OnInit } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone : true,
  imports : [AboutComponent, HeaderComponent, FooterComponent, IntroComponent
  , EducationComponent, ExperienceComponent, ProjectComponent, BlogComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(){

  }

  ngOnInit() {

  }
}
