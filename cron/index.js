const cron = require('node-cron');
const fs = require('fs');
const washMachines = JSON.parse(fs.readFileSync('./db/washing_machine.json', 'utf8'));
const request = require('request');
require('dotenv').config();
const url_line_notification = "https://notify-api.line.me/api/notify";

cron.schedule('* * * * * *', () => {
    let dateNow = new Date();
    let diffStart = dateNow.getTime();
    let dateCut = dateNow.toISOString().split('.')[0];
    
    for (let i = 0; i < washMachines.length; i++) {
        if (washMachines[i].end_at == null) { continue; }

        let dateEnd = new Date(washMachines[i].end_at);
        let diffEnd = dateEnd.getTime();
        let dateEndCut = dateEnd.toISOString().split('.')[0];

        let dateDiff = diffEnd - diffStart;
        let timeDiff = new Date(dateDiff);
        if(timeDiff.getMinutes() < 1 && washMachines[i].noti == true){
            // notification
            request({
                method: 'POST',
                uri: url_line_notification,
                header: {
                    'Content-Type': 'multipart/form-data',
                },
                auth: {
                    bearer: process.env.TOKEN,
                },
                form: {
                    message: 'เครื่องซักผ้าทำงานใกล้เสร็จแล้ว ไปเอาผ้ากันเถอะ !'
                },
            }, (err, httpResponse, body) => {
                if (err) {
                    console.log(err)
                } else {
                    washMachines[i].noti = false;
                    let json = JSON.stringify(washMachines);
                    fs.writeFileSync('./db/washing_machine.json', json, 'utf-8');
                    console.log(`Send notification washing machine : ${washMachines[i].id}`);
                }
            });
        }

        if(dateCut == dateEndCut){
            washMachines[i].status = false;
            washMachines[i].coin = 0;
            washMachines[i].start_at = null;
            washMachines[i].end_at = null;
            washMachines[i].noti = false;
            let json = JSON.stringify(washMachines);
            fs.writeFileSync('./db/washing_machine.json', json, 'utf-8');
            console.log(`Reset washing machine : ${washMachines[i].id}`);
        }
    }
});