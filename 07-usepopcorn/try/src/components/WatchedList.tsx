import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched }: any) => {
  return (
    <ul className="list">
      {watched.map((movie: any) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default WatchedList;
