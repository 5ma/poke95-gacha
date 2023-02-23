import { CollectionList } from "../components/collection";
import { useLocalStorage } from "../hooks/use-local-storage";

export const Collection = () => {
  const [collection, setCollection] = useLocalStorage("collection", []);
  console.log("collection", collection);
  return (
    <div>
      <div>Collection page!</div>
      <CollectionList lists={collection} />
    </div>
  );
};
