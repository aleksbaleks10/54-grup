names = ["asdfghjkl", "A", "s", "d", "f", "g", "h", "j", "k", "l"]
renewed = [name for name in names if len(name) < 6 or name.startswith("A")]

print(renewed)


try:
    number = int(input("enter number: "))
    print("your number is:", number)
except ValueError:
    print("error")