import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss']
})
export class GreeterComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  stuff: object[];

  @Output()
  greeted: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onGreet() {
    this.greeted.emit('Event from do-greet WC!');
  }

}
