import Item from "./Item";
import { HOME, CUSTOMER, SCHOOL, MTD } from "./Menus";
const ItemsContainer = () => {
  return (

    
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={HOME} title="HOME" />
      <Item Links={CUSTOMER} title="CUSTOMER" />
      <Item Links={SCHOOL} title="SCHOOL" />
      <Item Links={MTD} title="MTD"   />

      
    </div>
  );
};

export default ItemsContainer;
