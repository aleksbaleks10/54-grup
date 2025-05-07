numbers = (3, 5, 7, 2, 5)

print("მინიმალური მნიშვნელობა:", min(numbers))
print("მაქსიმალური მნიშვნელობა:", max(numbers))

first_element = numbers[0]
count = numbers.count(first_element)
print(f"პირველი ელემენტი {first_element} გვხვდება tuple-ში {count} ჯერ.")


def no_duplicates(user_list):
    return list(set(user_list))

print(no_duplicates([1, 2, 3, 4, 4, 5, 5]))
print(no_duplicates([10, 10, 20, 20, 30, 30]))
print(no_duplicates([7, 8, 8, 7, 9]))









tuple1 = (1, 2, 3, 4)
my_tuple = (10, 20, 30, 40, 50)
second_element = my_tuple[1]
last_element = my_tuple[-1]
middle_slice = my_tuple[1:4]

print("Second element:", second_element)
print("Last element:", last_element)
print("Middle three elements:", middle_slice)