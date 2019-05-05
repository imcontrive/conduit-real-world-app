### Article List

**Note: Returns most recent articles globally by default**
https://conduit.productionready.io/api/articles



Limit number of articles (default is 20) (max 100 at a time): ?limit=20
https://conduit.productionready.io/api/articles?limit=30



Offset/skip number of articles (default is 0): ?offset=0
https://conduit.productionready.io/api/articles?limit=20&offset=20



Filter by tag : ?tag=AngularJS
https://conduit.productionready.io/api/articles?limit=20&offset=20&tag=AngularJS


Filter by author : ?author=jake
https://conduit.productionready.io/api/articles?limit=20&offset=20&author=jake


Favorited by user : ?favorited=jake
https://conduit.productionready.io/api/articles?limit=20&offset=20&favorited=jake


### Get Tags
https://conduit.productionready.io/api/tags




### Get Article
https://conduit.productionready.io/api/:slug


eg : https://conduit.productionready.io/api/ttt-8821yw

response : 
{
    article: {
        title: "ttt",
        slug: "ttt-8821yw",
        body: "ttt",
        createdAt: "2019-01-16T09:14:21.293Z",
        updatedAt: "2019-01-16T09:14:21.293Z",
        tagList: [ ],
        description: "tt",
        author: {
        username: "lalit1138",
        bio: "test",
        image: "https://pbs.twimg.com/profile_images/378800000053604656/2597c0dede325c2f90742dcbe300e5d5_bigger.jpeg",
        following: false
        },
        favorited: false,
        favoritesCount: 1
    }
}


### Profile

https://conduit.productionready.io/api/profiles/username

eg: https://conduit.productionready.io/api/profiles/lalit1138

response :

{
    profile: {
        username: "lalit1138",
        bio: "test",
        image: "https://pbs.twimg.com/profile_images/378800000053604656/2597c0dede325c2f90742dcbe300e5d5_bigger.jpeg",
        following: false
    }
}


### Comments

https://conduit.productionready.io/api/:slug/comments

eg : https://conduit.productionready.io/api/articles/fizzbuzz-ee5euh/comments

response : 

{
    comments: [
        {
            id: 34777,
            createdAt: "2019-01-30T02:27:10.728Z",
            updatedAt: "2019-01-30T02:27:10.728Z",
            body: "not the best solution",
            author: {
            username: "xenogears2018",
            bio: null,
            image: "https://static.productionready.io/images/smiley-cyrus.jpg",
            following: false
            }
        }
    ]
}


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

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
