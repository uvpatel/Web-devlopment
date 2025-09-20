#include <iostream>
using namespace std;

class B;
class A
{
private:
    int a;

public:
    void set()
    {
        a = 10;
    }
    friend int add(A, B);
};

class B
{
    private:
    int b;
    
    public:
    void setdata()
    {
        b = 25;
    }
    friend int add(A, B);
};


int add(A obja,B objb){
    return (obja.a + objb.b);
}




int main()
{

    return 0;
}