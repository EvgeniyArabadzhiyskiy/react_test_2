const ContentBox = ({articles: {text, title}}) => {
    return ( <div>
        <h2>{title}</h2>
        <p>
          {text}
        </p>
    </div> );
}
 
export default ContentBox;