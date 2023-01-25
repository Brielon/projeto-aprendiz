#include<iostream>
#define MAX 10//MAX sempre sera 10
using namespace std;
class Carro
{
    public:
    char nome[100];
    char cor[20];
    char placa[20];
    double preco;
};
int main(int argc,char*argv[]){
    Carro carros[MAX];//criei uma arrey de 10 carros"objeto da classe carro"
    int i = 0;
    while(true){
        cout<<"Digite o nome do carro"<<endl;
        cin>>carros[i].nome;
        cout<<"Digite o preço do carro"<<endl;
        cin>>carros[i].preco;
        cout<<"Voce deseja continuar?<S>SIM ou <N>NAO";
        cout<<endl;


    }

    return 0;
}