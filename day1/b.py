f = open('input.txt')

ctr = 1
elfs = dict()
calories = f.readlines()
total_cals = 0
for i, cal in enumerate(calories):
    if calories[i] == "\n":
        elfs[ctr] = total_cals
        total_cals = 0
        ctr += 1
    else:
        total_cals +=  int(calories[i])

calsList = list(elfs.values())

top3max = 0
for i in range(3):
    max_cals = max(calsList)
    top3max += max_cals
    calsList.remove(max_cals)
    
print(top3max)
