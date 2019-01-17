import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: object;

  constructor( private data: DataService) { }

  ngOnInit() {
   this.user = this.data.getUser();
  }

}
