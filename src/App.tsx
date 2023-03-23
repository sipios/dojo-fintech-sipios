import './App.css'
import {useSkins} from './hooks/useSkins';
import {Skins} from "./components/Skins";

function App() {

    const {error, isLoading, skins} = useSkins();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="App">
            <div className="max-w-4xl mx-auto">
                <div
                    className="p-4 max-w-3xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Skin catalog</h3>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            <Skins skins={skins}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
