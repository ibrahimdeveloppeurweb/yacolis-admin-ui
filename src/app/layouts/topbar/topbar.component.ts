import { Component, Output, EventEmitter, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { EventService } from 'src/app/services/event.service';
// import { LanguageService } from 'src/app/services/language.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {
  DATA_PRELOADER,
  LAYOUT_MODE,
  LAYOUT_POSITION,
  LAYOUT_THEME,
  LAYOUT_VERTICAL,
  LAYOUT_WIDTH,
  SIDEBAR_COLOR,
  SIDEBAR_IMAGE,
  SIDEBAR_SIZE,
  SIDEBAR_VIEW,
  TOPBAR,
} from '../layout.model';
import { AuthService } from '@services/auth.service';
import { User } from '@model/user';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  country: any;
  selectedItem!: any;
  user!: User
  layout: string | undefined;
  theme: string | undefined;
  mode: string | undefined;
  width: string | undefined;
  position: string | undefined;
  topbar: string | undefined;
  size: string | undefined;
  sidebarView: string | undefined;
  sidebar: string | undefined;
  preLoader: string | undefined;
  attribute: any;
  sidebarImage: any;
  sidebarVisibility: any;
  
  flagvalue: any;
  valueset: any;
  countryName: any;
  cookieValue: any;
  userData: any;
  cartData: any;

  element: any;

  total: any;
  subtotal: any = 0;
  totalsum: any;
  taxRate: any = 0.125;
  shippingRate: any = '65.00';
  discountRate: any = 0.15;
  discount: any;
  tax: any;

  @Output() mobileMenuButtonClicked = new EventEmitter();
  @ViewChild('removeNotificationModal', { static: false }) removeNotificationModal?: ModalDirective;
  @ViewChild('removeCartModal', { static: false }) removeCartModal?: ModalDirective;
  deleteid: any;

  constructor(@Inject(DOCUMENT) private document: any,
    private authService: AuthService,
    private router: Router,
    public _cookiesService: CookieService,    
  ) { 
    this.user = this.authService.getUser()
      // console.log("this.user", this.user.first_name)
  }
  
  ngOnInit(): void {
    this.element = document.documentElement;

    
    this.layout = LAYOUT_VERTICAL;
    this.theme = LAYOUT_THEME;
    this.mode = LAYOUT_MODE;
    this.width = LAYOUT_WIDTH;
    this.position = LAYOUT_POSITION;
    this.topbar = TOPBAR;
    this.size = SIDEBAR_SIZE;
    this.sidebarView = SIDEBAR_VIEW;
    this.sidebar = SIDEBAR_COLOR;
    this.sidebarImage = SIDEBAR_IMAGE;
    this.preLoader = DATA_PRELOADER;


    document.documentElement.setAttribute('data-bs-theme', this.mode)
    document.documentElement.setAttribute('data-sidebar', this.sidebar);
    document.documentElement.setAttribute('data-topbar', this.topbar);


    // Cookies wise Language set
    // this.cookieValue = this._cookiesService.get('lang');
    // const val = this.listLang.filter(x => x.lang === this.cookieValue);
    // this.countryName = val.map(element => element.text);
    // if (val.length === 0) {
    //   if (this.flagvalue === undefined) { this.valueset = 'assets/images/flags/us.svg'; }
    //   this.countryName = 'English'
    // } else {
    //   this.flagvalue = val.map(element => element.flag);
    // }
  }

  windowScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      const backToTopElement = document.getElementById('back-to-top');
      if (backToTopElement) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          backToTopElement.style.display = "block";
        } else {
          backToTopElement.style.display = "none";
        }
      }
      document.getElementById('page-topbar')?.classList.add('topbar-shadow')
    } else {    
      const backToTopElement = document.getElementById('back-to-top');
      if (backToTopElement) {       
        backToTopElement.style.display = "block";
      } 
      document.getElementById('page-topbar')?.classList.remove('topbar-shadow')
    }
  }

  // Increment Decrement Quantity
  qty: number = 0;
  increment(qty: any, i: any, id: any) {
    this.subtotal = 0;
    if (id == '0' && qty > 1) {
      qty--;
      this.cartData[i].qty = qty
      this.cartData[i].total = (this.cartData[i].qty * this.cartData[i].price).toFixed(2)
    }
    if (id == '1') {
      qty++;
      this.cartData[i].qty = qty
      this.cartData[i].total = (this.cartData[i].qty * this.cartData[i].price).toFixed(2)
    }

    this.cartData.map((x: any) => {
      this.subtotal += parseFloat(x['total'])
    })

    this.subtotal = this.subtotal.toFixed(2)
    this.discount = (this.subtotal * this.discountRate).toFixed(2)
    this.tax = (this.subtotal * this.taxRate).toFixed(2);
    this.totalsum = (parseFloat(this.subtotal) + parseFloat(this.tax) + parseFloat(this.shippingRate) - parseFloat(this.discount)).toFixed(2)
  }

  removeCart(id: any) {
    this.removeCartModal?.show()
    this.deleteid = id;
  }

  confirmDelete() {
    this.removeCartModal?.hide()

    this.subtotal -= this.cartData[this.deleteid].total
    this.subtotal = this.subtotal.toFixed(2)
    this.discount = (this.subtotal * this.discountRate).toFixed(2)
    this.tax = (this.subtotal * this.taxRate).toFixed(2);
    this.totalsum = (parseFloat(this.subtotal) + parseFloat(this.tax) + parseFloat(this.shippingRate) - parseFloat(this.discount)).toFixed(2)
    this.cartData.splice(this.deleteid, 1)
  }

   /**
 * Topbar Light-Dark Mode Change
 */
   changeMode(mode: string) {
    this.mode = mode;
    document.documentElement.setAttribute('data-bs-theme', mode)
    document.documentElement.setAttribute('data-sidebar', mode);
    document.documentElement.setAttribute('data-topbar', mode);
   }
  
  /***
   * Language Listing
   */
  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.svg', lang: 'en' },
    { text: 'Española', flag: 'assets/images/flags/spain.svg', lang: 'sp' },
    { text: 'Deutsche', flag: 'assets/images/flags/germany.svg', lang: 'gr' },
    { text: 'Italiana', flag: 'assets/images/flags/italy.svg', lang: 'it' },
    { text: 'русский', flag: 'assets/images/flags/russia.svg', lang: 'ru' },
    { text: '中国人', flag: 'assets/images/flags/china.svg', lang: 'ch' },
    { text: 'français', flag: 'assets/images/flags/french.svg', lang: 'fr' },
    { text: 'Arabic', flag: 'assets/images/flags/ae.svg', lang: 'ar' },
  ];

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    document.querySelector('.hamburger-icon')?.classList.toggle('open')
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

   /**
   * Fullscreen method
   */
   fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  // Search Topbar
  Search() {
    var searchOptions = document.getElementById("search-close-options") as HTMLAreaElement;
    var dropdown = document.getElementById("search-dropdown") as HTMLAreaElement;
    var input: any, filter: any, ul: any, li: any, a: any | undefined, i: any, txtValue: any;
    input = document.getElementById("search-options") as HTMLAreaElement;
    filter = input.value.toUpperCase();
    var inputLength = filter.length;

    if (inputLength > 0) {
      dropdown.classList.add("show");
      searchOptions.classList.remove("d-none");
      var inputVal = input.value.toUpperCase();
      var notifyItem = document.getElementsByClassName("notify-item");

      Array.from(notifyItem).forEach(function (element: any) {
        var notifiTxt = ''
        if (element.querySelector("h6")) {
          var spantext = element.getElementsByTagName("span")[0].innerText.toLowerCase()
          var name = element.querySelector("h6").innerText.toLowerCase()
          if (name.includes(inputVal)) {
            notifiTxt = name
          } else {
            notifiTxt = spantext
          }
        } else if (element.getElementsByTagName("span")) {
          notifiTxt = element.getElementsByTagName("span")[0].innerText.toLowerCase()
        }
        if (notifiTxt)
          element.style.display = notifiTxt.includes(inputVal) ? "block" : "none";

      });
    } else {
      dropdown.classList.remove("show");
      searchOptions.classList.add("d-none");
    }
  }

 
  /**
   * Logout the user
   */
  logout() {
    this.authService.logout();   
  }
}
