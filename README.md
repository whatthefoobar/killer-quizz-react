Combining my passion for psychology and true crime I decided to build a questionaire to determine if you too could be a serial killer and if so which one. Spoiler alert: all answers generate one type of serial killer from real life of fiction. A playful not to be taken too seriously React questionnaire app where user answers a set of questions rendered one at a time and inputs their name and will receive based on the answers selected a result : which serial killer they would be.

Currently works:

- answers are selected and a socore is assigned based on which answers are selected
- name input is grabbed
- on Submit we get a console.log of the score and username
- onSubmit of the name a name and a generated score is pushed to firebase realtime databases
- have a minimal backend that comunicates with the FB database with a few GET, POST requests
- the frontend gets the data grabbed by the backend from our db and then using a reducer manipulates data to then push back unto the db.

Next:

- create function with results based on score number (DONE)
- show results based on score obtained (DONE)
- show result box after username inputs their name (DONE)
- migrate both q&a data and results data to Firebase(DONE)
- once scores are generated push scores to Firebase(DONE),
- grab scores from FB and put them in a leaderboard component.
- add CSS styles, bg image, minimal bg sound (optional: the blood splatter animation)

Struggles(conquered):

- writting a good clean reducer function that transforms input answers into a score (number)
- fixind default radio input behaviour that made it so for each newly generated form we had a previously checked radio input, that if left as is didn't call on my reducer function that incremented score when user clicked next
