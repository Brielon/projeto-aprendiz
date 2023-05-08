import random

class folhaLimpaClasse:
    papel = """
     1 | 2 | 3
    ---+---+---
     4 | 5 | 6
    ---+---+---
     7 | 8 | 9
    """
    def Posicao(STR):
        contador = 0
        while str != papel[contador]:
            contador += 1
        return int(contador)

def Marcado(OX,n1,n2,n3,folha):
    folhaLimpa = folhaLimpaClasse()
    UM = folhaLimpa.Posicao("1")
    DOIS = folhaLimpa.Posicao("2")
    TRES = folhaLimpa.Posicao("3")
    QUATRO = folhaLimpa.Posicao("4")
    CINCO = folhaLimpa.Posicao("5")
    SEIS = folhaLimpa.Posicao("6")
    SETE = folhaLimpa.Posicao("7")
    OITO = folhaLimpa.Posicao("8")
    NOVE = folhaLimpa.Posicao("9")
    if 

def Status(folha):
    if Marcado(X,1,2,3,folha):return "Derrota"
    else 
# return "continue" or "deu velha" or "voce perdeu" or "voce ganhou"

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
    print(folha,"marque 'O'(1-9):")
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
