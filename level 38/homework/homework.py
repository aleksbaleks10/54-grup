# 3) Arguments and Parameters: Write a function that takes two numbers as arguments and prints their sum.
def sum_two_numbers(a, b):
    print(a + b)
sum_two_numbers(5, 7)

# 4) Return Statement: Create a function that takes a number as input, multiplies it by 10, and returns the result.
def multiply_by_10(num):
    return num * 10

result = multiply_by_10(5)
print(result)

# 5) Default Arguments: Define a function that takes a name as input and prints a greeting. If no name is provided, it should use "Guest" as the default.
def greet(name="Guest"):
    print(f"Hello, {name}!")

greet("Alice") 
greet() 

# 6) Boss level: Nested Functions: Define a function that contains another function inside it and calls the inner function.
def outer_function():
    def inner_function():
        print("Hello from the inner function!")
    
    print("Hello from the outer function!")
    inner_function()

outer_function()

# 7) Write a function that takes a list of numbers and checks whether each number is even or odd using a loop and conditional statements. Print "Even" for even numbers and "Odd" for odd numbers.
def check_even_odd(numbers):
    for num in numbers:
        if num % 2 == 0:
            print(f"{num} is Even")
        else:
            print(f"{num} is Odd")


check_even_odd([1, 2, 3, 4, 5])

# 8) Find the Maximum
def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

max_number = find_max([3, 5, 7, 2, 8, 1])
print(max_number)


# 9) Define a function that takes a list of integers and returns a new list containing only the positive numbers. Use a loop and a conditional statement.
def get_positive_numbers(numbers):
    positive_numbers = []
    for num in numbers:
        if num > 0:
            positive_numbers.append(num)
    return positive_numbers

positives = get_positive_numbers([-1, 2, 3, -4, 5, -6])
print(positives)

# 10) Write a function that iterates through a range of numbers (e.g., 1 to 100) and sums up all the numbers divisible by 3. Return the total sum.
def sum_divisible_by_3():
    total_sum = 0
    for num in range(1, 101):
        if num % 3 == 0:
            total_sum += num
    return total_sum

result = sum_divisible_by_3()
print(result)
