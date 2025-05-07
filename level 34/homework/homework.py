sentence = "ეს არის მაგალითი წინადადება."
print(sentence.upper())



name = input("შეიყვანეთ თქვენი სახელი: ")
print(name.upper())



def print_uppercase(strings):
    for string in strings:
        print(string.upper())

print_uppercase(["ეს არის პირველი", "ეს არის მეორე", "ეს არის მესამე"])



sentence = "ეს არის მაგალითი წინადადება."
print(sentence.lower())



email = input("შეიყვანეთ თქვენი ელფოსტა: ")
print(email.lower())



def print_lowercase(string):
    print(string.lower())

print_lowercase("ეს არის მაგალითი")



word = input("შეიყვანეთ სიტყვა: ")
print(word.capitalize())



def capitalize_string(string):
    return string.capitalize()

print(capitalize_string("ეს არის მაგალითი წინადადება"))