#include<iostream>
using namespace std;
//uma funcao que retorne o tamanho da string OK
int my_strlen(char * string){
    int tamanho=0;
    while(string[tamanho]){
        tamanho++;
    }

    return tamanho;
}
//uma funçao que concatene duas strings
char * mystrcat(char * primeiro,char * segundo){
int i=my_strlen(primeiro);
char espaço[]=" ";
primeiro[i++]=espaço[0];
int i1 = 0;
do{
primeiro[i++]=segundo[i1++];
}while(segundo[i1]);
primeiro[++i]='\0';
return primeiro;
}
int main(){
    char * nome1 = new char [100];//char nome1[100];
nome1="teste";
    int teste=my_strlen("teste");
cout<<mystrcat(nome1,"bem sucedido");
    return 0;
}