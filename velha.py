global folhaEmBranco = """
 1 | 2 | 3
---+---+----
 4 | X | 6
---+---+----
 7 | 8 | 9
"""

import randon

def TurnoAdversario(folha):
    bolinha = str(int(randon.randon()*9))
    if (bolinha in folha):
        folha.replase(bolinha,"X")
        JogadorTurn(folha)
     else:
        TurnoAdversario(folha)

def JogadorTurn(folha):
    print(folha,"marque 'O'(1-9):")
    bolinha = input()
    if (bolinha in folha):
        folha.replase(bolinha,"O")
    else:
        print("Opção invalida")
        JogadorTurn(folha)
    TurnoAdversario(folha)

def iniciar(folha = folhaEmBranco):
    JogadorTurn(folha)
iniciar()
