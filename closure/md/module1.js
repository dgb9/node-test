const log = (context) => {
    return (message) => {
        let d = Date();
        let m = `${d} [${context}] ${message}`;

        console.log(m);
    }
}

module.exports = log;
