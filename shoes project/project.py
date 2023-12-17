import random
from string import ascii_lowercase

NUM_QUESTIONS_PER_QUIZ = 5
QUESTIONS = {
    "when was the first known use of the word quiz": [
    "1781", "1771", "1871", "1881"
    ],
    "Which built-in fuction can get information from the user": [
        "input", "get", "print", "write"
    ],
    "Which keyword do you use to loop over a given list of elements": [
        "for", "while", "each", "loop"
    ],
}
num_questions = min(NUM_QUESTIONS_PER_QUIZ, len(QUESTIONS))
questions = random.sample(list(QUESTIONS.items()),len(QUESTIONS))
questions = random.sample(list(QUESTIONS.items()), k=num_questions)
num_correct = 0
for num, (question, alternatives) in enumerate(questions, start=1):
    print(f"\nQuestion {num}:")
    print(f"{question}?")
    correct_answer = alternatives[0]
    labeled_alternatives = dict(
        zip(ascii_lowercase,random.sample(alternatives, k=len(alternatives)))
        )
    for label, alternative in labeled_alternatives.items():
        print(f"  {label}) {alternative}")
    while (answer_label := input("\nchoice? ")) not in labeled_alternatives:
        print(f"Please answer one of {', '.join(labeled_alternatives)}")
       
    answer = labeled_alternatives[answer_label]
    if answer == correct_answer:
        num_correct += 1
        print("☆ Correct!☆")
    else:
        print(f"The answer is {correct_answer!r}, not {answer!r}") 
print(f"\nYou got {num_correct} correct out of {num} questions")          