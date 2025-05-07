# 1)
def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr)
# 2)
def count_positives_sum_negatives(arr):
    if arr == [] or arr == None: return []
    
    count_of_pos = 0
    sum_of_neg = 0
    
    for i in arr:
        if i > 0: count_of_pos += 1
        else: sum_of_neg += i
    
    return [count_of_pos, sum_of_neg]
# 3)
def dna_to_rna(dna):
    return dna.replace("T", "U")
# 4)
def bmi(weight, height):
    res = weight / height ** 2
    
    if res <= 18.5: return "Underweight"
    elif res <= 25.0: return "Normal"
    elif res <= 30.0: return "Overweight"
    return "Obese"
# 5)
def check(seq, elem):
    return elem in seq
# 6)
def string_to_array(s):
    return s.split(" ")
# 7)
def count_by(x, n):
    res = []
    
    for i in range(1, n+1):
        res.append(x*i)
    
    return res
# grade book
def calculate_grade(score1, score2, score3):
    average = (score1 + score2 + score3) / 3

    if average >= 90:
        return 'A'
    elif average >= 80:
        return 'B'
    elif average >= 70:
        return 'C'
    elif average >= 60:
        return 'D'
    else:
        return 'F'

result = calculate_grade(85, 90, 78)
print(f"The grade is: {result}")