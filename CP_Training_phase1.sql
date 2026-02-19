use classicmodels;
select * from customers;
select * from employees;
select lastname,firstname,email from employees;
select concat(firstname," ",lastname) as Full_name , email from employees;
select * from employees where reportsTo =1002;
select * from employees where reportsTo !=1002;
select * from employees where reportsTo >1056;
select * from employees where reportsTo is null;
select * from employees where reportsTo is not null;
select * from employees where jobtitle ="sales rep";
select * from employees where jobtitle like '%sales%';
select * from employees where jobtitle like 'sales%';
select * from employees where jobtitle like '%sales';
select * from employees where jobtitle like '%sales%';
select * from employees where jobtitle like '_____manager%';


select * from orders;
select distinct status from orders;
select * from orders where status in ('onhold' , 'disputed' , 'in process');
select * from orders where status not in ('onhold' , 'disputed' , 'in process');
select * from orders where orderdate between '2004-09-03' and '2004-09-08';
select * from orders where orderdate >= '2004-09-03' and orderdate <= '2004-09-08';
select * from orders where orderdate >= '2004-09-03' and orderdate <= '2004-09-08' or status = 'cancelled';



select * from payments;
select * from payments order by amount;
select * from payments order by amount desc;
select * from orders where orderdate >= '2004-09-03' and orderdate <= '2004-09-08' or status = 'cancelled' order by status desc, orderdate asc;
select * from orders where orderdate >= '2004-09-03' and orderdate <= '2004-09-08' or status = 'cancelled' order by status asc, orderdate desc;
select * from orders where orderdate >= '2004-09-03' and orderdate <= '2004-09-08' or status = 'cancelled' order by status asc, orderdate desc limit 3 offset 2;
select * from employees order by employeenumber desc limit 10;


-- Day 2 of training 18-02-2026	
use classicmodels;
select orderdate,count(*) as nooforders from orders group by orderdate;
select reportsto,count(reportsto) from employees group by reportsto;
select count(reportsto) from employees;
select count(distinct reportsto) from employees;
select ordernumber,productcode,sum(quantityordered),min(quantityordered),max(quantityordered) from orderdetails group by productcode,ordernumber;
select count(*) from orders where orderdate  between '2003-01-06' and '2003-01-18'; 

select ordernumber,productcode,sum(quantityordered),min(quantityordered),max(quantityordered),avg(quantityordered)
from orderdetails where productcode like 'S10%'
group by productcode , ordernumber
having max(quantityordered) >=40
order by productcode desc
limit 10 offset 2;


-- Subqueries
select * from orderdetails;
select * from products;

select productcode ,count(ordernumber) from orderdetails where productcode = 
(select productcode from products where productname = '1969 Harley Davidson Ultimate Chopper') group by productcode;

select(select productname from products p where p.productcode = o.productcode) as productcode,
count(ordernumber) from orderdetails o where productcode in(select productcode from products where productline = 'motorcycles')
group by productcode;



-- joins
use classicmodels;
select * from products;

select productname, p.productline,productdescription 
from products p inner join productlines pl
on p.productline = pl.productline;

select o.ordernumber,o.status,sum(quantityordered*priceeach) as total_sales from orders o inner join orderdetails od
on o.ordernumber = od.ordernumber group by o.ordernumber;

select o.ordernumber,o.status,od.quantityordered,od.priceeach, o.orderdate,productname 
from orders o inner join orderdetails od
on o.ordernumber = od.ordernumber inner join products using (productcode);


select c.customernumber ,customername,ordernumber,status from customers c 
left join orders o on c.customernumber = o.customernumber;

select employeenumber,customernumber from customers right join employees 
on  salesrepemployeenumber = employeenumber where customernumber is null;

select concat(e.lastname," ",e.firstname) manager,concat(mgr.lastname," ",mgr.firstname) employee from employees e
 left join employees mgr on e.employeenumber = mgr.reportsto;        







