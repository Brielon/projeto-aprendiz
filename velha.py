import random
from Status import teste

def Status(folha):
    return Status.teste(folha)
    # return "Continue"

def TurnoAdversario(folha):
    bolinha = str(int(random.random()*9))
    if (bolinha in folha):
        folha = folha.replace(bolinha,"X")
        if Status(folha)=="Continue":
            JogadorTurn(folha)
        else:
            print(Status(folha))
            exit()
        
    else:
        TurnoAdversario(folha)

def JogadorTurn(folha):
    print(folha,"marque 'O'(1-9) ou \n*-1 Ganhei\n*-2 Perdi\n*-3 Deu Velha")
    bolinha = input()
    if (bolinha in folha):
        folha = folha.replace(bolinha,"O")
        if Status(folha)=="Continue":
            TurnoAdversario(folha)
        else:
            return Status(folha)
    else:
        print("Opção invalida")
        JogadorTurn(folha)

def iniciar():
    print(JogadorTurn("""
     1 | 2 | 3
    ---+---+---
     4 | X | 6
    ---+---+---
     7 | 8 | 9
    """))
iniciar()
