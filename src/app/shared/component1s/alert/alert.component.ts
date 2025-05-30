import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() type: string | undefined;
  @Input() dismiss: string | undefined;

  public dismissAlert(element:any) {
    element.parentElement.removeChild(element);
  }

  constructor() { }

  ngOnInit() {
  }

}
