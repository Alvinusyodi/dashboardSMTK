$(document).ready(function() {
    // Mengubah latar belakang dan warna SVG pada banyak dropdown
    $(document).on('change', '.status-select', function() {
        var selectedValue = $(this).val(); // Nilai dropdown yang dipilih
        var svgPath = $(this).siblings('svg').find('path'); // Targetkan path di SVG terkait

        // Reset ke default
        $(this).css({
            'background-color': '#f6f6f6', 
            'color': '#757575',
            'border': '1px solid #f6f6f6'
        });
        svgPath.css('fill', '#757575'); // Warna hitam default untuk SVG

        // Menentukan warna berdasarkan status yang dipilih
        switch (selectedValue) {
            case 'fit':
                $(this).css({
                    'background-color': '#28a74523', // Hijau muda
                    'color': '#28a745' // Hijau
                });
                svgPath.css('fill', '#28a745'); // SVG hijau
                break;
            case 'broken':
                $(this).css({
                    'background-color': '#dc354527', // Merah muda
                    'color': '#dc3545' // Merah
                });
                svgPath.css('fill', '#dc3545'); // SVG merah
                break;
            case 'exceptional':
                $(this).css({
                    'background-color': '#ffeb3b23', // Kuning muda
                    'color': '#ffeb3b' // Kuning
                });
                svgPath.css('fill', '#ffeb3b'); // SVG kuning
                break;
            case 'unfit':
                $(this).css({
                    'background-color': '#f4433623', // Merah tua
                    'color': '#f44336' // Merah tua
                });
                svgPath.css('fill', '#f44336'); // SVG merah tua
                break;
            case 'detained':
                $(this).css({
                    'background-color': '#ff980023', // Orange muda
                    'color': '#ff9800' // Orange
                });
                svgPath.css('fill', '#ff9800'); // SVG orange
                break;
            case 'busy':
                $(this).css({
                    'background-color': '#ffc10723', // Amber muda
                    'color': '#ffc107' // Amber
                });
                svgPath.css('fill', '#ffc107'); // SVG amber
                break;
            case 'usermodified':
                $(this).css({
                    'background-color': '#9c27b023', // Ungu muda
                    'color': '#9c27b0' // Ungu
                });
                svgPath.css('fill', '#9c27b0'); // SVG ungu
                break;
            case 'ok':
                $(this).css({
                    'background-color': '#28a74523', // Hijau muda
                    'color': '#28a745' // Hijau
                });
                svgPath.css('fill', '#28a745'); // SVG hijau
                break;
            case 'no':
                $(this).css({
                    'background-color': '#dc354527', // Merah muda
                    'color': '#dc3545' // Merah
                });
                svgPath.css('fill', '#dc3545'); // SVG merah
                break;
            case 'delivered':
                    $(this).css({
                        'background-color': '#28a74523', // Hijau muda
                        'color': '#28a745' // Hijau
                    });
                    svgPath.css('fill', '#28a745'); // SVG hijau
                    break;
            case 'created':
                    $(this).css({
                        'background-color': '#634BFF23',
                        'color': '#634BFF',
                    });
                    svgPath.css('fill', '#634BFF'); // SVG hijau
                    break;
            case 'queued':
                $(this).css({
                    'background-color': '#ff980023', // Orange muda
                    'color': '#ff9800' // Orange
                });
                svgPath.css('fill', '#ff9800'); // SVG orange
                break;
            default:
                // Tidak ada perubahan tambahan untuk default
                break;
        }
    });
});
