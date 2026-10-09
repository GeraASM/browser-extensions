import type { Option } from "../types/options"

interface Extensions {
    option: Option;
    setOption: React.Dispatch<React.SetStateAction<Option>>;
}
export default function Extensions({option, setOption}: Extensions) {
    return (
        <section className="text-center p-4 lg:flex lg:items-center lg:justify-between">
            <h2 className="font-bold text-3xl">Extensions List</h2>
            <div className="flex justify-between mt-4 mx-auto max-w-[240px] lg:mx-0 lg:ma-w-auto lg:gap-4">
                <button 
                    onClick={() => setOption('all')}
                    className={`extension ${option === 'all' && 'extension--active'}`}>All</button>
                <button 
                    onClick={() => setOption('active')}
                    className={`extension ${option === 'active' && 'extension--active'}`}>Active</button>
                <button 
                    onClick={() => setOption('inactive')}
                    className={`extension ${option === 'inactive' && 'extension--active'}`}>Inactive</button>
            </div>
        </section>
    )
}