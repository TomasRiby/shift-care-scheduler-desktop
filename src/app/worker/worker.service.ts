import {Injectable} from '@angular/core';
import {invoke} from "@tauri-apps/api/core";

@Injectable({
    providedIn: 'root'
})
export class WorkerService {

    constructor() {
    }

    create_worker(name: string, contact: string): void {
        invoke("create_worker", {name: name, contact: contact}).then(console.log)
        this.get_all_workers()
    }

    async get_all_workers() {
        try {
            const workers: { id: number; name: string; contact: string }[] =
                await invoke('get_all_workers');
            console.log(workers);
        } catch (e) {
            console.error('Error loading workers', e);
        }
    }

}
