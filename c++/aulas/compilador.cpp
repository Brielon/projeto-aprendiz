#include <iostream>
#include <stdlib.h>
using namespace std;
//concat()concatena duas strings deixando um espaco entre elas, deixa a nova string no lugar da primeira
void concat(char * a,char * b){
	char frase[100];
	char espaco[]=" ";
	int i=0;
do{
	i++;
}while(a[i]);
//a variavel "i" esta armazenando a quantidade de espaços alocados e usado por "a"
a[i++]=espaco[0];
int IdoB=0;
do{
	a[i++]=b[IdoB++];	
}while(b[IdoB]);
a[i]='\0';
	}
int main (){
	char frase[100]="g++";
	char f[100]="g++";
cout<<"Qual cpp compilar?\n";	
cin>>frase;
concat(f,frase);
concat(f,"-o arquivo -Wall");
//system(f);
cout<<"Executar "<<frase<<"?(S/N)\n";
char teste;
cin>>teste;
switch(teste){
	case 'S':
		case 's':
		system("arquivo.exe");	
			break;
}
				cout<<"Nomear programa?(S/N)";
				char resposta;
				cin>>resposta;
				switch(resposta){
	case 'S':
		case 's':
			cout<<"nome: ";
			char nome[10];
			cin>>nome;
			char comando[50]="ren arquivo.exe";
			concat(comando,nome);
			system(comando);
			break;	
}

	return 0;
}