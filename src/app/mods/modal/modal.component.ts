import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {

  constructor(private el: ElementRef) {
  // console.log(this.el.nativeElement);
   }

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }


  ngOnDestroy() {
    this.el.nativeElement.remove();
  }
}
