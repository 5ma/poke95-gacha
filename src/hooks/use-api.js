import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const BaseUrl = "https://pokeapi.co/api/v2/";

export const useAllPokemon = () => {
  const { data, error, isLoading } = useSWR(`${BaseUrl}pokemon?limit=2000`, fetcher);

  return {
    pokemon: data,
    isLoading,
    isError: error,
  };
};

export const usePokemon = (id) => {
  const { data, error, isLoading } = useSWR(`${BaseUrl}pokemon/${id}`, fetcher);

  return {
    pokemon: data,
    isLoading,
    isError: error,
  };
};
