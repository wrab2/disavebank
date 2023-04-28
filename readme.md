## Don't add every single save out there, only useful ones
Meaning that if you have save with for example 10 TME there's no need to have a save with 11 TME, 12 TME, 13 TME etc, they all achievable in a few seconds from 10 TME. Same goes for rockets, endorsements, time cubes etc. 

---

## How to add saves
put your saves in  
`/saves/<ModeName>.js`\
if you're adding a save to the empty mode combination add it to `save_exists` const as well\
Example of a file with saves:
```
loadedSaves = [
  {
    string: 'save goes here',
    name: 'Displayed name of a save',
    group: 'pre-infinity',
    author:  'who made this save',
  },
  {
	  ...
  },
]
app.$forceUpdate()
```
Available groups are `'pre-infinity',   'infinity',   'elementary',   'multiverse', 'endgame'`. Group only affects color of the text.
