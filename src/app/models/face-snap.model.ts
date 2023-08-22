export class FaceSnap {
  title!: String;
  description!: String;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: String;
  snapMessage!: String;
  location?: String;

  constructor(
    title: String,
    description: String,
    createdDate: Date,
    snaps: number,
    imageUrl: String,
    snapMessage: String,
    location?: String
  ) {
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.snaps = snaps;
    this.imageUrl = imageUrl;
    this.snapMessage = snapMessage;
    this.location = location;
  }
}
