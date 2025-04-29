# TechChallenge

## About this solution

This is a minimalist, non-layered startup solution with the ABP Framework. All the fundamental ABP modules are already installed.

### Pre-requirements

* [.NET9.0+ SDK](https://dotnet.microsoft.com/download/dotnet)
* [Node v18 or 20](https://nodejs.org/en)

## Before running the application

### Generating a Signing Certificate

In the production environment, you need to use a production signing certificate. ABP Framework sets up signing and encryption certificates in your application and expects an `openiddict.pfx` file in your application.

This certificate is already generated when you created the solution, so most of the time you don't need to generate it yourself. However, if you need to generate a certificate, you can use the following command:

```bash
dotnet dev-certs https -v -ep openiddict.pfx -p 2765ffe1-3105-484a-8f6e-dfe085de98b2
```

> `2765ffe1-3105-484a-8f6e-dfe085de98b2` is the password of the certificate, you can change it to any password you want.

It is recommended to use **two** RSA certificates, distinct from the certificate(s) used for HTTPS: one for encryption, one for signing.

For more information, please refer to: [OpenIddict Certificate Configuration](https://documentation.openiddict.com/configuration/encryption-and-signing-credentials.html#registering-a-certificate-recommended-for-production-ready-scenarios)

> Also, see the [Configuring OpenIddict](https://abp.io/docs/latest/Deployment/Configuring-OpenIddict#production-environment) documentation for more information.

### Install Client-Side libraries

Run the following command in your solution directory. This step is automatically done when you create a new solution, if you didn't especially disabled it. However, you should run it yourself if you have first cloned this solution from your source control, or added a new client-side package dependency to your solution.

```bash
abp install-libs
```

> This command installs all NPM packages for MVC/Razor Pages and Blazor Server UIs and this command is already run by the ABP CLI, so most of the time you don't need to run this command manually.

## How to run

The application needs a database. Run the following command in the [TechChallenge](./TechChallenge) project directory to migrate the database and seed the initial data. This step is automatically done when you create a new solution, if you didn't especially disable it.

````bash
dotnet run --migrate-database
````

This command will create and seed the initial database. Then you can run the application with any IDE that supports .NET.

Happy coding..!

## Deploying the application

Deploying an ABP application follows the same process as deploying any .NET or ASP.NET Core application. However, there are important considerations to keep in mind. For detailed guidance, refer to ABP's [deployment documentation](https://abp.io/docs/latest/Deployment/Index).

### How to deploy on Docker

The application provides the related `Dockerfiles` and `docker-compose` file with scripts. You can build the docker images and run them using docker-compose. The necessary database, DbMigrator, and the application will be running on docker with health checks in an isolated docker network.

#### Creating the Docker images

Navigate to [etc/build](./etc/build) folder and run the `build-images-locally.ps1` script. You can examine the script to set **image tag** for your images. It is `latest` by default.

#### Running the Docker images using Docker-Compose

Navigate to [etc/docker](./etc/docker) folder and run the `run-docker.ps1` script. The script will generate developer certificates (if it doesn't exist already) with `dotnet dev-certs` command to use HTTPS. Then, the script runs the provided docker-compose file on detached mode.

> Not: Developer certificate is only valid for **localhost** domain. If you want to deploy to a real DNS in a production environment, use LetsEncrypt or similar tools.

#### Stopping the Docker containers

Navigate to [etc/docker](./etc/docker) folder and run the `stop-docker.ps1` script. The script stops and removes the running containers.

### Additional resources

You can see the following resources to learn more about your solution and the ABP Framework:

* [Application (Single Layer) Startup Template](https://abp.io/docs/latest/startup-templates/application-single-layer/index)





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