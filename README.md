# facebook-status-manager
This is a project to try of the Facebook Graph API. It is meant that you should be able to see all of your previous facebook statuses and delete them if you wish. 

The Application use TypeScript, Angular4.


## Instructions
1. First run install npm packages

    `npm install`
2. Install @angular/cli global
    
    `npm install -g @angular/cli`
2. Create a new file named `.secrets.ts` in the project root folder

    Content have to be like this (remember to replace the Facebook App ID):
    
    ```javascript
    export const secrets = {
      facebook_appId: 'Your Facebook APP ID'
    };
    ```
3. Now just run the npm start command
    
    `npm start`
