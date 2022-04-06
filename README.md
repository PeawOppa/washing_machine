## เกี่ยวกับ Project

สร้างขึ้นเพื่อแก้ไขโจทย์ปัญหา Washing Machine

## Module Dependencies

- ["ejs"] (ใช้ EJS ในการทำ Views/Template (View Engine) เพราะ Project มีขนาดเล็ก จึงไม่จำเป้นที่จะต้องใช้ Front-end framework)
- ["express"]
- ["uuid"] (ใช้ สร้าง Unique ID สำหรับ Database json file)
- ["dotenv"] (ใช้สำหรับ get environment variables)
- ["nodemon"] (ใช้ Nodemon สำหรับ Development เท่านั้น)
- ["node-cron"] (ใช้ Node cron เพื่อ run schedule)
- ["request"]

## Database

- ["json file"] (ใช้ Database เป็น json file เก็บข้อมูลทั้งหมด เพราะ Project มีขนาดเล็ก จึงไม่จำเป้นที่จะต้องใช้ RDB, NoSQL)

## Run project

- npm i
- npm start