# 1)
def calculate_rental_cost(d):
    daily_rate = 40
    total_cost = d * daily_rate
    
    if d >= 7:
        total_cost -= 50
    elif d >= 3:
        total_cost -= 20

    return total_cost
days = int(input("Enter the number of days you want to rent the car: "))
total_amount = calculate_rental_cost(days)
print(f"The total cost for {days} days is: ${total_amount}")
# 2)
def get_quarter(month):
    if 1 <= month <= 12:
        return (month - 1) // 3 + 1
    else:
        raise ValueError("Month must be between 1 and 12.")

month = 6
quarter = get_quarter(month)
print(f"Month {month} belongs to Quarter {quarter}")
# 3)
def RemoveExclamationMarks(input_string):
    return input_string.replace("!", "")
# 4)
def calculate_volume(length, width, height):
    return length * width * height
# 5)
def calculate_points(results):
    total_points = 0
    for match in results:
        x, y = map(int, match.split(":"))
        if x > y:
            total_points += 3
        elif x == y:
            total_points += 1
    return total_points
# 6)
def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    return f"Hello, {name}!"
# 7)
def calculate_polygon(length, width):
    if length == width:

        return length * width
    else:
        return 2 * (length + width)
# 8)

