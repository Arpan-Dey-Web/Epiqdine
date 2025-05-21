Assignment-10_category_Papaya

🚩🚩update: All the updates will be declared here.

🎯🎯Requirement Explanation Video

HobbyHub: A Local Hobby Group Organizer

---

Project Theme
HobbyHub is a platform where people can discover and join local hobby-based groups (e.g., book clubs, hiking crews, painting circles) or create their own. It encourages social engagement through shared interests, helping people build communities around their passions.

---

Key Rules:
● GitHub Commits:
● Include a minimum of 15 notable GitHub commits on the client side.
● Include a minimum of 8 notable GitHub commits on the server side
● Readme.md: Add a meaningful readme.md file with the name of your website and a live site URL. Include a minimum of five bullet points to feature your website.  
● Responsiveness: Make it responsive for all devices, including mobile, tablet, and desktop views.
● Environment Variables: The Environment variable hides the Firebase config keys and Mongodb credentials.
● Lorem Text: Don’t use any Lorem ipsum text; you can not use the default alert to show any error or success message.
● Unique Design: Create a unique Design but remember, your website idea shouldn't be similar to any projects you've done before or to any examples in our modules or conceptual sessions.
● You can also look for free resources on blogs to help with your website.
● Host your Application: You can choose deployment systems like Netlify, Surge, and Firebase for client-side hosting and vercel for server-side hosting. As you develop a single-page application
● Ensure the page doesn't throw any error when reloading from any routes.  
● Add your domain for authorization to Firebase if you use Netlify / surge
● Logged in User must not redirect to Login on reloading any private route

---

Main Requirements:
Layout Structure
Navbar:

● Logo/Name
● Home
● All Groups
● Create Group (Private)
● My Groups (Private)
● Login/Register (Conditional)
● If logged in:
○ Show user photoURL
○ On hover: show displayName
○ Logout button
Main Section:
● The Main Section will show different pages based on routes.
Footer:
● A Footer with all relevant information and eye-catching design.
Home Page
● Banner/Slider with 3+ meaningful slides
● Featured Groups section (limit to 6 ongoing groups)
● Add 2 extra static sections

Authentication
A. Login Page: When you click the login button on the navbar it redirects to the login page. You have to use a password and email-based authentication to log in. The login page will have-  
● Email
● Password
● Google login, GitHub - implement any of one
● A link that will redirect to the Register page
If the user logs in successfully, then

- navigate them to their desired Route / Home page.
- If not, show him an error with a toast/error message anywhere in the form.

B. Register Page: You have to use a password and email-based authentication to register. The Register page will have the following -
★ Name
★ Email
★ photoURL
★ password  
★ A Link that will redirect to the login page
★ For password verification you need to follow this -  
● Must have an Uppercase letter in the password
● Must have a Lowercase letter in the password  
● Length must be at least 6 character
★ If any of this isn’t fulfilled it will show an error/toast
★ After successful login or Register you need to show toast/sweet alert
Don’t implement email verification or forget password methods as it will inconvenience the examiner. If you want, you can add these after receiving the assignment result.
Create Group Page ( /createGroup )
Create Group Page that can be part of HobbyHub. The form will allow users to create a new hobby group. The form will have:
● Group Name
● Hobby Category (dropdown)
Hobby Category for example:
★ Drawing & Painting
★ Photography
★ Video Gaming
★ Fishing
★ Running
★ Cooking🚩
★ Reading
★ Writing (etc)
● Description
● Meeting Location
● Max Members
● Start Date (deadline equivalent)
● Image URL
● User Name (readonly)
● User Email (readonly)
● "Create" Button
This page will be a private/protected route.
Once you fill in the form and click the "Create" button, the data will be saved to the database, and a success message will be displayed using a toast or sweet alert.
Group Details Page ( /group/:id )
● Show all info from DB
● "Join Group" button
This page will be a private/protected route.
All Groups Page ( /groups )
● Show all groups in table or card format
● Each group: "See More" button → goes to Details Page
My Groups Page ( /myGroups )
● Only shows groups created by the logged-in user
● Show in table format
● Each row:
● Info + "Update" and "Delete" buttons
This page will be a private/protected route.
When the user clicks the "Delete" button, the group will be removed from the database after confirmation.

Update Group Page ( /updateGroup/:id )
● Same fields as Create Group
● Name & Email readonly
● Update button → show success toast and update DB
This page will be a private/protected route.
You can use a modal to update group details instead of navigating to a separate page. This is optional and provides a smoother user experience.
Other Requirements
● 404 Not Found Page
● Loading Spinner
Challenges
● Implement a dark/light theme toggle for the home page.
● Explore this package and implement at least 2-
● Lottie React
● React Simple Typewriter
● React Awesome Reveal
● React Tooltip
● If the group's start date has already passed, the user will not be allowed to join. Instead of the "Join Group" button, a message will be shown indicating that the group is no longer active.
What to submit:

● Your client-side code GitHub repository
● Your server-side code GitHub repository
● Your live website link
