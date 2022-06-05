await fetch("https://ipfs.io/ipfs/")
.then((res) => res.json())
.then((data) => {
    console.log(data);
}).catch((err) => console.log(err));