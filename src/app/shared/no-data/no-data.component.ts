import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent {
  @Input() title: string = ""
  
  constructor() { }

  ngOnInit(): void {
  }
}
