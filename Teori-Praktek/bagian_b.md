# 📘 Bagian B - Praktik Manual Testing

---

## Login Page

| Test Case ID | Deskripsi                        | Langkah                                                                 | Input                                           | Expected Result                                      |
|--------------|------------------------------------|-----------------------------------------------------------------------|-------------------------------------------------|-------------------------------------------------------|
| TC-001        | Login using valid email and password | 1. Open login page<br>2. Enter valid email and password<br>3. Click login button | Email: `user@gmail.com`<br>Password: `pass123`       | User is redirected to homepage successfully              |
| TC-002        | Login using valid email and invalid password | 1. Open login page<br>2. Enter valid email and invalid password<br>3. Click login button | Email: `user@gmail.com`<br>Password: `invalidpass`     | Show alert error and error message: "Invalid email or password"         |
| TC-003        | Login using unmatch email and password | 1. Open login page<br>2. Enter unregistered email and valid password from other registered email<br>3. Click login button | Email: `unregistuser@gmail.com`<br>Password: `pass123`     | Show alert error and error message: "Invalid email or password"       |
| TC-004        | Login using invalid password three times  | 1. Open login page<br>2. Enter valid email and invalid password<br>3. Click login button        | Email: `user@gmail.com`<br>Password: `invalidpass`                            | Show alert error and error message: "You've entered an invalid email or password too many times. Please retry in 02:00"   |
| TC-005        | Login using valid email and password after waiting times              | 1. Open login page<br>2. Enter valid email and password<br>3. Click login button | Email: `user@gmail.com`<br>Password: `pass123`                   | User is redirected to homepage successfully             |
| TC-006        | Input invalid email format          | 1. Open login page<br>2. Enter invalid email format<br>3. Click enter | Email: `user@g`                           | Show alert error and error message: "Please enter correct email format"                  |
| TC-007        | Login using blank email and password | 1. Open login page<br>2. Let email and password blank         | none                             | Show alert error and error message: "Email and password can not be blank"                 |
| TC-008        | Input script in password    | 1. Open login page<br>2. Enter valid email and script in password<br>3. Click login button                | Email: `user@gmail.com`<br>Password: `pass123/<script>alert(1);</script>.png`         | Show alert error and error message: "Invalid email or password"       |
| TC-009        | Input emoticon in password         | 1. Open login page<br>2. Enter valid email and emoticon in password<br>3. Click login button   | Email: `user@gmail.com`<br>Password: `pass123☺️`     | Show alert error and error message: "Invalid email or password"   |
| TC-010        | Login using valid email and password when waiting time is not over yet        | 1. Open login page<br>2. Enter valid email and password<br>3. Click login button      | Email: `user@gmail.com`<br>Password: `pass123`      | Show alert error and error message: "You've entered an invalid email or password too many times. Please retry in 02:00"   |
