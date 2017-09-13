# Cuny-Replica

This app would be a remake of the current cuny system as it is not synched well with other servers.





# User Stories
* Cuny
    * Landing page would have 
    * Authentication
        * Students would have a register page
            * Students would create a user
        * Students would log in with their credentials
            * Automatically generates an account for all Finantial Aid Servers
            * Students would have access to 
                * Course History
                * Current Courses
                * Join courses
                * Rate courses
                * Backout of courses
                * Swap Courses
                * Pay tuition
                

        * Administrators would have a register page that needs acceptance from Administrator
        * Administrators would log in with their credentials
            * Administrators would be able to create courses
        * Professors would have a register page that needs acceptance from Admin
        * Professors would log in with their credentials
            * Professors could view their students
            * Professors could request a new course to administration
            * Professors could give grades
                * Midterm
                * Final


* Financial Aid
    * Administrators would have a register page that needs acceptance from another admin
    * Admin would would log in with their credentials
    * Admin could view data from a students account
    * Admin could have toggles for data but cannot directly influence the data because much would be automated







# Wireframes
![Cuny Portal](./photos/20170911_165019.jpg)
![Student View](./photos/20170911_165026.jpg)
![Professor View](./photos/20170911_165031.jpg)
![Admin View](./photos/20170911_165039.jpg)
![Show Course](./photos/20170911_165042.jpg)
![Professor Courses](./photos/20170911_165055.jpg)
![Professor's Students Grades](./photos/20170911_165100.jpg)
![Student Grades](./photos/20170911_165113.jpg)
![Student Finances](./photos/20170911_165124.jpg)
![Students Finances Finantial aid](./photos/20170911_165138.jpg)
![Finantial aid Account](./photos/20170911_165152.jpg)
![Student's Courses](./photos/20170911_165201.jpg)









# MVP Structure

### Databases
* Cuny Database
* Financial Aid Database




### Model
* user
    * t
        * username 
        * email
        * first name
        * last name
        * date of birth
        * emergency contact 
        * password_digest
        * token

* admin < user
    * t

* professor < user
    * t

    * has_many courses
    * has_many students through courses
* course
    * t
        * name
    * belongs_to professor
    * has_and_belongs_to_many students
    * has_and_belongs_to_many grades
* finantial
    * t
        * amount
* fafsa < finantial
    * t 
    * belongs_to student
* tap < finantial
    * t 
    * belongs_to student
* loan < finantial
    * t 
    * belongs_to student
* scholarship < finantial
    * t 
        * amount
    * belongs_to student
* student < user
    * t

    * has_and_belongs_to_many courses
    * has_many_grades through courses
    * has_one fafsa
    * has_one tap
    * has_one loan
    * has_one scholarship
* grade 
    * t
        * value
    * belongs_to student
    * has_and_belongs_to_many course









# Technologies
* Front End
    * React
* Back End Server
    * Rails Backend
        * Faker for generating Students and Teachers
    * Authentication O-auth

* Database 
    * Postgresql








# Pre challenges
* Making multiple servers talk to eachother








# License
Copyright © 2017