import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-editor',
  templateUrl: './with-editor.component.html',
  styleUrls: ['./with-editor.component.scss']
})
export class WithEditorComponent implements OnInit {

  tinyMceInitOptions = {
    height: 400,
    menubar: true,
    base_url: '/tinymce', // Root for resources
    suffix: '.min',// Suffix to use when loading resources
    selector : 'textarea',
    plugins: [
      'advlist' , 'autolink' , 'lists' ,'link', 'image', 'charmap' , 'preview' ,  'anchor',
      'searchreplace' , 'visualblocks' , 'code', 'fullscreen',
      'insertdatetime' , 'media' , 'table' , 'codesample' ,  'wordcount'
    ],
   toolbar:
    'undo redo |  bold italic forecolor backcolor | \
    alignleft aligncenter alignjustify | \
    bullist numlist outdent indent | table codesample| removeformat '
  }

  /*
 toolbar:
      'undo redo |  bold italic forecolor backcolor | \
      alignleft aligncenter alignjustify | \
      bullist numlist outdent indent | removeformat '
  */

  htmlText:string="ok";

  constructor() { }

  ngOnInit(): void {
  }

  onGetText(){
    console.log("html text=" + this.htmlText);
  }

}
