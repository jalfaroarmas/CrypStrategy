import { Component, Input, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.scss']
})
export class ListSectionComponent implements OnInit {
  amounts: Array<any> = []
  @Input()
  coin: string | undefined;
  public config: PerfectScrollbarConfigInterface = {};
  constructor() { }

  ngOnInit(): void {
    
   
  }

}
