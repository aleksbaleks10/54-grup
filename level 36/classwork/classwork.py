def check_lowercase(user_str):
    if user_str.islower():
        print(user_str)
    else:
        print("სტრინგი არ არის მთლიანად lowercase-ში")

text = input("გთხოვთ, შეიყვანეთ წინადადება: ")

check_lowercase(text)




def iscapitalized(user_str):

    if user_str[0].isupper() and user_str[1:].islower():
        print(True)
    else:
        print(False)

text = input("შეიყვანეთ წინადადება: ")

iscapitalized(text)


def manual_isdigit(user_str):

    is_digit = True

    if not user_str:
        is_digit = False
    
    for character in user_str:
        if character < '0' or character > '9':
            is_digit = False

    print(is_digit)


manual_isdigit("12345")  
manual_isdigit("12a45")  
manual_isdigit("✓")       



def split_sentence(user_str):

    words = user_str.split()

    print(words)


user_input = input("გთხოვთ, შეიტანეთ სთრინგი: ")

split_sentence(user_input)
