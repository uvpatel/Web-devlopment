#include <iostream>
using namespace std;

class swapcls
{
private:
    int a, b;

public:
    void init()
    {
        cin >> a >> b;
    }
    void display(){
        cout << a  << " "<< b;
    }

    void swap_fun()
    {
        // swap(a, b);
        int temp = a;
        a = b;
        b = temp;
        cout << "Inside class" << endl;
        cout << "a is " << a << "b is : " << b << endl;
    }
};

int main()
{
    swapcls c1;

    c1.init();
    c1.display();
    c1.swap_fun();
    return 0;
}