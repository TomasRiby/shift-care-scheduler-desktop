import {Component, computed, signal, Signal, WritableSignal} from '@angular/core';
import {DateTime, Info, Interval} from "luxon";
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-month-calendar-view',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './month-calendar-view.component.html',
    styleUrl: './month-calendar-view.component.css'
})
export class MonthCalendarViewComponent {
    today: Signal<DateTime> = signal(DateTime.local());
    firstDayOfActiveMonth: WritableSignal<DateTime> = signal(this.today().startOf('month'));
    activeDay: WritableSignal<DateTime | null> = signal(null);
    weekDays: Signal<string[]> = signal(Info.weekdays('short'));

    daysOfMonth: Signal<DateTime[]> = computed(() => {
        return Interval.fromDateTimes(
            this.firstDayOfActiveMonth().startOf('week'),
            this.firstDayOfActiveMonth().endOf('month').endOf('week'),
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

    goToPreviousMonth(): void {
        this.firstDayOfActiveMonth.set(
            this.firstDayOfActiveMonth().minus({month: 1}),
        );
    }

    goToNextMonth(): void {
        this.firstDayOfActiveMonth.set(
            this.firstDayOfActiveMonth().plus({month: 1}),
        );
    }

    goToToday(): void {
        this.firstDayOfActiveMonth.set(this.today().startOf('month'));
    }
}
