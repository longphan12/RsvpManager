export default class Logger {
    constructor() {}

    log(message: string) {
        console.log(message);
    }

    error(message: string) {
        console.error(message);
    }
}