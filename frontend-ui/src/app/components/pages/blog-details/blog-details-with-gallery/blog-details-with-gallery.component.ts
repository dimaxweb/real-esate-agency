import { Component } from '@angular/core';
import { blogDetails, comments } from '../../../../shared/interface/property';
import { PropertyService } from '../../../../shared/services/property.service';

@Component({
  selector: 'app-blog-details-with-gallery',
  templateUrl: './blog-details-with-gallery.component.html',
  styleUrls: ['./blog-details-with-gallery.component.scss'],
})
export class BlogDetailsWithGalleryComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-pages/submit-property.jpg';
  public title = 'Blog';
  public parent = 'Home';
  public child = 'Blog';

  public blogDetails: blogDetails[];
  public commentsData: comments[];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.blogDetailsData().subscribe((response) => {
      this.blogDetails = response.blogDetails;
      this.commentsData = response.commentsData;
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}
