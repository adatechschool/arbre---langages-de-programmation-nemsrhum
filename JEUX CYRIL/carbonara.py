ingredientCarbonara=["Pâtes","Oeuf","Sel","Poivre","Lardon","Oignon","Parmesan"]

# 0) Version BOUCLE FOR
# print("0) Version BOUCLE FOR : \nNombre d'ingrédient = " , len(ingredientCarbonara) , "\nIl faut :")

# for i in range(len(ingredientCarbonara)) :
#     ingredientCarbonara.sort()
#     print(i+1," : ",ingredientCarbonara[i])
#     i+=1  # pas besoin il le fait tout seul!!!

# 1) Version document.getElementById("test1").innerHTML BOUCLE SWITCH CASE
# in for loop add 

# if step() : break  instead of step() only

# and

# add return 1 or 0 (1 if you want break at yhis level)

# it will make a perfect switch case

# for i in range(len(ingredientCarbonara)) :
#     ingredientCarbonara.sort()

#     def fcnPâtes():
#         print(i+1," : ",ingredientCarbonara[i])
#         return 1 # there is a break
#     def fcnOeuf():
#         print(i+1," : ",ingredientCarbonara[i])
#         return 1 # there is a break
#     def fcnSel():
#         print(i+1," : ",ingredientCarbonara[i])
#         return 1 # there is a break
#     def fcnPoivre():
#         print(i+1," : ",ingredientCarbonara[i])
#         return 1 # there is a break
#     def fcnLardon():
#         print(i+1," : ",ingredientCarbonara[i])
#         return 1 # there is a break
#     def fcnOignon():
#         print(i+1," : ",ingredientCarbonara[i])
#         return 1 # there is a break
#     def fcnParmesan():
#         print(i+1," : ",ingredientCarbonara[i])
#         return 1 # there is a break
#     # entry = input()
#     steps = (fcnPâtes,fcnOeuf,fcnSel,fcnPoivre,fcnLardon,fcnOignon,fcnParmesan)
#     for step in steps:
#         if step() : break

#     print("Fin")

# 2) Version BOUCLE FOR IN
print("2) Version BOUCLE FOR IN : \nNombre d'ingrédient = " , len(ingredientCarbonara) , "\nIl faut :")
# stop=true
j=0
ingredientCarbonara.sort()

for i in ingredientCarbonara :
    if (j<=len(ingredientCarbonara)):
        j+=1
        print(j," : ",i)
        
# 3) Version BOUCLE WHILE
print("3) Version BOUCLE WHILE : \nNombre d'ingrédient = " , len(ingredientCarbonara) , "\nIl faut :")
ingredientCarbonara.sort()
i=0

while (i< len(ingredientCarbonara)) :
        print(i+1," : ",ingredientCarbonara[i]) 
        i+=1   # BESOIN DE INCREMENTATION ICI !!!