import {Component, computed, signal, Signal, WritableSignal} from '@angular/core';
import {DateTime, Info, Interval} from "luxon";
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-week-calendar-view',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './week-calendar-view.component.html',
    styleUrl: './week-calendar-view.component.css'
})
export class WeekCalendarViewComponent {
    today: Signal<DateTime> = signal(DateTime.local());
    firstDayOfActiveWeek: WritableSignal<DateTime> = signal(this.today().startOf("week"))
    activeDay: WritableSignal<DateTime | null> = signal(null);
    weekDays: Signal<string[]> = signal(Info.weekdays('short'));
    hoursOfDay: Signal<number[]> = signal(Array.from({length: 24}, (_, i) => i));


    daysOfWeek: Signal<DateTime[]> = computed(() => {
        return Interval.fromDateTimes(
            this.firstDayOfActiveWeek().startOf('week'),
            this.firstDayOfActiveWeek().endOf('week')
        )
            .splitBy({day: 1})
            .map((d) => {
                if (d.start === null) {
                    throw new Error('Wrong dates');
                }
                return d.start;
            });
    });


    DATE_MED = DateTime.DATE_MED;


    goToPreviousWeek(): void {
        this.firstDayOfActiveWeek.set(
            this.firstDayOfActiveWeek().minus({week: 1}),
        );
    }

    goToNextWeek(): void {
        this.firstDayOfActiveWeek.set(
            this.firstDayOfActiveWeek().plus({week: 1}),
        );
    }


    goToToday(): void {
        this.firstDayOfActiveWeek.set(this.today().startOf('week'));
    }
}
