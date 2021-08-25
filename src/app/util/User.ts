import { CashAccount } from "./CashAccount"

export interface User {
    id: number,
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    cashAccounts: CashAccount[]

}