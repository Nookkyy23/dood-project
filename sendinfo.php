<?php
// ตรวจสอบว่าเป็นครั้งแรกที่ส่งคำขอหรือไม่
    $id = $_POST['submit'];
    $sToken = "CcgHN7eAQZzBzHF33hBPje9Uek2OT1hCXJ6lL9kagpq";
    $sMessage = "เหลือเวลาอีก 1 นาที ผ้าจะเสร็จนะครับ\n";
    $sMessage .= "อย่าลืมมาเอานะครับ";

    $chOne = curl_init();
    curl_setopt($chOne, CURLOPT_URL, "https://notify-api.line.me/api/notify");
    curl_setopt($chOne, CURLOPT_POSTFIELDS, "message=" . $sMessage);
    $headers = array('Content-type: application/x-www-form-urlencoded', 'Authorization: Bearer ' . $sToken . '',);
    curl_setopt($chOne, CURLOPT_HTTPHEADER, $headers);
    $result = curl_exec($chOne);

?>
