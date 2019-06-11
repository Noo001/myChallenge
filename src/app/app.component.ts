import { Component } from '@angular/core';
import { ApiService } from './api.service';
//import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myChallenge';
  private JSON: Object = null;
  private information: Object = null;
  private filmName: string = null;
  private filmsArr = [];
  constructor(private api: ApiService) {
    //this.getJSON('gotham');
  }

  getJSON() {
    this.api.get(this.filmName).subscribe((data) => {
      data!=undefined ? this.JSON = data: this.JSON = null;
    });
  }
  
  add(){
    if (this.JSON && this.JSON['Title']) {
      this.filmsArr.push(this.JSON['Title']);
    }
  }

  del(i: number){
    this.filmsArr.splice(i, 1);
  }
  info(name: string){
    this.api.get(name).subscribe((data) => {
      this.information = data!=undefined ? data: null;
    });
  }

}
