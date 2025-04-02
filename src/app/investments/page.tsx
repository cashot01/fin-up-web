"use client"
import { getInvestments } from "@/actions/investment-actions";
import InvestmentItem from "@/components/investment-item";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function InvestmentsPage() {
    const data: Investment[] = await getInvestments()

    return (
        <>
            <NavBar active="investimentos" />

            <main className="flex justify-center">
                <div className="border-2 border-sky-600 min-w-2/3 m-6 p-6 rounded">
                    <div className="flex justify-between">
                        <h2 className="text-lg text-sky-600 font-bold">Investimentos</h2>
                        <Button asChild>
                            <Link className="text-stone-900" href="/investments/form">
                                <Plus />
                                novo investimento
                            </Link>
                        </Button>

                    </div>

                    {data.length == 0 ?
                        <p className="text-stone-900">Nenhum investimento cadastrado</p> :
                        data.map(investment => <InvestmentItem key={investment.id} investment={investment} />)
                    }

                </div>
            </main>
        </>
    )
}