# 1) Division with Zero Check
def divide_numbers():
    try:
        num1 = float(input("Enter the first number: "))
        num2 = float(input("Enter the second number: "))

        if num2 == 0:
            raise ZeroDivisionError("Error: Division by zero is not allowed.")

        print(f"Result: {num1 / num2}")
    except ValueError:
        print("Error: Please enter numeric values.")
    except ZeroDivisionError as e:
        print(e)

# 2) String to Integer Conversion
def convert_string_to_integer():
    try:
        user_input = input("Enter an integer: ")
        number = int(user_input)
        print(f"Converted integer: {number}")
    except ValueError:
        print("Error: Invalid input. Please enter a valid integer.")

# 3) List Index Access with Exception Handling
def access_list_index():
    values = ["Apple", "Banana", "Cherry", "Date"]
    
    try:
        index = int(input("Enter an index number: "))
        print(f"Value at index {index}: {values[index]}")
    except ValueError:
        print("Error: Please enter a valid integer.")
    except IndexError:
        print("Error: Index out of range. Please enter a valid index.")

# 4) Add Two Numbers with Type Checking
def add_two_numbers():
    try:
        num1 = int(input("Enter the first number: "))
        num2 = int(input("Enter the second number: "))
        
        print(f"Sum: {num1 + num2}")
    except ValueError:
        print("Error: Please enter valid numbers.")

# 5) Safe List Removal
def remove_item_from_list():
    items = ["apple", "banana", "cherry", "date"]
    
    try:
        item_to_remove = input("Enter an item to remove: ").strip()
        
        if item_to_remove not in items:
            raise ValueError("Error: Item not found in the list.")
        
        items.remove(item_to_remove)
        print(f"Updated list: {items}")
    except ValueError as e:
        print(e)

