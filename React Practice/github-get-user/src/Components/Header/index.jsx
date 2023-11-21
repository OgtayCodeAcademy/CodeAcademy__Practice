import "bootstrap/dist/css/bootstrap.min.css";
import {
  CInputGroupText,
  CInputGroup,
  CFormInput,
  CButton,
} from "@coreui/react";

import axios from "axios";
import { GetUser } from "../API";

export default function Header({setValue, value, setUser}) {
  return (
    <>
      <div className="container text-center my-5">
        <h1>Github get User Info</h1>
      </div>
      <div className="container" style={{padding: "0 350px"}}>
        <CInputGroup className="mb-3">
          <CFormInput
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e)=>{
                setValue(e.target.value)
            }}
          />
          <CButton
            type="button"
            color="secondary"
            variant="outline"
            id="button-addon2"
            onClick={()=>{
                GetUser(value).then((profile_info)=>{
                    setUser(profile_info)
                })
            }}
          >
            Search
          </CButton>
        </CInputGroup>
      </div>
    </>
  );
}
