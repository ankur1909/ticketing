import {CustomError} from './custom-error';

export class DatabasConnectionError extends CustomError {
    reason = 'Error connecting to database';
    statusCode = 500;
    constructor() {
        super('Error connecting to DB');

        Object.setPrototypeOf(this, DatabasConnectionError.prototype);
    }

    serializeErrors() {
        return [
            {
                message: this.reason
            }
        ];
    }
}