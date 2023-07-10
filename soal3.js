//Case 1
const getKaryawanData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const karyawanData = [
                { nama: "Ujang Keeves", usia: 30, jabatan: "Project Manager" },
                { nama: "Al D. Tanjung", usia: 25, jabatan: "Fullstack Developer" },
                { nama: "Dita Leni Ravia", usia: 32, jabatan: "UI/UX Designer" },
                { nama: "Kamingsun Bin Amkaming", usia: 35, jabatan: "Frontend Develover" },
                { nama: "Diki Ihin", usia: 28, jabatan: "Backend Developer" },
                { nama: "Freddy Edi", usia: 28, jabatan: "DevOps Engineer" },
            ];
            resolve(karyawanData);
        }, 2000);
    });
};

getKaryawanData()
    .then((karyawanData) => {
        console.log("Data Karyawan:");
        karyawanData.forEach((karyawan) => {
            console.log("Nama:", karyawan.nama);
            console.log("Usia:", karyawan.usia);
            console.log("Jabatan:", karyawan.jabatan);
            console.log("");
        });
    })
    .catch((error) => {
        console.log("Error:", error);
    });

const getKaryawanDataFill = async () => {
    try {
        let results = await getKaryawanData();
        console.log("");
        console.log("Data Karyawan:");
        results.forEach((karyawan) => {
            console.log("Nama:", karyawan.nama);
            console.log("Usia:", karyawan.usia);
            console.log("Jabatan:", karyawan.jabatan);
            console.log("");
        });
    } catch (err) {
        console.log(err.message);
    }
};

getKaryawanDataFill();

//Case 2
const bandaraData = [
    { bandara: "Soekarno-Hatta", maskapai: "Garuda Indonesia" },
    { bandara: "Changi", maskapai: "Singapore Airlines" },
    { bandara: "Heathrow", maskapai: "British Airways" },
    { bandara: "Incheon", maskapai: "Korean Air" },
    { bandara: "Dubai", maskapai: "Emirates" },
];

const getBandara = (bandara) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const maskapai = bandaraData.find((data) => data.bandara.toLowerCase() === bandara.toLowerCase());
            if (maskapai) {
                resolve(maskapai.maskapai);
            } else {
                reject(new Error("Tidak ada maskapai yang beroperasi dari bandara tersebut"));
            }
        }, 4000);
    });
};

const maskapaiSatu = "Soekarno-Hatta";

getBandara(maskapaiSatu)
    .then((hasil) => {
        console.log("");
        console.log("Maskapai yang beroperasi dari bandara tersebut:", hasil);
    })
    .catch((err) => {
        console.log(err.message);
    });

const getMaskapai = async (maskapai) => {
    try {
        let results = await getBandara(maskapai);
        console.log("Maskapai yang beroperasi dari bandara tersebut:", results);
    } catch (err) {
        console.log(err.message);
    }
};

const maskapai2 = "Dubai";

getMaskapai(maskapai2);
