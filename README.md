# coursera-spa-with-angular
Building Single Page Application with Angular
## Set up env
IDE: Atom (devloped by Git and died on 2022) or IntelliJ
NodeJS: to install other node packages
Sudo npm install -g browser-sync

## Initialize repo on git
- Create repo and set git page to that default branch “main” (master is old name conventional)
- Clone repo to local machine
- Open the folder in IDE IntelliJ

## Create index.hmtl
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

## Start the browser-sync when there is change in our project
```bash
cd <your_project_directory>
# Start the browser-sync
browser-sync start --server --directory --files "**/*l" 
# **: any directory
#* : any thing

# Quit the browser-sync
Ctrl + C

```
