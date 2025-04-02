"use client"

import { createInvestment } from "@/actions/investment-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const initialState= {
    values:{
        name: "",
        icon: ""
    },
    errors:{
        name: "",
        icons: ""
    }
}

export default function InvestmentFormPage(){
    const [state, formAction, pending] = useActionState(createInvestment, initialState)
    
    return (
        <>
           <NavBar active="investimentos" />

            <main className="flex justify-center">
                <div className="border-2 border-sky-600 min-w-2/3 m-6 p-6 rounded">
                    <h2 className="text-lg font-bold text-sky-600">Cadastrar Investimento</h2>

                    <form action={formAction} className="space-y-4 mt-4">
                        
                        <div>
                            <Input 
                                name="name" 
                                placeholder="nome do investimento" 
                                aria-invalid={!!state?.errors.name} 
                                defaultValue={state?.values.name}
                            />
                            <span className="text-sm text-destructive">{state?.errors.name}</span>
                        </div>

                        <div>
                            <Input 
                                className="text-stone-900"
                                name="icon" 
                                placeholder="ícone do investimento" 
                                aria-invalid={!!state?.errors.icon}
                                defaultValue={state?.values.icon}
                             />
                            <span className="text-sm text-destructive">{state?.errors.icon}</span>
                        </div>

                        <div className="flex justify-between">
                            <Button className="bg-sky-600" asChild variant={"outline"}>
                                <Link href="/investments">
                                    <ArrowLeft />
                                    Cancelar
                                </Link>
                            </Button>

                            <Button>
                                <Check />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}