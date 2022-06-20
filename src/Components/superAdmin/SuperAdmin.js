import React from 'react';
import './SuperAdmin.css';
import { FaUserAlt ,FaUserGraduate} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { GrEdit } from "react-icons/gr";
import { MdDelete} from "react-icons/md";
function SuperAdmin() {
  return (
    <div className='background super_admin'>
        <div className='registered container-fluid'>
        <div className='col-md-4 col-sm-12 register_container'>
            <FaUserAlt size={40}/>
           <h3 className='regHead'>Registered Students:</h3>
           <h2>999</h2>
        </div>

        <div className='col-md-4 col-sm-12 register_container'>
            <GiTeacher size={40}/>
         <h3 className='regHead'>Registered Teachers:</h3>
         <h2>999</h2>
        </div>

        <div className='col-md-4 col-sm-12 register_container'>
            <FaUserGraduate size={40}/>
         <h3 className='regHead'>Registered Alumni:</h3>
         <h2>999</h2>
        </div>

        </div>

        <div className='edit_reg'>
            <button className='col-md-6 create_reg'>
                <GrEdit/><h5>Create</h5>
            </button>

            <button className='col-md-6 delete_reg'>
             <MdDelete/><h5>Delete</h5>
            </button>
        </div>

    </div>
  )
}

export default SuperAdmin