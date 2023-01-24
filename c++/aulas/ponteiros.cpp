// c++ ponteiros.cpp -o ponteiro -Wall
//.\ponteiro.exe
#include <iostream>
using namespace std;

int main(){
    char array[]="abraso_terceiro";
    char * ponteiro=&array[5];
    cout<<*ponteiro<<endl;
    cout<<*(array+5);

}