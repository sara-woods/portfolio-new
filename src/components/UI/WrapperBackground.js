const WrapperBackground = (props) => {
  return (
    <div className={`wrapper-background ${props.className}`} style={{backgroundColor: props.backgroundColor}}>
      {props.children}
    </div>
  );
};

export default WrapperBackground;
