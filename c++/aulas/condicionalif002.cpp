#include <iostream>
using namespace std;
int main(){
	//ifs aninhados
	int teste = 3;
	if(teste==1)
		cout<<"teste e 1";
	else 
		if(teste==2)
			cout<<"teste e 2";
		else 
			if(teste == 3)
				cout<<"teste e 3";
			else 
			cout<<"teste n e nem 1 nem 2 nem 3";
	return 0;
	
}