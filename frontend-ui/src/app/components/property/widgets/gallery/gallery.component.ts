import { Component, Input } from '@angular/core';
import { detailsProperty } from '../../../../shared/interface/property';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {

  @Input() galleryImagesData: detailsProperty[];
  @Input() requestForm: boolean = false;
  @Input () property: detailsProperty;

  public selectedImage: string | undefined;
  private currentSelectedImageElement: any;

  public ngAfterViewInit() {
    this.selectedImage = this.galleryImagesData[0].img;
    this.currentSelectedImageElement = document.querySelector('.owl-item.active.center');
  }
  public Options = {
    items: 1,
    loop: true,
    nav: false,
    dots: false
  };

  public thumbnailCarouselOptions = {
    items: 5,
    margin: 10,
    center: true,
    loop: true,
    nav: false,
    dots: false,
  };

  changeImage(image: string,event:any) {
    if (this.currentSelectedImageElement) {
      this.currentSelectedImageElement.classList.remove('active');
      this.currentSelectedImageElement.classList.remove('center');
    }
    this.selectedImage = image;
    this.currentSelectedImageElement = event.srcElement.closest('.owl-item');
    this.currentSelectedImageElement.classList.add('active');
    this.currentSelectedImageElement.classList.add('center');
   
  }
}
