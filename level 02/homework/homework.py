# 3) print ბრძანება 20-ჯერ გამოიყენეთ და დაბეჭდეთ თქვენთვის სასურველი ინფორმაცია
num0 = 0
num1 = 1
num2 = 2
num3 = 3
num4 = 4
num5 = 5
num6 = 6
num7 = 7
num8 = 8
num9 = 9
num10 = 10
num11 = 11
num12 = 12
num13 = 13
num14 = 14
num15 = 15
num16 = 16
num17 = 17
num18 = 18
num19 = 19
num20 = 20


print(num0)
print(num1)
print(num2)
print(num3)
print(num4)
print(num5)
print(num6)
print(num7)
print(num8)
print(num9)
print(num10)
print(num11)
print(num12)
print(num13)
print(num14)
print(num15)
print(num16)
print(num18)
print(num19)
print(num20)
# 6) პითონის turtle ბიბლიოთეკის გამოყენებით შექმენით ძალიან დიდი სასახლე
from turtle import *

speed(7)

width(3)

penup()
goto(-250,-400)
pendown()

color("gray")

begin_fill()

forward(600)
left(90)
forward(300)
left(90)
forward(600)
left(90)
forward(300)

end_fill()


begin_fill()

right(90)
forward(250)
right(90)
forward(350)
right(90)
forward(50)
right(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)

end_fill()

penup()
goto(350,-400)
pendown()

begin_fill()
left(90)
forward(250)
left(90)
forward(350)
left(90)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)

end_fill()



penup()
goto(275,-100)
pendown()


begin_fill()
left(180)
forward(200)
left(90)
forward(450)
left(90)
forward(200)
end_fill()

begin_fill()
left(180)
forward(250)
right(90)
forward(50)
right(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)

end_fill()





begin_fill()

right(90)
forward(100)

right(90)
forward(200)

left(45)
forward(175)

left(90)
forward(180)

left(45)
forward(200)

end_fill()




exitonclick()