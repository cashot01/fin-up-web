import { Book } from "lucide-react";

export default function InvestmentItem(){
    return (
        <div className="flex justify-between mt-2">
            <div className="flex gap-2">
                <Book />
                <span>nome do investimento</span>
            </div>

            <div>
                <span>...</span>
            </div>
        </div>
    )
}

