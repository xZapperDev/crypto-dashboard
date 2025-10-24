const CurrencySelector = ({ selected, onChange }) => {
    const options = ["bitcoin", "ethereum", "cardano", "solana", "dogecoin"];

    return (
        <div className="mb-6 flex justify-center">
            <select
                className="bg-gray-800 text-white p-3 rounded-lg"
                value={selected}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((coin) => (
                    <option key={coin} value={coin}>
                        {coin.charAt(0).toUpperCase() + coin.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencySelector;
