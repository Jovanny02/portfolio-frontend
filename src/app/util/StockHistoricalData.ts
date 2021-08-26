import { StockPrice } from "./StockPrice";

export interface StockHistoricalData {
    stockCode: string,
    prices: StockPrice[]
}