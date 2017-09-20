# Cuny-Replica

This app would be a remake of the current cuny system as it is not synched well with other servers.





# User Stories
* Cuny
    * Landing page would have 
    * Authentication
        * Students would have a register page
            * Students would create a user
        * Students would log in with their credentials
            * Automatically generates an account for all financial Aid Servers
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


<!--* Financial Aid
    * Administrators would have a register page that needs acceptance from another admin
    * Admin would would log in with their credentials
    * Admin could view data from a students account
    * Admin could have toggles for data but cannot directly influence the data because much would be automated-->

* Financial Aid
    Will use the associated API for a financial account to update a student's finance for their respective account type. 

    The API takes a student_id, field, and value ex
    ```javascript
        {
            "student_id": 1,
            "field": "fafsa",
            "value": "2000"
        }
    ```
    The value is the total amount of tuition aid the financial institution will give to the school. the student id is the id of the student on our database(the student will enter this information in the financial insitutions site). Lastly the field is the type of account, for now limited to: fafsa, tap, loan, scholarship.







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
![Students Finances financial aid](./photos/20170911_165138.jpg)
![financial aid Account](./photos/20170911_165152.jpg)
![Student's Courses](./photos/20170911_165201.jpg)









# MVP Structure

### Databases
* Cuny Database

[Inheritance 1](./photos/2017-09-19_20h47_25.png)
[Inheritance 2](./photos/2017-09-19_20h47_37.png)
[Inheritance 3](./photos/2017-09-19_20h46_22.png)
[Table Relations](./photos/2017-09-19_20h46_45.png)












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
* SPA page routes are viewable to everyone, so how to make this less of an issue
    * By allowing teachers to be students, we add functionality to spa's allowing any user to access a path, the trick will be the data coming from the server side
    * This project would have been better as a non spa because of this issue, however SPA's have better user experience





# Issues
* Handling Relations vs Inheritence 
    * Cant build inheritance tree, more like only one level because that would be changing the structure of the database probably.
    * Usable in situations where all the tables would be exactly the same

* Financial Accounts have an associated person id because it is based off a user. This is sloppy and should be removed when possible. 







# Future improvements
* Make the app more scalable for future types of financial accounts and user types
* ~~Security issue with financial accounts being able to change any of fields. ~~
* Make Tuition dependent on courses
* Incooperate grades into the students relations.
* Incooperate semesters into the schema, currently this service allows only one semester
* Incooperate realtime notification for student when their account is updated
* Remove the ability to make any kind of user on the home page
* Display upcomming homework and tests based on date

# License
Copyright © 2017