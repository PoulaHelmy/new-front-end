import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { AuthService } from 'app/@auth/services/auth.service';
import { Router } from '@angular/router';
import { SnackbarService } from '@@shared/pages/snackbar/snackbar.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';

import { ItemsService } from '@@core/services/items.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  @Input() themeColor = '';

  isDarkTheme: Observable<boolean>;

  themeClass: string = 'findme-theme';
  logOutLoading = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  //-----------------------------------------------------------
  myControl = new FormControl();
  filteredOptions: Observable<any>;
  //-----------------------------------------------------------
  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private snackbar: SnackbarService,
    private overlayContainer: OverlayContainer,
    private itemServ: ItemsService
  ) {}

  ngOnInit(): void {
    // remove old theme class and add new theme class
    // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
    const overlayContainerClasses = this.overlayContainer.getContainerElement()
      .classList;
    const themeClassesToRemove = Array.from(
      overlayContainerClasses
    ).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add('my-theme');
    //////////////////////////////////////////////////////////
    this.myControl.valueChanges.subscribe((res) => {
      console.log('res of input : ', res);

      if (res !== '' && res !== null && res !== ' ') {
        this.filteredOptions = this.itemServ.getFilters(
          res !== '' ? res : 'nosearch'
        );
        console.log(' this.filteredOptions ', this.filteredOptions);
      }
    });

    //////////////////////////////////////////////////////////
  }
  // toggleDarkTheme(checked: boolean) {
  //   this.themeService.setDarkTheme(checked);
  // }
  changrTheme(value: string) {
    this.themeClass = value;
  }
  logout() {
    if (localStorage.getItem('isAuth') == 'false') {
      this.snackbar.show(
        '   Unauthorized Request You Not Logged in yet   ',
        'danger'
      );
    } else {
      this.authService
        .logout()
        .toPromise()
        .then((res) => {
          localStorage.removeItem('access_token');
          this.authService.setIsAuthenticated(false);
          localStorage.setItem('isAuth', 'false');
          this.snackbar.show('Logged Out Successfully', 'success');
          this.router.navigate(['/home']);
        })
        .catch((err) => {
          this.snackbar.show(err['error']['message'], 'danger');
        })
        .finally(() => {});
    }
  }
} //end of class
