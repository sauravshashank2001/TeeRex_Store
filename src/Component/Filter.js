import { Button, Form } from "react-bootstrap";
import { CartState } from "../Component2/Context";


//Filter Functionality
const Filters = () => {
 const {productState: {byRed,byBlue,byGreen,byMen,byWomen,byPrice1,byPrice2,byPrice3,byPolo,byHoodie,byBasic},productDispatch}= CartState();

  return (
    <div className="filters">
      <span className="title">Color</span>
      <span>
        <Form.Check
          inline
          label="Red"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_RED",
            })
          }
          checked={byRed}
        />
      </span>
      
      <span>
        <Form.Check
          inline
          label="Blue"
          name="group1"
          type="checkbox"
          id={`inline-2`}
          onChange={()=>{
            productDispatch({
              type:"FILTER_BY_BLUE",
            })
          }}
          checked={byBlue}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Green"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={()=>{
            productDispatch({
              type:"FILTER_BY_GREEN",
            })
          }}
          checked={byGreen}
        />
      </span>
      <span className="title">Gender</span>
      <span>
        <Form.Check
          inline
          label="Men"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={()=>{
            productDispatch({
              type:"FILTER_BY_MEN",
            })
          }}
          checked={byMen}
          
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Women"
          name="group1"
          type="checkbox"
          id={`inline-5`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_WOMEN",
            })
          }
          checked={byWomen}
        />
      </span>
      {/* <span className="title">Price</span>*/}
      <span> 
        <Form.Check
          inline
          label="0-RS 250"
          name="group1"
          type="checkbox"
          id={`inline-6`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_PRICE1",
          
            })
          }
          checked={byPrice1}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="RS 251-450"
          name="group1"
          type="checkbox"
          id={`inline-7`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_PRICE2",
              
            })
          }
          checked={byPrice2}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="RS 450 Onwards"
          name="group1"
          type="checkbox"
          id={`inline-8`} 
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_PRICE3",
            })
          }
          checked={byPrice3}
        />
      </span>
      <span className="title">Type</span>
      <span>
        <Form.Check
          inline
          label="Polo"
          name="group1"
          type="checkbox"
          id={`inline-9`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_POLO",
            })
          }
          checked={byPolo}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Hoodie"
          name="group1"
          type="checkbox"
          id={`inline-10`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_HOODIE",
            })
          }
          checked={byHoodie}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Basic"
          name="group1"
          type="checkbox"
          id={`inline-5`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_BASIC",
            })
          }
          checked={byBasic}
        />
      </span>
      <Button
        variant="dark"
         onClick={() =>
           productDispatch({
             type: "CLEAR_FILTERS",
           })
         }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;