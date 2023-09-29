interface IProps {
  title: string;
  details: string;
}

const Introduce = (props: IProps) => {
  return (
    <div className="box">
      <h1 className="title">{props.title}</h1>
      <h1>{props.details}</h1>
    </div>
  );
};

export default Introduce;
