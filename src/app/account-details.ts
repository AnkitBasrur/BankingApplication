export class AccountDetails {
    account_no: number;
    account_type: string;
    user_id: string;
    balance: number;
    IFSC_code: string;

    constructor(account_no: number, account_type: string, user_id: string, balance: number, IFSC_code: string) {
        this.account_no = account_no;
        this.account_type = account_type;
        this.user_id = user_id;
        this.balance = balance;
        this.IFSC_code = IFSC_code;
    }

}
