import Input from "./Input";

const Search = (props) => {
  const { value, onChange } = props;
  return (
    <div className="Search">
      <h1>😎 EmojiSearch 😎</h1>
      <Input
        type="text"
        placeholder="What emoji are you looking for ? cat, smile, cloud !?"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
