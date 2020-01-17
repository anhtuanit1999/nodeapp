function myFunction() {
    let DB = [' ỉa chảy', ' đẹp trai', ' thấy gớm', ' thấy gớm', ' bị gay', ' óc shit'];
    let Excep = [' xinh đẹp nhất quả đất', ' dễ thương nhất vịnh Nam Bộ', ' tốt bụng', ' dễ cưng', ' nhìn là thích mê', ' ai cũng thích', 
    ' tiên nữ'];
    let data = $('#input').val(), ran, ran1;
    let hihi = data.toLowerCase();
    ran = DB[Math.floor(Math.random()*5)];
    ran1 = Excep[Math.floor(Math.random()*5)];
    if(hihi.indexOf('tuan') >= 0 || hihi == '' || hihi.indexOf('tuấn') >= 0)
        data = 'Error hihi!!!';
    else if(hihi.indexOf('cuc') >= 0 || hihi.indexOf('cúc') >= 0)
        data = 'Hello baby ' + data + ran1;
    else data = 'Hello kiki ' + data + ran;
    $('#output').html(data);
}