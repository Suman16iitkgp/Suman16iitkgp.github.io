import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogData : any
  constructor(private profileService: ProfileService ){
    this.blogData = profileService.blogData;
  }
}
