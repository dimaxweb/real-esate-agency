import { Component } from '@angular/core';
import { Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { NgxMasonryOptions } from 'ngx-masonry';
import { creative3, gridImage } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-creative4',
  templateUrl: './creative4.component.html',
  styleUrls: ['./creative4.component.scss'],
})
export class Creative4Component {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-pages/submit-property.jpg';
  public title = 'Portfolio';
  public parent = 'Home';
  public child = 'Portfolio';

  public gridImagesData: gridImage[];
  public imagesData: creative3[];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  public masonryOptions: NgxMasonryOptions = {};


  constructor(
    private propertyService: MockPropertyService,
    public gallery: Gallery,
    public lightbox: Lightbox
  ) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.imagesData = response.creativePage3Data.filter(
        (data: { fileType: string }) => data.fileType == 'image'
      );

      this.gridImagesData = response.creativePage3Data.filter(
        (data: { fileType: string }) => data.fileType == 'image'
      );
    });

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  receiveChildData(data: any) {
    this.imagesData = data;
  }
}
