import InvestmentItem from "@/components/investment-item";
import NavBar from "@/components/nav-bar";

export default function InvestmentsPage(){
    return(
        <>
           <NavBar active="investimentos" />

            <main className="flex justify-center">
                <div className="bg-slate-900 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-bold">Investimentos</h2>

                    <InvestmentItem />
                    <InvestmentItem />
                    <InvestmentItem />
                    <InvestmentItem />

                </div>
            </main>
        </>
    );
}