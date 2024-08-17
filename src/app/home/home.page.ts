import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageUrl: string | undefined;

  constructor() {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri, // Get the image as a file URI
      source: CameraSource.Camera, // Select the camera as the source
    });
 
    this.imageUrl = image.webPath; // Set the image URL for display
  }
 
}
