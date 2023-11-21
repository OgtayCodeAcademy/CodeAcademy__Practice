import {
  CTableDataCell,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
} from "@coreui/react";

export default function Table({table}) {
  return (
    <>
      <div className="container">
        <CTable color="dark" borderless>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">ID</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Company</CTableHeaderCell>
              <CTableHeaderCell scope="col">Location</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {table.map((user)=>{
                return <CTableRow key={user.userid} active>
                <CTableHeaderCell scope="row">{user.userid}</CTableHeaderCell>
                <CTableDataCell>{user.name}</CTableDataCell>
                <CTableDataCell>{user.company}</CTableDataCell>
                <CTableDataCell>{user.location}</CTableDataCell>
              </CTableRow>
            })}
          </CTableBody>
        </CTable>
      </div>
    </>
  );
}
