/*
    các yếu tố xác định bài toán lặp: logic lặp đi lặp lại 1 cách tự động thì đó là bài toán lặp
    Bước 1: Xác định khai báo giá trị khởi tạo (nó sẽ bị biến đổi sau mỗi lần lặp)(biến bước nhảy)
    Bước 2: Thiết lập điều kiện lặp (sử dụng biến khởi tạo để setup)
    Bước 3: Cài đặt khối xử lý
    Bước 4: Thay đổi giá trị biến khởi tạo (Biến bước nhảy)
*/
document.getElementById('btnInTheDiv').onclick = function () {
    //input: number
    var input = Number(document.getElementById('iSo').value);
    //output: string
    var output = '';
    console.log(input)
    var dem = 1;
    while (dem <= input) {
        var div = '<div class="alert alert-success mt-2">Hello CyberSoft</div>';
        output += div;
        dem++;
    }
    document.getElementById('ketQuaBai1').innerHTML = output;
}
/*
    Ví dụ 2: Cho phép người dùng nhập vào 1 số. Tính giai thừa số đó
*/
document.getElementById('btnTinhGiaiThua').onclick = function () {
    //input: number
    var nhapSo = Number(document.getElementById('nhapSo').value);
    //ouput: number
    var giaiThua = 1;
    //xử lý
    var giaTri = 1;
    while (giaTri <= nhapSo) {
        giaiThua *= giaTri;
        giaTri++;
    }
    document.getElementById('ketQuaBai2').innerHTML = giaiThua;
}
/*
    Ví dụ 3: Cho phép người dùng nhập vào 1 số. Tính tổng từ 1 -> n(số người dùng nhập vào)
*/
document.getElementById('btnTinhTong').onclick = function () {
    //input: number
    var nhapSoN = Number(document.getElementById('nhapSoN').value);
    //output: number
    var tong = 0;
    //xử lý
    var giaTri = 1;
    while (giaTri <= nhapSoN) {
        tong += giaTri;
        giaTri++;
    }
    document.getElementById('ketQuaBai3').innerHTML = tong;
}
/*
    Ví dụ 4: Cho phép người dùng nhập vào 1 số. Tính tổng số chẵn từ 1 -> n(số người dùng nhập vào)
*/
document.getElementById('btnTinhTongSoChan').onclick = function () {
    //input: number
    var nhapSo_4 = Number(document.getElementById('nhapSo_4').value);
    //output: number
    var tong = 0;
    //xử lý
    var soHang = 2;
    while (soHang <= nhapSo_4) {
        // if (soHang % 2 == 0){
        //     Tong += soHang;
        // }
        // soHang ++;
        tong += soHang;
        soHang += 2;
    }
    document.getElementById('ketQuaBai4').innerHTML = tong;
}
/*
    Ví dụ 5: Cho phép người dùng nhập vào 1 số. Cho biết số đó có phải là số nguyên tố hay không
*/
// document.getElementById('btnKiemTraSoNguyenTo').onclick = function (){
//     //input: number
//     var nhapSo_5 = Number(document.getElementById('nhapSo_5').value);
//     //output: number
//     var ketQua = '';
//     //xử lý
//     var soHang = 0;
//     var dem = 0;
//     while (soHang <= nhapSo_5){
//         if (nhapSo_5 % soHang == 0){
//             //Nếu chia hết
//             dem ++;
//         }
//         soHang ++;
//     }
//     if (dem ==2){
//         ketQua = nhapSo_5 + ' là số nguyên tố'
//     }
//     else {
//         ketQua = nhapSo_5 + ' không phải là số nguyên tố'
//     }
//     document.getElementById('ketQuaBai5').innerHTML = ketQua;

// }
//Cách 2
document.getElementById('btnKiemTraSoNguyenTo').onclick = function () {
    //input: number
    var nhapSo_5 = Number(document.getElementById('nhapSo_5').value);
    //output: string
    var ketQua = '';
    //xử lý
    var checkNT = true;
    var soHang = 2;
    while (soHang <= Math.sqrt(nhapSo_5)) {
        if (nhapSo_5 % soHang == 0) {
            checkNT = false;
        }
        soHang++;
    }
    if (checkNT) {
        ketQua = nhapSo_5 + ' là số nguyên tố'
    }
    else {
        ketQua = nhapSo_5 + ' không phải là số nguyên tố'
    }
    document.getElementById('ketQuaBai5').innerHTML = ketQua;

}
/*
    Ví dụ 6: Cho phép người dùng nhập vào 1 số. In ra số ngôi sao tương ứng
*/
document.getElementById('btnInSao').onclick = function () {
    //input: number
    var nhapSo_6 = Number(document.getElementById('nhapSo_6').value);
    //output: string
    var ketQua = '';
    //xử lý
    var soSao = 1;
    while (soSao <= nhapSo_6) {
        ketQua += '* ';
        soSao++;
    }

    // for (var dem = 1;dem <= nhapSo_6;dem ++){
    //     ketQua += '* ';
    // }
    document.getElementById('ketQuaBai6').innerHTML = ketQua;

}
/*
    Ví dụ 7: Cho phép người dùng nhập vào số hàng và số cột. In ra số ngôi sao tương ứng
*/
document.getElementById('btnInSao_7').onclick = function () {
    //input: number
    var soHang = Number(document.getElementById('soHang').value);
    var soCot = Number(document.getElementById('soCot').value);
    //output: string
    var ketQua = '';
    //xử lý
    for (var hang = 1; hang <= soHang; hang++) {
        var htmHangSao = in1HangSao(soCot);
        ketQua += htmHangSao + '<br />';
    }
    document.getElementById('ketQuaBai7').innerHTML = ketQua;
}
/*
   Ví dụ 8: Cho phép người dùng nhập vào 1 số. In tất cả số nguyên tố nhỏ hơn hoặc bằng số người dùng nhập 
*/
document.getElementById('btnInSoNguyenTo').onclick = function () {
    //input: number
    var nhapSo_8 = Number(document.getElementById('nhapSo_8').value);
    //output: string
    var ketQua = '';
    for (var iSo = 2; iSo <= nhapSo_8; iSo++) {
        var ktSNT = checkSNT(iSo);
        if (ktSNT){
            ketQua += iSo + ' ';
        }
    }
    document.getElementById('ketQuaBai8').innerHTML = ketQua;
}

