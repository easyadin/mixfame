import { Component, NgZone } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private ngZone: NgZone) {
    console.log(this.options)
  }

  private animationItem: AnimationItem;

  options: AnimationOptions = {
    path: '../../assets/success-wink.json',
    autoplay: false,
    loop:false
  };

  animationCreated(animationItem: AnimationItem): void {
    this.ngZone.run(() => {
      this.animationItem = animationItem;
      this.animationItem.play();
      console.log(animationItem)
    })

  }

  error(event) {
    console.log(event)
  }

  styles: Partial<CSSStyleDeclaration> = {
    margin: '0 auto',
  };

}
