import type { TypeExtension } from "../types/extension"
interface Extension {
    extension: TypeExtension; 
    changeIsActive: (name: string) => void;
    removeExtension: (name: string) => void;
}

export default function Extension({extension, changeIsActive, removeExtension}: Extension) {
    const {logo, description, isActive, name} = extension;
    return (
        <section className='rounded-2xl bg-neutral-0 p-4 shadow-sm border border-transparent dark:border-neutral-600 flex flex-col justify-between gap-4'>
            <div className="flex items-start gap-4">
                <img src={logo} alt={name} />
                <div>
                    <h3 className="font-bold text-xl">{name}</h3>
                    <p className='text-neutral-600 dark:text-neutral-300'>{description}</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <button 
                    onClick={() => removeExtension(name)}
                    className="remove">Remove</button>
                <button 
                    onClick={() => changeIsActive(name)}
                    className={`h-6 w-12 rounded-2xl bg-neutral-100 px-1 cursor-pointer outline-0 focus:ring-red-400 focus:ring-2 focus:border-transparent ${isActive && 'bg-red-400 hover:bg-red-700 '}`}>
                    <div className={`size-4 bg-white rounded-full transition-transform ${isActive && 'translate-x-6'}`}>

                    </div>
                </button>
            </div>
        </section>
    )
}