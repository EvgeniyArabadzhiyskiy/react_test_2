const ContentBox = ({articles: {text, title}}) => {
    return ( <div>
        <h2>{title}</h2>
        {/* <p>1/10</p> */}
        <p>
          {text}
        </p>
    </div> );
}
 
export default ContentBox;