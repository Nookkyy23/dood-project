var targetTime;
var timerId;
var isCounting = false;
var hasSentRequest = false;
// count 2
var targetTime2;
var timerId2;
var isCounting2 = false;
var hasSentRequest2 = false;

// ส่งข้อมูลไปยัง API ของไลน์
function sendLineNotification(message) { }
function sendLineNotification2(message) { }

// นับเวลาถอยหลังและแสดงผลในหน้าเว็บ
function startCountdown() {
    var now = new Date();
    var remainingTime = targetTime - now;
    var minutes = Math.floor(remainingTime / (1000 * 60));
    var seconds = Math.floor((remainingTime / 1000) % 60);


    if (remainingTime > 0) {
        $('#timer').text('เวลา: ' + minutes + ' นาที ' + seconds + ' วินาที');
        $('#text').text('ไม่ว่าง');

        // เช็คว่าเหลือเวลาน้อยกว่าหรือเท่ากับ 1 นาที (60 วินาที)
        if (remainingTime <= 60000 && !hasSentRequest) {
            // เรียกใช้งานฟังก์ชันเพื่อเชื่อมต่อกับ PHP
            sendRequestToPhp();
            hasSentRequest = true;
        }

        timerId = setTimeout(startCountdown, 1000);
    } else {
        targetTime = new Date();
        targetTime.setMinutes(targetTime.getMinutes() + 2);
        hasSentRequest = false;
    }

}

// เมื่อกดปุ่ม "เริ่มนับถอยหลัง" หรือ "หยุดเวลา"
$('#startStopButton').click(function () {
    if (!isCounting) {
        // กำหนดเวลาเริ่มต้น
        if (!targetTime) {
            targetTime = new Date();
            targetTime.setMinutes(targetTime.getMinutes() + 2);
        }
        // เริ่มนับถอยหลัง
        startCountdown();

    } else {
        // หยุดเวลา

        $(this).text('เริ่ม');
    }
    isCounting = !isCounting;
});
// count 2
function startCountdown2() {
    var now2 = new Date();
    var remainingTime2 = targetTime2 - now2;
    var minutes2 = Math.floor(remainingTime2 / (1000 * 60));
    var seconds2 = Math.floor((remainingTime2 / 1000) % 60);



    if (remainingTime2 > 0) {
        $('#timer2').text('เวลา: ' + minutes2 + ' นาที ' + seconds2 + ' วินาที');
        $('#text2').text('ไม่ว่าง');

        // เช็คว่าเหลือเวลาน้อยกว่าหรือเท่ากับ 1 นาที (60 วินาที)
        if (remainingTime2 <= 60000 && !hasSentRequest2) {
            // เรียกใช้งานฟังก์ชันเพื่อเชื่อมต่อกับ PHP
            sendRequestToPhp2();
            hasSentRequest2 = true;
        }

        timerId2 = setTimeout(startCountdown2, 1000);
    } else {
        targetTime2 = new Date();
        targetTime2.setMinutes(targetTime2.getMinutes() + 2);
        hasSentRequest2 = false;
    }

}

// เมื่อกดปุ่ม "เริ่มนับถอยหลัง" หรือ "หยุดเวลา"
$('#startStopButton2').click(function () {
    if (!isCounting2) {
        // กำหนดเวลาเริ่มต้น
        if (!targetTime) {
            targetTime2 = new Date();
            targetTime2.setMinutes(targetTime2.getMinutes() + 2);
        }
        // เริ่มนับถอยหลัง
        startCountdown2();

    } else {
        // หยุดเวลา

        $(this).text('เริ่ม');
    }
    isCounting2 = !isCounting2;
});

function sendRequestToPhp() {
    fetch('sendinfo.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
        .then(response => response.text())
        .then(data => {
            // สามารถแสดงผลลัพธ์ที่คืนมาจาก PHP ได้ที่นี่
            console.log(data);
        })
        .catch(error => console.error('เกิดข้อผิดพลาดในการส่งคำขอ:', error));
}

function sendRequestToPhp() {
    fetch('sendinfo.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
        .then(response => response.text())
        .then(data => {
            // สามารถแสดงผลลัพธ์ที่คืนมาจาก PHP ได้ที่นี่
            console.log(data);
        })
        .catch(error => console.error('เกิดข้อผิดพลาดในการส่งคำขอ:', error));
}
// count 2
function sendRequestToPhp2() {
    fetch('sendinfo.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
        .then(response2 => response2.text())
        .then(data2 => {
            // สามารถแสดงผลลัพธ์ที่คืนมาจาก PHP ได้ที่นี่
            console.log(data2);
        })
        .catch(error => console.error('เกิดข้อผิดพลาดในการส่งคำขอ:', error2));
}