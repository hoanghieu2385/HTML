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
    const textElement = document.getElementById('text');
    // lấy ra màu sắc hiện tại của phần tử
    const currentColor = textElement.style.color;
    
    if (currentColor === 'blue') {
        textElement.style.color = 'red';
    } else {
        textElement.style.color = 'blue';
    }
}

// Gọi hàm thay đổi màu mỗi giây
setInterval(changeColor, 60000);


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
        // giữ nguyên giá nếu tổng tiền < 100000
    }
    document.getElementById("total").innerHTML = total;
    // hiển thị tổng tiền
}