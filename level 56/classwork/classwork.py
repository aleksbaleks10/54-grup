# 1)
def rental_car_cost(d):
    if d >= 7: return d*40 - 50
    elif d >= 3: return d*40 - 20
    else: return d*40
# 2)
def quarter_of(month):
    if month <= 3: return 1
    elif month <= 6: return 2
    elif month <= 9: return 3
    return 4
# 3)
def remove_exclamation_marks(s):
    return s.replace("!", "")
# 4)
def get_volume_of_cuboid(length, width, height):
    return length * width * height
# 5)
def points(games):
    score = 0
    
    for game in games:
        our_score = int(game[0])
        their_score = int(game[2])
        
        if our_score > their_score:
            score += 3
        elif our_score == their_score:
            score += 1
    
    return score
# 6)
def greet(name):
    if name == "Johnny": return "Hello, my love!"
    return f"Hello, {name}!"
# 7)
def area_or_perimeter(l , w):
    if l == w: return l*w
    else: return (l+w)*2
# 8)
def other_angle(a, b):
    return 180-a-b
# 9)
def set_alarm(employed, vacation):
    if employed == vacation: return False
    elif employed == True and vacation == False: return True
    else: return False
# 10)
def sum_mix(arr):
    result = 0
    
    for i in arr: result += int(i)
    
    return result
# 11)
def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague
# 12)
def double_char(s):
    res = ""
    for i in s:
        res += i * 2
    return res
# 13)
def feast(beast, dish):
    return beast[0] == dish[0] and beast[-1] == dish[-1]
print(feast("great blue heron", "garlic naan"))
print(feast("chickadee", "chocolate cake"))
print(feast("lion", "lasagna"))