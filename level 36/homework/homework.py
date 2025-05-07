# 2) Find the position of the first occurrence of the word "Python" in a sentence.
sentence = "goa is best"
position = sentence.find("Python")
print("The position of the first occurrence of the word 'Python' is:", position)
# 3) Search for a user-specified substring in a provided string and print its starting index.
def find_substring(main_string, substring):
    position = main_string.find(substring)
    if position != -1:
        print(f"The substring '{substring}' is found at index: {position}")
    else:
        print(f"The substring '{substring}' is not found in the provided string.")

main_string = "goa is best"
substring = "Python"
find_substring(main_string, substring)
# 4) Write a function to find and return the index of a specified character in a given string.
def find_character_index(main_string, character):
    position = main_string.find(character)
    if position != -1:
        return position
    else:
        return "Character not found in the provided string."

main_string = "goa is best"
character = "P"
index = find_character_index(main_string, character)
print(f"The index of the character '{character}' is: {index}")
def count_word_the(paragraph):
    words = paragraph.lower().split()
    count = words.count("the")
    return count

paragraph = "goa is best"
count = count_word_the(paragraph)
print(f"The word 'the' appears {count} times in the paragraph.")




# 5) Count the number of times the word "the" appears in a given paragraph.
def count_the(paragraph):
    words = paragraph.lower().split()
    count = words.count("the")
    return count

paragraph = "The quick brown fox jumps over the lazy dog. The dog didn't mind."
print(count_the(paragraph))
# 6) Ask the user to input a character and count its occurrences in a given string.
def count_character_occurrences(string, char):
    return string.count(char)

string = input("Enter a string: ")
char = input("Enter a character to count its occurrences: ")
print(count_character_occurrences(string, char))
# 7) Create a function that counts and returns the occurrences of a specified word in a text.
def count_word_occurrences(text, word):
    words = text.lower().split()
    count = words.count(word.lower())
    return count

text = "This is a sample text with the word sample appearing multiple times. Sample it."
word = "sample"
print(count_word_occurrences(text, word))



# 10) Check if all characters in a given string are lowercase and print the result.
def check_lowercase(string):
    if string.islower():
        print("All characters are lowercase.")
    else:
        print("Not all characters are lowercase.")

check_lowercase("hello")
check_lowercase("Hello")
# 11) Create a function that takes a string and returns True if it is completely in lowercase, otherwise False.
def check_lowercase(string):
    if string.islower():
        print("All characters are lowercase.")
    else:
        print("Not all characters are lowercase.")

check_lowercase("hello")
check_lowercase("Hello")
# 12) Prompt the user to input a string and verify if it contains only lowercase letters.
def check_user_input():
    user_input = input("Enter a string: ")
    if user_input.islower():
        print("The string contains only lowercase letters.")
    else:
        print("The string does not contain only lowercase letters.")

check_user_input()
# 13) Verify if all the characters in a user-provided string are uppercase.
def check_uppercase(string):
    if string.isupper():
        print("All characters are uppercase.")
    else:
        print("Not all characters are uppercase.")

check_uppercase("HELLO")
check_uppercase("Hello")
# 14) Write a function that checks if a string consists entirely of uppercase letters and returns a boolean result.
def is_all_uppercase(string):
    return string.isupper()

print(is_all_uppercase("HELLO"))
print(is_all_uppercase("Hello"))
# 15) Check and display whether a string input by the user is in uppercase.
def check_user_input():
    user_input = input("Enter a string: ")
    if user_input.isupper():
        print("The string contains only uppercase letters.")
    else:
        print("The string does not contain only uppercase letters.")
check_user_input()