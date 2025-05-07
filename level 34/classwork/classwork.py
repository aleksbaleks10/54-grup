# საკლასო დავალება:შექმენით ფუნქცია სახელად კალკუალტორი. ფუნქციას გადაეცემა სამი პარამეტრი:

# თუ ოპერატორი ტოლია პლიუსის, დაიბეჭდოს num1 + num2

# თუ ოპერატორი ტოლია მინუსის, დაიბეჭდოს num1 - num2

# თუ ოპერატორი ტოლია ფიფქის, დაიბეჭდოს num1 * num2

# თუ ოპერატორი ტოლია დახრილი ხაზის, დაიბეჭდოს num1 / num2

# ფუნქცია გამოიძახეთ სამჯერ, განსხვავებული არგუმენტებით

def კალკულატორი(num1, num2, ოპერატორი):
    if ოპერატორი == '+':
        print(num1 + num2)
    elif ოპერატორი == '-':
        print(num1 - num2)
    elif ოპერატორი == '*':
        print(num1 * num2)
    elif ოპერატორი == '/':
        print(num1 / num2)
    else:
        print("არასწორი ოპერატორი")

კალკულატორი(10, 5, '+')
კალკულატორი(15, 3, '-')
კალკულატორი(6, 2, '*')
კალკულატორი(20, 4, '/')

# საკლასო დავალება:

# შექმენით ფუნქცია, სახელად find_minimum, რომელსაც გადაეცემა 1 პარამეტრი - user_list.

# ფუნქციის დავალებაა, რომ იპოვოს ამ სიის მინიმალური, ანუ ყველაზე პატარა რიცხვი.

# გამოიყენეთ ერთი ცვლადი და for ციკლი, არ გამოიყენოთ min ფუნქცია.

# ფუნქცია გამოიძახეთ ხუთჯერ, გადაეცით განსხვავებული სიები

def find_minimum(user_list):
    minimum = user_list[0]
    for number in user_list:
        if number < minimum:
            minimum = number
    return minimum
print(find_minimum([3, 1, 4, 1, 5]))
print(find_minimum([10, 7, 5, 8, 6]))
print(find_minimum([-2, -5, 0, 3, -1]))
print(find_minimum([100, 50, 20, 30, 10]))
print(find_minimum([8, 3, 9, 4, 2]))


def manual_capitalize(user_str):

    capitalized_str = user_str[0].upper() + user_str[1:].lower()
    return capitalized_str

user_input = input("შემოიტანეთ სთრინგი: ")

result = manual_capitalize(user_input)
print("Capitalized სთრინგი:", result)
