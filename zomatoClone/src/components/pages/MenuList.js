import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { restaurantList } from "../subComponents/fkData";

const MenuList = (props) => {
  const [buyerDetailsModalVisibility, setBuyerDetailsModalVisibility] = useState(0);
  const onHide = () => {
    props.setMenuListVisibility(false);
    setBuyerDetailsModalVisibility(0);
  }
  return (
    <>
      <Modal
        size="lg"
        show={props.menuListVisibility}
        // onHide={() => props.setMenuListVisibility(false)}
        onHide={() => onHide()}
        centered
      >
        <Modal.Header className="menuListModalTitle" closeButton>
          <Modal.Title>
            <h3 className="cmnTxtClr">
              <b>The Big Chill Cakery</b>
            </h3>
          </Modal.Title>
        </Modal.Header>
        {buyerDetailsModalVisibility === 1 ?
          <Modal.Body className="menuListModalBody">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile Number" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Address</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your address"></textarea>
            </div>
          </Modal.Body> :
          <Modal.Body className="menuListModalBody">
            {restaurantList.map((itm) =>
              itm.menu.map((itm1) => (
                <>
                  <div class="card menuListCard" key={itm1.id}>
                    <div class="row g-0">
                      <div className="col-md-9">
                        <img
                          src={itm1.vegOrNonVeg}
                          class="img-fluid vegOrNonVeg"
                          alt="error"
                        />
                        <h6 class="menuListCardTitle">{itm1.name}</h6>
                        <h6 class="menuListCardRating">
                          <b>₹ {itm1.price}</b>
                        </h6>
                        <p class="menuListCardAddress">{itm1.recipes}</p>
                      </div>
                      <div className="col-md-3 menuListCardImgAddBtn">
                        <img src={itm1.image} class="img-fluid" alt="error" />
                        <button type="button" className="btn btn-outline-success menuListCardAddBtn">
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))
            )}
          </Modal.Body>
        }

        {buyerDetailsModalVisibility === 1 ?
          <Modal.Footer className="menuListModalFooter">
            <button type="button" class="btn btn-danger" >
              Proceed
            </button>
          </Modal.Footer> :
          <Modal.Footer className="menuListModalFooter">
            <h3 className="cmnTxtClr"><b>Subtotal</b></h3>
            <h3 className="cmnTxtClr"><b>₹ </b></h3>
            <button type="button" class="btn btn-danger" onClick={() => setBuyerDetailsModalVisibility(1)}>
              Pay Now
            </button>
          </Modal.Footer>
        }
      </Modal>
    </>
  );
};

export default MenuList;
