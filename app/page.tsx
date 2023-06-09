import BitcoinPriceHistory from "./components/bitcoinPricehistory";
import BitcoinPrices from "./components/bitcoinPrices";
import BloombergNews from "./components/bloombergNews";
import FinancialNews from "./components/financialNews";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BitcoinPrices />
      <BitcoinPriceHistory />
      <BloombergNews />
      <FinancialNews />
    </main>
  )
}
