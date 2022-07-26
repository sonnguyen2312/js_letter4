/*
    các yếu tố xác định bài toán lặp: logic lặp đi lặp lại 1 cách tự động thì đó là bài toán lặp
    Bước 1: Xác định khai báo giá trị khởi tạo (nó sẽ bị biến đổi sau mỗi lần lặp)(biến bước nhảy)
    Bước 2: Thiết lập điều kiện lặp (sử dụng biến khởi tạo để setup)
    Bước 3: Cài đặt khối xử lý
    Bước 4: Thay đổi giá trị biến khởi tạo (Biến bước nhảy)
*/
document.getElementById('btnInTheDiv').onclick = function (){
    //input: number
    var input = Number(document.getElementById('iSo').value);
    //output: string
    var output = '';
    console.log(input)
    var dem = 1;
    while (dem <= input){
        var div = '<div class="alert alert-success mt-2">Hello CyberSoft</div>';
        output += div;
        dem ++;
    }
    document.getElementById('ketQuaBai1').innerHTML = output;
}
/*
    Ví dụ 2: Cho phép người dùng nhập vào 1 số. Tính giai thừa số đó
*/
document.getElementById('btnTinhGiaiThua').onclick = function (){
    //input: number
    var nhapSo = Number(document.getElementById('nhapSo').value);
    giaTri = 1;
    giaiThua = 1;
    while (giaTri <= nhapSo){
        giaiThua *= giaTri;
        giaTri ++;
    }
    document.getElementById('ketQuaBai2').innerHTML = giaiThua;
}