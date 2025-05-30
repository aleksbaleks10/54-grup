
# ბულეანი (Boolean) არის მონაცემთა ტიპი, რომელიც მხოლოდ ორი მნიშვნელობით იწერება: ჭეშმარიტი (True) და ცრუ (False). ის ხშირად გამოიყენება ლოგიკურ გამოთვლებში და პროგრამირებაში, რათა განსაზღვროს, კონკრეტული პირობა შესრულებულია თუ არა.

# ბინარული კოდი (Binary Code) არის ინფორმაცია, რომელიც იწერება მხოლოდ ორ სიმბოლოთი: 0 და 1. ეს სიმბოლოები წარმოადგენს ბინარული ციფრების (ბიტების) ორ სხვადასხვა მდგომარეობას. ბინარული კოდი გამოიყენება კომპიუტერში მონაცემთა შესანახად და გადაცემისას, რადგან კომპიუტერები მუშაობენ ბინარული ლოგიკის საფუძველზე.


5 > 3
10 > 7
20 > 15
100 > 50
3.5 > 2.5
-1 > -5
8 > 2
25 > 20
500 > 300
7 > 4


3 < 5
7 < 10
15 < 20
50 < 100
2.5 < 3.5
-5 < -1
2 < 8
20 < 25
300 < 500
4 < 7


5 == 5
10 == 10
20 == 20
100 == 100
3.5 == 3.5
-1 == -1
8 == 8
25 == 25
500 == 500
7 == 7


5 != 3
10 != 7
20 != 15
100 != 50
3.5 != 2.5
-1 != -5
8 != 2
25 != 20
500 != 300
7 != 4


# უფრო მეტი (>): ეს ოპერატორი შეადარებს ორ მნიშვნელობას და დააბრუნებს ჭეშმარიტ (True) მნიშვნელობას, თუ მარცხენა მნიშვნელობა უფრო დიდია მარჯვენაზე. მაგალითად, 5 > 3 დააბრუნებს ჭეშმარიტს (True), რადგან 5 უფრო დიდია 3-ზე.

# ნაკლები (<): ეს ოპერატორი შეადარებს ორ მნიშვნელობას და დააბრუნებს ჭეშმარიტს (True) მნიშვნელობას, თუ მარცხენა მნიშვნელობა ნაკლებია მარჯვენაზე. მაგალითად, 3 < 5 დააბრუნებს ჭეშმარიტს (True), რადგან 3 ნაკლებია 5-ზე.

# თანასწორი (==): ეს ოპერატორი შეადარებს ორ მნიშვნელობას და დააბრუნებს ჭეშმარიტს (True) მნიშვნელობას, თუ ორივე მნიშვნელობა ერთმანეთთან ტოლია. მაგალითად, 5 == 5 დააბრუნებს ჭეშმარიტს (True), რადგან ორივე მნიშვნელობა ტოლია.

# არათანასწორი (!=): ეს ოპერატორი შეადარებს ორ მნიშვნელობას და დააბრუნებს ჭეშმარიტს (True) მნიშვნელობას, თუ ორივე მნიშვნელობა ერთმანეთთან არათოლია. მაგალითად, 5 != 3 დააბრუნებს ჭეშმარიტს (True), რადგან 5 და 3 არატოლია.

num = int(input("Enter a number: "))
num2 = int(input("Enter a number: "))

print(num > num2)
print(num < num2)
print(num == num2)
print(num != num2)