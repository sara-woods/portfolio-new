import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="header">Hey there!</h1>
      <p className="text-md text-300 mt-3">
        If you would like to get in contact, pop me an e-mail at{" "}
        <a href="mailto: lotfi.sara@gmail.com">lotfi.sara@gmail.com</a> or
        message me on{" "}
        <a
          href="https://www.linkedin.com/in/sara-lotfi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
};

export default Contact;
