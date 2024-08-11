import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-resized-image',
  standalone: false,
  templateUrl: './resized-image.component.html',
  styleUrl: './resized-image.component.scss'
})

export class ResizedImageComponent {
  @Input() width: number;
  @Input() height: number;
  @Input() path: string;
  @Input() cssClass: string;
  @Input() alt: string;
  @Input() propertyId: string;

  public src:string
  constructor  () {
    this.src = '/resize?width=' + this.width + '&height=' + this.height + '&path=' + this.path + '&propertyId=' + this.propertyId;
  }
}
