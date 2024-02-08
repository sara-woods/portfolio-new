const WrapperBackground = (props) => {
  return (
    <div id={props.id} className={`wrapper-background ${props.className}`} style={{backgroundColor: props.backgroundColor}}>
      {props.children}
    </div>
  );
};

export default WrapperBackground;
