import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {WorkerService} from "./worker/worker.service";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    greetingMessage = "";

    workerService: WorkerService = inject(WorkerService);

    constructor() {
    }

    workerForm = new FormGroup({
        name: new FormControl(""),
        contact: new FormControl("")
    })


    onSubmit(){

        let name = this.workerForm.get("name")?.value
        let contact = this.workerForm.get("contact")?.value

        console.log(name, contact)

        if (name != null && contact!= null) {
            this.create_worker(name, contact)
        }
    }

    create_worker(name: string, contact: string) {
        this.workerService.create_worker(name,contact)
    }
}
