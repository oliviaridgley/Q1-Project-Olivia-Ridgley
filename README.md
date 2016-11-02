# Cors-Proxy

*Need a way for students to get around CORS issues for front-end only projects?*
Just set `apiServerHost` as a Heroku config variable, and have students point their API request to the Heroku-app instead of the API that doesn't support CORS.

## Galvanize Student Proxies
  - For: `http://www.omdbapi.com` Use: `https://g-omdbapi.herokuapp.com`

### Setup
  - Clone this repo and run: `heroku create YOUR_APP_NAME`. Replace `YOUR_APP_NAME` with `g-API_URI` so for   `http://www.omdbapi.com`, use: `g-omdbapi`
  - Set the config var: `heroku config:set apiServerHost=API_TO_PROXY` replace `API_TO_PROXY` with the API you want to proxy. E.g.: `heroku config:set apiServerHost=http://www.omdbapi.com`
  - Update this readme with your API for future reuse.

### Usage
  - Make requests to: `https://YOUR_APP_NAME.herokuapp.com/?t=the+matrix&y=&plot=short&r=json`
