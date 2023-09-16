import { JsonView } from '@/components/JsonView';
import { IModel } from '@/interface/IModel';
import { useState } from 'react';

export const Model = ({ model }: { model: IModel }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const modelLines = model.modelString.split('\n');

    const nameModelDB = modelLines.filter(l => l.includes('@@map'))[0].split('"')[1];

    return (
        <div className="w-full">
            <button type="button" className="w-full bg-gray-900 py-10px" onClick={() => setIsOpen(old => !old)}>
                {model.name} - ({nameModelDB})
            </button>
            {isOpen && (
                <div className="w-full bg-gray-800">
                    <div className="flex w-full divide-x divide-zinc-700">
                        <div className="w-1/2  p-20px text-xs">
                            <pre className="whitespace-pre-wrap ">{model.modelString}</pre>
                        </div>
                        <div className="w-1/2 p-20px">
                            <JsonView json={{ teste: 'string' }} />
                        </div>
                    </div>
                    <hr className="border-t border-zinc-700" />
                    <div>asd</div>
                </div>
            )}
        </div>
    );
};
