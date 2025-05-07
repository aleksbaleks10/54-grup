# 2) თქვენი სიტყვებით ახსენით შემდეგი ტერმინები რას ნიშნავს: list, index, indexing, mutable, immutable

#  List  მონაცემთა სტრუქტურა, რომელიც გვეხმარება ელემენტების მიმდევრობით შენახვაში. მაგალითად, თუ გვინდა ყველა ის სიტყვა შევინახოთ, რომლებსაც ვსწავლობთ, ლისტში შეგვიძლია ისინი მივამატოთ.

# Index  ლისტის ან მასივის ელემენტის პოზიცია. მაგალითად, თუ ლისტში გვაქვს 10 ელემენტი, ინდექსები იქნება 0-დან 9-მდე.

# Indexing  ელემენტის ინდექსის გამოყენება მის მოსაძებნად ან მის შესაცვლელად. მაგალითად, ლისტში my_list[2] ნიშნავს ლისტის მეორე ინდექსის მქონე ელემენტს.

# Mutable  ობიექტი, რომელიც შეიძლება შეიცვალოს მისი შექმნის შემდეგ. მაგალითად, ლისტი არის მიუთავარი ობიექტი, რადგან შეგვიძლია მასში ელემენტები მივამატოთ ან წავშალოთ.

# Immutable  ობიექტი, რომელიც არ შეიძლება შეიცვალოს მისი შექმნის შემდეგ. მაგალითად, სტრიქონი (string) არის თათარი ობიექტი, რადგან მისი შიგთავსის შეცვლა ვერ მოხდება. თუმც, შეგვიძლია ახალი სტრიქონი შევქმნათ.

# 3) Create a list of five numbers and print the first, third, and last elements using positive indexing. positive indexing - დადებითი ინდექსები
numbers = [10, 20, 30, 40, 50]
print(numbers[0])  
print(numbers[2])  
print(numbers[4])  

# 4) Create a list of 20 elements (any data type) and print all of the elements - use indexing
# Creating a list of 20 elements (mixed data types)
elements = [1, 2.5, 'apple', True, 42, 'banana', 3.14, False, 'grape', 99, 'kiwi', 88.8, 'peach', True, 10, 'mango', False, 21, 77, 'orange']
for i in range(20):
    print(elements[i])

# 5) Create a list of five numbers and print the first, third, and last elements using negative indexing. negative indexing - უარყოფითი ინდექსები
# Creating a list of five numbers
numbers = [10, 20, 30, 40, 50]
print(numbers[-5])  
print(numbers[-3])  
print(numbers[-1])  

# 6) ask user for name and save it in variable. use indexing and print first and last symbols of name string
name = input("Please enter your name: ")

first_symbol = name[0]
last_symbol = name[-1]

print(f"The first symbol of your name is: {first_symbol}")
print(f"The last symbol of your name is: {last_symbol}")
