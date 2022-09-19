// import React from 'react'
// import Header from '../Header';

// import React from 'react'

// export class ManagerShowAllEmployee {
//     constructor() {}


//         let user = JSON.parse(localStorage.getItem('manager-info'));
//         let userid = '';


//         let url = "https://localhost:44370/api/Employee/Employees/" + userid;
//         axios.get(url).then(response => {
//             this.setState({ Employees: response.data });
//         }).catch(error => {
//             console.warn(error);
//         });
    

//         return (
//             <div>ShowAllEmployee
//                 <h1>userid = {user.id}</h1>
//                 console.warn(userid)
//                 <>
//                     <Header />
//                     <div>ShowAllEmployees

//                         <Table striped bordered hover>
//                             <tr>
//                                 <th>Employee ID</th>
//                                 <th>Employee Name</th>
//                                 <th>PassWord</th>
//                                 <th>Email ID</th>
//                                 <th>Phone</th>
//                                 <th>Date Of Joining</th>
//                                 <th>Department</th>
//                                 <th>Manager ID</th>
//                             </tr>
//                             {Employees.map(x => <tr>
//                                 <td>{x.id}</td>
//                                 <td>{x.name}</td>
//                                 <td>{x.password}</td>
//                                 <td>{x.emailId}</td>
//                                 <td>{x.phone}</td>
//                                 <td>{x.doj}</td>
//                                 <td>{x.department}</td>
//                                 <td>{x.managerId}</td>
//                             </tr>

//                             )}
//                         </Table>


//                     </div>

//                 </>


//             </div>
//         );
//     }
// }
