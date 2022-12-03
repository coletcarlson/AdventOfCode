f = open(r'C:\Users\colec\Documents\Coding\AOC\day2\input2.txt')

def replaceLetters(line):
    line = line.replace('X','A')
    line = line.replace('Y','B')
    line = line.replace('Z','C')
    line = line.strip()
    return line

def score_round(rounds):
    if rounds[1] == 'A': #user selection
        if rounds[0] == 'A': 
            score = 3
        elif rounds[0] == 'B':
            score = 0
        else:
            score = 6
    elif rounds[1] == 'B':
        if rounds[0] == 'A': 
            score = 6
        elif rounds[0] == 'B':
            score = 3
        else:
            score = 0
    else:
        if rounds[0] == 'A': 
            score = 0
        elif rounds[0] == 'B':
            score = 6
        else:
            score = 3
    return score

def score_selection(rounds):
    if rounds[1] == 'A':
        score = 1
    elif rounds[1] == 'B':
        score = 2
    else:
        score = 3
    return score

rounds = []
for line in f.readlines():
    line = replaceLetters(line)
    rounds.append(line.split(' '))

total_score = 0
for game in rounds:
    total_score += score_selection(game) + score_round(game)

print(total_score)
