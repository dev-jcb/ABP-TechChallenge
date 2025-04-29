# TechChallenge

This is a startup project based on the ABP framework. For more information, visit <a href="https://abp.io/" target="_blank">abp.io</a>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Description

The CMS component allows managing pages offering an editor that renders the content as an HTML.

## Technical decision and tradeoffs
Use a single-layer web application to simplify implementation of the CMS feature to better understand the ABP framework.
### Tradeoffs
#### **Advantages**
- Reduced managing multiple layers for faster code development cycle
- Ease of deployment

#### **Disadvantages**
- Limited scalability
- Code changes tight-coupling for front-end and back-end
- Large-scale code refactoring for future infrastructure migrations

## Tools Used
- Github CoPilot (Ask/Agent) mode
- ChatGPT
- Google AI Gemini Studio
- ABP Framework 
- ABP Studio

## Next Steps

1. **Content Entries styling**:
   - Fix styling issues when rendering html
   - Introduce the ability to select if content is HTML or Markdown

2. **Introduce component to upload image collections**
   - Remove upload image from WYSIWYG editor
   - Install gallery feature to manage images (including dynamic links for embedding in WYSIWYG editor)

3. **Pagination for Content Entries**:
   - Implement pagination in the `loadContentEntries()` method to handle large datasets efficiently.

4. **Slug Validation**:
   - Add validation to ensure slugs are unique and follow a specific format.

5. **Search and Filter**:
   - Add search and filter functionality to the CMS table for easier navigation.

6. **Error Handling**:
   - Improve error handling in the `CmsService` to display user-friendly messages for API failures.

7. **Role-Based Access Control**:
   - Add role-based permissions to restrict access to certain CMS features (e.g., only admins can delete content).

8. **Preview Feature**:
   - Add a preview button to allow users to view content before saving or publishing.

9. **Rich Text Editor Enhancements**:
   - Enhance the rich text editor with additional formatting options and media embedding.

10. **Unit Tests**:
   - Add unit tests for the `CmsComponent`, `CmsViewerComponent`, and `CmsService` to ensure reliability.

11. **Content Caching**:
   - Introduce saving content as preview
   - Cache contents that are marked as published

12. **Publish flag**
   - Allow the ability to create content entries without publishing
   - Create slug as a separate entity