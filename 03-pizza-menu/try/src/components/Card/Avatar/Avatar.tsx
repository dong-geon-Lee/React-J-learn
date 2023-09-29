interface IProps {
  img: string;
}

const Avatar = (props: IProps) => {
  return <img src={props.img} alt="cat_picture" className="catImg" />;
};

export default Avatar;
