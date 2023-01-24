#include<iostream>
using namespace std;

int main(int argc,char*argv[]){
    
cout<<"quantidade de argumentos passados:"<<argc-1;//-1 porque o proprio nome do exe e um argumento e queremos saber os que passamos para ele
cout<<"\nPrimeiro argumento passado: "<<argv[1];

    return 0;
}