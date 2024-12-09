// Ambil elemen canvas
const pieCanvas = document.getElementById('pieCanvas');

// Data untuk chart berdasarkan kategori
const data = {
    labels: [
        'Fit',
        'Broken',
        'Exceptional',
        'Unfit',
        'Detained',
        'Busy',
        'UserModified'
    ],
    datasets: [{
        label: 'Status Dataset',
        data: [50, 0, 20, 5, 0, 0, 0], // Data contoh untuk tiap kategori
        backgroundColor: [
            '#28a745', 
            '#dc3545',
            '#ffeb3b',
            '#f44336',
            '#ff9800',
            '#ffc107',
            '#9c27b0'
        ],
        hoverOffset: 5
    }]
};

// Buat chart pie
const pieChart = new Chart(pieCanvas, {
    type: 'pie',
    data: data
});