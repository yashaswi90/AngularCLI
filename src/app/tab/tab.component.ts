/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
  @Input('index') index: number;
  ngOnInit() {
    if( this.index == 0 ){
       this.active = true;
    }
}
}
