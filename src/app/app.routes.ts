import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {MonthCalendarViewComponent} from "./month-calendar-view/month-calendar-view.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {
        path: "month",
        component: MonthCalendarViewComponent
    }

];
