# 1)
def simple_multiplication(number) :
    return number * 9 if number % 2 else number * 8
def abbrevName(name):
    return '.'.join(x[0].upper() for x in name.split())
#2)
def find_needle(haystack):
    return f'found the needle at position {haystack.index("needle")}'
# 3)
def invert(lst):
    return [-x for x in lst]
# 4)
def find_average(array):
    try:
        return sum(array) / len(array)
    except ZeroDivisionError:
        return 0
# 5)
def smash(words):
    return " ".join(words)
# 6)
def grow(arr):
    product = 1
    for i in arr:
        product *= i
    return product
# 7)
def hero(bullets, dragons):
    return bullets >= dragons * 2
# 8)
def better_than_average(class_points, your_points):
    return your_points > sum(class_points) / len(class_points)
# 9)
def DNAtoRNA(dna):
    return dna.replace('T', 'U')
# 10)
def zeroFuel(distance_to_pump, mpg, fuel_left):
    return distance_to_pump <= mpg * fuel_left
# 11)
def bmi(weight, height):
    bmi = weight / height ** 2
    if bmi <= 18.5:
        return "Underweight"
    elif bmi <= 25:
        return "Normal"
    elif bmi <= 30:
        return "Overweight"
    else:
        return "Obese"