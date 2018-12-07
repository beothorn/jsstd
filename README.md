#Jsstd

A tool for running js code from concatenaed stdin and parameters.
If you want to process a json from the command-line you can use vanilla javascript. 

```javascript
curl -s "https://api.github.com/repos/toddmotto/public-apis/issues?state=closed" | jsstd -p -e ".map(i => i.user.login).filter(u => u.startsWith('i'))"	
```

To install clone this repo and execute
```
npm install -g
```
