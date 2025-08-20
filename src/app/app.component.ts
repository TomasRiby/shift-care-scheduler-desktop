import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {WorkerService} from "./worker/worker.service";
import {WorkerComponent} from "./worker/worker.component";
import {MonthCalendarViewComponent} from "./month-calendar-view/month-calendar-view.component";
import {WeekCalendarViewComponent} from "./week-calendar-view/week-calendar-view.component";
import {TopBarNavigationComponent} from "./top-bar-navegation/top-bar-navigation.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule, WorkerComponent, MonthCalendarViewComponent, WeekCalendarViewComponent, RouterLink, TopBarNavigationComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {


    constructor() {
    }


}
