# TODO #
### IMPROVEMENTS ###
[ ] improve the InfoBox component (includes css for success and info);

[ ]   
## MUST HAVE

1. ~~Move the 'add new world' section to the separate modal.~~    
   1.1 change examples item to textarea tag.

2. ~~The 'learn section' create in the separate view - use routing.~~
   2.2 Individual learn cases should be separated to new views - use routing.

3. ~~Create the login page and logic to handle it.~~

4. Change media queries to full screen view after 950px width.

5. find new fonts family - 2 + one to logo (optional).

## NICE TO HAVE

4. Consider moving thr search bar to the wordListSection

## learn mechanism

1. three state for every words (toLearn, toRepeat, toRemind, done)
2. the state is changing when the user mark the word as 'ok'
   - 6 times in a row or 10 times at all (from toLearn to toRepeat or false - boolean when the word doesn't need to be learned),
   - 8 times in a row or 12 times at all (from toRepeat to toRemind),
   - 4 times in a row or 6 times at all.

---

# DATA STRUCTURE

```
{
   words: {                   //collection
      userIdxxxxxx: {         // document
         word: 'get',
         translation: 'dostać',
         synonyms: ['reach', 'obtain'],
         examples: ['I get a new bike'],
         learnStatus: 'toLearn'
      },
      userIdxxxxxx: {
         word: 'get',
         translation: 'dostać',
         synonyms: ['reach', 'obtain'],
         examples: ['I get a new bike'],
         learnStatus: false
      },
   }
}
```
