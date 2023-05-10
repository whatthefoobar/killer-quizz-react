Context:
-each question has 4 answer option, answer 1 will add1 point to the score, answer2 will add 2 points and so on.

Bugs to fix:

-radio btn bug where if i click on oneanswer option and press next the next question has the same option selected but won't register the input on click of next

-radio btn bug 2: if I select answer option 1 it registers 1 point increase on my score but if I change my mind and select answer option number 2 and click next my score thus far will be 3 not 2 .

Updates: To generate a score for each question answered I modify my data object that contains all questions and its options of answer with an answer: "" that will be filled with onChange of an input. Then my plan is to use my reducer to dispatch a function that takes my now modified data object, goes through each object and checks each answer propery and assigns a score: if 1 than 1p if 2 then 2p etc. Goal:  This way user should be able to change mind about which answer option to pick within the same question before pressing next without the score being incremented. Also this way I can keep track of my checked radio buttons being reset with each question by making sure checked= true only if ===with selectedAnswer which is a state that grabs my selected answer from the input.

To do: currently working on updating the reducer function to handle the score calculation. No luck yet, the radio bug is still here.
