import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  onHandleSnap() {
    if (this.faceSnap.snapMessage == 'Oh, Snap!') {
      this.faceSnap.snaps++;
      this.faceSnap.snapMessage = 'Oups, un Snap!';
    } else {
      this.faceSnap.snaps--;
      this.faceSnap.snapMessage = 'Oh, Snap!';
    }
  }
}
