import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";


@Component({
    selector: 'app-top-bar-navigation',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './top-bar-navigation.component.html',
    styleUrl: './top-bar-navigation.component.css'
})
export class TopBarNavigationComponent {
    private router = inject(Router);

    canGoBack = true;
    canGoForward = true;

    constructor() {
    }

    goBack() {
        window.history.back();
    }

    goForward() {
        window.history.forward();
    }
}
