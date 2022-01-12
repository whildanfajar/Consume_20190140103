function getAll() {
    const respon = axios.get("http://localhost:8041/sparepart/allsparepart")
    const dr = respon.then(resp => resp.data)
    return dr
}

async function create(data) {
    await axios.post("http://localhost:8041/sparepart/addsparepart", data)
        .then((result) => {
            console.log(result)
            return result.data
        }).catch((err) => {
            console.error(err)
        });
}

async function update(data) {
    await axios.put("http://localhost:8041/sparepart/updatesparepart", data)
        .then((result) => {
            console.log(result)
            return result.data
        }).catch((err) => {
            console.error(err)
        });
}

async function del(data) {
    await axios.delete("http://localhost:8041/sparepart/hapussparepart", data)
        .then((result) => {
            console.log(result)
            return result.data
        }).catch((err) => {
            console.error(err)
        });
}
