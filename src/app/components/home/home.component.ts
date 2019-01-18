import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PopoverComponent } from '../popover/popover.component';
import { Router} from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';

export interface DialogData {
 type: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: object[];

  constructor(private dataService: DataService, public dialog: MatDialog, public snackBar: MatSnackBar,
              private router: Router, public storage: StorageService) {}

  addUser() {
    this.openPopover('add-user');
  }

  deleteUser(type, userId) {
    this.openPopover(type, userId);
  }

  goToUserComponent(user) {
    this.dataService.setUser(user);
    this.storage.setUsersInLocalStorage(this.users);
    this.router.navigate(['/user'], user._id);
  }


  openPopover(type, userId?) {
    console.log('type in popover', type);

    const dialogRef = this.dialog.open(PopoverComponent, {
      width: '750px',
      data: {type: type},
      panelClass: 'myapp-no-padding-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result === 'delete-user') {
          for (let i = 0; i < this.users.length; i++) {
            if (this.users[i]['_id'] === userId) {
              this.users.splice(i, 1);
              break;
            }
          }
        } else {
          this.users.push(result);
        }
        this.snackBar.open(result === 'delete-user' ? 'User was deleted' : 'User was added', 'Done',{
          duration: 2000
        });
      }
    });
  }
  ngOnInit() {
    const usersFromStorage = this.storage.getUsersFromLocalStorage();
    if (usersFromStorage) {
      this.users = usersFromStorage;
      return;
    }
    this.users = this.dataService.getUsers();
  }
}
