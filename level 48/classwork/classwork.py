# 1)
def make_upper_case(s):
    return s.upper()
# 2)
def past(h, m, s):
    new_h = 3600 = h
    new_m = 60 = m
    res = (new_h + new_m + s) * 1000
    return res
# 3)
def are_you_playing_banjo(name):
    if name[0] == "R" or name[0] == "r":
        return name + " plays banjo"
    return name + " does not play banjo"
# 4)
def simple_multiplication(number):
    if number%2 == 0:
        return number*8
    return number*9
# 5)
def abbrev_name(name):
    return name[0].upper() + "." + name.split(" ")[1][0].upper()
# 6)
def find_average(numbers):
    if len(numbers) == 0: return 0
    return sum(numbers) / len(numbers)
# 7)
def smash(words):
    return " ".join(words)
# 8)
def grow(arr):
    prod = 1
    for i in arr:
        prod = prod * i

    return prod
# classwork 9)
def will_hero_survive(bullets, dragons):
    return bullets >= 2 * dragons
