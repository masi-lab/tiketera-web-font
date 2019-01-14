This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



opt1: create git init and PULL repo(with all files in remote repo) into it
inside proyect folder exec 'git init'
git pull https://github.com/cinsua/TEST.git

opt2:
git clone https://github.com/cinsua/TEST.git (this create a separate folder.. use outside from coder.com)

then:
add files or modify files
git status: gives u a list of non saves changes
you can add to  manually each file with:
git add file.extension
or you can add all with
git add .

git diff file: gives you a list of lines changes on terminal

git commit -m "comment for commit"

Pull changes on to github
first time:
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

  git push --set-upstream https://github.com/cinsua/TEST.git master

loggin with github acc

after all this next pull with just:
  git push

.gitignore
here put all folders and files to ignore by git.. example node_modules
les
