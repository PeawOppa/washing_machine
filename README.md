# **เกี่ยวกับ Project**

 สร้างขึ้นเพื่อแก้ไขโจทย์ปัญหา Washing Machine

# **Module Dependencies**

Dependencies|Description
|:-----:| ----- |
**EJS** | ใช้ EJS ในการทำ Views/Template (View Engine) เพราะ Project มีขนาดเล็ก จึงไม่จำเป็นที่จะต้องใช้ Front-end framework |
**Express** | ใช้ Module ต่างๆ ใน Express เพื่อให้ง่ายต่อการพัฒนา Server |
**UUID** | ใช้ สร้าง Unique ID สำหรับ Database json file |
**Dotenv** | ใช้สำหรับ Get environment variables |
**Nodemon** | ใช้ Nodemon สำหรับ Development เท่านั้น |
**Node-cron** | ใช้ Node cron เพื่อ Run schedule |
**Request** | ใช้สร้าง Request สำหรับทำ Line notification |

# **Database**

[![JSON](https://i0.wp.com/saixiii.com/wp-content/uploads/2017/04/json-logo.png?w=512&ssl=1)](https://www.json.org/json-en.html)

ใช้ JSON ไฟล์ในการเก็บข้อมูลแทนการใช้ DB แล้วใช้การ Read, Write file ในการเปลี่ยนแปลงข้อมูล *(ใช้เป็น json file เก็บข้อมูลทั้งหมด เพราะ Project มีขนาดเล็ก จึงไม่จำเป็นที่จะต้องใช้ RDB, NoSQL ให้ยุ่งยาก)*
# **Run project**

1. Rename file .env.example เป็น .env
2. Set environment variable ในไฟล์ .env ดังนี้
* .env
    * PORT = เลข Port ที่ต้องการเปิด Server เช่น 3000
    * HOST = ชื่อ Host name ของ Server เช่น localhost
    * TOKEN = Token ที่ใช้ส่งข้อความไปยัง Line ([Create Line Token](https://notify-bot.line.me/my/) แล้วนำ token มาใส่ที่ตัวแปรนี้)
3. Run command
```
npm i 
```
4. Run command
```
npm start
```

# **Routes**

Method | URI | Description
| ----- | ----- | ----- |
*Route web*
GET/HEAD | / | แสดงผลหน้าเว็บหลัก index.ejs
*Route API* 
GET/HEAD | /api/washing | แสดงเครื่องซักผ้าทั้งหมด
GET/HEAD | /api/washing/:id | แสดงเครื่องซักผ้าตาม ID ที่ระบุ
POST | /api/washing | สร้างข้อมูลเครื่องซักผ้า
PUT | /api/washing/:id | แก้ไขข้อมูลเครื่องซักผ้า
DELETE | /api/washing/:id | ลบข้อมูลเครื่องซักผ้า
PUT | /api/washing/insert_coin/:id | หยอดเหรียญใส่เครื่องซักผ้า
GET/HEAD | /api/washing/update_time/:id | เปลี่ยนค่าเวลาเครื่องซักผ้า ใช้คำนวณว่าเหลือเวลาอีกเท่าไหร่ที่เครื่องซักผ้าจะทำงานเสร็จ
GET/HEAD | /api/washing/reset/:id | เปลี่ยนแปลงค่าของเครื่องซักผ้ากลับสู่ Default

\[ API นี้ทำ file กำกับไว้แล้วสามารถ Import file : **[API Washing machine.postman_collection.json](https://github.com/suckamiommy/washingmachine/blob/main/API%20Washing%20machine.postman_collection.json)** ลงใน **[POSTMAN](https://www.postman.com/downloads/)** ได้เลย \]

```js
const washingMachine = (nodeJS) => {
    console.log(`สวัสดีค้าบบบบบบบ ${nodeJS}..., แก๋ว !!!`)
}

washingMachine("เท่าสมาชิกชมรม คนชอบ")
```