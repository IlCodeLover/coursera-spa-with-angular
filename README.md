# coursera-spa-with-angular
[Building Single Page Application with Angular]([)https://github.com/jhu-ep-coursera/fullstack-course5/tree/master)
## Set up env
IDE: Atom (devloped by Git and died on 2022) or IntelliJ
NodeJS: to install other node packages
Sudo npm install -g browser-sync

## My first Angular app
### Initialize repo on git
- Create repo and set git page to that default branch “main” (master is old name conventional)
- Clone repo to local machine
- Open the folder in IDE IntelliJ

### Create index.hmtl
- Create index.html file in the root folder
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>SPA with Angular</title>
</head>
<body>
    <h1>Building Single Page Application (SPA) with Angular</h1>
    <p>Welcome to SPA built with Angular</p>
</body>
```

### Start the browser-sync when there is change in our project
```bash
cd <your_project_directory>
# Start the browser-sync
browser-sync start --server --directory --files "**/*l" 
# **: any directory
#* : any thing

# Quit the browser-sync
Ctrl + C



```

## AngularJS Tutorial
- In AngularJs, Controller serves the function of ViewModel
- In AngularJS, MVVM stands for Model-View-ViewModel is used to separate the business logic from the UI.
  - model: data/business logic
  - view model: presentation logic
  - view: presentation or UI that is displayed to the user
### MVVM - Model View ViewModel
- View (index.html)
```html
<body>
        <h1>My First AngularJS App</h1>
        <div ng-controller="MyFirstController">
            <h2>{{ name }}</h2> // this is a declarative binding, it binds the ViewModel $scope.name to the View
```
- ViewModel (app.js)
  - ViewModel is a combination of Model and View
  - ViewModel is responsible for the presentation logic
  - $scope is used to share data from ViewModel to View
  - the $ sign means that it is a special AngularJS object (reserved for AngularJS)
```javascript
//app.js
(function() {
'use strict'; // to make sure we will not leak variables into global scope

angular.module('myFirstApp', []) // declare a module with dependency in []
// Declarative binder binds the ViewModel to the View
.controller('MyFirstController', function($scope) { // this is a ViewModel
    $scope.name = "John Doe";
    $scope.sayHello = function() {
        return "Hello " + $scope.name + "!";
    }


});
})();
```

### Dependency Injection
The AngularJs service that's responsible for Dependency Injection is called $injector

## Create first-ng-app
```bash
ng new first-ng-app --inline-style --inline-template # select SCSS and no local server

# App component consist of : header, home
ng g c header # ng generate component header
ng g c components/header # create header component in nested folder src/app/component

# create home component outside the components folder
ng g c home

# add header and home component in app componet

# Binding data between template html and Typescript component using signal

# Create greeting component
ng g c components/greeting

# Passing greeting component to home 

# Event listeners

# Creat counter components
ng g c components/counter

ng g c components/todo-item

ng g c todos
ng g service services/todos

# Go inside app/ create folder model
mkdir app/model
vim todo.type.ts


```
# Reference
1. Course slides and code available on [GitHub](https://github.com/jhu-ep-coursera/fullstack-course5/tree/master)
2. AngularJS (version <2.x) course info available on [Coursera](https://www.coursera.org/learn/single-page-web-apps-with-angularjs). [Assignments](https://github.com/jhu-ep-coursera/fullstack-course5/tree/master/assignments)
3. [Author's website](https://clearlydecoded.com/)
4. [Download angular.js](https://angular.io/)
5. [Project Angular 17 and cdk](https://github.com/AhsanAyaz/angular-in-90ish)
6. [Angular cookbook by Packt](https://github.com/PacktPublishing/Angular-Cookbook)