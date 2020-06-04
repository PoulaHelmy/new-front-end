import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ConfirmDialogService } from '@@shared/pages/dialogs/confirm-dialog/confirm.service';
import { SnackbarService } from '@@shared/pages/snackbar/snackbar.service';
import { Item } from '@@shared/models/item';
import { ItemsService } from '@@core/services/items.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit, OnDestroy {
  items: Item[] = [];
  options = {
    title: 'Are Sure To Delete This Item',
    message: 'Please Take An Action { You Press Esc or Enter to the Action }',
    cancelText: 'Cancel',
    confirmText: 'Confirm',
  };
  constructor(
    private dialogService: ConfirmDialogService,
    private snackbarService: SnackbarService,
    private itemService: ItemsService,
    private router: Router
  ) {}
  ngOnInit() {
    this.itemService.getAllItems('items').subscribe((res) => {
      this.items = res['data'];
    });
    console.log(localStorage.getItem('access_token'));
  }
  deleteItem(id) {
    this.dialogService.open(this.options);
    this.dialogService.confirmed().subscribe((confirmed) => {
      if (confirmed) {
        this.itemService.deleteItem(id, 'items').subscribe(
          (res) => {
            this.snackbarService.show('Item Deleted Successfully', 'success');
            this.router.navigate(['/dashboard/items']);
          },
          (err) => {
            this.snackbarService.show(err['statusText'], 'danger');
          }
        );
      }
    });
    // this.apiserv.deleteCheck(id, value);
  }
  ngOnDestroy() {}
} //end of class
