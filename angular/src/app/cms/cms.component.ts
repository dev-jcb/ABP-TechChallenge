import { Component, OnInit } from '@angular/core';
import { CmsService } from './cms.service';

import{FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {
  contentEntries: any[] = []; // Array to store content entries
  newContent: any = { title: '', slug: '', htmlContent: '', isHomePage:false }; // Model for new content
  selectedContent: any = null; // Model for editing content

  form: FormGroup;
  isModalOpen = false;

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // Formatting buttons
      [{ header: 1 }, { header: 2 }], // Header buttons
      [{ list: 'ordered' }, { list: 'bullet' }], // List buttons
      [{ script: 'sub' }, { script: 'super' }], // Subscript/Superscript buttons
      [{ indent: '-1' }, { indent: '+1' }], // Indent buttons
      [{ direction: 'rtl' }], // Text direction
      [{ size: ['small', false, 'large', 'huge'] }], // Font size
      [{ color: [] }, { background: [] }], // Text color and background
      [{ font: [] }], // Font family
      [{ align: [] }], // Text alignment
      ['link', 'image'], // Link, image, and video buttons
      ['clean'], // Remove formatting button
    ],
  };

  constructor(private cmsService: CmsService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      slug: ['', Validators.required],
      htmlContent: [''],
      isHomePage: [false],
    });
  }

  ngOnInit() {
    this.loadContentEntries();
  }

  // Read: Load all content entries
  loadContentEntries() {
    this.cmsService.getContentEntries().subscribe((result) => {
      this.contentEntries = result.items; // Assuming 'items' contains the array of content entries
    });
  }

  // Create: Add a new content entry
  createContentEntry() {
    this.selectedContent = {} as any;
    this.buildForm();
    this.isModalOpen = true;
  }

  buildForm() {
    this.form = this.fb.group({
      id: [this.selectedContent?.id || ''],
      title: [this.selectedContent.title || '', Validators.required],
      slug: [this.selectedContent.slug || '', Validators.required],
      htmlContent: [this.selectedContent.htmlContent || ''],
      isHomePage: [this.selectedContent.isHomePage || false],
    });
  }

  saveContentEntry() {
    if (this.form.valid) {
      const contentEntry = this.form.value;
      if (this.selectedContent?.id) {
        // Update existing entry
        this.cmsService.updateContentEntry(contentEntry).subscribe(() => {
          this.loadContentEntries();
          this.isModalOpen = false;
        });
      } else {
        // Create new entry
        this.cmsService.createContentEntry(contentEntry).subscribe(() => {
          this.loadContentEntries();
          this.isModalOpen = false;
        });
      }
    }
  }

  editContentEntry(id: string){
    this.cmsService.getContentEntry(id).subscribe((entry) => {
      this.selectedContent = entry;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  // Delete: Remove a content entry
  deleteContentEntry(id: number): void {
    this.cmsService.deleteContentEntry(id).subscribe(() => {
      this.contentEntries = this.contentEntries.filter(entry => entry.id !== id);
    });
  }

  // Select a content entry for editing
  selectContentEntry(entry: any): void {
    this.selectedContent = { ...entry }; // Create a copy for editing
  }
}
