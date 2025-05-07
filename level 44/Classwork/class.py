
# Codewars 1

# We need a function that can transform a string into a number. What ways of achieving this do you know?

# Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

def string_to_number(s):
    return int(s)

# Codewars 2

# Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

def summation(num):
    return sum(range(1, num + 1))

# Codewars 3

# Make a simple function called greet that returns the most-famous "hello world!".

def greet():
    return "hello world!"


# Codewars 4

# Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

def count_sheeps(sheep):
    return sheep.count(True)

# Codewars 5

# Write a function that removes the spaces from the string, then return the resultant string.

def no_space(x):
    return x.replace(" ", "")

result = no_space("Hello World!")
print(result)    

# Codewars 6

# Code as fast as you can! You need to double the integer and return it.

def double_integer(i):
    return i * 2