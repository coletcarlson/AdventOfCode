class Node:
      # constructor
  def __init__(self, data = None, next=None, last=None): 
    self.data = data
    self.next = next
    self.last = last

def buildNodes():
    nodes = []
        #make linked list of results
    a = Node('A')
    b = Node('B')
    c = Node('C')
    a.next = b #next is what it loses to, last is what it beats
    a.last = c
    b.next = c
    b.last = a
    c.next = a
    c.last = b
    nodes.append(a)
    nodes.append(b)
    nodes.append(c)
    return nodes

def getNode(nodes,value):
    for node in nodes:
        if node.data == value:
            return node
    return None

def scoreChoice(choice):
    if choice == 'A':
        score = 1
    elif choice == 'B':
        score = 2
    else:
        score = 3
    return score

def selectChoice(line, nodes):
    opponent = line.split(' ')[0]
    result = line.split(' ')[1].strip()
    if result == 'X': #lose
        node = getNode(nodes, opponent)
        choice = node.last.data
    elif result == 'Y': #draw
        choice = opponent
    else: #win
        node = getNode(nodes, opponent)
        choice = node.next.data
    return choice 

def scoreRound(line):
    result = line.split(' ')[1].strip()
    if result == 'X': #lose
        score = 0
    elif result == 'Y': #draw
        score = 3
    else: #win
        score = 6
    return score

if __name__ == '__main__':
    
    f = open(r'C:\Users\colec\Documents\Coding\AOC\day2\input2.txt')
    nodes = buildNodes()
    total_score  = 0
    score = 0
    for line in f.readlines():
        choice = selectChoice(line, nodes)
        score = scoreRound(line) + scoreChoice(choice)
        total_score += score
        print(line + choice + " " + str(score) + " " + str(total_score))
    print(total_score)
   
