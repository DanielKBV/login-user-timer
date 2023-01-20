import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../card/Card";

function Users() {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Card>
      <UsersCardDivConteiner>
        <h1>Users!</h1>
        <UlUsers>
          {user.map((user) => (
            <UlUsersLi key={user.id}>
              <UserConteiner>
                <p>{user.username}</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </UserConteiner>
            </UlUsersLi>
          ))}
        </UlUsers>
      </UsersCardDivConteiner>
    </Card>
  );
}

export default Users;

const UsersCardDivConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const UlUsers = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 560px;
  flex-wrap: wrap;
  gap: 30px;
  margin-left: -40px;
`;

const UlUsersLi = styled.li`
  list-style: none;
  font-size: 1.1rem;
  font-weight: bold;
`;

const UserConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  padding: 10px;
  border-radius: 10px;
  width: 240px;
`;
