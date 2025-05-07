# საკლასო დავალება:

# შექმენით სია, სადაც იქნება 10 ელემენტი. ამ სიაში უნდა იყოს მინიმუმ 2 string, 2 float, 2 integer, 2 boolean, 2 სია.

# მოახდინეთ ამ სიაზე slicing ორი რიცხვის გადაცემით და ახალი სია დაბეჭდეთ.

# მოახდინეთ ამ სიაზე slicing სამი რიცხვის გადაცემით და ახალი სია დაბეჭდეთ.
my_list = ["apple", "orange", 3.14, 2.718, 42, 27, True, False, [1, 2, 3], ["a", "b", "c"]]

slice_1 = my_list[1:5]
print(slice_1)

slice_2 = my_list[0:10:2]
print(slice_2)


#  საკლასო დავალება:

# შექმენით ახალი სია, სადაც იქნება 15 ელემენტი.

# მთავარ სიაზე მოახდინეთ slicing:

# 1. შეაბრუნეთ სია და დაბეჭდეთ ის.
# 2. ჩამოწერეთ ხუთი slicing-ის მაგალითი ისეთ შემთხვევებზე, როდესაც slicing-ს ვახდენთ ორი ინდექსის გაწერით.
# 3. ჩამოწერეთ ხუთი slicing-ის მაგალითი ისეთ შემთხვევებზე, როდესაც slicing-ს ვახდენთ ორი ინდექსის და სტეპის ანუ ნაბიჯის გაწერით.
# 4. ჩამოწერეთ ხუთი slicing-ის მაგალითი ისეთ შემთხვევებზე, როდესაც slicing-ს ვახდენთ ერთი ინდექსის და ორწერტილის გაწერით
print("Original list:", my_list)


reversed_list = my_list[::-1]
print("Reversed list:", reversed_list)

print("Slicing examples with two indices:")
print("my_list[2:6]:", my_list[2:6]) 
print("my_list[5:10]:", my_list[5:10])
print("my_list[:7]:", my_list[:7])  
print("my_list[8:]:", my_list[8:])  
print("my_list[3:10]:", my_list[3:10])

print("Slicing examples with two indices and step:")
print("my_list[0:15:2]:", my_list[0:15:2])  
print("my_list[1:10:3]:", my_list[1:10:3])
print("my_list[2:10:4]:", my_list[2:10:4]) 
print("my_list[3:12:3]:", my_list[3:12:3])  
print("my_list[0:8:2]:", my_list[0:8:2])  

print("Slicing examples with one index and colon:")
print("my_list[:5]:", my_list[:5])
print("my_list[10:]:", my_list[10:]) 
print("my_list[3:]:", my_list[3:]) 
print("my_list[:10]:", my_list[:10])
print("my_list[7:]:", my_list[7:])  





num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

num1 = my_list[-3:]
num2 = my_list[:-3]
num42 = my_list[:-3]
num3 = my_list[-5:]
num4 = my_list[-3:-2]
num5 = my_list[:-2]
