import { IModel, IModelProperty, IQuery } from '@/interface/IModel';
import { useState } from 'react';
import { Model } from './components/Model';

const typesProperty = [
    {
        name: 'String',
        query: {
            notNull: [
                { name: 'equals', dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsString()'], type: 'string' },
                { name: 'contains', dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsString()'], type: 'string' },
                { name: 'startsWith', dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsString()'], type: 'string' },
                { name: 'endsWith', dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsString()'], type: 'string' },
                { name: 'not', dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsString()'], type: 'string' },
                {
                    name: 'in',
                    dto: [
                        "@ApiPropertyOptional({ type: 'string[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsString({ each: true })',
                    ],
                    type: 'string[]',
                },
                {
                    name: 'notIn',
                    dto: [
                        "@ApiPropertyOptional({ type: 'string[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsString({ each: true })',
                    ],
                    type: 'string[]',
                },
            ],
            null: [
                {
                    name: 'equals',
                    dto: [
                        "@ApiPropertyOptional({ type: 'string | null', nullable: true })",
                        '@IsOptional()',
                        '@ToStringOrNull()',
                        '@IsString()',
                    ],
                    type: 'string | null',
                },
                { name: 'contains', dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsString()'], type: 'string' },
                { name: 'startsWith', dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsString()'], type: 'string' },
                { name: 'endsWith', dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsString()'], type: 'string' },
                {
                    name: 'not',
                    dto: [
                        "@ApiPropertyOptional({ type: 'string | null', nullable: true })",
                        '@IsOptional()',
                        '@ToStringOrNull()',
                        '@IsString()',
                    ],
                    type: 'string | null',
                },
                {
                    name: 'in',
                    dto: [
                        "@ApiPropertyOptional({ type: 'string[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsString({ each: true })',
                    ],
                    type: 'string[]',
                },
                {
                    name: 'notIn',
                    dto: [
                        "@ApiPropertyOptional({ type: 'string[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsString({ each: true })',
                    ],
                    type: 'string[]',
                },
            ],
        },
    },
    {
        name: 'BigInt',
        query: {
            notNull: [
                {
                    name: 'equals',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'lt',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'gt',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'lte',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'gte',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'not',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'in',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsNumber({}, { each: true })',
                    ],
                    type: 'number[]',
                },
                {
                    name: 'notIn',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsNumber({}, { each: true })',
                    ],
                    type: 'number[]',
                },
            ],
            null: [
                {
                    name: 'equals',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number | null', nullable: true })",
                        '@IsOptional()',
                        '@IsNumber()',
                        '@ToNumberOrNull()',
                    ],
                    type: 'number | null',
                },
                {
                    name: 'lt',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'gt',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'lte',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'gte',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'not',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number | null', nullable: true })",
                        '@IsOptional()',
                        '@IsNumber()',
                        '@ToNumberOrNull()',
                    ],
                    type: 'number | null',
                },
                {
                    name: 'in',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsNumber({}, { each: true })',
                    ],
                    type: 'number[]',
                },
                {
                    name: 'notIn',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsNumber({}, { each: true })',
                    ],
                    type: 'number[]',
                },
            ],
        },
    },
    {
        name: 'Int',
        query: {
            notNull: [
                {
                    name: 'equals',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'lt',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'gt',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'lte',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'gte',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'not',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'in',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsNumber({}, { each: true })',
                    ],
                    type: 'number[]',
                },
                {
                    name: 'notIn',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsNumber({}, { each: true })',
                    ],
                    type: 'number[]',
                },
            ],
            null: [
                {
                    name: 'equals',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number | null', nullable: true })",
                        '@IsOptional()',
                        '@IsNumber()',
                        '@ToNumberOrNull()',
                    ],
                    type: 'number | null',
                },
                {
                    name: 'lt',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'gt',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'lte',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'gte',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'not',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number | null', nullable: true })",
                        '@IsOptional()',
                        '@IsNumber()',
                        '@ToNumberOrNull()',
                    ],
                    type: 'number | null',
                },
                {
                    name: 'in',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsNumber({}, { each: true })',
                    ],
                    type: 'number[]',
                },
                {
                    name: 'notIn',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsNumber({}, { each: true })',
                    ],
                    type: 'number[]',
                },
            ],
        },
    },
    {
        name: 'Float',
        query: {
            notNull: [
                {
                    name: 'equals',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'lt',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'gt',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'lte',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'gte',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'not',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'in',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsNumber({}, { each: true })',
                    ],
                    type: 'number[]',
                },
                {
                    name: 'notIn',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsNumber({}, { each: true })',
                    ],
                    type: 'number[]',
                },
            ],
            null: [
                {
                    name: 'equals',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number | null', nullable: true })",
                        '@IsOptional()',
                        '@IsNumber()',
                        '@ToNumberOrNull()',
                    ],
                    type: 'number | null',
                },
                {
                    name: 'lt',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'gt',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'lte',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'gte',
                    dto: ['@ApiPropertyOptional()', '@IsOptional()', '@IsNumber()', '@ToNumber()'],
                    type: 'number',
                },
                {
                    name: 'not',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number | null', nullable: true })",
                        '@IsOptional()',
                        '@IsNumber()',
                        '@ToNumberOrNull()',
                    ],
                    type: 'number | null',
                },
                {
                    name: 'in',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsNumber({}, { each: true })',
                    ],
                    type: 'number[]',
                },
                {
                    name: 'notIn',
                    dto: [
                        "@ApiPropertyOptional({ type: 'number[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsNumber({}, { each: true })',
                    ],
                    type: 'number[]',
                },
            ],
        },
    },
    {
        name: 'DateTime',
        query: {
            notNull: [
                {
                    name: 'equals',
                    dto: ["@ApiPropertyOptional({ type: 'datetime | string' })", '@IsOptional()', '@IsDateString()'],
                    type: 'Date | string',
                },
                {
                    name: 'lt',
                    dto: ["@ApiPropertyOptional({ type: 'datetime | string' })", '@IsOptional()', '@IsDateString()'],
                    type: 'Date | string',
                },
                {
                    name: 'gt',
                    dto: ["@ApiPropertyOptional({ type: 'datetime | string' })", '@IsOptional()', '@IsDateString()'],
                    type: 'Date | string',
                },
                {
                    name: 'lte',
                    dto: ["@ApiPropertyOptional({ type: 'datetime | string' })", '@IsOptional()', '@IsDateString()'],
                    type: 'Date | string',
                },
                {
                    name: 'gte',
                    dto: ["@ApiPropertyOptional({ type: 'datetime | string' })", '@IsOptional()', '@IsDateString()'],
                    type: 'Date | string',
                },
                {
                    name: 'not',
                    dto: ["@ApiPropertyOptional({ type: 'datetime | string' })", '@IsOptional()', '@IsDateString()'],
                    type: 'Date | string',
                },
                {
                    name: 'in',
                    dto: [
                        "@ApiPropertyOptional({ type: 'datetime[] | string[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsDateString({}, { each: true })',
                    ],
                    type: 'Date[] | string[]',
                },
                {
                    name: 'notIn',
                    dto: [
                        "@ApiPropertyOptional({ type: 'datetime[] | string[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsDateString({}, { each: true })',
                    ],
                    type: 'Date[] | string[]',
                },
            ],
            null: [
                {
                    name: 'equals',
                    dto: [
                        "@ApiPropertyOptional({ type: 'datetime | string | null', nullable: true })",
                        '@IsOptional()',
                        '@IsDateString()',
                        '@ToDateStringOrNull()',
                    ],
                    type: 'Date | string | null',
                },
                {
                    name: 'lt',
                    dto: ["@ApiPropertyOptional({ type: 'datetime | string' })", '@IsOptional()', '@IsDateString()'],
                    type: 'Date | string',
                },
                {
                    name: 'gt',
                    dto: ["@ApiPropertyOptional({ type: 'datetime | string' })", '@IsOptional()', '@IsDateString()'],
                    type: 'Date | string',
                },
                {
                    name: 'lte',
                    dto: ["@ApiPropertyOptional({ type: 'datetime | string' })", '@IsOptional()', '@IsDateString()'],
                    type: 'Date | string',
                },
                {
                    name: 'gte',
                    dto: ["@ApiPropertyOptional({ type: 'datetime | string' })", '@IsOptional()', '@IsDateString()'],
                    type: 'Date | string',
                },
                {
                    name: 'not',
                    dto: [
                        "@ApiPropertyOptional({ type: 'datetime | string | null', nullable: true })",
                        '@IsOptional()',
                        '@IsDateString()',
                        '@ToDateStringOrNull()',
                    ],
                    type: 'Date | string | null',
                },
                {
                    name: 'in',
                    dto: [
                        "@ApiPropertyOptional({ type: 'datetime[] | string[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsDateString({}, { each: true })',
                    ],
                    type: 'Date[] | string[]',
                },
                {
                    name: 'notIn',
                    dto: [
                        "@ApiPropertyOptional({ type: 'datetime[] | string[]' })",
                        '@IsOptional()',
                        '@IsArray()',
                        '@ToArray()',
                        '@IsDateString({}, { each: true })',
                    ],
                    type: 'Date[] | string[]',
                },
            ],
        },
    },
];

const isExactMatch = (str: string, match: string) => {
    return new RegExp(`\\b${match.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`).test(str);
};

function extractProperties(modelString: string): IModelProperty[] {
    const lines = modelString
        .split('\n')
        .filter(l => !l.includes('model'))
        .filter(l => !l.includes('}'))
        .filter(l => !l.includes('@@map'))
        .filter(l => l);

    const propriedades: IModelProperty[] = lines.map(l => {
        const p = l.split(' ').filter(l => l);

        const typeExist = typesProperty.find(substring => isExactMatch(l, substring.name));

        const isUnique = l.includes('@unique') || l.includes('@id');
        const isNotRequired = p[1].includes('?');
        const isFK = l.includes('@relation');

        const name = p[0];

        const opcoes = (isNotRequired ? typeExist?.query.null : typeExist?.query.notNull)?.map(o => ({
            field: `${name}.${o.name}`,
            type: o.type,
            dto: o.dto,
        }));

        return {
            name,
            type: typeExist?.name,
            isUnique: isUnique,
            isRequired: (typeExist && !isNotRequired) || false,
            isFK: isFK,
            isPK: false,
            ...(isFK && {
                relationModel: {
                    name: p[1],
                    grupo: [],
                },
            }),
            ...(!typeExist &&
                !p[1].includes('[]') && {
                    relationModel: {
                        name: p[1].replace('?', ''),
                        grupo: [],
                    },
                }),
            ...(p[1].includes('[]') && {
                listRelationModel: {
                    name: p[1].replace('[]', ''),
                },
            }),
            query: opcoes || [],
        };
    });

    return propriedades;
}

function updateModels(models: IModel[]): IModel[] {
    console.log(models);

    models.forEach(model => {
        model.model.forEach(prop => {
            if (prop.relationModel) {
                function genereteQuerysRelation(models: IModel[], modelName: string, prefixName: string): IQuery[] {
                    const model = models.find(v => v.name === modelName);

                    if (!model) return [];

                    const teste: IQuery[] = [];

                    model.model.forEach(field => {
                        field.query.forEach(query => {
                            teste.push({
                                dto: query.dto,
                                field: prefixName + '.' + query.field,
                                type: query.type,
                            });
                        });

                        if (field.relationModel) {
                            const modelTeste = models.find(v => v.name === field.relationModel?.name);
                        }
                    });

                    return teste;
                }

                prop.relationModel.grupo.push({
                    name: prop.name,
                    query: genereteQuerysRelation(models, prop.relationModel.name, prop.name),
                });
            }
        });
    });

    return models;
}

function getModelObjects(modelsString: string): IModel[] {
    const modelRegex = /model\s+(\w+)\s*{([^}]*)}/g;
    const modelObjects: IModel[] = [];

    let match;
    while ((match = modelRegex.exec(modelsString))) {
        const modelName = match[1];
        const modelString = match[0];

        modelObjects.push({ name: modelName, modelString, model: extractProperties(modelString) as any });
    }

    return updateModels(modelObjects);
}

interface ModelRelation {
    modelName: string;
    relations: string[];
}

function getRelations(prismaSchema: string): ModelRelation[] {
    const modelRelations: ModelRelation[] = [];
    const lines = prismaSchema.split('\n');

    let currentModel: string | null = null;
    let currentRelations: string[] = [];

    for (const line of lines) {
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith('model ')) {
            // A new model is found
            if (currentModel) {
                modelRelations.push({ modelName: currentModel, relations: currentRelations });
            }

            currentModel = trimmedLine.split(' ')[1];
            currentRelations = [];
        } else if (trimmedLine.startsWith('@@map')) {
            // End of the model block, add the last model's relations
            if (currentModel) {
                modelRelations.push({ modelName: currentModel, relations: currentRelations });
                currentModel = null;
                currentRelations = [];
            }
        } else if (trimmedLine.startsWith('    ') && trimmedLine.includes('@relation')) {
            // Extract relation name from the line
            const relationName = trimmedLine.split(' ')[1];
            currentRelations.push(relationName);
        }
    }

    return modelRelations;
}

export const PageHome = () => {
    const [prismaSchema, setPrismaSchema] = useState<string>('');

    console.log(getRelations(prismaSchema));

    const models = getModelObjects(prismaSchema);

    return (
        <div className="flex w-full justify-center">
            <div className=" h-full w-2/3  p-30px">
                <h1 className="text-center text-2xl">
                    Insira seu Prisma Schema no campo abaixo para que a extração possa ocorrer
                </h1>

                <div className="mt-40px flex justify-center">
                    <textarea
                        className="h-[200px] w-full rounded-md bg-zinc-700 p-10px"
                        onChange={e => setPrismaSchema(e.target.value)}
                    >
                        {prismaSchema}
                    </textarea>
                </div>

                <div className="mt-50px flex flex-col items-center gap-30px">
                    {models.map(m => (
                        <Model key={m.name} model={m} />
                    ))}
                </div>
            </div>
        </div>
    );
};
