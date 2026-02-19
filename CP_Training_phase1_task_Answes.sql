use sql_practice;
select * from customers where country = "india";
select * from employees order by salary desc limit 3 ;
select distinct status from orders;
select * from orders order by order_date desc limit 5;
select * from employees order by salary asc limit 3 offset 2;
select * from customers where city = "pune" order by first_name;




-- 1. Retrieve employees whose salary is between 55,000 and 85,000
select * from employees where salary between 55000 and 85000;
-- 2. Find orders placed between 1st March 2024 and 31st August 2024.
select * from orders where order_date between '2024-03-01' and '2024-08-31';
-- 3. Get employees hired between 2021 and 2023.
select * from employees where hire_date between '2021-01-01' and '2023-12-31';
-- 4. Retrieve orders where amount is between 2000 and 4000.
select * from orders where amount between 2000 and 4000;


-- 5. Get customers from India, USA, or UK.
select * from customers where country in ('india','usa','uk');
-- 6. Retrieve employees working in IT, HR, or Finance departments.
select * from employees where department in ('IT', 'HR', 'Finance');
-- 7. Find orders with status Completed or Pending.
select * from orders where status in('completed','pending');
-- 8. Get customers from Pune, Mumbai, or Delhi.
select * from customers where city in ('Pune', 'Mumbai', ' Delhi');




-- 9. Retrieve employees not working in IT department.
select * from employees where department !='it';
-- 10. Find customers not from India.
select * from customers where country !='india';
-- 11. Get orders that are not Cancelled.
select * from orders where status !='Cancelled';
-- 12. Retrieve employees not in HR or Sales.
select * from employees where department not in ('hr','sales');

-- 13. Get IT employees earning more than 80,000.
select * from employees where department = 'it' and salary>80000;
-- 14. Retrieve customers from India and city Pune.
select * from customers where city ='pune' and country = 'india';
-- 15. Find orders completed in 2024 with amount greater than 3000.
select * from orders where status = 'completed' and year(order_date)=2024  and amount >3000;
-- 16. Get employees hired after 2022 and salary above 60,000.
select * from employees where year(hire_date)>2022 and salary>60000; 

-- 17. Retrieve employees from IT department or earning more than 90,000.
select * from employees where department = 'it' or salary>90000;
-- 18. Get customers from Pune or Bangalore.
select * from customers where city ='pune' or city = 'bangalore';
-- 19. Find orders that are Pending or amount greater than 4500.
select * from orders where status = 'pending' or  amount >4500;
-- 20. Retrieve employees hired before 2022 or salary less than 55,000.
select * from employees where year(hire_date)<2022 or salary>55000; 



-- 21. Find customers whose first name starts with 'A'.
select * from customers where first_name like 'A%';
-- 22. Retrieve employees whose last name ends with 'a'.
select * from customers where first_name like '%A';
-- 23. Get customers whose email contains 'gmail'
select * from customers where email like '%gmail%';
-- 24. Find employees whose first name contains 'ra'
select * from customers where first_name like '%ra%';


-- 25. Get IT employees with salary between 70,000 and 95,000.
select * from employees where department = 'it' and salary between 70000 and 95000; 
-- 26. Retrieve customers from India or USA but not from Pune.
select * from customers where country in ('india' , 'usa') and city !='pune';
-- 27. Find orders completed in 2024 with amount between 2000 and 5000.
select * from orders where status='completed' and year(order_date)=2024 and amount between 2000 and 5000;
-- 28. Get employees in IT or HR earning more than 65,000.
select * from employees where department  in ('it' , 'hr') and salary >65000;
-- 29. Retrieve customers whose name starts with 'R' and country is India.
select * from customers where first_name like 'R%' and country = 'India';
-- 30. Get top 5 highest paid employees from IT department
select * from employees where department = 'it' order by salary desc limit 5;


-- Day 2 Tasks
-- Intermediate–Advanced SQL practice**.

--  SUBQUERY Exercises
use sql_practice;
-- Find employees earning more than the average salary.

select * from employees
where salary >(
select avg(salary) as avgSalary from employees
);

-- Get customers who have placed at least one order.
select * from customers where customer_id in (select customer_id from orders );

-- Retrieve customers who have never placed any order.
select * from customers where customer_id not in (select customer_id from orders );

-- Find employees earning more than the highest salary in HR department.
select * from employees where salary >(
select salary from employees where salary in 
(select max(salary) from employees where department = 'hr'));

-- Get orders where the amount is greater than the average order amount.
select * from orders where amount>(
select avg(amount) from orders);
-- Retrieve employees who earn the same salary as any employee in Finance department.
INSERT INTO employees 
(first_name, last_name, department, job_title, salary, hire_date)
VALUES 
( 'Ravi', 'Kumar', 'HR', 'HR Executive', 60000.00, '2025-05-01');

select * from employees where salary in(
select salary from employees where department='finance') and department !='finance';

-- Find customers who placed orders worth more than 4000.
select * from customers where customer_id in (select customer_id from orders where amount > 4000);

-- Get the second highest salary from employees table.
select * from employees where salary in (
select max(salary) from employees where salary <(
select  max(salary) from employees));

-- Retrieve employees hired after the most recently hired HR employee.
select * from employees where hire_date in (select max(hire_date) from employees where department ="hr");
--  Find customers who placed orders in 2025.
select * from customers where customer_id in (select customer_id from orders where year(order_date) ="2025"  );

--  GROUP BY Exercises
-- Count number of employees in each department.
select department,count(*) as countofemployees from employees group by department;
-- Find total salary expense per department.
select department, sum(salary) as sumofemployees from employees group by department;
-- Get average salary per department.
select department, avg(salary) as averagesalary from employees group by department;
-- Count number of customers per country.
select count(country) as countrycounts from customers group by country;
-- Find total order amount per customer.
select sum(amount) as totalorderamount from orders group by customer_id;
-- Get total number of orders per status.
select sum(order_id) as totalorders from orders group by status;
-- Find maximum salary in each department.
select department, max(salary) as maxsalary from employees group by department;
-- Get minimum order amount per year.
select min(amount) from orders group by year(order_date);

--  HAVING Exercises
-- Find departments where average salary is greater than 70,000.
select department from employees group by department having avg(salary) >'70000';
--  Retrieve customers who have placed more than 1 order.
select customer_id from orders group by customer_id having count(customer_id) > 1;
-- Find countries having more than 2 customers.
select country from customers group by country having count(country) >2;
-- Get departments where total salary expense is more than 200,000.
select department from employees group by department having sum(salary) > '200000';
-- Find customers whose total order amount exceeds 5,000.
select customer_id from orders group by customer_id having sum(amount) > 5000;
-- Retrieve order statuses having more than 3 orders.
select status from orders group by status having count(status) >3;



-- Mixed (Subquery + Group By + Having)

--  Get customers whose total order amount is greater than the average total order amount of all customers.
-- select * from customer where customer_id in 
select customer_id from orders group by customer_id having sum(amount) 
<(select  avg(amount) from orders ); 
 

-- Find departments whose average salary is greater than the overall average salary.
select department from employees group by department having avg(salary) >(select avg(salary) from employees);

-- Retrieve employees who earn more than the average salary of their own department.
select * from employees e 
where salary > (
select avg(salary) from employees where department =e.department);


-- Get customersorders who placed more orders than the average number of orders per customer.
SELECT customer_id, COUNT(order_id) AS total_orders
FROM orders
GROUP BY customer_id
HAVING COUNT(order_id) > (
    SELECT AVG(order_count)
    FROM (
        SELECT COUNT(order_id) AS order_count
        FROM orders
        GROUP BY customer_id
    ) AS customer_orders
);

-- Find department with the highest total salary expense.
select department from employees group by department having sum(salary)=
(select max(total) from(select sum(salary) as total from employees  group by department)as t); 

-- Retrieve customers who placed the highest single order amount
select * from customers where customer_id in(
select customer_id from orders where amount =(
select max(amount) from orders
));


-- INNER JOIN Exercises

-- Retrieve all orders along with customer first name and city.
use sql_practice;
select o.*,c.first_name,c.last_name from customers c inner join  orders o   on c.customer_id = o.customer_id;

-- Get customer name, order date, and order amount for all completed orders.

select concat(c.first_name,c.last_name) as Customername  ,o.order_date,o.amount from customers c inner join 
orders o on c.customer_id = o.customer_id;

-- List customers who have placed orders in 2025.
select concat(c.first_name,c.last_name) as Customername ,o.order_date >= '2025-01-01' AND o.order_date < '2025-12-31' as orders_placed_in_2025 from 
customers c inner join orders o on c.customer_id = o.customer_id;

-- Show customer name and total order amount (use INNER JOIN + GROUP BY).
select concat(c.first_name,c.last_name) as Customername,sum(o.amount) from customers c inner join 
orders o on c.customer_id = o.customer_id group by concat(c.first_name,c.last_name);
    
-- Retrieve order details along with customer country for orders above 3000.
select o.*,c.country from customers c inner join orders o on c.customer_id = o.customer_id and amount >3000;

-- Get employees and their department name (if department table existed, assume join scenario)
select concat(e.first_name,e.last_name)as empname ,e.department  from employees e;







-- Left Join
-- Retrieve all customers and their order details (include customers who have not placed any orders).
select o.*,c.* from customers c left join orders o on c.customer_id = o.customer_id;

--  Get customers with no orders. 
INSERT INTO customers (first_name, last_name, email, city, country) VALUES
('sanjay', 'A', 'amit@gmail.com', 'Pune', 'India');
select c.* from customers c left join orders o on c.customer_id = o.customer_id where o.customer_id is null;

-- Show all customers and count of orders placed by each.
select c.*,count(o.order_id) from customers c left join orders o on c.customer_id = o.customer_id group by customer_id;

-- Retrieve all employees and show their department (include employees even if department is NULL).
select e.*,e.department from employees e;

-- Get all customers along with total order amount (including those with NULL totals).
select e.*,sum(o.amount) from employees e left join orders o on e.employee_id = o.order_id group by e.employee_id;



-- Right Join

-- Retrieve all orders and corresponding customer details (include orders even if customer record is missing).
select o.*,c.* from customers c right join orders o on c.customer_id = o.order_id;  
-- Show all orders with customer name, including orders with NULL customer info.
select o.* ,concat(c.first_name,c.last_name) as customername 
from customers c right join orders o on c.customer_id = o.order_id;
-- Get order details even if customer city information is missing.
select o.*,c.* from customers c right join orders o on c.customer_id = o.order_id; 


-- SELF JOIN Exercises (Employees table)
-- Retrieve employee name along with their manager name.
use classicmodels;
select e.firstname,e.lastname,e.reportsto from employees e ;
-- Find employees who report to the same manager.

Get list of managers and count of employees reporting to each manager.

-- Retrieve employees who do not have a manager.



-- CROSS JOIN Exercises
-- Generate all possible combinations of customers and employees.

-- Create all possible combinations of departments and order statuses.

-- Generate combinations of customers and available job titles.




-- Mixed JOIN Challenge (Interview Level)
-- Retrieve customer name and total order amount sorted by highest total.

-- Get customers who placed more than 2 orders.

-- Find customers who never placed any completed order.

-- Retrieve top 3 customers based on total purchase amount.

-- Find employees whose salary is greater than the average salary of their department (using JOIN + subquery).

-- Get customers who placed the highest order amount.

