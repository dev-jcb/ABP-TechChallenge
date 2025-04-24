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

    this.route.params.subscribe((params) => {
        const slug = params['slug'];
        if(slug) {
            this.loadContent(slug);
        }
    });
  }

  private loadContent (slug: string): void {
        this.cmsService.getContentEntryBySlug(slug).subscribe((result) => {
          if (result && result.htmlContent) {
            this.htmlContent = result.htmlContent;
          }
        });
  }
}