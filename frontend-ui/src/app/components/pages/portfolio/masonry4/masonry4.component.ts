import { Component } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { gridImage } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-masonry4',
  templateUrl: './masonry4.component.html',
  styleUrls: ['./masonry4.component.scss'],
})
export class Masonry4Component {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-pages/submit-property.jpg';
  public title = 'Portfolio';
  public parent = 'Home';
  public child = 'Portfolio';
  public activeTab: string = 'all';

  public gridImagesData: gridImage[];
  public imagesData: gridImage[];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.imagesData = response.gridImages.filter(
        (data: { fileType: string }) => data.fileType == 'image'
      );

      this.gridImagesData = response.gridImages.filter(
        (data: { fileType: string }) => data.fileType == 'image'
      );
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }

  receiveChildData(data: gridImage[]) {
    this.imagesData = data;
  }

  public masonryOptions: NgxMasonryOptions = {
    gutter: 30,
  };
}
