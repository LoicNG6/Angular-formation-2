import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: "He's my best friend since a long time !",
        createdDate: new Date(),
        snaps: 100,
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        snapMessage: 'Oh, Snap!',
      },
      {
        title: 'to pimp a butterfly',
        description: 'Second album of K.',
        createdDate: new Date(),
        snaps: 400,
        imageUrl:
          'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/11/1426099817173/f1efb3f4-9a6d-4f78-8ca8-594ab646d198-bestSizeAvailable.jpeg?width=620&dpr=2&s=none',
        snapMessage: 'Oh, Snap!',
        location: 'Nanterre',
      },
      {
        title: 'good kid mad city',
        description: 'First album of K. in aftermath !',
        createdDate: new Date(),
        snaps: 0,
        imageUrl:
          'https://d29mtkonxnc5fw.cloudfront.net/images/jc-qk7qPGAkju46nJir59w_cover.jpg',
        snapMessage: 'Oh, Snap!',
      },
    ];
  }
}
