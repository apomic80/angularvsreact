import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-devday',
    templateUrl: 'devday.component.html'
})

export class DevDayComponent implements OnInit {

    @Output()
    onSelected= new EventEmitter();

    @Input()
    city: string;

    @Input()
    selected: boolean;

    constructor() { }

    ngOnInit() { }

    select() {
        this.onSelected.emit();
    }
}
