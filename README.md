# Jsstd

A tool for running js code from concatenated stdin and parameters.
If you want to process a json from the command-line you can use vanilla javascript.

```
#Picachu moves starting with s
curl -s 'https://pokeapi.co/api/v2/pokemon/pikachu/' | \
  jsstd -e ".moves.map(m=>m.move.name).filter(n=>n.startsWith('s'))"
```

To install clone this repo and execute
```
npm install -g
```
