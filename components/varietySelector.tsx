import { useState } from "react";

interface Variety {
    id: string;
    name: string;
    price: number;
}


interface VarietySelectorProps {
    varieties: Variety[];
    onSelect: (variety: Variety) => void;
}

const VarietySelector = ({ varieties, onSelect }: VarietySelectorProps) => {
    const [selectedVariety, setSelectedVariety] = useState<Variety | null>(null);

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = event.target.value;
        const variety = varieties.find(v => v.id === selectedId) || null;
        setSelectedVariety(variety);
        if (variety) {
            onSelect(variety);
        }
    };

    return (
        <div className="mb-4">
            <label htmlFor="variety-selector" className="block text-sm font-medium text-gray-700">
                Select Variety
            </label>
            <select
                id="variety-selector"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={handleSelect}
                value={selectedVariety?.id || ""}
            >
                <option value="" disabled>Select a variety</option>
                {varieties.map(variety => (
                    <option key={variety.id} value={variety.id}>
                        {variety.name} - Rs. {variety.price.toFixed(2)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default VarietySelector;