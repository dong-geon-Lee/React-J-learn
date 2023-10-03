import Movie from "./Movie";

const MovieList = ({ movies }: any) => {
  return (
    <ul className="list">
      {movies?.map((movie: any) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
