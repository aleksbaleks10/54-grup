# 2) თქვენი სიტყვებით ახსენით რა არის elif და როდის ვიყენებთ მას 
    # კოდი, თუ პირობა1 დაკმაყოფილებულია
    # კოდი, თუ პირობა2 დაკმაყოფილებულია და პირობა1 არ არის
    # კოდი, თუ პირობა3 დაკმაყოფილებულია და პირობა1 და პირობა2 არ არის
    # კოდი, თუ არცერთი პირობა არ არის დაკმაყოფილებული


# 3) Write a program that takes three numbers as input and prints the largest of the three.
# Three numbers as input
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
num3 = float(input("Enter the third number: "))

# Determine the largest number
if num1 >= num2 and num1 >= num3:
    largest = num1
elif num2 >= num1 and num2 >= num3:
    largest = num2
else:
    largest = num3

# Print the largest number
print(f"The largest number is: {largest}")


# 4) Create a while loop that asks the user to enter a password. Keep asking until they enter the correct password "Goa best". Also print the count of incorrect passwords.
correct_password = "Goa best"


incorrect_attempts = 0

while True:

    password = input("Enter the password: ")


    if password == correct_password:
        print("Access granted!")
        break
    else:
        print("Incorrect password. Try again.")
        incorrect_attempts += 1

print(f"Number of incorrect attempts: {incorrect_attempts}")



# 5) Write a program that takes two numbers and an operator (+, -, *, /) as input and performs the calculation. Display the result and end the program.
def calculate(num1, num2, operator):
    if operator == '+':
        return num1 + num2
    elif operator == '-':
        return num1 - num2
    elif operator == '*':
        return num1 * num2
    elif operator == '/':
        if num2 != 0:  
            return num1 / num2
        else:
            return "Error: Division by zero"
    else:
        return "Error: Invalid operator"

num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
operator = input("Enter the operator (+, -, *, /): ")

result = calculate(num1, num2, operator)
print(f"The result is: {result}")


# 