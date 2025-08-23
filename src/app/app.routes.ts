import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {MonthCalendarViewComponent} from "./month-calendar-view/month-calendar-view.component";
import {HomeComponent} from "./home/home.component";
import {DayCalendarViewComponent} from "./day-calendar-view/day-calendar-view.component";
import {WeekCalendarViewComponent} from "./week-calendar-view/week-calendar-view.component";
import {WorkerComponent} from "./worker/worker.component";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: "month", component: MonthCalendarViewComponent},
    {path: "week", component: WeekCalendarViewComponent},
    {path: "day", component: DayCalendarViewComponent},
    {path: "worker", component: WorkerComponent}

];
