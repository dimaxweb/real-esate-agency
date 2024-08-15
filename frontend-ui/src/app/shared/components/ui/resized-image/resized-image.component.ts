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
  @Input() ngStyle:any
  @Input() alt: string;
  @Input() propertyId: string | undefined

  public src:string
  ngOnInit  () {
    this.src = 'api/resize?width=' + this.width + '&height=' + this.height + '&imagePath=' + this.path + '&propertyId=' +"1";
  }
}
