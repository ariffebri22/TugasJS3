const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        if (!error) {
            callback(null, month);
        } else {
            callback(new Error("Sorry Data Not Found"), []);
        }
    }, 4000);
};

const showMonths = (err, solve) => {
    if (err) {
        console.log(err.message);
    } else {
        solve.map((month) => {
            console.log(month);
        });
    }
};

getMonth(showMonths);
