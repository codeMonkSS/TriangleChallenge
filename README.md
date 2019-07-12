## Triangle Challenge using TradeShift UI in React.js
Write a program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

----------

##### Link to [Demo](https://ts.sajalsinha.co/)

----------

#### Development Choices
The type of a triangle (Equilateral, Isosceles or Scalene) is determined by how many different side lengths there are in a triangle. It was a straight forward decision on providing solutions that showcase problem-solving skills and structural considerations. I created the input fields that define the length of the sides of a triangle. I also used a classic theory stating the sum of 2 sides must always be greater than the third side.

#### Design Choices
As it was stated in the challenge, "_It would be great to build the UI with TradeShift UI components_". I found out that using this UI is brilliant. However, I could not use all/most of it due to the size of the project, but I tried my best to utilise as much as I could.

#### Testing
I used _regular expressions_ `^[1-9][0-9]*$` to make sure the users are providing the right input. I created input onChange/onUpdate functions to make sure the data being passed to my function was valid. I invoked these functions before determining the triangle type in my main function.

| #    | What I have used     |  Why I have used these                                      |
| :--- | :---                 | :---                                                        |
| 1.   | React.js             |  I used React because it is one of the latest frontend frameworks to build good and high-performance web applications using its different features like virtual DOM, components and its life cycle to handle the data in a proper way and also the most useful and recently introduced feature called react hooks. |
| 2.   | React Hooks          |  I used one of the latest and most useful features of React.js introduced in version 16.8, which is the functional component to implement the react life cycle. React hooks also help to make your code simple, reduce the amount of code and also increase the readability of the code. |

#### Why not to allow inputs as 0 or a negative numbers.

**Reason:** The sides of a triangle are its lengths and logically, lengths cannot be a 0 or a negative value to comply with the triangle rule.

----------

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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
