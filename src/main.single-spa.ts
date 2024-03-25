import { NgZone } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Router, NavigationStart } from '@angular/router';

import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import {
  singleSpaAngular,
  getSingleSpaExtraProviders,
} from 'single-spa-angular';

import {
  SingleSpaProps,
  singleSpaPropsSubject,
} from './single-spa/single-spa-props';
import { AppComponent } from './app/app.component';

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps: SingleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    console.log(singleSpaProps);
    return bootstrapApplication(AppComponent, {
      providers: [
        ...getSingleSpaExtraProviders(),
        { provide: APP_BASE_HREF, useValue: singleSpaProps.basepath || '/' },
        provideRouter(routes),
      ],
    });
  },
  template: '<app-root />',
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
