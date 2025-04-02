import CrudDropdown from "./crud-dropdown";
import Icon from "./icon";

interface InvestmentItemProps {
    investment: Investment
}

export default function InvestmentItem({ investment }: InvestmentItemProps) {
    return (
        <div className="flex justify-between mt-2">
            <div className="flex gap-2">
                <Icon name={investment.icon} />
                <span>{investment.name}</span>
            </div>

            <div>
                <CrudDropdown />
            </div>
        </div>
    )
}