const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
            let cek = dataDay.find((item) => {
                return item === day;
            });
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error("Hari ini bukan hari kerja"));
            }
        }, 3000);
    });
};

// Menggunakan then dan catch
cekHariKerja("senin")
    .then((hasil) => {
        console.log(hasil);
    })
    .catch((err) => {
        console.log(err.message);
    });

// then digunakan untuk menangani hasil yang berhasil (resolve) dari promise. Ketika promise terpenuhi, fungsi yang diberikan pada then akan dieksekusi dan menerima hasil resolve sebagai argumen.
// catch digunakan untuk menangani penolakan (reject) dari promise. Ketika promise ditolak, fungsi yang diberikan pada catch akan dieksekusi dan menerima error sebagai argumen.

// Menggunakan try dan catch
const cekHariKerjaa = async (day) => {
    try {
        const hasil = await cekHariKerja(day);
        console.log(hasil);
    } catch (error) {
        console.log(error.message);
    }
};

cekHariKerjaa("rabu");

// try digunakan untuk menandai blok kode yang mungkin menghasilkan error.
// catch digunakan untuk menangkap error yang terjadi dalam blok try dan menjalankan tindakan yang sesuai.
