# 1) Create a dictionary, where the Keys should be Students’ names and Values should be the student’s Grades. Display the names of the students as well as their grades on the screen altogether.
students_grades = {
    "John": "A",
    "Alice": "B",
    "Bob": "C",
    "Emma": "B+"
}

for student, grade in students_grades.items():
    print(f"{student}: {grade}")

# 2) Create a dictionary that stores Five countries along with their capitals (in key-value pair). display the capitals in the terminal afterwards.
countries_and_capitals = {
    "USA": "Washington D.C.",
    "France": "Paris",
    "Japan": "Tokyo",
    "India": "New Delhi",
    "Germany": "Berlin"
}

for capital in countries_and_capitals.values():
    print(capital)

# 3) Create a dictionary where the Keys will be car brands and the Values will be their models. From the dictionary display one of your favorite car models on the screen.
car_brands_and_models = {
    "Tesla": "Model S",
    "BMW": "X5",
    "Audi": "A4",
    "Toyota": "Corolla",
    "Ford": "Mustang"
}

favorite_car = car_brands_and_models["Tesla"]
print(f"My favorite car model is: {favorite_car}")

# 4) Take a look at the document about Dictionaries and try to learn how to update the values in a dict.
my_dict = {"key1": "value1", "key2": "value2"}
my_dict["key1"] = "new_value1"
print(my_dict)

# 5) Create a Dictionary, in which you’ll store information about a book. (for example: Name of the book, Author’s name, Year of publication etc.) Then update one of the values in this dictionary and finally - display the final version of this dictionary on the screen.
book_info = {
    "Name": "1984",
    "Author": "George Orwell",
    "Year of Publication": 1949
}

book_info["Year of Publication"] = 1950

print(book_info)

# 6) Create a dictionary, in which you’ll add Student  names as keys and their points as Values. Find the average of their points and display it in the terminal.
students_points = {
    "John": 85,
    "Alice": 92,
    "Bob": 78,
    "Emma": 88
}

average_points = sum(students_points.values()) / len(students_points)
print(f"Average points: {average_points}")

# 7) Create a dictionary and store a user’s information in it. but here’s the twist: You have to store the values in This dictionary as an input. ( The user has to  enter the information from the terminal. the information should include Name, Surname, Age, Height and career. )
user = {}

user["name"] = input('Enter name: ')
user["last_ame"] = input('Ente last Name: ')
user["age"] = input('Enter age: ')
user["height"] = input('Enter height: ')
user["career"] = input('Enter career: ')

print(user)