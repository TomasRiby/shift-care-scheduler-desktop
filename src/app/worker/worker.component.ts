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
        this.create_worker(name, contact)
    }

    create_worker(name: string | null | undefined, contact: string | null | undefined) {
        if (name != null && contact != null) {
            this.workerService.create_worker(name, contact)
        } else {
            console.log("Worker not created. Name and contact can't be Null. Please try again");
        }
    }
}
