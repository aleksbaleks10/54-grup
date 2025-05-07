# 1) Sum of Two Numbers: Write a function that takes two numbers as input and prints their sum.
def sum_of_two_numbers(a, b):
    total = a + b
    print(f"The sum of {a} and {b} is {total}")

# Example usage
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
sum_of_two_numbers(num1, num2)

# 2) Reverse a String: Implement a function that takes a string and returns it reversed.
def reverse_string(s):
    return s[::-1]

# Example usage
input_string = input("Enter a string to reverse: ")
reversed_string = reverse_string(input_string)
print(f"The reversed string is: {reversed_string}")

# 3) Find Maximum: Create a function that takes a list of numbers and returns the maximum value.
def find_maximum(numbers):
    if not numbers:
        return None  # Return None if the list is empty
    max_value = numbers[0]
    for num in numbers:
        if num > max_value:
            max_value = num
    return max_value

# Example usage
numbers_list = [12, 45, 78, 34, 23, 89, 91, 33]
max_value = find_maximum(numbers_list)
print(f"The maximum value in the list is: {max_value}")
