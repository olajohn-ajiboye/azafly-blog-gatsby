# Static Website and CMS Admin

[Live Site](https://lucqax.com/)

This repo contains our static website, blog and CMS Admin.It is built with Gatsby, and Netlify CMS.

It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.

## Getting Started

Netlify CMS can runs on a pre-configured starter site with Netlify.

CMS can be reached on the path `/admin` fro example `https://locahost-xxxx/admin`

## To run locally

-   Clone this repo
-   run `yarn install`
-   copy the content of `example.env` to `.env`. Ask for missing or placeholder `env` values from code owner
-   run `yarn dev`

### Generate site logo

Replace the logo in `static/logo.png` and run `npm run generate-favicon` to generate the other favicon assets from that logo.

### Contributing

**NB** :warning: :warning: :children_crossing:

> It is imporatnt not to ever push directly to master. Of course, ideally we should protect this branch but as we are still on free Github :star_struck: this is not a possibility.
> Hence, ensure you create a branch and go through the PR and merging process.

-   Create the new branch with a summary of the feature/fix and issue. For example 'TASK-2-Create-footer-link'
-   Create a pull request after the fix or feature is completed
-   Squash commits to keep history log lean.
-   Merge pull request only after approval
-   Monitor application for bugs and inconsistent behaviors.

### Deployment

Code is automatically deployed on Netlify after merging to master
