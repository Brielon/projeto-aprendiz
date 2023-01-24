//voltando a programar em c++
#include <iostream>
using namespace std;
int main(){
	int n1 = 20,
		n2 = 30;
	cout<<"numeros "<<n1<<" e "<<n2<<endl;
	//operadores matematicos
	cout<<"soma"<<n1+n2<<endl;
	cout<<"subtraçao"<<n1-n2<<endl;
	cout<<"divisao"<<(float)n1/n2<<endl;
	cout<<"resto,ou modulo"<<n1 % n2<<endl;
	//operadores unarios
	int n = 1;
	n1++;//(n1=n1+1)
	n = n+1; // == n += 1;
	
	return 0;
}