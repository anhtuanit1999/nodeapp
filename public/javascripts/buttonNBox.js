function myFunction() {
    let DB = [' ỉa chảy', ' đẹp trai', ' thấy gớm', ' thấy gớm', ' bị gay', ' óc shit'];
    let Excep = [' xinh đẹp nhất quả đất', ' dễ thương nhất vịnh Nam Bộ', ' tốt bụng', ' dễ cưng', ' nhìn là thích mê', ' ai cũng thích',
        ' tiên nữ'];

    /*const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    });*/

    let data = $('#input').val(), ran, ran1, title;
    let hihi = data.toLowerCase();

    ran = DB[Math.floor(Math.random() * 5)];
    ran1 = Excep[Math.floor(Math.random() * 5)];

    if (hihi.indexOf('tuan') >= 0 || hihi == '' || hihi.indexOf('tuấn') >= 0) {
        title = 'Error hihi!!!';
        data = 'Nhập lại đi nha'
    }
    else if (hihi.indexOf('cuc') >= 0 || hihi.indexOf('cúc') >= 0) {
        title = 'Hello baby';
        data = data + ran1;
    }
    else {
        title = 'Hello kiki ';
        data = data + ran;
    }
    //$('#output').html(data);
    if (hihi.indexOf('crush') >= 0 || hihi.indexOf('cúc') >= 0) {
        Swal.fire({
            title: 'Yêu anh thì nói một lời 💕',
            text: 'Chọn đúng hoặc sai nhé',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Chuẩn rùi nha!',
            cancelButtonText: 'Sai bét rùi!',
            reverseButtons: true,
            width: 600,
            padding: '3em',
            background: '#fff url(../image/trees.png)',
            backdrop: `
                rgba(0,0,123,0.4)
                url("../image/nyan-cat.gif")
                left top
                no-repeat
            `
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'I Love You',
                    text: 'mlem mlem mlem',
                    icon: 'success',
                    width: 600,
                    padding: '3em',
                    background: '#fff url(../images/trees.png)',
                    backdrop: `
                        rgba(0,0,123,0.4)
                        url("../images/nyan-cat.gif")
                        left top
                        no-repeat
                    `
                }).then(result => {
                    window.location = "/lovehome";
                })
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Có thật là vậy không?',
                    'Đáng tiếc em sẽ không có được anh mãi mãi!',
                    'error'
                ).then(() => thanosPower());
            }
        });
    }
    else {
        Swal.fire(title, data, 'warning');
    }

}
