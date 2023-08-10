import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: String;
  description!: String;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: String;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = "He's my best friend since a long time !";
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }
}
