import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkboxlists',
  templateUrl: './checkboxlists.component.html',
  styleUrls: ['./checkboxlists.component.css']
})
export class CheckboxlistsComponent implements OnInit {
  @Input() name: string;
  @Input() list: any;
  @Input() hasAllCheckedText: boolean;
  @Output() changeCheckedData = new EventEmitter<any>();

  checkboxForm: FormGroup;
  allSelectDefaultText: String = 'Opphev alle';
  toggleSelected: boolean = true;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const controls = this.list.map(c => this.fb.control(c.checked));
    this.checkboxForm = this.fb.group({
      listArray: this.fb.array(controls)
    });
  }

  get checkboxLists(){
    return this.checkboxForm.get('listArray') as FormArray;
  }

  toggleSelection(e){
    this.allSelectDefaultText = e.checked ? 'Opphev alle' : 'Velg alle';

    const listArray = this.checkboxForm.value.listArray;
    listArray.fill(e.checked, 0);
    this.checkboxForm.patchValue({
      listArray: listArray
    });

    this.sendDataToComponent();
  }

  changeStatusItem(){
    const dt = this.checkboxLists.value.filter(d => !d);
    if (dt.length === 0) {
      this.toggleSelected = true;
      this.allSelectDefaultText = 'Opphev alle';
    } else {
      this.toggleSelected = false;
      this.allSelectDefaultText = 'Velg alle';
    }

    this.sendDataToComponent();
  }

  // Send data to parent compoenent
  sendDataToComponent(){
    const checkedValues = this.checkboxLists.value
      .map((d, i) => d ? this.list[i].value : null)
      .filter(d => d !== null)
    this.changeCheckedData.emit({name: this.name, values: checkedValues});
  }

}
