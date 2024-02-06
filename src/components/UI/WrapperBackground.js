const WrapperBackground = (props) => {
  return (
    <div className="wrapper-background" style={{backgroundColor: props.backgroundColor}}>
      {props.children}
    </div>
  );
};

export default WrapperBackground;
