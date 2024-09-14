import { Component,Input, ViewChild } from '@angular/core';

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
  @Input() customStyle:any
  @Input() alt: string;
  @ViewChild('imgrs') img: any;

  public src:string
  ngOnInit  () {
    this.src = this.path; 
  }
  ngAfterViewInit(){
    this.img.nativeElement.onload = () => {
      let img   =  this.img.nativeElement;
      let {clientWidth, clientHeight} = img.parentElement;
      console.log(clientWidth, clientHeight);
      if(clientWidth !== 0 || clientHeight !== 0){
        img.style.display = 'block';
        img.style.width = clientWidth? clientWidth + 'px': '100%'
        img.style.height = clientHeight? clientHeight + 'px': 'auto';
        this.src = `api/resize?width=${clientWidth}&height=${clientHeight}&imagePath=${this.path}`;
        img.src = this.src;
        //avoid loop
        this.img.nativeElement.onload = null;
      }
    }
  }
}
