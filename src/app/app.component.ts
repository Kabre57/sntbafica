import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import lottie from 'lottie-web';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
})
export class AppComponent implements OnInit {
  location: any;
  routerSubscription: any;
  reloading = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.recallJsFuntions();
    this.loadScript('assets/js/jquery-3.3.1.min.js');
    this.loadScript('assets/js/theme-change.js');
    this.loadScript('assets/js/jquery-2.1.4.min.js');
    this.loadScript('assets/js/jquery.chocolat.js');
    this.loadScript('assets/js/jquery.waypoints.min.js');
    this.loadScript('assets/js/jquery.countup.js');
    this.loadScript('assets/js/owl.carousel.js');
    this.loadScript('assets/js/jquery.magnific-popup.min.js');
    this.loadScript('assets/js/modernizr.custom.js');
    this.loadScript('assets/js/classie.js');
    this.loadScript('assets/js/demo1.js');
    this.loadScript('assets/js/bootstrap.min.js');
    this.loadAnimation();
    this.loadCustomScripts();
  }

  public loadScript(url: string) {
    const body = document.getElementsByTagName('body')[0];
    const script = document.createElement('script');
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  loadAnimation() {
    const animationContainer = document.getElementById('animationContainer');
    if (animationContainer) {
      lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animation.json'
      });
    }
  }

  recallJsFuntions() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) { }
    });
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe((event) => {
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        //    window.scrollTo(0, 0);
      });
  }

  loadCustomScripts() {
    // Code JavaScript personnalisé ici
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        const movetopElement = document.getElementById('movetop');
        if (movetopElement) {
          movetopElement.style.display = 'block';
        }
      } else {
        const movetopElement = document.getElementById('movetop');
        if (movetopElement) {
          movetopElement.style.display = 'none';
        }
      }
    }
    // Ajoutez ici les autres scripts personnalisés que vous souhaitez exécuter
    window.addEventListener('scroll', scrollFunction);
  }
}