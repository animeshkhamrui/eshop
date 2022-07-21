import React,{useState} from "react";
import "./Sub_product.css";
import ProductJSON from "../Product.json";
import { useParams, Link } from "react-router-dom";
import { Card, Button, Col, Row, Container } from "react-bootstrap";

export default function Sub_product() {
  const pName = useParams();
  // console.log("value: ",pName.ProductName);

  const pObj = ProductJSON.Electronic_Product.find(
    (data) => data.Product_name === pName.ProductName
  );
  // console.log("Product obj: ",pObj);

   const [searchText,setSearchText]=useState('');

  return (
    <div className="subProductPage">
      <input type="text" placeholder="Type the product name here" 
           onChange={(event)=>{setSearchText(event.target.value)}}/>
      <Container>
        <Row xxl={4} xl={3} Lg={3} md={3} sm={2}>
          {pObj.Sub_product.filter((Val)=>{
            if(searchText===""){
              return Val;
            }else if(Val.Company.toLowerCase().includes(searchText.toLowerCase())){
              return Val
            }
          }).map((data1) => {
            return (
              <Link
                to={`/single_product/${pObj.Product_name}/${data1.Company}`}
                key={data1.Id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={data1.Img}
                      width="200px"
                      height="300px"
                    />
                    <Card.Body>
                      <Card.Title>{data1.Company}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Details</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
