
num = int(input("Enter a number: "))

if num > 10:
    print("bigger than 10")
else:
    print("smaller than 10")



user_input = input("Are you a student?: ")


if user_input.lower() == "yes":
    is_student = True
else:
    is_student = False


print(f"Is the user a student? {is_student}")