import './App.css';
import MoviesList from './components/MoviesList/MoviesList';
import CustomSelect from './components/CustomSelect/CustomSelect';
import { useState } from 'react';

function App() {
  const [ruleOption, setRuleOption] = useState<string>('odd/even');
  const [languageOption, setLanguageOption] = useState<string>('en');
  const [categoryOption, setCategoryOption] = useState<string>('popular');


  const handleRuleSelectChange = (selectedValue: string) => {
    setRuleOption(selectedValue);
  };

  const handleLanguageSelectChange = (selectedValue: string) => {
    setLanguageOption(selectedValue);
  };

  const handleOptionSelectChange = (selectedValue: string) => {
    setCategoryOption(selectedValue);
  };

  return (
    <>
      <h1>TOP Movies</h1>
      <CustomSelect
        options={['odd/even', 'prime numbers']}
        label="Select Filter"
        onSelect={handleRuleSelectChange}
      />
      <CustomSelect
        options={['en', 'pt', 'es']}
        label="Select Language"
        onSelect={handleLanguageSelectChange}
      />
      <CustomSelect
        options={['popular', 'top_rated', 'upcoming', 'now_playing']}
        label="Select category"
        onSelect={handleOptionSelectChange}
      />
      <MoviesList ruleOption={ruleOption} languageOption={languageOption} categoryOption={categoryOption} />
    </>
  );
}

export default App;
