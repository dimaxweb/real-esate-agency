import { Component } from '@angular/core';
import { latestBlog } from '../../../../shared/interface/property';
import { MockPropertyService } from '../../../../shared/services/mock-property.service';

@Component({
  selector: 'app-blog-page-left-sidebar',
  templateUrl: './blog-page-left-sidebar.component.html',
  styleUrls: ['./blog-page-left-sidebar.component.scss'],
})
export class BlogPageLeftSidebarComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-pages/submit-property.jpg';
  public title = 'Blog';
  public parent = 'Home';
  public child = 'Blog';

  public latestBlogData: latestBlog[] = [];

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor(private propertyService: MockPropertyService) {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    this.propertyService.latestBlogData().subscribe((response) => {
      this.latestBlogData = response.latestBlog.filter((item) => item.type == 'corporate');
    });
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}

