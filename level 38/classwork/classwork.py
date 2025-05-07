def remove_one_element(lst, index):
    if 0 <= index < len(lst):
        del lst[index]
    print(lst)

my_list = [1, 2, 3, 4, 5]
remove_one_element(my_list, 2)




def square(user_num):
    return user_num * user_num
result = square(5)
print(result * 2)



def rectangle_info(side1, side2):
    perimeter = (side1 + side2) * 2
    area = side1 * side2
    return perimeter, area

side1 = 5
side2 = 3

perimeter, area = rectangle_info(side1, side2)

print("Perimeter:", perimeter)
print("Area:", area)
