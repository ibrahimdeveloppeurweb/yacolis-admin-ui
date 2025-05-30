import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@service/auth/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  password = 'password';
  slideIndex = 1;
  slideRow: any[] = [
    { position: 1, img: 2 },
    { position: 2, img: 3 },
    { position: 3, img: 5 }
  ]

  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;

  toast!: false;
    // set the current year
    year: number = new Date().getFullYear();

  constructor(
    private formBuild: FormBuilder,
    private auth: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    
    this.loginForm();
  }

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

  loginForm() {
    this.form = this.formBuild.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null,[Validators.required,Validators.minLength(4)]],
    });
  }
  
  onSubmit() {

    const credentials = {...this.form.value};
    this.loading = true;
    this.auth.login(credentials).subscribe(data => {
      this.loading = false;
      // if (data.code == 422) {
      //   return;
      // }
      this.document.location.reload();
    }, error => {
      this.loading = false;
    });
  }
  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }
  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }
  showSlides(n) {
    // let i;
    // let slides = document.getElementsByClassName("slide__auth") as HTMLCollectionOf<HTMLElement>;
    // let dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
    // if (n > slides.length) { this.slideIndex = 1 }
    // if (n < 1) { this.slideIndex = slides.length }
    // for (i = 0; i < slides.length; i++) {
    //   slides[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[this.slideIndex-1].style.display = "block";
    // dots[this.slideIndex-1].className += " active";
  }
  onTogglePassword() {
    this.password = this.password === 'password' ? 'text' : 'password';
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  get f() { return this.form.controls; }
}
