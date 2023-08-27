import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  cvUrl: any
  constructor(private profileService:ProfileService ){ }

  ngOnInit(): void {
      this.cvUrl = this.profileService.resumeurl;
  }
}
