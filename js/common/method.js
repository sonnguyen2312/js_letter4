function in1HangSao(soSao) {
    var ketQua = '';
    for (var cot = 1; cot <= soSao; cot++) {
        ketQua += '<i class="fa fa-star text-info"></i> ';
    }
    return ketQua;
}
function checkSNT(soNT) {
    var checkSNT = true;
    for (var i = 2; i <= Math.sqrt(soNT); i++) {
        if (soNT % i == 0) {
            checkSNT = false;
            break;
        }
    }
    return checkSNT;
}