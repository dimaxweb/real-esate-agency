import { Component, Input } from '@angular/core';
import { Gallery ,ImageItem,ImageSize ,ThumbnailsPosition} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { currency, featuredProperty } from '../../../../../shared/interface/property';
import { MockPropertyService } from '../../../../services/mock-property.service';

@Component({
  selector: 'app-featured-property-three',
  templateUrl: './featured-property-three.component.html',
  styleUrls: ['./featured-property-three.component.scss'],
})

export class FeaturedPropertyThreeComponent {

  @Input() featuredProperty: featuredProperty[];
  @Input() currency:currency;

  public Options = {
    loop: true,
    mouseDrag: false,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-arrow-up'></i>",
      "<i class='fa fa-arrow-down'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  constructor(public gallery: Gallery, public lightbox: Lightbox, public propertyService: MockPropertyService) {}

  openLightBox(url: string){
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open()
    lightboxRef.load([new ImageItem({src: url, thumb: url})])
  }
}
