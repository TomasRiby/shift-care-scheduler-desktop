import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {WorkerService} from "./worker.service";

@Component({
    selector: 'app-worker',
    standalone: true,
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './worker.component.html',
    styleUrl: './worker.component.css'
})
export class WorkerComponent {
    workerService: WorkerService = inject(WorkerService);

    constructor() {
    }

    workerForm = new FormGroup({
        name: new FormControl(""),
        contact: new FormControl("")
    })


    onSubmit() {

        let name = this.workerForm.get("name")?.value
        let contact = this.workerForm.get("contact")?.value

        console.log(name, contact)

        if (name != null && contact != null) {
            this.create_worker(name, contact)
        }
    }

    create_worker(name: string, contact: string) {
        this.workerService.create_worker(name, contact)
    }
}
