num1=3
num2=5
operator = ''
if operator == "+": print(num1 + num2)
elif operator == "-": print(num1 - num2)
elif operator == "*": print(num1 * num2)
elif operator == "/": print(num1 / num2)
if num2 != 0: print(num1 / num2)
else: print("Cannot divide by zero")


num1 = int(input("შეიტანეთ პირველი რიცხვი: "))
num2 = int(input("შეიტანეთ მეორე რიცხვი: "))
if num1 > num2:
     for i in range(num2, num1 + 1):print(i)
elif num2 > num1:
    for i in range(num1, num2 + 1):print(i)
else: print("numbers are equal")

def determine_grade(score):
    if score >= 90 and score <= 100:
     return 'A'
    elif score >= 80 and score < 90:
     return 'B'
    elif score >= 70 and score < 80:
     return 'C'
    elif score >= 60 and score < 70:
     return 'D'
    else: 
     return 'F'