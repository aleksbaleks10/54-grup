#2) Tuple Indexing & Slicing: Create a tuple with at least 5 elements and extract the second, last, and a slice of the middle three elements.
my_tuple = (10, 20, 30, 40, 50)
second_element = my_tuple[1]
last_element = my_tuple[-1]
middle_slice = my_tuple[1:4]

print("Second element:", second_element)
print("Last element:", last_element)
print("Middle three elements:", middle_slice)
# 3) Tuple Immutability: Try to modify an element in a tuple and observe what happens.
immutable_tuple = (1, 2, 3, 4, 5)

try:
    immutable_tuple[1] = 10
except TypeError as e:
    print("Error:", e)
#4) Tuple Packing & Unpacking: Create a tuple with multiple values, unpack them into separate variables, and print each variable.
my_tuple = (1, 2, 3, "Hello", 5.5)
a, b, c, d, e = my_tuple

print(a) 
print(b)
print(c)
print(d)
print(e)
#5) Tuple Methods: Use the .count() and .index() methods on a tuple containing repeated elements to count occurrences and find the first occurrence of a specific value.
my_tuple = (1, 2, 3, 4, 2, 5, 2)

count_of_2 = my_tuple.count(2)
print(f"The number 2 appears {count_of_2} times in the tuple.")

index_of_2 = my_tuple.index(2)
print(f"The first occurrence of 2 is at index {index_of_2}.")
#6) Set Creation & Basic Operations: Create a set with at least five elements, add a new element, remove an existing one, and check if a specific value is present in the set.

my_set = {1, 2, 3, 4, 5}
print(f"Original Set: {my_set}")

my_set.add(6)
print(f"Set after adding 6: {my_set}")

my_set.remove(3)
print(f"Set after removing 3: {my_set}")

is_present = 4 in my_set
print(f"Is 4 present in the set? {is_present}")
# 7) Removing Duplicates: Convert a list with duplicate elements into a set to remove duplicates and then convert it back to a list.
my_list = [1, 2, 3, 4, 2, 5, 1, 3]

unique_set = set(my_list)

unique_list = list(unique_set)
print(f"Original list: {my_list}")
print(f"List after removing duplicates: {unique_list}")
