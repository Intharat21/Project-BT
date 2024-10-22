function validateForm() {
    // รับค่าจากฟอร์มสำหรับคนที่ 1
    const id1 = document.getElementById("id1").value;
    const name1 = document.getElementById("name1").value;

    // รับค่าจากฟอร์มสำหรับคนที่ 2
    const id2 = document.getElementById("id2").value;
    const name2 = document.getElementById("name2").value;

    // รับค่าจากฟอร์มสำหรับคนที่ 3
    const id3 = document.getElementById("id3").value;
    const name3 = document.getElementById("name3").value;

    // ตรวจสอบว่า ID คนที่ 1 ต้องมี 8 ตัวอักษร
    if (id1.length !== 8) {
        alert("ID คนที่ 1 ต้องมี 8 เลข");
        return false;
    }

    // ตรวจสอบว่าชื่อคนที่ 1 ไม่ว่างเปล่า
    if (name1.trim() === "") {
        alert("กรุณากรอกชื่อคนที่ 1");
        return false;
    }

    // ตรวจสอบว่า ID คนที่ 2 ต้องมี 8 ตัวอักษร
    if (id2.length !== 8) {
        alert("ID คนที่ 2 ต้องมี 8 เลข");
        return false;
    }

    // ตรวจสอบว่าชื่อคนที่ 2 ไม่ว่างเปล่า
    if (name2.trim() === "") {
        alert("กรุณากรอกชื่อคนที่ 2");
        return false;
    }

    // ตรวจสอบว่า ID คนที่ 3 ต้องมี 8 ตัวอักษร
    if (id3.length !== 8) {
        alert("ID คนที่ 3 ต้องมี 8 เลข");
        return false;
    }

    // ตรวจสอบว่าชื่อคนที่ 3 ไม่ว่างเปล่า
    if (name3.trim() === "") {
        alert("กรุณากรอกชื่อคนที่ 3");
        return false;
    }

    // แสดงข้อความเมื่อข้อมูลถูกต้อง
    alert("ทำการจองเรียบร้อย");
    return true; // ฟอร์มจะถูกส่งไปหน้า index.html
}
