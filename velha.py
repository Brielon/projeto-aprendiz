global folhaEmBranco = """
 1 | 2 | 3
---+---+----
 4 | X | 6
---+---+----
 7 | 8 | 9
"""

def JogadorTurn(folha):
    print(folha,"marque 'O'(1-9):")
    bolinha = input()
    if (bolinha in folha):
        folha.replase(bolinha,"O")
    

def iniciar(folha = folhaEmBranco):
    JogadorTurn(folha)
iniciar()