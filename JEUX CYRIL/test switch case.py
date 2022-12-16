# def step1():
#     print(1)
#     return 0
# def step2():
#     print(2)
#     return 1 # there is a break
# def step3():
#     print(3)
#     return 0
# def step4():
#     print(4)
#     return 1 # there is a break
# def step5():
#     print(5)
#     return 0

# entry = input("Entrez un chiffre : ")

# stepsR = (step1,step2,step3,step4,step5)[int(entry):]
# for step in stepsR:
#     if step() : break

# print("Fin")

def function1():
    print("function 1 was executed")
def function2():
    print("function 2 was executed")
def function3():
    print("function 3 was executed")

switch = {1 : function1, 2: function2, 3:function3}

x = 2
print(x)
switch.get(x, function3)()
x = 1
print(x)
switch.get(x, function2)()