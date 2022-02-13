
# FakeSite

A FakeSite built in `react` utilizing `styled-components` and `axios` for fetching API data.

## Documentation

### How did I approach without `create-react-app`?

1. Created index.html with basic html boilerplate.
2. Created a empty div with `id = root` and linked `App.js` with `<script>` tag.
3. Created `index.js` with `ReactDOM.render` and `document.getElementById('root')`
4. Initialized `npm` with `npm init -y` to get `package.json`   
5. Installed required node modules using `npm` including `react` and `reactDOM`


## Challenges Faced

The API contains raw html tags that React would not render because of XSS.

In order to render html tags that was in `description` from the API, I had to use `dangerouslySetInnerHTML`. I'm curious if there is any other possible solution to approaching this issue.