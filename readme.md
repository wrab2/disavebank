## How to add saves
Post them to #di-save-bank in testing discord server and I'll add them here.\
Alternatively through pull request:
put your saves in  `/saves/<ModeName>.js`\
if you're adding a save to a previously empty mode combination then add it to `save_exists` const as well\
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
showSaves()
```
Available groups are `'pre-infinity', 'infinity', 'elementary', 'multiverse', 'endgame'`. Group only affects color of the text.\
Only add useful saves. Having one save at each major milestone is enough.