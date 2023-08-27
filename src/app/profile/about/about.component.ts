import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about1 : any
  about2 : any
  about3 : any

  constructor(private profileService: ProfileService ) {}

  ngOnInit() {
      this.about1 = this.profileService.about1;
      this.about2 = this.profileService.about2;
      this.about3 = this.profileService.about3;
  }

}
