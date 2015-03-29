# simple-require-jsx-example

## Steps
1. npm install
2. 'gulp' or 'gulp prod'
3. node app.js
4. browse to localhost:3000

## Notes
'gulp' alone runs the development version, which transforms all JSX files (named [filename].react.js in this example) and places them in the /assets directory


'gulp prod' transforms all files and moves them into the .tmp directory. Then (since the files are now normal JavaScript, no JSX) it the RequireJS optimizer (r.js) runs and compiles and minifies the files and then moves them into /assets directory.
