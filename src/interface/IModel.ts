export interface IModel {
    name: string;
    modelString: string;
    model: IModelProperty[];
}

export interface IQuery {
    field: string;
    dto: string[];
    type: string;
}

export interface IModelProperty {
    name: string;
    type?: string;
    default?: string;
    isRequired: boolean;
    isUnique: boolean;
    isPK: boolean;
    isFK: boolean;
    query: IQuery[];
    relationModel?: {
        name: string;
        grupo: {
            name: string;
            query: IQuery[];
        }[];
    };
    listRelationModel?: {
        name: string;
    };
}
