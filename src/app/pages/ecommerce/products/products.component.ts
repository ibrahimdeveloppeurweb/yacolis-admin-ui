import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';

// Data Get
import { productModel } from './products.model';
import { ProductService } from './products.service';
import { NgbdProductsSortableHeader, productSortEvent } from './products-sortable.directive';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { productList } from './data';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService, DecimalPipe]
})

// Product Component
export class ProductsComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  productForm!: UntypedFormGroup;
  submitted = false;
  products!: any;
  masterSelected!: boolean;

  // Table data
  productList!: Observable<productModel[]>;
  total: Observable<number>;

  files: File[] = [];

  @ViewChildren(NgbdProductsSortableHeader) headers!: QueryList<NgbdProductsSortableHeader>;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  @ViewChild('deleteRecordModal', { static: false }) deleteRecordModal?: ModalDirective;
  deleteID: any;
  content: any;

  constructor(public service: ProductService, private formBuilder: UntypedFormBuilder) {
    this.productList = service.countries$;
    this.total = service.total$;
  }


  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Ecommerce' },
      { label: 'Products', active: true }
    ];

    // Fetch Data
    setTimeout(() => {
      this.productList.subscribe(x => {
        this.products = Object.assign([], x);
        this.content = this.products
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1000)

    /**
     * Form Validation
     */
    this.productForm = this.formBuilder.group({
      id: "#VZ2101",
      // _id: "#1",
      _id: [''],
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      price: ['', [Validators.required]],
      img: ['', [Validators.required]]
    });
  }

  public items: string[] = ['Adidas', 'Boat', 'Puma', 'Realme'];

  // Sort Data
  onSort({ column, direction }: productSortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.productsortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }


  // File Upload
  imageURL: any;
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    let file: File = event.addedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
      setTimeout(() => {
        // this.profile.push(this.imageURL)
      }, 100);
    }
    reader.readAsDataURL(file)
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  defaultPreviews: Array<any> =[{name: 'image1.jpg', size: 1024, type: 'image/jpeg', previewUrl: 'assets/images/products/img-1.png'}];

  // Edit Data
  editList(id: any) {
    this.showModal?.show()
    var modaltitle = document.querySelector('.modal-title') as HTMLAreaElement
    modaltitle.innerHTML = 'Edit Product'
    var modalbtn = document.getElementById('add-btn') as HTMLAreaElement
    modalbtn.innerHTML = 'Update'

    var editData = this.products[id]

    // var img_data = document.getElementById('contact-img') as HTMLImageElement;
    // img_data.src = editData.img
    // this.imageURL = editData.img

    // this.defaultPreviews = [{name: 'image1.jpg', size: 1024, type: 'image/jpeg', previewUrl: 'assets/images/products/img-1.png'}]
    this.productForm.controls['_id'].setValue(editData.id);
    this.productForm.controls['title'].setValue(editData.title);
    this.productForm.controls['category'].setValue(editData.category);
    this.productForm.controls['stock'].setValue(editData.stock);
    this.productForm.controls['price'].setValue(editData.price);
    this.productForm.controls['img'].setValue(editData.imageURL);

  }



  /**
  * Save product
  */
  saveProduct() {
    if (this.productForm.valid) {
      if (this.productForm.get('_id')?.value) {
        this.service.products = productList.map((order: { id: any; }) => order.id === this.productForm.get('id')?.value ? { ...order, ...this.productForm.value } : order);
 
      }
      else {
        const title = this.productForm.get('title')?.value;
        const category = this.productForm.get('category')?.value;
        const stock = this.productForm.get('stock')?.value;
        const price = this.productForm.get('price')?.value;
        const publish = '02 May 2023';
        productList.push({
          id: this.products.length + 1,
          title,
          category,
          img_alt: '',
          img: this.imageURL,
          stock,
          price,
          discount: '0',
          orders: '0',
          ratings: '',
          publish

        })
      }
      this.productForm.reset();
      this.showModal?.hide()
    }
    setTimeout(() => {
      this.productForm.reset();
    }, 1000);
    this.submitted = true
  }

  checkedValGet: any[] = [];
  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.products.forEach((x: { state: any; }) => x.state = ev.target.checked)
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].state == true) {
        result = this.products[i];
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }

  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].state == true) {
        result = this.products[i];
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }

  // Delete Product
  removeItem(id: any) {
    this.deleteID = id
    this.deleteRecordModal?.show()
  }

  confirmDelete() {
    if (this.deleteID) {
      productList.splice(this.deleteID, 1)
      this.deleteID = ''
    } else {
      this.checkedValGet.forEach((item: any) => {
        document.getElementById('p_' + item)?.remove();
      });
    }
    this.deleteRecordModal?.hide()
  }

  /**
* Multiple Delete
*/
  deleteMultiple() {
    var checkboxes: any = document.getElementsByName('checkAll');
    var result
    var checkedVal: any[] = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        result = checkboxes[i].value;
        checkedVal.push(result);
      }
    }
    if (checkedVal.length > 0) {
      this.deleteRecordModal?.show()
    }
    else {
      Swal.fire({ text: 'Please select at least one checkbox', confirmButtonColor: '#299cdb', });
    }
    this.checkedValGet = checkedVal;
  }
}
