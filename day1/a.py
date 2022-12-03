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

cals = list(elfs.values())
keys = list(elfs.keys())
max_cals = max(elfs.values())
# max_key = cals.index(max_cals)
print(max_cals)
