import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sources: any = ['ร้าน aฟ', 'ร้าน b', 'ร้าน c', 'ร้าน dส'];
  targets: any = [];
  isSearch: boolean = false;
  isSearch2: boolean = false;
  filter = true;
  selected: Array<any> = [];

  search() {
    this.isSearch = true;
  }

  search2() {
    this.isSearch2 = true;
  }

  moveNext() {
    let currentSources = this.sources;
    for (let i = 0; i < this.selected.length; i++) {
      let index = currentSources.indexOf(this.selected[i]);
      const item = currentSources.splice(index, 1).toString();
      if (item.length > 0 ) {
        this.targets.push(item.toString());
      }
    }
    this.sources = currentSources;
    this.selectedClear();
  }

  moveBack() {
    let currentSources = this.targets;
    for (let i = 0; i < this.selected.length; i++) {
      let index = currentSources.indexOf(this.selected[i]);
      const item = currentSources.splice(index, 1).toString();
      if (item.length > 0) {
        this.sources.push(item.toString());
      }
    }
    this.targets = currentSources;
    this.selectedClear();
  }

  selectedClear() {
    this.selected = [];
  }
}
