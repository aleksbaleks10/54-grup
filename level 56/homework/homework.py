def update_light(current):
    if current == 'green':
        return 'yellow'
    elif current == 'yellow':
        return 'red'
    elif current == 'red':
        return 'green'
    


def third_angle(angle1, angle2):
    return 180 - (angle1 + angle2)




def set_alarm(employed, vacation):
    return employed and not vacation



def sum_mix(arr):
    return sum(int(x) for x in arr)


def goals(la_liga, copa_del_rey, champions_league):
    return la_liga + copa_del_rey + champions_league


def double_char(s):
    return ''.join(c * 2 for c in s)



def get_age(age_string):
    return int(age_string[0])