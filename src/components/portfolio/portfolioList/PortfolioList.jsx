const PortfolioList = ({title, selected, id, setSelected}) => {

    const handelSelectedItem = (id) =>{
        setSelected(id)
    };

    return ( 
        <li className={selected===id  && "active"} onClick={()=>handelSelectedItem(id)}>
            {title}
        </li>
     );
}
 
export default PortfolioList;