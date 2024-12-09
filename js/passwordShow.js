$(document).ready(function () {
    $('.showHidePw').on('click', function () {
        const passwordField = $('#password');
        const eyeIcon = $(this);

        if (passwordField.attr('type') === 'password') {
            passwordField.attr('type', 'text'); // Ubah menjadi teks
            eyeIcon.removeClass('uil-eye-slash').addClass('uil-eye'); // Ganti ikon menjadi mata terbuka
        } else {
            passwordField.attr('type', 'password'); // Kembali ke mode password
            eyeIcon.removeClass('uil-eye').addClass('uil-eye-slash'); // Ganti ikon menjadi mata tertutup
        }
    });
});
