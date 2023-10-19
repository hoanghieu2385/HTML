function oclock() {
    const today = new Date();
    // gọi hàm today để lấy time hiện tại
    const time = `Thời gian hiện tại là: ${today.getHours()}:${String(today.getMinutes()).padStart(2, '0')}:${String(today.getSeconds()).padStart(2, '0')}`;
    // sử dụng ${...}:${String(...).padStart(2, '0')} để hiển thị time có thêm số không nếu chúng chỉ có 1 số
    document.getElementById("timeNow").innerHTML = time;
    //gọi hàm ra để sử dụng
}
setInterval(oclock, 1000);
// gọi hàm oclock ra sau mỗi 1000ms = 1s
oclock();
// gọi hàm oclock ra để hiển thị time khi load trang

function changeColor() {
    var date = new Date();
    // lấy time hiện tại
    var seconds = date.getSeconds();
    // lấy giây hiện tại
    if (seconds === 0) {
        // nếu giây = 0 thì thay đổi màu nền có nghĩa là sẽ thay đổi màu nền sau mỗi phút
        var colors = ["bisque", "thistle"];
        // tạo mảng chứa các màu
        var color = colors[Math.floor(Math.random() * colors.length)];
        // lấy ngẫu nhiên 1 màu trong mảng
        document.body.style.backgroundColor = color;
        // thay đổi màu nền
    }
}

setInterval(changeColor, 1000);
// gọi hàm changeColor ra sau mỗi 1000ms = 1s


function calculateTotal() {
    let price = 50000;
    // giá 1 sản phẩm xúc xích
    let quantity = document.getElementById("quantity").value;
    // lấy số lượng sản phẩm xúc xích
    let total = price * quantity;
    // tính tổng tiền
    if (total >= 100000){
        total *= 0.95;
        // giảm giá 5% nếu tổng tiền >= 100000
    } else{
        total = total;
    }
    document.getElementById("total").innerHTML = total;
    // hiển thị tổng tiền
}