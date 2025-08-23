import { Component } from '@angular/core';
import {MonthCalendarViewComponent} from "../month-calendar-view/month-calendar-view.component";
import {WeekCalendarViewComponent} from "../week-calendar-view/week-calendar-view.component";
import {RouterLink} from "@angular/router";
import {DayCalendarViewComponent} from "../day-calendar-view/day-calendar-view.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        MonthCalendarViewComponent,
        WeekCalendarViewComponent,
        RouterLink,
        DayCalendarViewComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
