import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    }),
    NgxGalleryModule,
    FileUploadModule
  ],
  exports: [
    ToastrModule,
    NgxGalleryModule,
    FileUploadModule
  ]
})
export class SharedModule { }
