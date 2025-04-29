import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService } from '../cms.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-cms-viewer',
  template: `<div [innerHTML]="htmlContent"></div>`,
})
export class CmsViewerComponent implements OnInit {
  htmlContent: SafeHtml = '';

  constructor(private route: ActivatedRoute, private cmsService: CmsService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.route.params.subscribe((params) => {
        const slug = params['slug'];
        if(slug) {
            this.loadContent(slug);
        }
    });
  }

  private loadContent(slug: string): void {
    this.cmsService.getContentEntryBySlug(slug).subscribe((result) => {
      if (result && result.htmlContent) {
        const decoded = this.decodeHtmlEntities(result.htmlContent);
        this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(decoded);
      }
    });
  }

  private decodeHtmlEntities(text: string): string {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }
}