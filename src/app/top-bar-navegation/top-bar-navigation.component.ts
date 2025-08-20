import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

import {Location} from '@angular/common';


@Component({
    selector: 'app-top-bar-navigation',
    standalone: true,
    imports: [],
    templateUrl: './top-bar-navigation.component.html',
    styleUrl: './top-bar-navigation.component.css'
})
export class TopBarNavigationComponent {
    private router = inject(Router);
    private location = inject(Location);

    canGoBack = false;
    canGoForward = false;

    constructor() {
        // Track navigation to update canGoBack/canGoForward if you want
        this.router.events.subscribe(() => {
            // crude check using history length — refine if you need accuracy
            this.canGoBack = window.history.length > 1;
            // no direct history API for forward availability; you can track your own stack if required
        });

        // keyboard shortcuts
        window.addEventListener('keydown', (e) => {
            if ((e.altKey && e.key === 'ArrowLeft') || (e.ctrlKey && e.key === '[')) {
                this.goBack();
            } else if ((e.altKey && e.key === 'ArrowRight') || (e.ctrlKey && e.key === ']')) {
                this.goForward();
            }
        });
    }

    goBack() {
        this.location.back();
    }

    goForward() {
        this.location.forward();
    }
}
