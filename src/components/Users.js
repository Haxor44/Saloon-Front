import { useState, useEffect } from "react";
import axios from '../api/axios';
const Users = () => {
	const [users, setUsers] = useState();

	useEffect(()=>{
		let isMounted = true;
		const control = new AbortController();

		const getUsers = async ()=> {
			
		}
	},[])

	return(
			<article>
				<h2>Users List</h2>
				{
					users?.length
						? (
							<ul>{users.map((user,i)=> <li key={i}>{user?.fname}</li>})}</ul>
						) : <p>No users</p>
				}
			</article>
		);
}