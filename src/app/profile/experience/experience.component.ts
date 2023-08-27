import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../profile.service';
import { SplitPipe } from './split.pipe';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SplitPipe],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  expData : any
  constructor( private profileService: ProfileService){}

  ngOnInit(): void {
      this.expData = this.profileService.experienceDetails;
  }
}