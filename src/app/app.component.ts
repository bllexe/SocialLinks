
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const shareButtons = this.elementRef.nativeElement.querySelectorAll('.tile_share-button, .share_button');
    shareButtons.forEach((shareButton: any) => {
      this.renderer.listen(shareButton, 'click', (event) => this.copyText(event));
    });
  }

  copyText(event: Event) {
    event.preventDefault();
    const link = (event.target as HTMLElement).getAttribute('link')!;
    console.log(link);
    navigator.clipboard.writeText(link)
      .then(() => {
        console.log(link);

      })
      .catch((err) => {
        console.error(err);
      });
  }
}


