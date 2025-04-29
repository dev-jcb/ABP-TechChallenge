import { RoutesService, eLayoutType } from '@abp/ng.core';
import { provideAppInitializer, inject } from '@angular/core';
import { CmsService } from './cms.service';
import { Router } from '@angular/router';

export const CMS_ROUTE_PROVIDER = [
    provideAppInitializer(() => {
        configureRoutes();
    })
];

function configureRoutes()
{
    const routes = inject(RoutesService);
    const cmsService = inject(CmsService);

    routes.add([
        {
          name: 'CMS',
          iconClass: 'fas fa-folder',
          layout: eLayoutType.application,
          requiredPolicy: 'TechChallenge.ContentEntries',
        },
        {
          path: '/cms',
          name: 'Manage Content',
          parentName: 'CMS',
          order: 1,
        }]);


    cmsService.getContentEntries().subscribe((result) => {
          result.items.forEach((entry: any) => {
          routes.add([
            {
              path: `cms/${entry.slug}`,
              name: `${entry.title}`,
              layout: eLayoutType.application,
              order: 2,
            },
          ]);
        });

      });
}