import {Skin} from "../types/skin.type";
import {computeLevel} from "../utils/compute-level";

interface SkinsProp {
    skins: Skin[]
}

export const Skins = ({skins}: SkinsProp) => (
    <>
        {skins.map(skin => (
                <li key={skin.id} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src={skin.image_url} alt="Neil image"/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Skin #{skin.id}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                Level {computeLevel(skin)}
                            </p>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            ${skin.price}
                        </button>
                    </div>
                </li>
            )
        )}
    </>);