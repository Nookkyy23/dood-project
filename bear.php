<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- ggfont -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@500&display=swap');
    </style>

</head>

<body>

    <h1> BearWash Welcome </h1>

    <div class="container">
        <div class="products-con">
            <div class="products-item">
                <div class="products-img">
                    <img src="img/wash.jpg">
                </div>
                <div class="products-detail">
                    A1
                </div>
                <div class="java">
                    <div id="timer"></div>
                    <button id="startStopButton">เริ่ม</button>
                    <div id="response"></div>
                </div>

                <script>
                    var targetTime;
                    var timerId;
                    var isCounting = false;
                    var hasSentRequest = false;

                    // ส่งคำขอ HTTP ไปยังไฟล์ PHP


                    // ส่งข้อมูลไปยัง API ของไลน์
                    function sendLineNotification(message) {}

                    // นับเวลาถอยหลังและแสดงผลในหน้าเว็บ
                    function startCountdown() {
                        var now = new Date();
                        var remainingTime = targetTime - now;
                        var minutes = Math.floor(remainingTime / (1000 * 60));
                        var seconds = Math.floor((remainingTime / 1000) % 60);



                        if (remainingTime > 0) {
                            $('#timer').text('เวลา: ' + minutes + ' นาที ' + seconds + ' วินาที');

                            // เช็คว่าเหลือเวลาน้อยกว่าหรือเท่ากับ 1 นาที (60 วินาที)
                            if (remainingTime <= 60000 && !hasSentRequest) {
                                // เรียกใช้งานฟังก์ชันเพื่อเชื่อมต่อกับ PHP
                                sendRequestToPhp();
                                hasSentRequest = true;
                            }

                            timerId = setTimeout(startCountdown, 1000);
                        } else {
                            $('#timer').text('เวลาสิ้นสุดแล้ว');
                            targetTime = new Date();
                            targetTime.setMinutes(targetTime.getMinutes() + 2);
                            hasSentRequest = false;
                        }

                    }

                    // เมื่อกดปุ่ม "เริ่มนับถอยหลัง" หรือ "หยุดเวลา"
                    $('#startStopButton').click(function() {
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
                </script>
                <div class="products-price">
                    <div class="products-left">
                        60 บาท
                    </div>
                </div>
            </div>

            
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>