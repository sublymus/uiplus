/***

// Task 1:

begin
 print(Range(-20,30,3));
end.


// Task 2:

begin
var n := ReadInteger('n = ?');
 print(SeqRandomInteger(n,-50,100));
end.

// Task 3:

begin
var n := ReadInteger('n = ?');
var sq:=SeqGen(n, 4, x->x+2);
sq.println;
end.

// Task 4:

begin
var sq:=SeqGen(10, x->x*3);
sq.println;
end.


// Task 5:

begin
var sq:=SeqGen(15,2, x->x/2);
sq.println;
end.



// Task 6:

begin
var sq:=SeqGen(15,2, x->x/2);
sq.println;
end.


// Task 6:

begin
var sq:=SeqGen(10,2017, x->x-5);
sq.println;
end.

// Task 7:

begin
var n := ReadInteger('n = ?');
var sq:=SeqGen(n,5, x->(x/2)-1);
sq.println;
end.

// Task 8:

begin
var n := ReadInteger('n = ?');
var sq:=SeqGen(n,1, x->x*x);
sq.println;
end.


// Task 9:

begin
var n := ReadInteger('n = ?');
var sq:=SeqGen(n,1,2, (x,y)->(x+y)/2);
sq.println;
end.



// Task 10:

begin
Seq(5).Cycle().Take(20).Println;
2.Step(3).Take(20).Println
1.Iterate(x->x*2).Take(20).Println
Seq(1,2,10,5).Cycle().Take(20).Println;
end.


// Task 11:


begin
var s:=Seq(-4, 25, -7, -12, 16)
var s1:=s.Where((x)->x >=0);
s1.Println;
var s2:=s.Where((x)->x mod 5=0);
s2.Println;
end.



// Task 12:


begin
var s:=Seq(4, 25, 7, 12, 16)
 var s1:=s.Select(x->sqrt(x));
 s1.Println;
end.


// Task 13:

begin
  var c:=Seq(-1 2 3 -5 6 -7 8 9 11);
  c.Println();
  var n:=c.count(c->c<0);
  println($'number of negative elements is {n} ');
end.

// Task 14:
begin
var q:=Seq(1.2 , 3.1  ,6.7 , 2.8,  3.4);.Println;
var s:=0.0;
foreach var x in q do
  s*=x;
print('product = ', s)
end.


// Task 15:

begin
//var q:=Seq( 1 ,1 ,2, 3, 5, 8,13, 21, 34, 55, 89).Println;
var q:= SeqGen(20,1,1,(x1,x2)->x1+x2)

  var s2:=q.Where((x)->x<100);
  s2.Sum.Println;
end.

// Task 16:

begin
  var c:=Seq(1 5 2 10 1 10);
  c.Println();
  var s2:=c.Where((x)->x mod 2=1);
  s2.Sum.Println;
end.


 */ 
