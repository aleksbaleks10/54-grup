
# Codewars 1

# You get an array of numbers, return the sum of all of the positives ones.

# If there is nothing to sum, the sum is default to 0.

def positive_sum(arr):
    sum = 0
    for num in arr:
        if num > 0:
            sum += num
    return sum


# Codewars 2

# Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

def repeat_str(repeat, string):
    if repeat < 0:
        return
    return repeat * string


# Codewars 3

# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

def remove_char(s):
    if len(s) < 2:
        return ""
    return s[1:-1]

# Codewars 4

# Complete the square sum function so that it squares each number passed into it and then sums the results together.

def square_sum(numbers):
    list = []
    
    for i in numbers:
        list.append(i**2)
    return sum(list)

# Codewars 5

# Given an array of integers your solution should find the smallest integer.

# You can assume, for the purpose of this kata, that the supplied array will not be empty.

def find_smallest_int(arr):
    for i in arr:
        return min(arr)