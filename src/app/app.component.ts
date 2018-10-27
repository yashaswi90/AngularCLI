import { Component ,ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { TabsComponent } from './tab/tabs.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  done=false;
  public selectedValue=new Set<String>();
  // selectedValue = Array<{text: string}>();
  title = 'SampleApplication';
  rangeDetect = false;
  jumpDetect = false;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit () {
    this.dropdownList = [
      { item_id: 1, item_text: 'Range Detection' },
      { item_id: 2,item_text: 'Jump Detection' },
      { item_id: 3,item_text: 'Noise Detection' },
      { item_id: 4,item_text: 'Bias Detection' },
      { item_id: 5, item_text: 'Gaps Detection' }
    ];
    this.selectedItems = [
      // { item_text: 'Pune' },
      // { item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect (item:any) {
    if(item.item_text == 'Range Detection'){
      this.rangeDetect = true;
    }
    if(item.item_text == 'Jump Detection'){
      this.jumpDetect = true;
    }
    console.log(item);
    this.selectedValue.add(item.item_text);
    this.done=true;
  }

  onItemDeSelect (item: any){
    if(item.item_text == 'Range Detection'){
      this.rangeDetect = false;
    }
    if(item.item_text == 'Jump Detection'){
      this.jumpDetect = false;
    }
    console.log(item);
    this.done=false;
  }
  onSelectAll (items: any) {
    console.log(items);
  }
  
}
