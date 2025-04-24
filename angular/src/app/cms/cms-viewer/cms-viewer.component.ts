import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-cms-viewer',
  template: `<div [innerHTML]="htmlContent"></div>`,
})
export class CmsViewerComponent implements OnInit {
  htmlContent: string = '';

  constructor(private route: ActivatedRoute, private cmsService: CmsService) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.cmsService.getContentEntryBySlug(slug).subscribe((result) => {
        if (result && result.htmlContent) {
          this.htmlContent = result.htmlContent;
        }
      });
    }
  }
}