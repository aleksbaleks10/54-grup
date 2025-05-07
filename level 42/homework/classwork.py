my_list = [3, 5, 2, 8, 1]
max_value = max(my_list)
print("Maximum value (using max()):", max_value)

max_value_iteration = my_list[0]
for num in my_list:
    if num > max_value_iteration:
        max_value_iteration = num
print("Maximum value (using iteration):", max_value_iteration)
