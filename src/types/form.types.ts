export interface AutocompleteOption {
    id: number;
    name: string;
}

export interface HandleAutocompleteSearchFn {
    (value: string | undefined): void
}

interface inputConfig  {
    componentType: 'textField' | 'autocomplete',
    placeholder: string,
    type: string,
    name: string,
}

export interface componentConfig extends inputConfig{
    options: AutocompleteOption[] | undefined
}