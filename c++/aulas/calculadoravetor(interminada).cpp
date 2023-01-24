/*
	calculadora
	operaçoes permitidas
	+ adiçao
	- subtraçao
	* multiplicaçao
	/divisao
*/
#include <iostream>
using namespace std;

char ns(char conta[20],int opcao);
int main(){
	float numeros[2];
	char conta[20];
	cout << "digite a sua conta";
	cin >> conta;
	float primeiro_numero = ns(conta,1),
			segundo_numero = ns(conta,2);
	int i = ns(conta,3); 

	cout<<"o resultado e: "; 
	switch(conta[i]){
		case '+':
			cout<<primeiro_numero + segundo_numero;
			break;
		case '-':
			cout<<primeiro_numero - segundo_numero;
			break;
		case '*':
			cout<<primeiro_numero * segundo_numero;
			break;
		case '/':
			cout<<primeiro_numero / segundo_numero;
			break;
	}
	cout<<primeiro_numero ;
	
	
	return 0;
}
char ns(char conta[20],int opcao)
{
	return "q";
}
	/*char resultado[20];
	int i;
	switch(opcao){
		case 1:
			for(i=0;i<=20;i++){
				char teste = "-";
				
			if(teste=="+"||teste=="-"||teste=="/"||teste=="*")
			return (float)resultado;
			resultado = resultado+conta[i];}
		case 2:
			i=(int)ns(conta,4)+1
			for(i;i<=20;i++){
			if(conta[i]=="\0")
			return resultado;
			resultado = resultado+conta[i];}

		case 3:{
					for(int i=0;i<=20;i++){
						if(conta[i]=="+"||conta[i]=="-"||conta[i]=="/"||conta[i]=="*")
							return conta[i];
					}
		case 4:
					for(int i=0;i<=20;i++){
						if(conta[i]=="+"||conta[i]=="-"||conta[i]=="/"||conta[i]=="*")
							return i;
					}
						
	   	   	   	   	   	}
}
}
*/
