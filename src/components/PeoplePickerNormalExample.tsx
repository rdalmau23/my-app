import * as React from 'react';
import { NormalPeoplePicker } from '@fluentui/react/lib/Pickers';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { people } from '@fluentui/example-data';

export const PeoplePickerNormalExample: React.FunctionComponent = () => {
  const [peopleList] = React.useState<IPersonaProps[]>(people);

  const onFilterChanged = (filterText: string): IPersonaProps[] => {
    if (filterText) {
      return peopleList.filter((item: IPersonaProps) =>
        item.text?.toLowerCase().includes(filterText.toLowerCase())
      );
    } else {
      return [];
    }
  };

  return (
    <div>
      <NormalPeoplePicker
        onResolveSuggestions={onFilterChanged}
        getTextFromItem={(item: IPersonaProps) => item.text || ''}
        pickerSuggestionsProps={{
          suggestionsHeaderText: 'Suggested People',
          noResultsFoundText: 'No results found',
        }}
        className={'ms-PeoplePicker'}
      />
    </div>
  );
};
