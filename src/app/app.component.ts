import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  static tube = ['ร้าน aฟ', 'ร้าน b', 'ร้าน c', 'ร้าน dส'];
  source: any = AppComponent.tube;
  target: any = [];
  isSearch: boolean = false;
  isSearch2: boolean = false;
  filter = true;

  message;

  compare(a: any, b: any) {
    const arr = AppComponent.tube;
    return arr.indexOf(a._id) - arr.indexOf(b._id);
  }

  showMessage(e: any) {
    this.message = { selectChange: e };
  }
  
  search() {
    this.isSearch = true;
  }

  search2() {
    this.isSearch2 = true;
  }
}
