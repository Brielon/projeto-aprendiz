//descriçao do uso do swicth
#include<iostream>
using namespace std;
int main(){
	int teste = 50;
	switch(teste){
		case 1:
			cout<<"numero 1";
			break;
		case 2:
			cout<<"numero 2";
			break;
		case 3:
			cout<<"numero 3";
			break;
		//o default e opcional
		   default:
		   	cout<<"numero nao esta nas alternaticas mas e o: "<<teste;	
	}
	return 0;
}
//bool armazena variaveis booleanas ...ou true ou false