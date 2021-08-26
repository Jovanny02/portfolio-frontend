import { CashAccount } from "./CashAccount"
import { Investments } from "./Investments"

export interface User {
    id: number,
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    cashAccounts: CashAccount[],
    investments: Investments[]
 
}