from turtle import *

speed(7)

width(3)

#middle part of the castle
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

#left side

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

#drawing right side of the castle
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

#drawing the upper mid part of the castle


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

#roof of the castle



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