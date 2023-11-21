import {
  CCardBody,
  CCard,
  CRow,
  CCol,
  CCardImage,
  CCardTitle,
  CCardText,
  CButton
} from "@coreui/react";

export default function Card({ user, table, setTable }) {
  return (
    <>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <CCard className="my-4" style={{ maxWidth: "540px" }}>
          <CRow className="g-0">
            <CCol md={4}>
              <CCardImage src={user.avatar_url} />
            </CCol>
            <CCol md={8}>
              <CCardBody>
                <CCardTitle>
                  {user.name} <em>({user.login})</em>
                </CCardTitle>
                <CCardText>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <CButton color="info" shape="rounded-0" onClick={()=>{
                        window.open(user.html_url, "_blank");
                    }}>Github Page</CButton>
                    <CButton color="primary" shape="rounded-0" onClick={()=>{
                        window.open(`${user.html_url}?tab=followers`, "_blank");
                    }}>Followers ({user.followers})</CButton>
                    <CButton color="primary" shape="rounded-0" onClick={()=>{
                        if (table.find((element)=> element.userid == user.id)) {
                            setTable(table)
                        }else{
                            setTable([...table, {name: user.name, userid: user.id, company: (user.company ? user.company : "No company" ), location: user.location}])
                        }
                    }}>Add Table</CButton>
                  </div>
                </CCardText>
                <CCardText>
                    <p>{user.bio}</p>
                </CCardText>
              </CCardBody>
            </CCol>
          </CRow>
        </CCard>
      </div>
    </>
  );
}
