import './App.css';
import toast from 'react-hot-toast';
import { useDeleteEmployeeMutation, useGetEmployeeByIdQuery, useGetAllEmployeesQuery, useUpdateEmployeeMutation } from './services/employee';
import { useEffect, useState } from 'react';

const initialEmployeeData = {
  EmployeeName: "",
  ContactNumber: "",
  Department: "",
  Salary: "",
};

const App = () => {
  const { data, error, isLoading } = useGetAllEmployeesQuery({ refetchOnMountOrArgChange: true });
  const [deleteEmployee, { isSuccess }] = useDeleteEmployeeMutation();
  const [employeeId, setEmployeeId] = useState("");
  const { data: employeeData } = useGetEmployeeByIdQuery(employeeId, { skip: !employeeId });
  const [employeeNewData, setEmployeeNewData] = useState(initialEmployeeData);
  const [updateEmployee, { isSuccess: isUpdateSuccess }] = useUpdateEmployeeMutation();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeNewData({ ...employeeNewData, [name]: value });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Employee deleted successfully', { id: 'delete' });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success('Employee updated successfully', { id: 'update' });
    }
  }, [isUpdateSuccess]);

  useEffect(() => {
    setEmployeeNewData({ ...employeeData });
  }, [employeeData]);

  const handleDelete = (id) => {
    const popup = window.confirm("Are you sure to delete this employee?");
    if (popup) {
      deleteEmployee(id);
    }
  };

  const handleUpdate = () => {
    updateEmployee({ id: employeeId, ...employeeNewData });
    handleClear();
  };

  const handleClear = () => {
    setEmployeeNewData(initialEmployeeData);
  };

  return (
    <div className='container mx-auto my-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Employee List</h1>
        <button className='bg-blue-500 text-white px-4 py-2 rounded mt-5'>Add Employee</button>
      </div>
      <div className='text-center'>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching employees</p>}
        {data && data?.length === 0 && <p>No employees found</p>}
        {
          data && (
            <table className='w-full mt-10 border border-gray-200'>
              <thead className='bg-gray-200'>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Contact Number</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                {data.map(employee => (
                  <tr key={employee?.EmployeeID} className='hover:bg-gray-100 '>
                    <td>{employee?.EmployeeID}</td>
                    <td>{employee?.EmployeeName}</td>
                    <td>{employee?.ContactNumber}</td>
                    <td>{employee?.Department}</td>
                    <td>{employee?.Salary}</td>
                    <td className='flex items-center justify-center gap-2'>
                      <button
                        command="show-modal" commandfor="my-dialog"
                        className='bg-yellow-500 text-white px-2 py-1 rounded text-sm cursor-pointer'
                        onClick={() => setEmployeeId(employee?.EmployeeID)}
                      >
                        Edit
                      </button>
                      {/* <button command="show-modal" commandfor="my-dialog">Open dialog</button> */}
                      <button
                        className='bg-red-700 text-white px-2 py-1 rounded text-sm cursor-pointer'
                        onClick={() => handleDelete(employee?.EmployeeID)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        }
        <dialog id="my-dialog" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-lg p-5'>
          <p>Edit the data of {employeeData?.EmployeeName}</p>
          <div className=' grid grid-cols-1 gap-3 mt-5'>
            <input
              type="text"
              value={employeeNewData?.EmployeeName || ''}
              onChange={onInputChange}
              name="EmployeeName"
            />
            <input
              type="number"
              value={employeeNewData?.ContactNumber || ''}
              onChange={onInputChange}
              name="ContactNumber"
            />
            <input
              type="text"
              value={employeeNewData?.Department || ''}
              onChange={onInputChange}
              name="Department"
            />
            <input
              type="number"
              value={employeeNewData?.Salary || ''}
              onChange={onInputChange}
              name="Salary"
            />
            <button
              commandfor="my-dialog"
              command="close"
              className='bg-blue-500 text-white px-4 py-2 rounded mt-5'
              onClick={() => handleUpdate()}
            >
              Confirm
            </button>
            <button
              commandfor="my-dialog"
              command="close"
            >
              Close
            </button>
          </div>
        </dialog>
      </div>
    </div>
  )
}

export default App;
