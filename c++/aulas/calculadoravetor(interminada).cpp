#include<iostream>
using namespace std;
int MyToLenth(char * tam){
	int i=0;
	while (tam[i++]){}
	return i-1;//menos um pois o "\0" tambem e contado nesta funçao
}
int CharToInt(char caracter){
	switch (caracter)
	{
	case '0':
		return 0;
	case '1':
		return 1;
	case '2':
		return 2;
	case '3':
		return 3;
	case '4':
		return 4;
	case '5':
		return 5;
	case '6':
		return 6;
	case '7':
		return 7;
	case '8':
		return 8;
	case '9':
		return 9;
	default:
	cout<<caracter<<"->NAO E UM NUMERO"<<endl;
		return 0;
	}
}
int multiplicador(int numero){
int retorno=10;
	while(numero>1){
		retorno*=10;
		numero--;
	}

	return retorno;
}
double ConvertStringInDouble(char * string){
	int tamanho=MyToLenth(string);
	double numero=0;
	--tamanho;
	int posicao=tamanho;
	for(int i=0;i<=tamanho;i++){
		numero+=CharToInt(string[i])*multiplicador(posicao--);
	}


	return numero;
}
double Conta_Simbolo(double n1,char* simbolo,double n2){
	switch (simbolo[0])
	{
	case '-':
		return n1-n2;
	case '+':
		return n1+n2;
	case '*':
		return n1*n2;
	case '/':
		return n1/n2;
		default:
		cout<<"sinal nao configurado";
		return 0;
	}
	
}
double calculo(char * conta){
	int i=0;
	char primeiro[20],segundo[20],sinal;
	while (!(conta[i]=='+'||conta[i]=='-'||conta[i]=='/'||conta[i]=='*'))
	{
		primeiro[i]=conta[i];
		i++;
	}
	primeiro[i]='\0';
	sinal=conta[i++];
	while(conta[i++]){
		int contador=0;
		segundo[contador++]=conta[i];
	}
double n1=ConvertStringInDouble(primeiro);
double n2=ConvertStringInDouble(segundo);
	return Conta_Simbolo(n1,sinal,n2)
}
int main(int argc,char*argv[]){
	char conta[100];
	cout<<"calculo: ";cin>>conta;cout<<"=";cout<<calculo(conta);
	return 0;
}