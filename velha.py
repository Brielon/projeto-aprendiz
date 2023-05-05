import random

def TurnoAdversario(folha):
    bolinha = str(int(random.random()*9))
    if (bolinha in folha):
        folha = folha.replace(bolinha,"X")
        JogadorTurn(folha)
    else:
        TurnoAdversario(folha)

def JogadorTurn(folha):
    print(folha,"marque 'O'(1-9):")
    bolinha = input()
    if (bolinha in folha):
        folha = folha.replace(bolinha,"O")
    else:
        print("Opção invalida")
        JogadorTurn(folha)
    TurnoAdversario(folha)

def iniciar():
    JogadorTurn("""
 1 | 2 | 3
---+---+----
 4 | X | 6
---+---+----
 7 | 8 | 9
""")
iniciar()
