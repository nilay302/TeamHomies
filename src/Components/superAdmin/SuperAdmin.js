import React from 'react';
import './SuperAdmin.css';
import { FaUserAlt ,FaUserGraduate} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { GrEdit } from "react-icons/gr";
import { MdDelete} from "react-icons/md";
import { Link } from 'react-router-dom';
import Gurukul from '../Images/gurukul.png'; 
function SuperAdmin() {
  return (
    <div className='background_super super_admin'>
        <div>
            <img className='logo1' src={Gurukul} alt="logo"/>
        </div>
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
            {/* <a href='/createReg' className='col-md-6 create_reg'>
             <GrEdit size={20}/><h5>Create</h5>
            </a> */}
            <a class="btn_cre btn-border-4 col-md-6" href="/createReg">
            <GrEdit size={20}/><h5>Create</h5>
                </a>
            
            <a class="btn_del btn-border-4 col-md-6" href="/forgotPassword">
                <MdDelete size={20}/><h5>Delete</h5>
                </a>
            {/* <a href='/forgotPassword' className='col-md-6 delete_reg'>
             <MdDelete size={20}/><h5>Delete</h5>
            </a> */}
        </div>

    </div>
  )
}

export default SuperAdmin