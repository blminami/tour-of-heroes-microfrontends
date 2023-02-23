## Tour of Heroes micro frontends

[![Netlify Status](https://api.netlify.com/api/v1/badges/990114b0-9892-410a-b547-33740b6cb3b7/deploy-status)](https://app.netlify.com/sites/tour-of-heroes-mfe/deploys)

Angular tour of heroes adapted to micro frontends as part of a NX monorepo.

#### Demo

[Netlify App Demo](https://tour-of-heroes-mfe.netlify.app/)

Have a look at this article on the topic, where I explain all the steps to split a monolithic application into micro frontends.
https://dev.to/blminami/getting-started-with-micro-frontends-3g79

#### *Prerequisites* for Angular micro frontends:
- NodeJs 10.13.0+
- Webpack 5
- Angular 12+
- NX

#### How to run the project?
1. clone this repository 
```bash
git clone https://github.com/blminami/tour-of-heroes-microfrontends.git
```
2. open terminal to the root directory and run 
```bash
npm install
```
3. start applications
```bash
npm run run:all
```
4. navigate to http://localhost:4200

#### What to expect?

I've decided to start from the well-known Angular Tour of Heroes tutorial and split the codebase into micro apps. There are a few approaches when it comes to splitting monolithic applications into micro frontends, I chose to do it by feature. The application provides two major features:
- dashboard:  top heroes + search heroes capability
- heroes: list of heroes + hero management capabilities (view here, add hero, delete hero)

![image](https://user-images.githubusercontent.com/20680686/217802634-5824ceb6-1cd1-410e-8ad3-395ab84d5dd7.png)
![image](https://user-images.githubusercontent.com/20680686/217802477-b1d0cf81-e166-4ce6-9288-f1c8304b4803.png)

Considering the split by feature, I've decided on the following architecture of my application:

![image](https://user-images.githubusercontent.com/20680686/217802795-18d588f7-dfcb-4a70-b524-a12a7c372475.png)

where:
- *shell application* is the app that will host all the remote micro applications (dashboard and heroes) and will handle everything related to the navigation (navigation component and routing logic)
- *dashboard micro application* is one of the remote applications, targeting the dashboard feature
- *heroes micro application* is the second remote application, targeting the heroes feature

#### Additional resources:
- [Angular Tour of Heroes](https://angular.io/tutorial/tour-of-heroes)
- [Angular Tour of Heroes code](https://angular.io/tutorial/tour-of-heroes/toh-pt0)
- [Migrate Angular workspace to Nx monorepo](https://nx.dev/recipes/adopting-nx/migration-angular#transforming-an-angular-cli-workspace-to-an-integrated-nx-monorepo)
- [Angular Module Federation](https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/)
- [Advanced Angular Micro Frontends with Dynamic Module Federation](https://nx.dev/recipes/module-federation/dynamic-module-federation-with-angular)
