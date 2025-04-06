import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class AppComponent {
  title = 'career-connect';
  trendingSkills = [
    { name: 'Electrical Wiring', demand: 'High', duration: '2 weeks' },
    { name: 'Plumbing Basics', demand: 'Medium', duration: '3 weeks' },
    { name: 'Carpentry Fundamentals', demand: 'High', duration: '4 weeks' }
  ];

  availableJobs = [
    { title: 'Construction Helper', location: 'Rural Maharashtra', salary: '₹12k-15k' },
    { title: 'Textile Worker', location: 'Gujarat', salary: '₹10k-13k' },
    { title: 'Handicraft Artisan', location: 'Rajasthan', salary: '₹15k-18k' }
  ];
}
