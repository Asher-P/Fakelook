# Fakelook client

Fakelook repository will contain  
client-side app, developed with Angular(https://angular.io/).

## 💻 Local debute # Requirements

Initially make sure you have node js installed on your machine, 
as well as angular cli.  
Without those two you won't be able to run the following commands.  

To start the project localy run the command:

- ng start

now open your browser and navigate to [app-url](http://localhost:4200).  

## 🐳 Building Docker image execute & Requirements

First make sure you have [Docker](https://www.docker.com/get-started) installed. 

For [VSC](https://code.visualstudio.com/) users there is two ways for building docker image.  
#### First way:  
 - Get into VSC and open the app-folder
 - Ctrl+p and write '>'
 - Docker images: Build image
 - Tag your image
 - You have your own image!

#### Second way:
 - Open terminal in VSC
 - run the command - docker build -t fakelook-client/angular-app .
 - Enjoy your image!

 Exucuting the image can be done by Docker desktop,VSC or by CMD/powershell etc.  
 * Docker desktop:    
 - Open Docker desktop
 - Choose fakelookclient image and run it

 * Terminal/Shell:  
 - run the command - docker run -d -it --name angular-app fakelook-client/angular-app

 * VSC:
 - Cnrl+p + '>'
 - Docker Images: Run
 - Choose fakelookclient/angular-app

 Now open your browser at [app-url](http://localhost:4200).

## Developers

developed by two brilliant guys:  

- Re'em Cohen - [check out my git](https://github.com/ReemCohen).
- Asher Peretzh - [take a look here](https://github.com/Asher-P).
