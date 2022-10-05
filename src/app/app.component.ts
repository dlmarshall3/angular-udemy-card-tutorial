import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Kaiju!!!',
      imageUrl: 'assets/garamon.png',
      username: '@ichiro725',
      content: 'Saw this strange monster during my hike today. I think he had rabies? #classicFilter'
    },
    {
      title: 'Aliens!!!',
      imageUrl: 'assets/aliens.jpg',
      username: '@tru3_b3li3v3r',
      content: 'Cannot believe aliens are eating in the public like this. I have been ridiculed for years, and now this?!'
    },
    {
      title: 'Eye for detail.',
      imageUrl: 'assets/laundry.png',
      username: '@mons_photos',
      content: 'I still am surprised this shot turned out the way it did.'
    }
  ]
}
