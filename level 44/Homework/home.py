
# Codewars 1

# Given an array of integers, return a new array with each value doubled.

def maps(a):
    return [i* 2 for i in a]

# Codewars 2

# Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

# Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

def lovefunc( flower1, flower2 ):
    if (flower1 % 2 == 0 and flower2 % 2 != 0) or (flower1 % 2 != 0 and flower2 % 2 == 0):
        return True
    else:
        return False
    
# Codewars 3

# Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

def sum_array(a):
    if not a: 
        return 0
    return sum(a)

# Codewars 4

# Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

# Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

def paperwork(n, m):
    if n < 0 or m < 0:
        return 0
    else:
        return n * m
    
# Codewars 5

# Write a function which converts the input string to uppercase.


def make_upper_case(s):
    return s.upper()
