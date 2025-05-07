# 1)
def sum_of_evens(numbers):
    return sum(num for num in numbers if num % 2 == 0)


numbers = [1, 2, 3, 4, 5, 6]
print(sum_of_evens(numbers))
# 2)
def square_of_sum_of_odds(numbers):
    return sum(num for num in numbers if num % 2 != 0) ** 2

numbers = [1, 2, 3, 4, 5, 6]
print(square_of_sum_of_odds(numbers))
# 3)
def multiply_sums_of_even_and_odd(numbers):
    even_arr = [num for num in numbers if num % 2 == 0]
    odd_arr = [num for num in numbers if num % 2 != 0]
    sum_even = sum(even_arr)
    sum_odd = sum(odd_arr)
    return sum_even * sum_odd

numbers = [1, 2, 3, 4, 5, 6]
print(multiply_sums_of_even_and_odd(numbers))

print("I study in GOA")