import { Injectable } from '@angular/core';

import { RestService } from '@abp/ng.core';
import { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';

@Injectable({
    providedIn: 'root'
})
export class CmsService {
    apiName = 'Default';

    constructor(private restService: RestService) { }

    // Read: Get all content entries
    getContentEntries = () =>
        this.restService.request<any, PagedResultDto<any>>({
            method: 'GET',
            url: '/api/app/content-entry',
            params: { sorting: 'creationTime desc', skipCount: 0, maxResultCount: 100 },
        },
            { apiName: this.apiName });

    getContentEntry = (id: string) =>
        this.restService.request<any, any>({
            method: 'GET',
            url: `/api/app/content-entry/${id}`,
        },
            { apiName: this.apiName });

    // Create: Add a new content entry
    createContentEntry = (content: any) =>
        this.restService.request<any, any>({
            method: 'POST',
            url: '/api/app/content-entry',
            body: content,
        },
            { apiName: this.apiName });

    // Update: Edit an existing content entry
    updateContentEntry = (content: any) =>
        this.restService.request<any, any>({
            method: 'PUT',
            url: `/api/app/content-entry/${content.id}`,
            body: content,
        },
            { apiName: this.apiName });

    // Delete: Remove a content entry
    deleteContentEntry = (id: number) =>
        this.restService.request<any, void>({
            method: 'DELETE',
            url: `/api/app/content-entry/${id}`,
        },
            { apiName: this.apiName });
}