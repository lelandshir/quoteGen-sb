## About

Simple sandbox for practice with JavaScript and Sass

## Notes

- DOM Manipulation && Event Listeners
- Conditionally setting CSS w/ ternary operators
- Using Twitters API to execute a tweetQuote function
- Create your own proxy to zap dreaded CORS errors when using free API's

#### IDE Shortcuts

- IDE/Word-Wrap: `alt + z`

## CSS

#### Pseudo Classes

- [:active psuedo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:active): represents an element (like a button) being "activated" by a user. Typically starts on user click.

#### Media Queries

- always place media queries at the bottom so that they can overwrite anything else throughout code

#### Build Your Own Proxy Server With Heroku

- Be sure Heroku is installed / `heroku -v`
- `heroku login`
- `git clone https://github.com/Rob--W/cors-anywhere.git`
- `cd cors-anywhere`
- `npm i`
- `heroku create`
- `git push heroku master`
- Once deployed -> Heroku GUI -> go to project && copy link for app
